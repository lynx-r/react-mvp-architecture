export type Id = number;

export type RequestState = "start" | "loading" | "done" | "error";

export type BaseState = {
  fetch: RequestState;
};
