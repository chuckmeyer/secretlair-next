import Link from 'next/link'
import Image from 'next/image'
import { Code } from 'bright'
import { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      // @ts-expect-error legacy refs
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    )
  },
  pre: Code,
  // any other components you want to use in your markdown
}
