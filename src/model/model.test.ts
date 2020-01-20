import { MazeModel, MazeData } from './Model'
import mazeFixtureData from '../fixtures/mazeFixtures.json'
import { MovementRestriction } from './MovementRestriction'

function pickRandomIndex(arr: any[]): number {
	return Math.floor(Math.random() * (arr.length - 0) + 0)
}

describe('MazeModel', () => {
	describe('Pathfinder feature', () => {
		it('should include the source and target points in the path', () => {
			const model = new MazeModel(
				mazeFixtureData.data as MazeData,
				mazeFixtureData.size[0],
				mazeFixtureData.size[0]
			)

			const sourceIndex = pickRandomIndex(mazeFixtureData.data)
			const targetIndex = pickRandomIndex(mazeFixtureData.data)
			const path = model.getShortestPath(sourceIndex, targetIndex)

			expect(path).toContain(sourceIndex)
			expect(path).toContain(targetIndex)
		})
	})

	describe('Movement restriction', () => {
		let movementRestricts: MovementRestriction

		beforeEach(() => {
			movementRestricts = new MovementRestriction(
				mazeFixtureData.data as MazeData,
				mazeFixtureData.size[0],
				mazeFixtureData.size[0]
			)
		})

		it('should restrict movement to respect the rectangular shape of maze', () => {
			const firstColFirstRow = 0
			const firstColLastRow = mazeFixtureData.size[0] * (mazeFixtureData.size[1] - 1)
			const lastColFirstRow = mazeFixtureData.size[0] - 1
			const lastColLastRow = mazeFixtureData.size[0] * mazeFixtureData.size[1] - 1

			expect(movementRestricts.canMoveWest(firstColFirstRow)).toBe(false)
			expect(movementRestricts.canMoveNorth(firstColFirstRow)).toBe(false)

			expect(movementRestricts.canMoveWest(firstColLastRow)).toBe(false)
			expect(movementRestricts.canMoveSouth(firstColLastRow)).toBe(false)

			expect(movementRestricts.canMoveEast(lastColFirstRow)).toBe(false)
			expect(movementRestricts.canMoveNorth(lastColFirstRow)).toBe(false)

			expect(movementRestricts.canMoveEast(lastColLastRow)).toBe(false)
			expect(movementRestricts.canMoveSouth(lastColLastRow)).toBe(false)
		})

		it('should respect the walls ', () => {
			const firstBlockWithNorthWall = mazeFixtureData.data.findIndex(block =>
				block.includes('north')
			)
			expect(movementRestricts.canMoveNorth(firstBlockWithNorthWall)).toBe(false)

			const firstBlockWithWestWall = mazeFixtureData.data.findIndex(block => block.includes('west'))
			expect(movementRestricts.canMoveWest(firstBlockWithWestWall)).toBe(false)

			const firstBlockWithSouthWall = mazeFixtureData.data.findIndex((block, index) => {
				const itemBelowThisBlock = mazeFixtureData.data[index + mazeFixtureData.size[0]]
				if (itemBelowThisBlock && itemBelowThisBlock.includes('north')) {
					return true
				}
			})
			expect(movementRestricts.canMoveSouth(firstBlockWithSouthWall)).toBe(false)

			const firstBlockWithEastWall = mazeFixtureData.data.findIndex((block, index) => {
				const itemBelowThisBlock = mazeFixtureData.data[index + 1]
				if (itemBelowThisBlock && itemBelowThisBlock.includes('west')) {
					return true
				}
			})
			expect(movementRestricts.canMoveEast(firstBlockWithEastWall)).toBe(false)
		})
	})
})
