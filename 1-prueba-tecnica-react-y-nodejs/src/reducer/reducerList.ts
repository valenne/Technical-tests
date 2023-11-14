import { type Item } from '../App';

type Action = {
	type: 'add_items' | 'remove_items';
	text: string;
};

export const reducer = (state: Item, action: Action) => {
	const { type } = action;
	switch (type) {
		case 'add_items': {
			return {
				...state
			};
		}
		default:
			return state;
	}
};
