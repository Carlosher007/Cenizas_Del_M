import { editUserGame, getUserGame } from '../db/user-collection'
import { useAuthStore } from '../store/auth'
import { useGameStore } from '../store/game'
const { setScene, setPlace, setDecisionsScene1 } = useGameStore.getState()

export const setSceneInGame = async (scene) => {
  try {
    setScene(scene)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const setPlaceInGame = async (place) => {
  try {
    setPlace(place)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const getSceneDecisions = async (scene) => {
  try {
    const { email } = useAuthStore.getState().userLogged
    const { data } = await getUserGame(email, scene)
    setDecisionsScene1(data)
    return { type: 'success', data }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const setSceneDecisions = async (scene, decisions) => {
  try {
    const { email } = useAuthStore.getState().userLogged
    await editUserGame(email, scene, decisions)
    setDecisionsScene1(decisions)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}
