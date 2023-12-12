import React, { useEffect, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useGameStore } from '../../store/game';
import { Dialogue } from './Dialogue';

const ContainerDialogue = ({ content, actionGame, action }) => {
  const {
    resetDialogue,
    setIsChoice,
    resetChoice,
    setActionsGame,
    setDecision,
    setActionToChange,
  } = useGameStore.getState();
  const { continueKey } = useKeyboard();
  const [index, setIndex] = useState(0);
  const [author, setAuthor] = useState(content[0].author);
  const [text, setText] = useState(content[0].text);
  const [finish, setFinish] = useState(false);
  const [tempIsChoise, tempSetIsChoise] = useState(false);

  useEffect(() => {
    const dialog = content[index];
    if (!dialog.choice) {
      tempSetIsChoise(false);
      setIsChoice(false);
    }
  }, []);

  useEffect(() => {
    if (continueKey) {
      if (index < content.length && !tempIsChoise) {
        const indexAux = index + 1;
        setIndex(indexAux);
        if (indexAux < content.length) {
          const dialog = content[indexAux];
          if (dialog.choice) {
            tempSetIsChoise(true);
            setIsChoice(true);
          } else {
            tempSetIsChoise(false);
            setIsChoice(false);
          }
          if (dialog) {
            setAuthor(dialog.author);
            setText(dialog.text);
          } else {
            resetDialogue();
            resetChoice();
            setIsChoice(false);
            setFinish(true);
            if (action) {
              action();
            }
            if (actionGame) {
              if (actionGame[1] == 'action') {
                setActionsGame(actionGame[0], true);
              } else if (actionGame[1] == 'decision') {
                setDecision(actionGame[0], true);
              }
            }
            setActionToChange(null);
          }
        } else {
          resetDialogue();
          resetChoice();
          // cambio que podria afectar
          setIsChoice(false);
          setFinish(true);
          if (action) {
            action();
          }
          if (actionGame) {
            if (actionGame[1] == 'action') {
              setActionsGame(actionGame[0], true);
            } else if (actionGame[1] == 'decision') {
              setDecision(actionGame[0], true);
            }
          }
          setActionToChange(null);
        }
      }
    }
  }, [continueKey]);

  useEffect(() => {
    if (index >= content.length) {
      resetDialogue();
      setFinish(true);
      if (action) {
        action();
      }
      if (actionGame) {
        if (actionGame[1] == 'action') {
          setActionsGame(actionGame[0], true);
        } else if (actionGame[1] == 'decision') {
          setDecision(actionGame[0], true);
        }
      }
      setActionToChange(null);
    }
  }, [index]);

  return (
    <>{!finish && <Dialogue keyProp={text} author={author} text={text} />}</>
  );
};

export default ContainerDialogue;
