import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
  Enter: 'continueKey',
  Space: 'jump',
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Digit1: 'd1',
  Digit2: 'd2',
  Digit3: 'd3',
  Digit4: 'd4',
  ArrowUp: 'up',
  ArrowDown: 'down'
}

export const useKeyboard = () => {
  const [actionsGame, setActionsGame] = useState({
    continue: false,
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    d1: false,
    d2: false,
    d3: false,
    d4: false,
    up: false,
    down: false
  })

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if (action) {
        // if (actionsGame[action]) return

        setActionsGame(prevActions => ({
          ...prevActions,
          [action]: true
        }))
      }
    }

    const handleKeyUp = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if (action) {
        // if (!actionsGame[action]) return

        setActionsGame(prevActions => ({
          ...prevActions,
          [action]: false
        }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actionsGame
}
