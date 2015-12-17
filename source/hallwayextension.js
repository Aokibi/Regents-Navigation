//This file is the Hallway Extension homework from Mobile Web Graphics in Fall 2014
//Intended to be used to render the 3D model


// Context
let gl


let vertexBuffer = []
let textureBuffer = []
let imageTextures = Object.create({})//Object used to store image data already loaded from server; used for memoiziation

// Transformation Matrices
let mvMatrix = mat4.create()
let mvMatrixStack = []
let pMatrix = mat4.create()

// Shader Program
let shaderProgram

// Animation Variables
let cameraPosition = {
	xPos: -11.45,
	yPos: 0.4,
	zPos: 42.042168,
}

let oldCameraPosition = Object.create(cameraPosition)

let pitch = 0
let pitchRate = 0
let yaw = 0
let yawRate = 0
let speed = 0
let lastTime = 0

// User Key Presses
let currentlyPressedKeys = {}
// Typemap for rendering data
let typeMap
// AJAX Variable
let bufferDataFromServer = 0

window.onload = function() {
	let canvas = document.getElementById('glCanvas')
	//startup();
	initGL(canvas)
	initShaders()

	getDataFromServer()
	gl.clearColor(127.0/255.0, 140.0/255.0, 141.0/255.0, 0.4)
	gl.enable(gl.DEPTH_TEST)

	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp

	let firstSVG = document.getElementById('jStickOne')
	firstSVG.addEventListener('touchmove', handleLeftJoystickMove)
	firstSVG.addEventListener('touchend', handleTouchEnd)

	let secondSVG = document.getElementById('glCanvas')
	secondSVG.addEventListener('touchmove', handleCanvasJoystickMove)
	secondSVG.addEventListener('touchend', handleTouchEnd)
}

function initGL(canvas) {
	try {
		gl = canvas.getContext('webgl')
		gl.viewportWidth = canvas.width
		gl.viewportHeight = canvas.height
	} catch(e) {
		// Do nothing
	}
	if(!gl) {
		alert('Error: Could not initialize WebGL')
	}

	typeMap = [gl.POINTS, gl.LINES, gl.LINE_LOOP, gl.LINE_STRIP, gl.TRIANGLES, gl.TRIANGLE_STRIP, gl.TRIANGLE_FAN]
}

function initShaders() {
	let fragmentShader = getShader(gl, 'shader-fs')
	let vertexShader = getShader(gl, 'shader-vs')

	shaderProgram = gl.createProgram()
	gl.attachShader(shaderProgram, vertexShader)
	gl.attachShader(shaderProgram, fragmentShader)
	gl.linkProgram(shaderProgram)

	if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert('Error: Could not initialize shaders')
	}

	gl.useProgram(shaderProgram)

	// Store some extra useful information with the shader program
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition')
	gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute)

	shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, 'aTextureCoord')
	gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute)

	shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, 'uPMatrix')
	shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, 'uMVMatrix')
}

function getShader(gl, id) {
	let shaderScript = document.getElementById(id)
	if(!shaderScript) {
		return null
	}

	let str = ""
	let k = shaderScript.firstChild
	while(k) {
		if(k.nodeType == 3)
			str += k.textContent
		k = k.nextSibling
	}

	let shader
	if(shaderScript.type == 'x-shader/x-fragment') {
		shader = gl.createShader(gl.FRAGMENT_SHADER)
	} else if(shaderScript.type == 'x-shader/x-vertex') {
		shader = gl.createShader(gl.VERTEX_SHADER)
	} else {
		return null
	}

	gl.shaderSource(shader, str)
	gl.compileShader(shader)

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(gl.getShaderInfoLog(shader))
		return null
	}

	return shader
}


function getDataFromServer() {
	// Create the ajax request
	jQuery.post(
		"http://rns202-6.cs.stolaf.edu:1234",
		{query: "tile:169wray"},
		function(data) {
			//console.log(JSON.stringify(data))
			bufferDataFromServer = JSON.parse(data)
			//bufferDataFromServer = data
			initTexture()
		})
}

