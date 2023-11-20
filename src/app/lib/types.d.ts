export type Post = {
  title: string
  slug: string
  date: string
  tags: string[]
  description: string
  body: string
  lastModified?: number
  views?: number
}

export type Cocktail = {
  title: string
  ingredients: string
  slug: string
  tags: string[]
  description: string
  body: string
  lastModified?: number
  views?: number
}
