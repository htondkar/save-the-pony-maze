import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import { AppContext } from '../App'
import { MazeContainer } from './MazeContainer'

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
	it('should render won message', () => {
		act(() => {
			ReactDOM.render(
				<AppContext.Provider value={{ mazeStatus: 'won' }}>
					<MazeContainer></MazeContainer>
				</AppContext.Provider>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		const heading = container.querySelector('h2')

		expect(heading).toBeInTheDocument()

		if (!heading) {
			throw new Error('no heading found!')
		}

		expect(heading.textContent).toContain('You won')
	})

	it('should render won message', () => {
		act(() => {
			ReactDOM.render(
				<AppContext.Provider value={{ mazeStatus: 'over' }}>
					<MazeContainer></MazeContainer>
				</AppContext.Provider>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		const heading = container.querySelector('div')

		expect(heading).toBeInTheDocument()

		if (!heading) {
			throw new Error('no heading found!')
		}

		expect(heading.textContent).toContain('You Lose')
	})

	it('should render won message', () => {
		act(() => {
			ReactDOM.render(
				<AppContext.Provider value={{ mazeStatus: 'weird' }}>
					<MazeContainer></MazeContainer>
				</AppContext.Provider>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		const heading = container.querySelector('h2')

		expect(heading).toBeInTheDocument()

		if (!heading) {
			throw new Error('no heading found!')
		}

		expect(heading.textContent).toContain('not active')
	})
})
