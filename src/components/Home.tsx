import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AppContext } from '../App';

export const Home = observer(function Home() {
  const [columns, setColumns] = useState('15')
  const [rows, setRows] = useState('15')
  const [difficulty, setDifficulty] = useState('0')

  const context = useContext(AppContext)

  function handleClick() {
    context.startTheGame({ columns, rows, difficulty })
  }

  function extractDomValue(event: React.ChangeEvent<HTMLInputElement>) {
    return event.target.value
  }

  if (context.mazeId) {
    return <Redirect to={`/maze/${context.mazeId}`} />
  }

  return (
    <HomeWrapper>
      <Input
        type="number"
        onChange={e => setColumns(extractDomValue(e))}
        value={columns}
        placeholder="columns"
      ></Input>
      <Input
        type="number"
        onChange={e => setRows(extractDomValue(e))}
        value={rows}
        placeholder="rows"
      ></Input>
      <Input
        type="number"
        onChange={e => setDifficulty(extractDomValue(e))}
        value={difficulty}
        placeholder="difficulty"
      ></Input>
      <Button onClick={handleClick} disabled={context.isLoading}>
        Start
      </Button>
    </HomeWrapper>
  )
})

const Input = styled.input`
  padding: 5px;
`
const Button = styled.button`
  padding: 5px;
  grid-column: 1 / -1;
  :disabled {
    opacity: 0.5;
  }
`
const HomeWrapper = styled.div`
  padding: 30%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
`
