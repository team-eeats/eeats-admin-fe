import { create } from 'zustand';

interface InputState {
  inputs: { [key: string]: string };
  setInput: (key: string, value: string) => void;
}

const useInputStore = create<InputState>((set) => ({
  inputs: {},
  setInput: (key: string, value: string) => set((state) => ({
    inputs: { ...state.inputs, [key]: value }
  })),
}));

export default useInputStore;
