import { Wall } from '../model/Model'
import { MovementDirection } from '../viewModel/ViewModel'

export class PonyApi {
	private readonly baseUrl: string = 'https://ponychallenge.trustpilot.com/pony-challenge'

	createNewMaze(options: MazeOptions): Promise<MazeCreateResponse> {
		const requestBody = JSON.stringify({
			difficulty: parseInt(options.difficulty, 0),
			'maze-width': parseInt(options.columns, 0),
			'maze-height': parseInt(options.rows, 0),
			'maze-player-name': 'Applejack'
		})

		return fetch(`${this.baseUrl}/maze`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: requestBody
		}).then(response => response.json())
	}

	movePony(direction: MovementDirection, mazeId: string): Promise<PonyMoveResponse> {
		return fetch(`${this.baseUrl}/maze/${mazeId}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ direction })
		}).then(res => res.json())
	}

	getMazeState(mazeId: string): Promise<MazeState> {
		return fetch(`${this.baseUrl}/maze/${mazeId}`).then(response => response.json())
	}
}

// ────────────────────────────────────────────────────────────────────────────────

export interface MazeOptions {
	columns: string
	rows: string
	difficulty: string
}

export interface MazeCreateResponse {
	maze_id: string
}

export interface PonyMoveResponse {
	state: string
	'state-result': string
}

export interface MazeState {
	pony: [number]
	domokun: [number]
	'end-point': [number]
	size: [number, number]
	difficulty: number
	data: Wall[][]
	maze_id: string
	'game-state': {
		state: string
		'state-result': string
	}
}

// ────────────────────────────────────────────────────────────────────────────────
