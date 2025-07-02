import { FetchedItems, SanitizedItem, SanitizedItems } from "../app/types/types";

// "Sanitizes" fetched items by extracting only the useful components of the fetched data
const sanitizeFetch = (fetchedItems : FetchedItems) => {
  // fetchedItems array is transformed into sanitizedItems array by creating a storage array of the same size,
  // then having each sanitizedItem only extract useful fetchedItem properties
  const sanitizedItems : SanitizedItems = new Array(fetchedItems.length);
  for (let i = 0; i < fetchedItems.length; i += 1) {
    const sanitizedItem : SanitizedItem  = {
      description: "",
      featuredImage: { id: "", url: ""},
      id: "",
      price: { amount: 0, currencyCode: "" },
      title: ""
    };
    sanitizedItem.id = fetchedItems[i].node.id;
    sanitizedItem.description = fetchedItems[i].node.description;
    sanitizedItem.featuredImage = fetchedItems[i].node.featuredImage;
    sanitizedItem.price.amount = Number(fetchedItems[i].node.variants.edges[0]?.node.price.amount);
    sanitizedItem.price.currencyCode = fetchedItems[i].node.variants.edges[0]?.node.price.currencyCode;
    sanitizedItem.title = fetchedItems[i].node.title;
    sanitizedItems[i] = sanitizedItem;
  }
  return sanitizedItems;
}

export default sanitizeFetch;