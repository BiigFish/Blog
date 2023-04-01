import Button from '@/components/assets/Button';
import Comments from '@/components/assets/Comments';
import { getPostDate } from '@/util/date';
import { getAllPosts, getPostBySlug } from '@/util/markdown';
import { format } from 'date-fns';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

interface Props {
	post: BlogPost;
}

interface Params extends ParsedUrlQuery {
	slug: string;
}

const BlogPostPage: React.FC<Props> = ({ post }) => {
	return (
		<div className='m-4 '>
			<div className='mx-auto w-full md:w-text'>
				<div className='mx-auto w-fit'>
					<Link href='/'>
						<h1 className='text-center text-4xl font-bold'>
							Plotless Thoughts
						</h1>
					</Link>
				</div>
				<div className='prose mx-auto max-w-none'>
					<div className='not-prose my-10'>
						<h1 className='text-8xl font-bold'>{post.title}</h1>
						<p className='text-lg'>{getPostDate(post.date)}</p>
						<p className='text-lg italic'>{post.description}</p>
					</div>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</div>
				<div className='mx-auto w-fit my-6'>
				<Link href='/'>
					<Button>Go Home</Button>
				</Link>
				</div>
				<Comments comments={post.comments} />
			</div>
		</div>
	);
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps<Props, Params> = async (
	context
) => {
	const params = context.params as Params;
	const post = await getPostBySlug(params.slug);
	return { props: { post } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const posts = await getAllPosts();
	const paths = posts.map((post) => ({ params: { slug: post.slug } }));
	return { paths, fallback: false };
};
