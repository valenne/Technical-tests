import { useEffect } from 'react';

export const useSeo = ({
	title,
	description,
	name
}: {
	title: string;
	description: string;
	name: string;
}) => {
	useEffect(() => {
		document.title = title;

		document.querySelector("meta[name='author']")?.setAttribute('content', name);
		document.querySelector('meta[name="description"]')?.setAttribute('content', description);
	}, [title, description, name]);
};
