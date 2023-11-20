import matter from 'gray-matter'
import fs from 'fs/promises'
import path from 'path'
import { cache } from 'react'

import type { Cocktail } from './types'

export const getCocktails = cache(async () => {
	const Cocktails = await fs.readdir('./cocktails')
  const CocktailsWithMetaData = await Promise.all(
		Cocktails
			.filter((file) => path.extname(file) === '.mdx')
			.map(async (file) => {
				const filePath = `./cocktails/${file}`
				const CocktailContent = await fs.readFile(filePath, 'utf8')
				const { data, content } = matter(CocktailContent)
        if (data.published === false) {
          return null
        }
				return {...data, body: content } as Cocktail
			})	
  )
  return CocktailsWithMetaData
})

export async function getCocktail(slug: string) {
  const Cocktails = await getCocktails()
	if (!Cocktails) {
		return null
	}
  return Cocktails.find((Cocktail) => Cocktail!.slug === slug)
}

export default getCocktails
