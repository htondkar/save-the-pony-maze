import { observer } from 'mobx-react'
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../App'
import { Typography, TextField, Button } from '@material-ui/core'

export const Home = observer(function Home() {
	const [columns, setColumns] = useState('15')
	const [rows, setRows] = useState('15')
	const [difficulty, setDifficulty] = useState('0')

	const context = useContext(AppContext)

	function handleClick() {
		context.startTheGame({ columns, rows, difficulty })
	}

	function extractDomValue(event: any) {
		return event.target.value
	}

	if (context.mazeId) {
		return <Redirect to={`/maze/${context.mazeId}`} />
	}

	return (
		<HomeWrapper>
			<Typography variant="h4">New Game</Typography>
			<Input
				type="number"
				onChange={e => setColumns(extractDomValue(e))}
				value={columns}
				placeholder="columns"
				label="columns"
				variant="outlined"
			></Input>
			<Input
				type="number"
				onChange={e => setRows(extractDomValue(e))}
				value={rows}
				placeholder="rows"
				label="rows"
				variant="outlined"
			></Input>
			<Input
				type="number"
				onChange={e => setDifficulty(extractDomValue(e))}
				value={difficulty}
				placeholder="difficulty"
				label="difficulty"
				variant="outlined"
			></Input>

			<Button
				variant="contained"
				color="primary"
				onClick={handleClick}
				disabled={context.isLoading}
				size="large"
			>
				Start
			</Button>
		</HomeWrapper>
	)
})

const Input = styled(TextField)`
	font-size: 20px;
`

const HomeWrapper = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-auto-flow: row;
	justify-content: center;
	align-items: center;
`
