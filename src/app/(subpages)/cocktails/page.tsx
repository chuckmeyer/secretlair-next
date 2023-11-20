import getCocktails, { getCocktail } from '@lib/get-cocktails'
import { notFound } from 'next/navigation'
import { CocktailCard } from './components/cocktail-card'

export default async function CocktailsList() {
	const cocktails = await getCocktails()
	if (!cocktails) {
		return notFound()
	}
  return (
    <div>
      <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Cocktails</h1>
      {cocktails.map((cocktail) => (
        <CocktailCard
          key={cocktail!.slug}
          title={cocktail!.title}
          description={cocktail!.description}
          slug={cocktail!.slug}
        />
      ))}
    </div>
  );
}
