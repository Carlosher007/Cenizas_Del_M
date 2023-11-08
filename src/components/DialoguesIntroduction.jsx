import React, { useEffect, useState } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'
import { useGameStore } from '../store/game'
import { DialogueIntroduction } from './DialogueIntroduction'

const DialoguesIntroduction = ({ content }) => {
  const { setScene, setPlace } = useGameStore.getState()
  const { continueKey } = useKeyboard()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(content[0].text)
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    if (continueKey) {
      console.log(index, content.length)
      if (index <= content.length) {
        setIndex(index + 1)
        const dialog = content[index]
        if (dialog) {
          setText(dialog.text)
        } else {
          setFinish(true)
        }
      }
    }
  }, [continueKey])

  useEffect(() => {
    if (index > content.length) {
      setScene(1)
      setPlace('Sala')
      setFinish(true)
    }
  }, [index])

  return (
    <>
      {!finish && <DialogueIntroduction keyProp={text} text={text} />}
    </>
  )
}

export default DialoguesIntroduction