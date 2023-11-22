import ChoicesContainer from '../../components/design/ChoicesContainer';
import ContainerDialogue from '../../components/design/ContainerDialogue';
import { useGameStore } from '../../store/game';

const ShowDialogues = () => {
  const [dialogue, choice, isChoice] = useGameStore((state) => [
    state.dialogue,
    state.choice,
    state.isChoice,
  ]);

  return (
    <>
      {Object.keys(dialogue).length > 0 && (
        <ContainerDialogue content={dialogue.script} action={dialogue.action} />
      )}
      {Object.keys(choice).length > 0 && isChoice && (
        <ChoicesContainer
          props={{ options: choice.content, nameChoice: choice.nameChoice }}
        />
      )}
    </>
  );
};

export default ShowDialogues;
