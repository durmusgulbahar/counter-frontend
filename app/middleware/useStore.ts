import { create } from 'zustand';
import { getValue } from '../services/GetValue';
import { increaseRequest } from '../services/IncreaseRequest';
import { decreaseRequest } from '../services/DecreaseRequest';
import { getLogs } from '../services/GetLogs';
type State = {
  value: number;
}

type Actions = {
  increment: () => Promise<void>;
  decrement: () => void;
  fetchValue: () => Promise<void>;
}

export const useStore = create<State & Actions>((set) => ({
  value: 0, // Initial state value

  increment: async () : Promise<void> => {
    const res = await new Promise<void>((resolve)=>  resolve(increaseRequest()) )
    set((state) => ({ value: state.value + 1 }))
  },
  decrement: async () : Promise<void> => {
    const res = await new Promise<void>((resolve)=>  resolve(decreaseRequest()) )
    set((state) => ({ value: state.value - 1 }))
  },
  
  fetchValue: async (): Promise<void> => {
    // Simulate fetching data
    const result = await new Promise<number>((resolve) => resolve(getValue()));
    // Update state with the fetched value
    set({ value: result });
  },

}));
