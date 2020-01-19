import { action, computed, observable } from 'mobx';

import { MazeModel } from '../model/Model';
import { delay } from '../model/utils';
import { MazeState, PonyApi, PonyMoveResponse } from '../network/PonyApi';

export interface GameOptions {
  columns: string
  rows: string
  difficulty: string
}

export type MovementDirection = 'west' | 'east' | 'north' | 'south' | 'stay'

export class ViewModel {
  constructor(private readonly networkApi: PonyApi) {}
  private movementIsStopped: boolean = false

  @observable private mazeState: MazeState | null = null
  @observable public isLoading: boolean = false

  @action public setMazeState(mazeState: MazeState) {
    this.mazeState = mazeState
  }

  @computed
  public get currentMazeState() {
    return this.mazeState
  }

  @action private setLoading(newState: boolean) {
    this.isLoading = newState
  }

  public getPathToTarget() {
    if (this.mazeState === null) {
      return []
    }

    const mazeModel = new MazeModel(
      this.mazeState.data,
      this.mazeState.size[0],
      this.mazeState.size[1]
    )
    return mazeModel.getShortestPath(
      this.mazeState.pony[0],
      this.mazeState['end-point'][0],
      this.mazeState.domokun[0]
    )
  }

  /**
   * @method createNewGame
   * it creates a new game and fetches the details of the new game and saves it. including current
   * position of all the parties
   */
  public async createNewGame(options: GameOptions) {
    this.setLoading(true)
    try {
      const result = await this.networkApi.createNewMaze(options)
      const mazeState = await this.networkApi.getMazeState(result.maze_id)
      this.setMazeState(mazeState)
      setTimeout(() => this.movePonyTowardsTarget(), 300)
    } catch (error) {
      alert(
        'failed to create a new game. ' + typeof error === 'string'
          ? error
          : error.message
      )
    } finally {
      this.setLoading(false)
    }
  }

  public async syncGameState(mazeId: string) {
    try {
      const mazeState = await this.networkApi.getMazeState(mazeId)
      this.setMazeState(mazeState)
    } catch (error) {
      alert(
        'failed to update the game game. ' + typeof error === 'string'
          ? error
          : error.message
      )
    }
  }

  public async syncCurrentGame() {
    if (!this.mazeState) return
    await this.syncGameState(this.mazeState.maze_id)
  }

  public async movePonyTowardsTarget() {
    if (!this.currentMazeState || this.movementIsStopped) {
      return
    }

    try {
      const nextMove = this.findDirectionForNextMove(this.getPathToTarget())
      const moveResult = await this.networkApi.movePony(
        nextMove,
        this.currentMazeState.maze_id
      )
      await this.syncCurrentGame()
      if (this.isGameActive() && this.moveWasSuccessful(moveResult)) {
        await delay(300)
        this.movePonyTowardsTarget()
      } else {
        return
      }
    } catch (error) {
      alert('failed to move' + typeof error === 'string' ? error : error.message)
    }
  }

  public freezeMovement() {
    this.movementIsStopped = true
  }

  public unfreezeMovement() {
    this.movementIsStopped = false
  }

  private moveWasSuccessful(res: PonyMoveResponse): boolean {
    return res['state-result'].toLocaleLowerCase() === 'move accepted'
  }

  private isGameActive() {
    return this.currentMazeState
      ? this.currentMazeState['game-state'].state.toLocaleLowerCase() === 'active'
      : false
  }

  /**
   * @method findDirectionForNextMove
   * finds the next move based on the calculated path to the target.
   */
  private findDirectionForNextMove(pathToTarget: number[]): MovementDirection {
    if (!this.currentMazeState) {
      throw new Error('There is no maze!')
    }

    if (pathToTarget.length === 0) {
      return 'stay'
    }

    let direction: MovementDirection = 'stay'
    if (pathToTarget[1] === pathToTarget[0] + 1) {
      direction = 'east'
    }
    if (pathToTarget[1] === pathToTarget[0] - 1) {
      direction = 'west'
    }
    if (pathToTarget[1] === pathToTarget[0] + this.currentMazeState.size[0]) {
      direction = 'south'
    }
    if (pathToTarget[1] === pathToTarget[0] - this.currentMazeState.size[0]) {
      direction = 'north'
    }
    return direction
  }
}
