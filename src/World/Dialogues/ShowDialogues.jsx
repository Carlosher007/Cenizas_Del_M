import ChoicesContainer from '../../components/design/ChoicesContainer';
import ContainerDialogue from '../../components/design/ContainerDialogue';
import { useGameStore } from '../../store/game';

const ShowDialogues = () => {
  const [dialogue, choice, isChoice, isLoading] = useGameStore((state) => [
    state.dialogue,
    state.choice,
    state.isChoice,
    state.isLoading
  ]);

  return (
    <>
      {Object.keys(dialogue).length > 0 && !isLoading && (
        <ContainerDialogue content={dialogue.script} action={dialogue.action} />
      )}
      {Object.keys(choice).length > 0 && isChoice &&  !isLoading && (
        <ChoicesContainer
          props={{ options: choice.content, nameChoice: choice.nameChoice }}
        />
      )}
    </>
  );
};

export default ShowDialogues;