function initBuffers() {

	bufferDataFromServer.forEach(function(tile, ind) {
		// Initialize the Square Buffer
		vertexBuffer[ind] = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer[ind])

		let vertices = []
		tile.points.forEach(function(val, ind) {
			vertices.push(val.x, val.y, val.z)
		})
		//console.log(vertices);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

		vertexBuffer[ind].itemSize = 3
		vertexBuffer[ind].numItems = tile.points.length
		vertexBuffer[ind].itemType = tile.type

		textureBuffer[ind] = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer[ind])

		let textureCoords = []
		tile.points.forEach(function(val, ind){
			textureCoords.push(val.u/imageTextures[bufferDataFromServer[ind].image].image.width, val.v/imageTextures[bufferDataFromServer[ind].image].image.height);
		})
		//console.log(textureCoords);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW)
		textureBuffer[ind].itemSize = 2
		textureBuffer[ind].numItems = tile.points.length
	})

	tick()
}

function initTexture() {
	for(let i=0;i<bufferDataFromServer.length;i++) {
		//console.log(bufferDataFromServer[i])
		let imageId = bufferDataFromServer[i].image
		
		if(!imageTextures[imageId]) {
			imageTextures[imageId] = createNewTexture(imageId)
		}
	}
}

function createNewTexture(imageId) {
	let newImage = new Image()
	let texture = gl.createTexture()
	texture.image = newImage
	newImage.onload = function() {
		handleLoadedTexture(texture)
		initBuffers()
	}
	newImage.crossOrigin = 'anonymous'
	newImage.src = "http://rns202-6.cs.stolaf.edu:1234/CapstoneClient/images/" +imageId
	return texture
}


function handleLoadedTexture(texture) {
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

	gl.bindTexture(gl.TEXTURE_2D, texture)
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
	gl.generateMipmap(gl.TEXTURE_2D)

	gl.bindTexture(gl.TEXTURE_2D, null)
}

let keyCodes = [33, 34, 82, 37, 65, 39, 68, 38, 87, 40, 83]

function handleKeyDown(event) {
	let keyCode = event.keyCode
	if (keyCodes.indexOf(keyCode) >= 0 && !event.ctrlKey && !event.altKey && !event.metaKey) {
		event.preventDefault()
	}

	currentlyPressedKeys[keyCode] = true
}

function handleKeyUp(event) {
	let keyCode = event.keyCode
	if (keyCodes.indexOf(keyCode) >= 0 && !event.ctrlKey && !event.altKey && !event.metaKey) {
		event.preventDefault()
	}

	currentlyPressedKeys[keyCode] = false
}

function handleTouchEnd(event) {
	console.log('end', event)

	currentTouches.forward = false
	currentTouches.backward = false
	currentTouches.yawLeft = false
	currentTouches.yawRight = false
	currentTouches.pitchUp = false
	currentTouches.pitchDown = false
}

let currentTouches = {
	forward: false, backward: false,
	yawLeft: false, yawRight: false,
	pitchUp: false, pitchDown: false,
}

let oldLeftJoystickEvent
let oldCanvasJoystickEvent

let leftJoystickTimer
function handleLeftJoystickMove(event) {
	console.log('move')//, event)

	event.preventDefault()

	if (oldLeftJoystickEvent === undefined) {
		oldLeftJoystickEvent = event
		return
	}

	let currentTouch = event.changedTouches[0]
	let lastTouch = oldLeftJoystickEvent.changedTouches[0]

	if (currentTouch.pageY < lastTouch.pageY) {
		currentTouches.forward = true
		currentTouches.backward = false
	}
	else {
		currentTouches.forward = false
		currentTouches.backward = true
	}

	oldLeftJoystickEvent = event

	window.clearTimeout(leftJoystickTimer)
	leftJoystickTimer = setTimeout(function() {
		oldLeftJoystickEvent = undefined
	}, 200)
}

let canvasJoystickTimer
function handleCanvasJoystickMove(event) {
	console.log('move')//, event)

	event.preventDefault()

	if (oldCanvasJoystickEvent === undefined) {
		oldCanvasJoystickEvent = event
		return
	}

	let currentTouch = event.changedTouches[0]
	let lastTouch = oldCanvasJoystickEvent.changedTouches[0]

	if (currentTouch.pageX > lastTouch.pageX) {
		currentTouches.yawRight = true
		currentTouches.yawLeft = false
	}
	else {
		currentTouches.yawLeft = true
		currentTouches.yawRight = false
	}

	if (currentTouch.pageY > lastTouch.pageY) {
		currentTouches.pitchUp = true
		currentTouches.pitchDown = false
	}
	else {
		currentTouches.pitchDown = true
		currentTouches.pitchUp = false
	}

	oldCanvasJoystickEvent = event

	window.clearTimeout(canvasJoystickTimer)
	canvasJoystickTimer = setTimeout(function() {
		oldCanvasJoystickEvent = undefined
	}, 200)
}


