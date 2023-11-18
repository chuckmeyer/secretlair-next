import getPosts, { getPost } from '@lib/get-posts'
import { PostBody } from './components/post-body'
import { notFound } from 'next/navigation'

export default async function PostPage({
	params,
}: {
	params: {
		slug:string
	}
}) {
	const post = await getPost(params.slug)
	if (!post) {
		return notFound()
	}
  return (
    <PostBody>{post?.body}</PostBody>
  )
}
