import getPosts, { getPost } from '@lib/get-posts'
import { notFound } from 'next/navigation'
import { PostCard } from './components/post-card'

export default async function PostsList() {
	const posts = await getPosts()
	if (!posts) {
		return notFound()
	}
  return (
    <div>
      <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post!.slug}
          title={post!.title}
          date={post!.date}
          description={post!.description}
          slug={post!.slug}
        />
      ))}
    </div>
  );
}
