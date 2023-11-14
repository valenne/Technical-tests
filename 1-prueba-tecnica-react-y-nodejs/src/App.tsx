import './App.css';
import Item from './components/Item';
import { useItems } from './hooks/useItems';
import { localStorageLogic } from './hooks/localStorageLogic';
import { useSeo } from './hooks/useSeo';

export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface Item {
	id: ItemId;
	timestamps: number;
	text: string;
}

function App() {
	const { addItem, items, removeItem } = useItems();

	// hook para cambiar titulo y description de una pagina en react
	useSeo({
		title: ` [${items?.length}] - Prueba Tecnica React`,
		description: `Recreando una prueba de React`,
		name: 'Valentin Venegas'
	});

	const { addToLocalStorage } = localStorageLogic();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const input = document.getElementById('item');

		const isInput = input instanceof HTMLInputElement;

		if (!isInput || isInput == null) return;

		addItem(input.value);

		input.value = '';
	};

	// submit two or more values
	// const handleSubmitFewItems = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();

	// 	const { elements } = event.currentTarget;

	// 	// validate if exist input and is a instance of htmlinputelement typescript
	// 	const inputOne = elements.namedItem('item');
	// 	const isInput = inputOne instanceof HTMLInputElement;

	// 	if (!isInput || isInput == null) return;

	// 	// validate if exist a form element and validate the type, then capture the values and print on display
	// 	const form = document.getElementById('form');
	// 	const isForm = form instanceof HTMLFormElement;

	// 	if (!isForm || isForm == null) return;

	// 	const formValues = new FormData(form);
	// 	const entries = Object.fromEntries(formValues);

	// 	Object.values(entries).map((value) => {
	// 		const isString = typeof value;

	// 		if (isString !== 'string') return;

	// 		const text = value as string;

	// 		const newItem = {
	// 			id: crypto.randomUUID(),
	// 			text: text,
	// 			timestamps: Date.now()
	// 		};

	// 		setItems((prev) => {
	// 			return [...prev, newItem];
	// 		});

	// 		// cleaned the input value two ways
	// 		// inputOne.value = '';
	// 		form.reset();
	// 	});
	// };

	const createHandleRemoveItem = (id: ItemId) => () => {
		removeItem(id);
	};

	addToLocalStorage(items);

	return (
		<main>
			<aside>
				<h1>Add and Remove items form a list</h1>
				<form
					onSubmit={handleSubmit}
					aria-label='agregar elementos a la lista'
					id='form'>
					<label htmlFor='item'>
						Elemento a introducir:
						<input
							name='item'
							required
							type='text'
							placeholder='videojuegos'
							id='item'
						/>
					</label>
					<button>Add element to a list</button>
				</form>
			</aside>
			<section className='section-list-items'>
				<h2>List of elements</h2>
				{items.length === 0 && <p>No existen elementos en la lista</p>}

				<ul>
					{items.map((item) => {
						return (
							<Item
								{...item}
								handleClick={createHandleRemoveItem(item.id)}
								key={item.id}
							/>
						);
					})}
				</ul>
			</section>
		</main>
	);
}

export default App;
