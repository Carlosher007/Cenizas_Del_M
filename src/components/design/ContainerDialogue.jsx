import React, { useEffect, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useGameStore } from '../../store/game';
import { Dialogue } from './Dialogue';

const ContainerDialogue = ({ content, action }) => {
  const { resetDialogue, setIsChoice, resetChoice } = useGameStore.getState();
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
  },[]);

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
            setFinish(true);
            if (action) {
              action();
            }
          }
        } else {
          resetDialogue();
          resetChoice();
          setFinish(true);
          if (action) {
            action();
          }
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
    }
  }, [index]);

  return (
    <>{!finish && <Dialogue keyProp={text} author={author} text={text} />}</>
  );
};

export default ContainerDialogue;
