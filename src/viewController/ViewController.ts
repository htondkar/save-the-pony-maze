import { GameOptions, ViewModel } from '../viewModel/ViewModel'

export class ViewController {
	constructor(private readonly viewModel: ViewModel) {}

	get mazeId() {
		return this.viewModel.currentMazeState?.maze_id
	}

	get isLoading() {
		return this.viewModel.loading
	}

	get mazeDimensions() {
		if (!this.viewModel.currentMazeState) return { columns: 0, rows: 0 }
		return {
			columns: this.viewModel.currentMazeState.size[0],
			rows: this.viewModel.currentMazeState.size[1]
		}
	}

	get mazeStatus() {
		if (!this.viewModel.currentMazeState) return 'de-active'
		return this.viewModel.currentMazeState['game-state'].state.toLocaleLowerCase()
	}

	get mazeData() {
		if (!this.viewModel.currentMazeState) return []
		return this.viewModel.currentMazeState.data
	}

	get mazePonyIndex() {
		if (!this.viewModel.currentMazeState) return 0
		return this.viewModel.currentMazeState.pony[0]
	}

	get mazeDomokunIndex() {
		if (!this.viewModel.currentMazeState) return 0
		return this.viewModel.currentMazeState.domokun[0]
	}

	get mazeTargetIndex() {
		if (!this.viewModel.currentMazeState) return 0
		return this.viewModel.currentMazeState['end-point'][0]
	}

	get pathToTarget() {
		return this.viewModel.getPathToTarget()
	}

	startTheGame(options: GameOptions) {
		this.viewModel.createNewGame(options)
	}

	continueTheGame(mazeId: string) {
		this.viewModel.unfreezeMovement()
		if (this.mazeId !== mazeId) {
			this.viewModel.syncGameState(mazeId).then(this.movePonyTowardsTarget.bind(this))
		}
	}

	stopTheGame() {
		this.viewModel.freezeMovement()
	}

	movePonyTowardsTarget() {
		const pathToTarget = this.pathToTarget

		if (pathToTarget.length === 0 || !this.mazeData) {
			return
		}

		this.viewModel.unfreezeMovement()
		this.viewModel.movePonyTowardsTarget()
	}
}
