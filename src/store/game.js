/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { useCircleGameStore } from './circle-game'

const { resetCircleGame } = useCircleGameStore.getState()

export const useGameStore = create(devtools(persist((set, get) => ({
  scene: 0,
  place: 'Introduction',
  backlog: [],
  decisions: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false, openSafeAlone: false, openSafeInGroup: false, deliveredKey: false, hasComunicator: false, hasMedicalSuply: false, knowsAboutSofia: false, wantsToShareKey: false, wantsToShareFlashlight: false },
  actionsGame: { showD1: false, showD2: false, showD3S1: false, showBacklog: false, winMiniGame: false, showOverlay: false, showD1S2: false, showD2S2: false, choiceSharing: false, choiceBunkerOrSofia: false },
  dialogue: [],
  dialogue: [],
  choice: [],
  isChoice: false,
  isLoading: false,


  reset: () => {
    resetCircleGame();
    set((state) => ({
      scene: 0,
      place: 'Introduction',
      backlog: [],
      decisions: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false, openSafeAlone: false, openSafeInGroup: false, deliveredKey: false, hasComunicator: false, hasMedicalSuply: false, knowsAboutSofia: false, wantsToShareKey: false, wantsToShareFlashlight: false },
      actionsGame: { showD1: false, showD2: false, showD3S1: false, showBacklog: false, winMiniGame: false, showOverlay: false, showD1S2: false, showD2S2: false, choiceSharing: false, choiceBunkerOrSofia: false },
      dialogue: [],
      choice: [],
      isChoice: false,
      isLoading: false,
    }));
  },

  setIsLoading: (isLoading) => set((state) => ({
    isLoading
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
