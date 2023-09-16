export type StateManager<State> = {
  state: State;

  updateState: (newState: State) => void;
  resetState: () => void;
};
