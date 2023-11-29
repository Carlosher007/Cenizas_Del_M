import React, { useEffect, useState } from "react";
import Gif from "../../../../components/design/FondoGif";
import { useGameStore } from "../../../../store/game";
import { getSceneScript } from "../../../../utils/script";
import withLoading from "../../../../components/design/WithLoading";

const Calle = () => {
  const { setDialogue, setChoice, setDecision, setScene, setPlace,setIsChoice } =
    useGameStore.getState();
  const [sound] = useState(() => new Audio("/assets/sounds/tv.wav"));
  const [hasPlayed, setHasPlayed] = useState(false);
  const [actionsGame, decisions, dialogue, resetDialogue] = useGameStore(
    (state) => [state.actionsGame, state.decisions, state.dialogue]
  );

  const goToBunkerEffect = () => {
    setDecision("followedCrowd", true);
    setDecision("continueGirlfriendSearch", false);
  };

  const goForGirlfriendEffect = () => {
    setDecision("continueGirlfriendSearch", true);
    setDecision("followedCrowd", false);
  };

  useEffect(() => {
    const showFirstDialog = () => {
      setChoice([]);
      setTimeout(() => {
        const script = getSceneScript(1, [], "scriptNews");
            const action = () => {
              // setIsChoice(true)
            };
        setDialogue({ script, action });
        setChoice({
          content: [
            { text: "Ingresar al bunker", effect: goToBunkerEffect },
            { text: "Ir a buscar a sofía", effect: goForGirlfriendEffect },
          ],
          nameChoice: "choiceBunkerOrSofia",
        });
      }, 2500);
    };

    showFirstDialog();
  }, []);

  useEffect(() => {
    if (actionsGame.choiceBunkerOrSofia) {
      if (decisions.followedCrowd) {
        const script = getSceneScript(1, [], "scriptGoToBunker");
        const action = () => {
          setScene(2);
          setPlace('bunker');
          setDecision("hazKey", false);
        };
        setDialogue({ script, action });
      } else if (decisions.continueGirlfriendSearch) {
        const script = getSceneScript(1, [], "scriptGoToSofia");
        const action = () => {
          setScene(2);
          setPlace('bunker')
          setDecision("hazKey", true);
        };
        setDialogue({ script, action });
      }
    }
  }, [actionsGame]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && !hasPlayed) {
        sound.currentTime = 0;
        sound.volume = 0.5;
        sound.play().catch((error) => {
          console.log("Error al reproducir el audio:", error);
        });
        sound.loop = true;
        setHasPlayed(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasPlayed]);

  useEffect(() => {
    return () => {
      sound.pause();
    };
  }, []);

  return (
    <>
      <Gif url="/assets/images/backgrounds/giftreet.gif" />
    </>
  );
};

export default withLoading(Calle,2500);
