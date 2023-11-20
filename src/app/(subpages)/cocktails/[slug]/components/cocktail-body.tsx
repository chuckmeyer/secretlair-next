import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import { mdxComponents } from './markdown-components'

export function CocktailBody({children}: {children: string}) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkToc,
          ],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings
          ],
        }
      }}
      components={mdxComponents}
    />
  ) 
}
