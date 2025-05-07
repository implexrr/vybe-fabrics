// TDL

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

export type { FetchedItems, SanitizedItem, SanitizedItems }