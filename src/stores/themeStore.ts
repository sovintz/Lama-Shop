import { create } from 'zustand'

interface ThemeState {
    theme: number
    setTheme: (quantity: number) => void
}
export const useThemeStore = create<ThemeState>((set) => ({
    theme: 0,
    setTheme: (newTheme: number) => set({ theme: newTheme }),
}))
