/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { useCircleGameStore } from './circle-game'
import { useStealthGameStore } from './stealth-game'

const {resetCircleGame} = useCircleGameStore.getState()
const {resetStealthGame} = useStealthGameStore.getState()

export const useGameStore = create(devtools(persist((set, get) => ({
  scene: 0,
  place: 'Introduction',
  backlog: [],
  decisions: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false, openSafeAlone: false, openSafeInGroup: false, deliveredKey: false, knowsAboutSofia: false, wantsToShareKey: false, wantsToShareFlashlight: false, helpToOldMen: false, helpToChild: false, helpToNoBody: false, isOldMenDead: false },

  actionsGame: { showD1: false, showD2: false, showD3S1: false, showBacklog: false, winMiniGame: false, showOverlay: false, showD1S2: false, showD2S2: false, choiceSharing: false, choiceBunkerOrSofia: false, showD3S2: false, showD4S2: false, choiceSafeSharing: false, showAnimation: false, showedAnimation: false, showDSleepS2: false, showD5S2: false, playedMinigame: false, hasNone: false, showD1S3: false, choiceHelpToSomeone: false, showD2S3: false, finishStory: false, showFinishStory: false, showD3S3: false, showD4S3: false, choiceFaceGroup: false, winMiniGame2: false, showD5S3: false, playedMiniGame2: false },
  dialogue: [],
  actionToChange: null,
  choice: [],
  isChoice: false,
  isLoading: false,


  reset: () => {
    resetCircleGame();
    resetStealthGame()
    set((state) => ({
      scene: 0,
      place: 'Introduction',
      backlog: [],
      decisions: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false, openSafeAlone: false, openSafeInGroup: false, deliveredKey: false, knowsAboutSofia: false, wantsToShareKey: false, wantsToShareFlashlight: false, helpToOldMen: false, helpToChild: false, helpToNoBody: false, isOldMenDead: false },

      actionsGame: { showD1: false, showD2: false, showD3S1: false, showBacklog: false, winMiniGame: false, showOverlay: false, showD1S2: false, showD2S2: false, choiceSharing: false, choiceBunkerOrSofia: false, showD3S2: false, showD4S2: false, choiceSafeSharing: false, showAnimation: false, showedAnimation: false, showDSleepS2: false, showD5S2: false, playedMinigame: false, hasNone: false, showD1S3: false, choiceHelpToSomeone: false, showD2S3: false, finishStory: false, showFinishStory: false, showD3S3: false, showD4S3: false, choiceFaceGroup: false, winMiniGame2: false, showD5S3: false , playedMiniGame2: false},
      dialogue: [],
      actionToChange: null,
      choice: [],
      isChoice: false,
      isLoading: false,
    }));
  },

  setIsLoading: (isLoading) => set((state) => ({
    isLoading
  })),

setFunctionAux: (functionAux) => set((state) => ({
    functionAux: functionAux || state.functionAux
  })),

  setActionToChange: (actionToChange) => set((state) => ({
    actionToChange
  })),

  setScene: (scene) => set((state) => ({
    scene
  })),

  setPlace: (place) => set((state) => ({
    place
  })),

  addToBacklog: (item) => set((state) => ({
    backlog: state.backlog.length < 4 && !state.backlog.includes(item) ? [...state.backlog, item] : state.backlog
  })),

  resetBacklog: () => set((state) => ({
    backlog: []
  })),

  isInBacklog: (item) => get().backlog.includes(item),

  removeFromBacklog: (item) => set((state) => ({
    backlog: state.backlog.filter((backlogItem) => backlogItem !== item)
  })),

  // Borrar todo del inventario menos el item 'wokiToki' y 'medical'
  resetBacklogItemsSome: () => set((state) => ({
    backlog: state.backlog.filter((backlogItem) => backlogItem === 'wokiToki' || backlogItem === 'medical')
  })),

  setDecision: (decision, value) => set((state) => ({
    decisions: {
      ...state.decisions,
      [decision]: value
    }
  })),

  setDecisions: (decisions) => set((state) => ({
    decisions
  })),

  setDialogue: (dialogue) => set((state) => ({
    dialogue
  })),

  setChoice: (choice) => set((state) => ({
    choice
  })),

  resetDialogue: () => set((state) => ({
    dialogue: []
  })),
  resetChoice: () => set((state) => ({
    choice: []
  })),

  setActionsGame: (action, value) => set((state) => ({
    actionsGame: {
      ...state.actionsGame,
      [action]: value
    }
  })),

  getDialogueLength: () => get().dialogue.length,

  getActionsGame: (action) => get().actionsGame[action],

  getDecisions: () => get().decisions,

  setIsChoice: (isChoice) => set((state) => ({
    isChoice
  })),
}), {
  name: 'game'
}
)))
