import DataLoader from "dataloader";
import getBatchAuthors from "./dao/getBatchAuthors";
import getBatchBooks from "./dao/getBatchBooks";
import getBatchLibraries from "./dao/getBatchLibraries";
import listLibraryIds from "./dao/listLibraryIds";
import { Author, Book, Library } from "./generated/graphql";

class Repository {
  private authorLoader;
  private bookLoader;
  private libraryLoader;

  constructor() {
    this.authorLoader = new DataLoader(getBatchAuthors);
    this.bookLoader = new DataLoader(getBatchBooks);
    this.libraryLoader = new DataLoader(getBatchLibraries);
  }

  getAuthor(id: string): Promise<Author> {
    return this.authorLoader.load(id);
  }

  getBook(id: string): Promise<Book> {
    return this.bookLoader.load(id);
  }

  getLibrary(id: string): Promise<Library> {
    return this.libraryLoader.load(id);
  }

  listLibraryIds(token?: string, size?: number): Promise<string[]> {
    return listLibraryIds(token, size);
  }
}

export default Repository;
