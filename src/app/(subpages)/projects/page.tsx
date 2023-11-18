import Link from 'next/link'

export default function About() {
  return (
      <article>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Projects
        </h2>
        <p>I&apos;m building this blog using NextJS 13 and Vercel based on a walkthrough from <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://maxleiter.com">maxleiter.com</Link>
        </p>
      </article>
  )
}
