interface FeaturedImage {
  id: string,
  url: string
}


interface FetchedItem {
  node : Node
}

type FetchedItems = FetchedItem[];

interface Node {
  description: string,
  featuredImage: FeaturedImage,
  id: string,
  title: string,
  variants: Variant,
}

interface Price {
  amount: string,
  currencyCode: string
}

interface SanitizedItem {
  description: string,
  featuredImage: FeaturedImage
  id: string
  price: Price,
  title: string
}

type SanitizedItems = SanitizedItem[]

interface Variant {
  edges: {
    node: {
      price: Price
    }
  }[]
}

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
  }
  return sanitizedItems;
}

export default sanitizeFetch;