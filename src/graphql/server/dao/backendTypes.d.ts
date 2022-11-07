export type BackendUser = {
  id: string;
  name: string;
  age: number;
};

export type BackendTodo = {
  id: string;
  ownerUserId: string;
  title: string;
  detail: string;
  state: "todo" | "doing" | "done";
};

export type BackendTeam = {
  id: string;
  name: string;
};
