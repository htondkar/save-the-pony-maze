import cn from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { MazeData, Wall } from '../model/Model';

interface OwnProps {
  blocks: MazeData
  columns: number
  rows: number
  ponyIndex: number
  domokunIndex: number
  goal: number
  pathToGoal: number[]
}

export const MazeView: React.FunctionComponent<OwnProps> = props => {
  if (props.domokunIndex === props.ponyIndex) {
    alert('Game Over!')
  }

  if (props.goal === props.ponyIndex) {
    alert('Success!')
  }

  return (
    <MazeWrapper columns={props.columns} rows={props.rows}>
      {props.blocks.map((block, blockIndex) => (
        <MazeBlockView
          key={blockIndex}
          walls={block}
          blockIndex={blockIndex}
          className={cn({
            north: hasNorthWall(block),
            west: hasWestWall(block),
            'path-to-goal': props.pathToGoal.includes(blockIndex),
          })}
        >
          {blockIndex === props.domokunIndex && <Domokun>👹</Domokun>}
          {blockIndex === props.ponyIndex && <Pony>🦄</Pony>}
          {blockIndex === props.goal && <Goal>🏁</Goal>}
        </MazeBlockView>
      ))}
    </MazeWrapper>
  )
}

const Goal = styled.span`
  font-size: 22px;
`

const Pony = styled.span`
  font-size: 22px;
`

const Domokun = styled.span`
  font-size: 22px;
`

const MazeWrapper = styled.div<{ rows?: number; columns?: number }>`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
`

const MazeBlockView = styled.div<{ walls: Wall[]; blockIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
`

function hasNorthWall(walls: Wall[]): boolean {
  if (walls.length === 0) return false
  return walls.includes('north')
}

function hasWestWall(walls: Wall[]): boolean {
  if (walls.length === 0) return false
  return walls.includes('west')
}
