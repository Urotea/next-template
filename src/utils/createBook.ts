import { Author, Book } from "@/generated/graphql";

const createBook = (
  id: string,
  title?: string,
  authorId?: string,
  author?: Author
): Book => ({
  id,
  title: title ?? null,
  authorId: authorId ?? null,
  author: author ?? null,
});

export default createBook;
