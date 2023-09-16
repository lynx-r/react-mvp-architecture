import { Id } from "@/types";

export type CreateEvent<T = any> = {
  kind: "create";
  object: T;
};

export type CreateOrUpdateEvent<T = any> = {
  kind: "createOrUpdate";
  object: T;
};

export type FetchEvent = {
  kind: "fetch";
  id: Id;
};

export type UpdateEvent<T = any> = {
  kind: "update";
  object: T;
};

export type DeleteEvent = {
  kind: "fetch";
  id: Id;
};

export type EventKind = { kind: string };

export type EventExecutor<Events extends EventKind> = {
  [E in Events as `on${Capitalize<E["kind"]>}`]: (
    params?: E
  ) => Promise<void> | void;
};

export type StateHolder<State> = DeepReadonly<{
  state: State;
}>;

export type PresenterFunc<
  Events extends EventKind,
  State
> = EventExecutor<Events> & StateHolder<State>;
