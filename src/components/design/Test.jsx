import React, { useEffect } from 'react'
import Backlog from './Backlog'
import { useGameStore } from '../../store/game'

const Test = () => {
  const {setActionsGame,addToBacklog,resetBacklog} = useGameStore.getState()
  
  return (
    <>
    </>
  )
}

export default Test