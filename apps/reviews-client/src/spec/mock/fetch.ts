const reviews = [
	{
		id: '70eafa74-31ac-4e3e-ac11-79c06b25ec29',
		reviewerId: '2625f5b9-d6fc-443c-a5ca-e438ffc959ca',
		companyId: '3880e9ff-036a-4a16-9fd5-957e2c29bb2b',
		reviewText:
			'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		rating: 5,
		createdOn: '2022-08-30T15:59:19Z',
		user: {
			id: '2625f5b9-d6fc-443c-a5ca-e438ffc959ca',
			firstName: 'Nicki',
			lastName: 'Shyre',
			email: 'nshyre17@instagram.com',
		},
		company: {
			id: '3880e9ff-036a-4a16-9fd5-957e2c29bb2b',
			name: 'Russel, Orn and Jacobson',
		},
	},
	{
		id: '1d703d3f-5a6e-4bfd-866e-fcca7793d25d',
		reviewerId: '00a0c156-8ed0-493e-8888-69166516fdca',
		companyId: '1f92a020-c8a5-40ce-aa9a-707b6d786483',
		reviewText:
			'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
		rating: 5,
		createdOn: '2022-08-28T13:57:31Z',
		user: {
			id: '00a0c156-8ed0-493e-8888-69166516fdca',
			firstName: 'Rooney',
			lastName: 'Gamwell',
			email: 'rgamwell21@photobucket.com',
		},
		company: {
			id: '1f92a020-c8a5-40ce-aa9a-707b6d786483',
			name: 'Stroman-Williamson',
		},
	},
	{
		id: '938238c6-91b5-4e5a-bd0b-faefea58ac31',
		reviewerId: '21723c58-11b2-45a4-a88c-acc10fc06b0b',
		companyId: '86acc4dd-f182-4539-9774-6e4ab36a5f64',
		reviewText: null,
		rating: 5,
		createdOn: '2022-08-28T12:30:20Z',
		user: {
			id: '21723c58-11b2-45a4-a88c-acc10fc06b0b',
			firstName: 'Saxon',
			lastName: 'Pescott',
			email: 'spescotty@mediafire.com',
		},
		company: {
			id: '86acc4dd-f182-4539-9774-6e4ab36a5f64',
			name: 'Hammes-Abernathy',
		},
	},
];

type Options = {
	empty: boolean;
};

export function mockFetch(fetchOptions?: Options) {
	const payload = fetchOptions?.empty ? { reviews: [] } : { reviews };

	// @ts-expect-error Because this isn't a perfect mock
	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(payload),
		}),
	);
}
