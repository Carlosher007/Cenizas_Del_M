import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useStealthGameStore = create(devtools(persist((set, get) => ({
    level: 0,
    lives: 3,
    win: false,
    resetStealthGame: () => set((state) => ({
        level: 0,
        lives: 3,
        win: false,
    })),
    setLevel: (level) => set((state) => ({
        level
    })),
    setLives: (lives) => set((state) => ({
    lives
    })),
    setWin: (win) => set((state) => ({
    win
    })),
  
  }), {
    name: 'stealth-game'
  }
  )))