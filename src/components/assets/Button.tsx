import React from 'react';

interface Props {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
	active?: boolean;
}

const Button: React.FC<Props> = ({
	className,
	onClick,
	children,
	active = false,
}) => {
	return (
		<button
			className={`rounded-lg border-2 border-black px-2 py-1 duration-200 hover:bg-gray-400 ${
				active && 'bg-green-200'
			} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
