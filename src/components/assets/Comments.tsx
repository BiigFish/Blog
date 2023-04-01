import Image from 'next/image';
import React from 'react';
import skull from '/public/userImages/skull.jpg';
import willisLogo from '/public/userImages/blank-profile.jpg';
import goose from '/public/userImages/goose.jpg';
import daisy from '/public/userImages/daisy.jpg';

interface Props {
	comments?: Comment[];
}

const Comments: React.FC<Props> = ({ comments }) => {

	const authorInfo = [
		{ author: 'demon', imageSrc: skull, name: 'Demon of the Deep' },
		{ author: 'willis', imageSrc: willisLogo, name: 'Willis' },
		{ author: 'google', imageSrc: goose, name: 'small goose' },
		{ author: 'daisy', imageSrc: daisy, name: 'Daisy2021' },
	  ];
	
	return (
		<div>
			<h2 className='border-b-2 border-black text-4xl font-bold'>COMMENTS</h2>
			{!comments ? <p>No comments yet</p> : (
			comments.map((item, index) => {
				const authorData = authorInfo.find((info) => info.author === item.author) || authorInfo[1];
				return (
				<div key={index} className='my-2 flex gap-x-2 bg-slate-100'>
					{item.level === 2 && (
						<div className='ml-6 mr-3 border-l-2 border-black' />
					)}
					{item.level === 3 && (
						<div className='ml-16 mr-3 border-l-2 border-black' />
					)}
					{item.level === 4 && (
						<div className='ml-24 mr-3 border-l-2 border-black' />
					)}
					<Image src={authorData.imageSrc} alt='profile' />
					<div>
						<p className='text-orange-500'>{authorData.name}</p>
						<p>{item.text}</p>
					</div>
				</div>
			)})
			)}
		</div>
	);
};

export default Comments;
