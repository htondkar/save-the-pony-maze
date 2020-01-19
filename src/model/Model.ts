import { MovementRestriction } from './MovementRestriction';
import { Queue } from './utils';

export type Wall = 'west' | 'north'

export type MazeData = Array<Wall[]>

export class MazeModel {
  private movementRestrictions: MovementRestriction

  constructor(
    private readonly mazeData: MazeData,
    private readonly rowsCount: number,
    private readonly columnsCount: number
  ) {
    this.movementRestrictions = new MovementRestriction(
      this.mazeData,
      this.columnsCount,
      this.rowsCount
    )
  }

  /**
   * @method shortestPath
   * this method employs breadth-first-search to find the path to the target.
   * the first time we find the target we can be sure that we have found the
   * shortest path because we are doing a bfs search.
   */
  public getShortestPath(source: number, target: number, obstacle: number): number[] {
    let shortestPath: number[] = []

    if (source === target) {
      return shortestPath
    }

    const queue = new Queue<number>()
    const visited: Record<number, boolean> = { [source]: true }
    const predecessor: Record<number, number> = {}

    // start from the source
    queue.enqueue(source)

    while (queue.length > 0) {
      let current = queue.dequeue()

      // this is to make TS compiler happy
      if (current === undefined) {
        console.log('current block was undefined!')
        break
      }

      const neighbors = this.getAdjWalkableBlocks(current)

      // traverse all neighbors in a bfs manner and look for the target.
      for (let index = 0; index < neighbors.length; index++) {
        const neighbor = neighbors[index]

        if (current !== undefined && !visited[neighbor]) {
          visited[neighbor] = true

          if (neighbor === target) {
            // start going back to complete the path
            const path = [neighbor]
            while (current !== source) {
              path.push(current)
              current = predecessor[current]
            }

            path.push(current)
            path.reverse()
            shortestPath = path
          }

          predecessor[neighbor] = current
          queue.enqueue(neighbor)
        }
      }
    }

    return shortestPath
  }

  /**
   * @method getAdjWalkableBlocks
   * finds all the walkable neighbor blocks of a certain block index.
   */
  private getAdjWalkableBlocks(source: number) {
    const result: number[] = []

    if (this.movementRestrictions.canMoveNorth(source)) {
      result.push(source - this.columnsCount)
    }

    if (this.movementRestrictions.canMoveWest(source)) {
      result.push(source - 1)
    }

    if (this.movementRestrictions.canMoveEast(source)) {
      result.push(source + 1)
    }

    if (this.movementRestrictions.canMoveSouth(source)) {
      result.push(source + this.columnsCount)
    }

    return result
  }
}
