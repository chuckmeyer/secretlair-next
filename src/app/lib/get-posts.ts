import matter from 'gray-matter'
import fs from 'fs/promises'
import path from 'path'
import { cache } from 'react'

import type { Post } from './types'

export const getPosts = cache(async () => {
	const posts = await fs.readdir('./posts')
  const postsWithMetaData = await Promise.all(
		posts
			.filter((file) => path.extname(file) === '.mdx')
			.map(async (file) => {
				const filePath = `./posts/${file}`
				const postContent = await fs.readFile(filePath, 'utf8')
				const { data, content } = matter(postContent)
        if (data.published === false) {
          return null
        }
				return {...data, body: content } as Post
			})	
  )
  return postsWithMetaData
})

export async function getPost(slug: string) {
  const posts = await getPosts()
	if (!posts) {
		return null
	}
  return posts.find((post) => post!.slug === slug)
}

export default getPosts
