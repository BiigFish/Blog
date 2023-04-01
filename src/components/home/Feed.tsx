import React from 'react'
import FeedItem from './FeedItem'
import Link from 'next/link';

interface Props {
  posts: BlogPost[];
}

const Posts: React.FC<Props> =({ posts }) => {
  return (
    <div className='space-y-6'>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`}key={post.slug}>
            <FeedItem title={post.title} date={post.date} />
          </Link>
        ))}
    </div>
  )
}
export default  Posts