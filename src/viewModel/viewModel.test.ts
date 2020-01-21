import { ViewModel } from './ViewModel'
import { MockPonyApi } from '../network/mockPonyApi'
import mazeStateFixture from '../fixtures/mazeFixtures.json'

describe('ViewModel', () => {
	let viewModel: ViewModel
	let spyFn: jest.Mock

	beforeEach(() => {
		spyFn = jest.fn()
		viewModel = new ViewModel(new MockPonyApi(spyFn))
	})

	it('should not be in loading in right before instantiation', () => {
		expect(viewModel.loading).toBe(false)
	})

	it('should be allow access to maze state through getter/setters', () => {
		viewModel.setMazeState(mazeStateFixture)
		expect(viewModel.currentMazeState).toEqual(mazeStateFixture)
	})

	it('should be allow freezing movement through getter/setters', () => {
		viewModel.freezeMovement()
		expect(viewModel.isFrozen()).toBe(true)
	})

	it('should return valid result for pathToTarget when maze is null', () => {
		expect(viewModel.getPathToTarget()).toEqual([])
	})

	it('should be able to call api to create new game and update its internal state', () => {
		const options = { columns: '10', rows: '10', difficulty: '0' }
		viewModel.createNewGame(options)

		// wait for immediately resolved promises
		setImmediate(() => {
			expect(spyFn).toBeCalled()
			expect(viewModel.currentMazeState).not.toBeNull()
		})
	})

	it('should be able to call api to resume a game and update its internal state', () => {
		viewModel.syncGameState('some-fake-id')

		// wait for immediately resolved promises
		setImmediate(() => {
			expect(spyFn).toBeCalled()
			expect(viewModel.currentMazeState).not.toBeNull()
		})
	})
})
