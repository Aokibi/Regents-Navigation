require('babel-runtime/core-js/promise').default = require('bluebird')
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route, IndexRoute, Link} from 'react-router'
import {Provider} from 'react-redux'

import App from './components/app'
import MainMenu from './components/main-menu'
import CreateNewNavigation from './components/create-new-navigation'
import CommonDestinationsScreen from './components/common-destinations-screen'
import CommonDestinationsHelp from './components/common-destinations-help'
import SearchScreen from './components/search-screen'
import SearchScreenHelp from './components/search-screen-help'
import SavedNavigationScreen from './components/saved-navigation-screen'
import CreateNewNavigationHelp from './components/create-new-navigation-help'
import SavedNavigationHelp from './components/saved-navigation-help'
import Settings from './components/settings'
import SettingsHelp from './components/settings-help'
import MainMenuHelp from './components/main-menu-help'
import About from './components/about'
import MainNavigation from './components/main-navigation'
import MainNavigationHelp from './components/main-navigation-help'

import store from './state/store'


const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={MainMenu} />
		<Route path='createnewnavigation' component={CreateNewNavigation} />
			<Route path='createnewnavigationhelp' component={CreateNewNavigationHelp} />
			<Route path='commondestinations' component={CommonDestinationsScreen} />
				<Route path='commondestinationshelp' component={CommonDestinationsHelp} />
			<Route path='search' component={SearchScreen} />
				<Route path='searchscreenhelp' component={SearchScreenHelp} />
		<Route path='savednavigationscreen' component={SavedNavigationScreen} />
			<Route path='savednavigationhelp' component={SavedNavigationHelp} />
		<Route path='settings' component={Settings} />
			<Route path='settingshelp' component={SettingsHelp} />
		<Route path='mainmenuhelp' component={MainMenuHelp} />
		<Route path='about' component={About} />
		<Route path='navigation' component={MainNavigation} />
			<Route path='mainnavigationhelp' component={MainNavigationHelp} />
	</Route>
)

// run it
console.log('3. 2.. 1... Blast off! 🚀')

ReactDOM.render(<Provider store={store}>
	<Router>{routes}</Router></Provider>, document.getElementById('app'))