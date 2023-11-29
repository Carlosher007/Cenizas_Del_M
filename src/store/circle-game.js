/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useCircleGameStore = create(devtools(persist((set, get) => ({
  level: 0,
  lives: 3,
  win: false,
  parts: 8,
  coloredParts:[0,3,6,5],
  isPlaying: false,

  resetCircleGame: () => set((state) => ({
    level: 0,
    lives: 3,
    win: false,
    parts: 8,
    coloredParts:[0,3,6,2],
    isPlaying: false,
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

  setParts: (parts) => set((state) => ({
    parts
  })),

  setColoredParts: (coloredParts) => set((state) => ({
    coloredParts
  })),

  setIsPlaying: (isPlaying) => set((state) => ({
    isPlaying
  })),

}), {
  name: 'circle-game'
}
)))
