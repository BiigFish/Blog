import React from 'react'
import FeedItem from './FeedItem'
import Link from 'next/link';

interface Props {
  posts: BlogPost[];
}

const Posts: React.FC<Props> =({ posts }) => {
  return (
    <div className='space-y-4'>
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <FeedItem title={post.title} date={post.date} />
            </Link>
          </div>
        ))}
    </div>
  )
}
export default  Posts