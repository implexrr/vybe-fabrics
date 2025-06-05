import { FetchedItems, SanitizedItem, SanitizedItems } from "../app/types/types";

const sanitizeFetch = (fetchedItems : FetchedItems) => {
  const sanitizedItems : SanitizedItems = new Array(fetchedItems.length);
  for (let i = 0; i < fetchedItems.length; i += 1) {
    const sanitizedItem : SanitizedItem  = {
      description: "",
      featuredImage: { id: "", url: ""},
      id: "",
      price: { amount: "", currencyCode: "" },
      title: ""
    };
    sanitizedItem.id = fetchedItems[i].node.id;
    sanitizedItem.description = fetchedItems[i].node.description;
    sanitizedItem.featuredImage = fetchedItems[i].node.featuredImage;
    sanitizedItem.price = fetchedItems[i].node.variants.edges[0]?.node.price;
    sanitizedItem.title = fetchedItems[i].node.title;
    sanitizedItems[i] = sanitizedItem;
  }
  return sanitizedItems;
}

export default sanitizeFetch;