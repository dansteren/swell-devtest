import { act, render } from '@testing-library/react';
import App from './app';
import { mockFetch } from '../spec/mock/fetch';

mockFetch();

describe('App', () => {
	it('should render successfully', async () => {
		const { baseElement } = await act(async () => render(<App />));

		expect(baseElement).toBeTruthy();
	});
});
