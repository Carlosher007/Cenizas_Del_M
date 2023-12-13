import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useCharactersElementsStore = create(devtools(persist((set, get) => ({
    animation: 'injured',
    setAnimation: (animation) => set((state) => ({
        animation
    })),
  }), {
    name: 'characters-elements-store'
  }
  )))