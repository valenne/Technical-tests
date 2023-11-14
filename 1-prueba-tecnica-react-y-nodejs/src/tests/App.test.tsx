import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import App from '../App.tsx';

describe('<App />', () => {
	// test('Deberia funcionar', () => {
	// 	render(<App />);
	// 	screen.debug();

	// 	expect(screen.getByText('Add element to a list')).toBeDefined();
	// });

	test('ingresar un elemento, y remover el elemento o cualquier otro', async () => {
		// inicializamos a un usuario ficticio
		const user = userEvent.setup();

		// 1. El usuario renderizaria la aplicacion
		render(<App />);

		// 2. Buscaria el input en el cual quiera agregar informacion
		const input = screen.getByRole('textbox');
		expect(input).toBeDefined();

		// buscamos el formulario, se le debe poner antes un arial-label, para que se identifique con el rol de form
		const form = screen.getByRole('form');
		expect(form).toBeDefined();

		const button = screen.getByRole('button', { name: 'Add element to a list' });
		expect(button).toBeDefined();

		// espero que mi lista este vacia

		const emptyList = screen.getByText('No existen elementos en la lista');
		expect(emptyList).toBeDefined();

		// esperar a que el usuario escriba en el input
		// se recomienda usar un hash para definir un valor, ya que es dificil que tome mas valores
		// ejemplo con crypto.randomUUID()
		await user.type(input, 'valentin');
		await user.click(button);

		// asegurar que el elemento sea agregado
		const list = screen.getByRole('list');
		expect(list).toBeDefined();

		// esperamos que la lista tenga x hijos segun el test que se quiere realizar
		expect(list.childNodes.length).toBe(1);

		// ya que el valor fue agregado, capturamos el valor para eliminarlo
		const value = screen.getByText('valentin');
		expect(value).toBeDefined();

		// screen.debug(value);

		// capturamos el boton del la lista <li> que contiene el value a testear
		const removeButton = value.querySelector('button');
		expect(removeButton).toBeDefined();

		// el usuario clickea el button para eliminar el valor
		await user.click(removeButton!);

		// validamos que no existan elementos dentro de la lista
		const noResults = screen.getByText('No existen elementos en la lista');
		expect(noResults).toBeDefined();
	});
});
