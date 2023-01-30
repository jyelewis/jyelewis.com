// @ts-ignore
import { BinarySearchTree } from "binary-search-tree";
import { cleanText, tokenise } from "./utils/tokenise";

// custom type for the documents we want to store in this db
// 'id' would allow us to look up the original document in another DB (i.e Postgresql)
interface Document {
  id: string;
  text: string;
}

class FullTextSearch {
  private tokensBST = new BinarySearchTree({
    // provide a custom compare function for when we are searching
    // this allows us to search by matching the _start_ of a token
    compareKeys: (searchText: string, tokenText: string) => {
      // we consider tokens equal if they start with the search text
      if (searchText.startsWith(tokenText)) return 0;

      // otherwise sort alphabetically
      return searchText.localeCompare(tokenText);
    },
  });

  public indexDocument(document: Document) {
    // create a list of tokens from our document
    tokenise(document.text)
      // insert each token into our BST for future lookups
      .forEach((token) => this.tokensBST.insert(token, document));
  }

  public search(searchTerm: string): Set<Document> {
    // clean our search term
    // this will remove any characters that are never found in indexed tokens
    const cleanedSearchTerm = cleanText(searchTerm);

    // perform a binary search of our sorted tokens to find everything matching
    // return as a set, we shouldn't have any duplicate documents
    return new Set<Document>(
      this.tokensBST.betweenBounds({
        $gte: cleanedSearchTerm,
        $lte: cleanedSearchTerm,
      })
    );
  }
}

const fts = new FullTextSearch();
fts.indexDocument({
  id: "1",
  text: "Hello world",
});
fts.indexDocument({
  id: "2",
  text: "Hello Friends",
});
fts.indexDocument({
  id: "4",
  text: "Hello, hello!",
});
fts.indexDocument({
  id: "3",
  text: "Foo bar",
});

["hello!", "world", "friends", "foo", "bar"].forEach((searchTerm) =>
  console.log(`'${searchTerm}':`, fts.search(searchTerm))
);
