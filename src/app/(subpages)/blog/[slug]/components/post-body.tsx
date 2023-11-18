import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from './markdown-components'

export function PostBody({children}: {children: strin}) {
  return (
    <MDXRemote
      source={children}
    />
  ) 
}
