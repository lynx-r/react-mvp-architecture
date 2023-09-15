import type { UpdatableState } from "./UpdatableState";

export class PresenterStoreAdapter<T> {
  constructor(public store: UpdatableState<T>) {}

  protected get state() {
    return this.store.state;
  }

  protected updateState(newState: Partial<T> | T[keyof T]) {
    // const mergedState = merge(this.state, newState);
    // console.log(mergedState === this.state, "???");
    this.store.updateState({ ...this.state, ...newState });
  }

  resetState() {
    this.store.resetState();
  }
}
