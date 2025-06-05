interface CartItem extends SanitizedItem {
  quantity: number;
}

type CartItems = CartItem[]

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
  amount: number,
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

export type { CartItems, FetchedItems, SanitizedItem, SanitizedItems }