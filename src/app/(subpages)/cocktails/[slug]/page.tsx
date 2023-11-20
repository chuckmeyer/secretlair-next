import getCocktails, { getCocktail } from '@lib/get-cocktails'
import { CocktailBody } from './components/cocktail-body'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const cocktails = await getCocktails()
  return cocktails.map((cocktail) => ({ slug: cocktail!.slug }))
}

export default async function cocktailPage({
	params,
}: {
	params: {
		slug:string
	}
}) {
	const cocktail = await getCocktail(params.slug)
	if (!cocktail) {
		return notFound()
	}
  return (
    <CocktailBody>{cocktail?.body}</CocktailBody>
  )
}
