import { FetchedItems, SanitizedItem, SanitizedItems } from "../app/types/types";

const sanitizeFetch = (fetchedItems : FetchedItems) => {
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