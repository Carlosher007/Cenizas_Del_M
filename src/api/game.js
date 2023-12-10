import { editUserGame, getUserGame } from '../db/user-collection'
import { useAuthStore } from '../store/auth'
import { useGameStore } from '../store/game'
const { setScene, setPlace, setDecisions } = useGameStore.getState()

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
    return { type: 'success', data }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

// can be deleted if not used
export const setSceneDecisions = async (scene, decisions) => {
  try {
    const { email } = useAuthStore.getState().userLogged
    await editUserGame(email, scene, decisions)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const setSceneDecisionsFirebase = async (scene, decisions) => {
  try {
    const { email } = useAuthStore.getState().userLogged
    await editUserGame(email, scene, decisions)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const setSceneFireplace = async (scene) => {
  try {
    const { email } = useAuthStore.getState().userLogged
    const res = await editUserGame(email, 'general', { scene })

    if (res.success == true) {
      console.log('Successfully updated')
    } else {
      console.log('An error has ocurred')
    }

  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}


export const setPlaceFirebase = async (place) => {
  try {
    const { email } = useAuthStore.getState().userLogged
    const res = await editUserGame(email, 'general', { place })

    if (res.success == true) {
      console.log('An error has ocurred')
    } else {
      // console.log(res)
    }

  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}
