import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from '../App'
import { MazeView } from './MazeView'

export const MazeContainer: React.FC = observer(() => {
	const context = useContext(AppContext)

	if (context.mazeStatus === 'won') {
		return (
			<MazeWrapper>
				<h2>You won 😍</h2>
				<a href="/">NEW GAME</a>
			</MazeWrapper>
		)
	}

	if (context.mazeStatus === 'over') {
		return (
			<MazeWrapper>
				<h2>You Lose 😱</h2>
				<a href="/">NEW GAME</a>
			</MazeWrapper>
		)
	}

	if (context.mazeStatus !== 'active') {
		return (
			<MazeWrapper>
				<h2>The Game is not active! 💀</h2>
				<a href="/">NEW GAME</a>
			</MazeWrapper>
		)
	}

	return (
		<MazeWrapper>
			<MazeView
				blocks={context.mazeData}
				columns={context.mazeDimensions.columns}
				rows={context.mazeDimensions.rows}
				ponyIndex={context.mazePonyIndex}
				domokunIndex={context.mazeDomokunIndex}
				goal={context.mazeTargetIndex}
				pathToGoal={context.pathToTarget}
			></MazeView>
		</MazeWrapper>
	)
})

const MazeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`
