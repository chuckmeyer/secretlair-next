import Link from "next/link";

export function CocktailCard({ title, description, slug } : {title:string, description: string, slug: string}) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <p className="mt-4 italic">{description}</p>

      <Link className="text-blue-500 mt-4 mb-2 block" href="/cocktails/[slug]" as={`/cocktails/${slug}`}>
        Read more
      </Link>
    </div>
  );
}
