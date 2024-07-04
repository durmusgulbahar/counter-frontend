import { create } from 'zustand'

type State = {
  value: number
}

type Actions = {
  increment: () => void
  decrement: () => void
}

export const useCountStore = create<State & Actions>((set) => ({
  value: 1,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}))
