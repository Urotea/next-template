import { Author } from "@/generated/graphql";

const createAuthor = (id: string, name?: string, age?: number): Author => ({
  id,
  name: name ?? null,
  age: age ?? null,
});

export default createAuthor;
