import { expect, describe, test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useItems } from '../hooks/useItems';

describe('useItems Hook', () => {
	test('Add and remove items', () => {
		// obtengo el resultado del usehook, en este caso devuelve las variables del return
		const { result } = renderHook(() => useItems());

		// para mostrar si el hook funciona correctamente y devuelve los items esperados en su forma basica
		console.log(result.current);

		// verifico si el resultado del hook es valido
		expect(result.current.items.length).toBe(0);

		// como el render de un componente en react es asyncrono
		// se utiliza el metodo act de @testing-library/react
		// que permite trabajar con el componente en el momento, y no esperar un resultado previo por asyncronia

		act(() => {
			result.current.addItem('Hola agregame primero');
			result.current.addItem('Hola agregame segundo');
		});

		// evalua que la cantidad de items sera igual a 1
		expect(result.current.items.length).toBe(2);

		// ahora se prueba removiendo un item, y esperado que el resultado final sera 1
		act(() => {
			result.current.removeItem(result.current.items[0].id);
		});

		// evalua que la cantidad de items sera igual a 1
		expect(result.current.items.length).toBe(1);
	});
});