function tick() {
	requestAnimationFrame(tick)
	handleKeys()
	drawScene()
	oldCameraPosition.xPos = cameraPosition.xPos
	oldCameraPosition.zPos = cameraPosition.zPos
	animate()
}

function handleKeys() {
	if (currentlyPressedKeys[33] || currentTouches.pitchUp) {
		// Page Up
		pitchRate = 0.1
	} else if (currentlyPressedKeys[34] || currentTouches.pitchDown) {
		// Page Down
		pitchRate = -0.1
	} else {
		pitchRate = 0
	}

	if (currentlyPressedKeys[82]) {
		// Pressed R Key
		cameraPosition.xPos = -11.45
		cameraPosition.yPos = 0.4
		cameraPosition.zPos = 42.042168
		pitch = 0
		yaw = 0
	}

	if (currentlyPressedKeys[37] || currentlyPressedKeys[65] || currentTouches.yawLeft) {
		// Left cursor key or A
		yawRate = 0.1
	} else if (currentlyPressedKeys[39] || currentlyPressedKeys[68] || currentTouches.yawRight) {
		// Right cursor key or D
		yawRate = -0.1
	} else {
		yawRate = 0
	}

	if (currentlyPressedKeys[38] || currentlyPressedKeys[87] || currentTouches.forward) {
		// Up cursor key or W
		speed = 0.003
	} else if (currentlyPressedKeys[40] || currentlyPressedKeys[83] || currentTouches.backward) {
		// Down cursor key or S
		speed = -0.003
	} else {
		speed = 0
	}
}

function drawScene() {

	// Adjust the viewport so it is the whole element
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight) // (x, y, w, h)

	// Refresh the buffer
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

	// Adjust the perspective matrix
	mat4.perspective(pMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0) // (matrix, FOV, aspect, near, far)

	// Load the modelview projection
	mat4.identity(mvMatrix)

	// Transform the matrix
	mat4.rotate(mvMatrix, mvMatrix, degToRad(-pitch), [1, 0, 0])
	mat4.rotate(mvMatrix, mvMatrix, degToRad(-yaw), [0, 1, 0])
	mat4.translate(mvMatrix, mvMatrix, [-cameraPosition.xPos, -cameraPosition.yPos, -cameraPosition.zPos])

	for(let ind=0; ind < vertexBuffer.length; ind++) {
		// Save the mvMatrix
		mvPushMatrix()
		let imageId = bufferDataFromServer[ind].image

		// Draw the square
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer[ind])
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexBuffer[ind].itemSize, gl.FLOAT, false, 0, 0)

		gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer[ind])
		gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, textureBuffer[ind].itemSize, gl.FLOAT, false, 0, 0)

		gl.activeTexture(gl.TEXTURE0)
		gl.bindTexture(gl.TEXTURE_2D, imageTextures[imageId])
		gl.uniform1i(shaderProgram.samplerUniform, 0)

		setMatrixUniforms()

		gl.drawArrays(typeMap[vertexBuffer[ind].itemType], 0, vertexBuffer[ind].numItems)

		mvPopMatrix()
	}
}

function animate() {
	let timeNow = new Date().getTime()
	if(lastTime != 0) {
		let elapsed = timeNow - lastTime

		if (speed != 0) {

			cameraPosition.xPos -= Math.sin(degToRad(yaw)) * speed * elapsed
			cameraPosition.zPos -= Math.cos(degToRad(yaw)) * speed * elapsed
		}

		yaw += yawRate * elapsed
		pitch += pitchRate * elapsed
	}
	lastTime = timeNow
}



function setMatrixUniforms() {
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix)
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix)
}

function mvPushMatrix() {
	let copy = mat4.create()
	mat4.copy(copy, mvMatrix)
	mvMatrixStack.push(copy)
}

function mvPopMatrix() {
	if(mvMatrixStack.length == 0) {
		throw "Invalid popMatrix!"
	}
	mvMatrix = mvMatrixStack.pop()
}

function degToRad(degrees) {
	return degrees * Math.PI / 180
}
