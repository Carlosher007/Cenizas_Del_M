import { useEffect } from 'react'
import Experience from '../World/Experience'
import { getSceneDecisions } from '../api/game'
import Backlog from '../components/design/Backlog'
import BarMenu from '../components/design/BarMenu'
import { useGameStore } from '../store/game'

const Game = () => {
  const [isLoading] = useGameStore((state) => [state.isLoading])
const {setPlace,setActionsGame} = useGameStore.getState()
  // useEffect(() => {
  //   setPlace('bunker')
  //   setActionsGame('showOverlay',false)
  // },[])

  return (
    <>
      <BarMenu />
      <Experience />
      {!isLoading && <Backlog />}
    </>
  )
}

export default Game
