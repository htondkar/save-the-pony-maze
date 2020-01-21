import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import mazeState from '../fixtures/mazeFixtures.json'

import { MazeView } from './MazeView'
import { MazeModel, Wall } from '../model/Model'

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
	it('should match the snapshot', () => {
		const mazeData = mazeState.data as Wall[][]
		const mazeModel = new MazeModel(mazeData, mazeState.size[0], mazeState.size[1])

		act(() => {
			ReactDOM.render(
				<MazeView
					blocks={mazeData}
					columns={mazeState.size[0]}
					rows={mazeState.size[1]}
					ponyIndex={mazeState.pony[0]}
					domokunIndex={mazeState.domokun[0]}
					goal={mazeState['end-point'][0]}
					pathToGoal={mazeModel.getShortestPath(mazeState.pony[0], mazeState['end-point'][0])}
				></MazeView>,
				container
			)
		})

		if (!container) {
			throw new Error('Container is null!')
		}

		expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-AykKF cpguqZ"
          rows="15"
        >
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          >
            <span
              class="sc-AykKE XQdJg"
            >
              👹
            </span>
          </div>
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          >
            <span
              class="sc-AykKD kjdErD"
            >
              🦄
            </span>
          </div>
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz north west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
          <div
            class="sc-AykKG kMtqfz west path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north west"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz west"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north path-to-goal"
          >
            <span
              class="sc-AykKC ieVvBe"
            >
              🏁
            </span>
          </div>
          <div
            class="sc-AykKG kMtqfz path-to-goal"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz north"
          />
          <div
            class="sc-AykKG kMtqfz"
          />
        </div>
      </div>
    `)
	})
})
