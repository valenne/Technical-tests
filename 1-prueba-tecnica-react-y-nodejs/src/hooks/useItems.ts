import { useState } from 'react';
import { Item, ItemId } from '../App';
import { localStorageLogic } from './localStorageLogic';

const { getLocalStorageItem } = localStorageLogic();
const fromLocalStorage = getLocalStorageItem();

export const useItems = () => {
	const [items, setItems] = useState<Item[]>(fromLocalStorage);

	const addItem = (text: string) => {
		const newItem = {
			id: crypto.randomUUID(),
			text: text,
			timestamps: Date.now()
		};

		setItems((prevItems) => {
			return [...prevItems, newItem];
		});
	};

	const removeItem = (id: ItemId) => {
		setItems((prevItems) => {
			return prevItems.filter((currenItem) => currenItem.id !== id);
		});
	};

	return { addItem, removeItem, items };
};
