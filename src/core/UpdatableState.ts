export type UpdatableState<T> = {
  state: T;

  updateState: (newState: T) => void;
  resetState: () => void;
};
