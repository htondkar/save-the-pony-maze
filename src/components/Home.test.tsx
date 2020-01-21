import { Home } from './Home'
import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import { AppContext } from '../App'

let container: HTMLElement | null

beforeEach(() => {
	container = document.createElement('div')
	document.body.appendChild(container)
})

afterEach(() => {
	if (container) {
		document.body.removeChild(container)
	}
	container = null
})

describe('Home page', () => {
	it('should render inputs', () => {
		act(() => {
			ReactDOM.render(
				<AppContext.Provider value={{}}>
					<Home></Home>
				</AppContext.Provider>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		expect(container.querySelectorAll('input')).toHaveLength(3)
	})

	it('should render call to action button', () => {
		act(() => {
			ReactDOM.render(
				<AppContext.Provider value={{}}>
					<Home></Home>
				</AppContext.Provider>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		expect(container.querySelectorAll('button')).toHaveLength(1)
	})

	it('when button is click it should call the callback once', () => {
		const spy = jest.fn()

		act(() => {
			ReactDOM.render(
				<AppContext.Provider value={{ startTheGame: spy }}>
					<Home></Home>
				</AppContext.Provider>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		const actionButton = container.querySelector('button')
		expect(actionButton).toBeInTheDocument()

		act(() => {
			actionButton!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
		})

		expect(spy).toBeCalledTimes(1)
	})
})
