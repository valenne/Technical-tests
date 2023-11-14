import { type Item } from '../App';

export const localStorageLogic = () => {
	const addToLocalStorage = (item: Item[]) => {
		localStorage.setItem('list-value', JSON.stringify(item));
	};

	const getLocalStorageItem = () => {
		const hasItems = localStorage.getItem('list-value');

		if (!hasItems) return;

		const localItems = JSON.parse(hasItems);

		return localItems;
	};

	return { addToLocalStorage, getLocalStorageItem };
};
