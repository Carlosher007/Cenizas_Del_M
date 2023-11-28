import React, { useEffect, useState } from "react";
import Gif from "../../../../components/design/FondoGif";
import { useGameStore } from "../../../../store/game";
import { getSceneScript } from "../../../../utils/script";
import Loader from "../../../../components/design/Loader";

const Calle = () => {
  const { setDialogue, setChoice, setDecisionScene1, setScene } =
    useGameStore.getState();
  const [sound] = useState(() => new Audio("/assets/sounds/tv.wav"));
  const [hasPlayed, setHasPlayed] = useState(false);
  const [actionsGame, decisionsScene1, dialogue, resetDialogue] = useGameStore(
    (state) => [state.actionsGame, state.decisionsScene1, state.dialogue]
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(temporizador);
      // resetDialogue();
    };
  }, []);

  const goToBunkerEffect = () => {
    setDecisionScene1("followedCrowd", true);
    setDecisionScene1("continueGirlfriendSearch", false);
  };

  const goForGirlfriendEffect = () => {
    setDecisionScene1("continueGirlfriendSearch", true);
    setDecisionScene1("followedCrowd", false);
  };

  useEffect(() => {
    const showFirstDialog = () => {
      setChoice([]);
      setTimeout(() => {
        const script = getSceneScript(1, [], "scriptNews");
        setDialogue({ script });
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
      if (decisionsScene1.followedCrowd) {
        const script = getSceneScript(1, [], "scriptGoToBunker");
        const action = () => {
          setScene(2);
          setDecisionScene1("hazKey", false);
        };
        setDialogue({ script, action });
      } else if (decisionsScene1.continueGirlfriendSearch) {
        const script = getSceneScript(1, [], "scriptGoToSofia");
        const action = () => {
          setScene(2);
          setDecisionScene1("hazKey", true);
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
      <Loader isReady={loaded}>
        <Gif url="/assets/images/backgrounds/giftreet.gif" />
      </Loader>
    </>
  );
};

export default Calle;
