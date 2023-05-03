//  this file is work in progress
import IdMap from 'medusa-test-utils';
export const seedData = {
	store: {
		currencies: ['eur', 'usd'],
	},
	users: [
		{
			email: 'admin@medusa-test.com',
			password: 'supersecret',
		},
	],
	regions: [
		{
			id: IdMap.getId('test-region-eu'),
			name: 'EU',
			currency_code: 'eur',
			tax_rate: 0,
			payment_providers: ['manual'],
			fulfillment_providers: ['manual'],
			countries: ['gb', 'de', 'dk', 'se', 'fr', 'es', 'it'],
		},
		{
			id: IdMap.getId('test-region-na'),
			name: 'NA',
			currency_code: 'usd',
			tax_rate: 0,
			payment_providers: ['manual'],
			fulfillment_providers: ['manual'],
			countries: ['us', 'ca'],
		},
	],
	shipping_options: [
		{
			name: 'PostFake Standard',
			region_id: 'test-region-eu',
			provider_id: 'manual',
			data: {
				id: 'manual-fulfillment',
			},
			price_type: 'flat_rate',
			amount: 1000,
		},
		{
			name: 'PostFake Express',
			region_id: 'test-region-eu',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			amount: 1500,
		},
		{
			name: 'PostFake Return',
			region_id: 'test-region-eu',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			is_return: true,
			amount: 1000,
		},
		{
			name: 'I want to return it myself',
			region_id: 'test-region-eu',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			is_return: true,
			amount: 0,
		},
		{
			name: 'FakeEx Standard',
			region_id: 'test-region-na',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			amount: 800,
		},
		{
			name: 'FakeEx Express',
			region_id: 'test-region-na',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			amount: 1200,
		},
		{
			name: 'FakeEx Return',
			region_id: 'test-region-na',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			is_return: true,
			amount: 800,
		},
		{
			name: 'I want to return it myself',
			region_id: 'test-region-na',
			provider_id: 'manual',
			data: {
				id: IdMap.getId('manual-fulfillment'),
			},
			price_type: 'flat_rate',
			is_return: true,
			amount: 0,
		},
	],
	products: [
		{
			title: 'Medusa T-Shirt',
			subtitle: null,
			description:
				'Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.',
			handle: 't-shirt',
			is_giftcard: false,
			weight: 400,
			images: [
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png',
			],
			options: [
				{
					title: 'Size',
					values: ['S', 'M', 'L', 'XL'],
				},
				{
					title: 'Color',
					values: ['Black', 'White'],
				},
			],
			variants: [
				{
					title: 'S / Black',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'S',
						},
						{
							value: 'Black',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'S / White',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'S',
						},
						{
							value: 'White',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M / Black',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'M',
						},
						{
							value: 'Black',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M / White',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'M',
						},
						{
							value: 'White',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L / Black',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'L',
						},
						{
							value: 'Black',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L / White',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'L',
						},
						{
							value: 'White',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL / Black',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'XL',
						},
						{
							value: 'Black',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL / White',
					prices: [
						{
							currency_code: 'eur',
							amount: 1950,
						},
						{
							currency_code: 'usd',
							amount: 2200,
						},
					],
					options: [
						{
							value: 'XL',
						},
						{
							value: 'White',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
		{
			title: 'Medusa Sweatshirt',
			subtitle: null,
			description:
				'Reimagine the feeling of a classic sweatshirt. With our cotton sweatshirt, everyday essentials no longer have to be ordinary.',
			handle: 'sweatshirt',
			is_giftcard: false,
			weight: 400,
			images: [
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png',
			],
			options: [
				{
					title: 'Size',
					values: ['S', 'M', 'L', 'XL'],
				},
			],
			variants: [
				{
					title: 'S',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'S',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'M',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'L',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'XL',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
		{
			title: 'Medusa Sweatpants',
			subtitle: null,
			description:
				'Reimagine the feeling of classic sweatpants. With our cotton sweatpants, everyday essentials no longer have to be ordinary.',
			handle: 'sweatpants',
			is_giftcard: false,
			weight: 400,
			images: [
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-back.png',
			],
			options: [
				{
					title: 'Size',
					values: ['S', 'M', 'L', 'XL'],
				},
			],
			variants: [
				{
					title: 'S',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'S',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'M',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'L',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL',
					prices: [
						{
							currency_code: 'eur',
							amount: 2950,
						},
						{
							currency_code: 'usd',
							amount: 3350,
						},
					],
					options: [
						{
							value: 'XL',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
		{
			title: 'Medusa Shorts',
			subtitle: null,
			description:
				'Reimagine the feeling of classic shorts. With our cotton shorts, everyday essentials no longer have to be ordinary.',
			handle: 'shorts',
			is_giftcard: false,
			weight: 400,
			images: [
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-back.png',
			],
			options: [
				{
					title: 'Size',
					values: ['S', 'M', 'L', 'XL'],
				},
			],
			variants: [
				{
					title: 'S',
					prices: [
						{
							currency_code: 'eur',
							amount: 2500,
						},
						{
							currency_code: 'usd',
							amount: 2850,
						},
					],
					options: [
						{
							value: 'S',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M',
					prices: [
						{
							currency_code: 'eur',
							amount: 2500,
						},
						{
							currency_code: 'usd',
							amount: 2850,
						},
					],
					options: [
						{
							value: 'M',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L',
					prices: [
						{
							currency_code: 'eur',
							amount: 2500,
						},
						{
							currency_code: 'usd',
							amount: 2850,
						},
					],
					options: [
						{
							value: 'L',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL',
					prices: [
						{
							currency_code: 'eur',
							amount: 2500,
						},
						{
							currency_code: 'usd',
							amount: 2850,
						},
					],
					options: [
						{
							value: 'XL',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
		{
			title: 'Medusa Hoodie',
			subtitle: null,
			description:
				'Reimagine the feeling of a classic hoodie. With our cotton hoodie, everyday essentials no longer have to be ordinary.',
			handle: 'hoodie',
			is_giftcard: false,
			weight: 400,
			images: [
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_back.png',
			],
			options: [
				{
					title: 'Size',
					values: ['S', 'M', 'L', 'XL'],
				},
			],
			variants: [
				{
					title: 'S',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'S',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'M',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'L',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'XL',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
		{
			title: 'Medusa Longsleeve',
			subtitle: null,
			description:
				'Reimagine the feeling of a classic longsleeve. With our cotton longsleeve, everyday essentials no longer have to be ordinary.',
			handle: 'longsleeve',
			is_giftcard: false,
			weight: 400,
			images: [
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/ls-black-front.png',
				'https://medusa-public-images.s3.eu-west-1.amazonaws.com/ls-black-back.png',
			],
			options: [
				{
					title: 'Size',
					values: ['S', 'M', 'L', 'XL'],
				},
			],
			variants: [
				{
					title: 'S',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'S',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'M',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'M',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'L',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'L',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
				{
					title: 'XL',
					prices: [
						{
							currency_code: 'eur',
							amount: 3650,
						},
						{
							currency_code: 'usd',
							amount: 4150,
						},
					],
					options: [
						{
							value: 'XL',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
		{
			title: 'Medusa Coffee Mug',
			subtitle: null,
			description: "Every programmer's best friend.",
			handle: 'coffee-mug',
			is_giftcard: false,
			weight: 400,
			images: ['https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png'],
			options: [
				{
					title: 'Size',
					values: ['One Size'],
				},
			],
			variants: [
				{
					title: 'One Size',
					prices: [
						{
							currency_code: 'eur',
							amount: 1000,
						},
						{
							currency_code: 'usd',
							amount: 1200,
						},
					],
					options: [
						{
							value: 'One Size',
						},
					],
					inventory_quantity: 100,
					manage_inventory: true,
				},
			],
		},
	],
};