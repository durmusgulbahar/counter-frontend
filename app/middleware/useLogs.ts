import { create } from 'zustand';
import { getValue } from '../services/GetValue';
import { increaseRequest } from '../services/IncreaseRequest';
import { decreaseRequest } from '../services/DecreaseRequest';
import { getLogs } from '../services/GetLogs';

interface LogEntry {
    id: number;
    message: string;
    request_type: string;
    createdAt: string; // Assuming createdAt is a string representing a date
}
  

type State = {
  logs: LogEntry[];
}

type Actions = {
 
  fetchLogs: () => Promise<void>;
}

export const useLogs = create<State & Actions>((set) => ({
  logs: [] as LogEntry[], // Explicitly type the initial value as LogEntry[]

  fetchLogs: async(): Promise<void> => {
    const res = await new Promise<LogEntry[]>((resolve) => resolve(getLogs()));
    set({logs:res});
  }
}));
