import { getAllPosts, getPostBySlug } from '@/util/markdown';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  post: BlogPost;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
    const params = context.params as Params;
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};
