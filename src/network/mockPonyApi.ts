import { MazeState, MazeCreateResponse, MazeOptions, PonyMoveResponse, PonyApi } from './PonyApi'
import { MovementDirection } from './../viewModel/ViewModel'
import mazeDataFixture from '../fixtures/mazeFixtures.json'

export class MockPonyApi extends PonyApi {
	constructor(private readonly spyFn: (...args: any[]) => any) {
		super()
	}
	createNewMaze(options: MazeOptions): Promise<MazeCreateResponse> {
		this.spyFn(options)
		return Promise.resolve({
			maze_id: '123456789'
		})
	}

	movePony(direction: MovementDirection, mazeId: string): Promise<PonyMoveResponse> {
		this.spyFn(direction, mazeId)
		return Promise.resolve({
			state: '',
			'state-result': ''
		})
	}

	getMazeState(mazeId: string): Promise<MazeState> {
		this.spyFn(mazeId)
		return Promise.resolve(mazeDataFixture as MazeState)
	}
}
