import type { StateManager } from "./StateManager";

export class PresenterStoreAdapter<State> {
  constructor(public store: StateManager<State>) {}

  protected get state() {
    return this.store.state;
  }

  protected updateState(newState: Partial<State> | State[keyof State]) {
    // const mergedState = merge(this.state, newState);
    this.store.updateState({ ...this.state, ...newState });
  }

  resetState() {
    this.store.resetState();
  }
}
