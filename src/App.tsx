import './styles.css'

import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Home } from './components/Home'
import { MazeContainer } from './components/MazeContainer'
import { PonyApi } from './network/PonyApi'
import { ViewController } from './viewController/ViewController'
import { ViewModel } from './viewModel/ViewModel'

const ponyApi = new PonyApi()
const viewModel = new ViewModel(ponyApi)
const viewController = new ViewController(viewModel)
export const AppContext = React.createContext(viewController)

export default function App() {
	return (
		<AppContext.Provider value={viewController}>
			<Router>
				<Switch>
					<Route path="/" exact={true}>
						<Home />
					</Route>
					<Route path="/maze/:mazeId" exact={true}>
						<MazeContainer />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
		</AppContext.Provider>
	)
}
