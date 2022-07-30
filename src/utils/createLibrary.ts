import { Book, Library } from "@/generated/graphql";

const createLibrary = (
  id: string,
  branch?: string,
  bookIds?: string[],
  books?: Book[]
): Library => ({
  id: id,
  branch: branch ?? null,
  bookIds: bookIds ?? null,
  books: books ?? null,
});

export default createLibrary;
