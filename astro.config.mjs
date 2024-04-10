import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://am4-lacabanne.netlify.app/',
	integrations: [
		starlight({
			title: 'AM4 Lacabanne',
			logo: {
				light: './src/assets/una-m-light.svg',
				dark: './src/assets/una-m-dark.svg',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/knnv-ar/am4-lacabanne/edit/main/',
			},
			social: {
				github: 'https://github.com/knnv-ar/am4-lacabanne',
			},
			sidebar: [
				{
					label: 'Organización',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Plan de trabajo', link: '/organizacion/plan-de-trabajo/' },
						{ label: 'Bibliografía', link: '/organizacion/bibliografia/', badge: { text: 'revisión', variant: 'caution' } },
						{ label: 'Audiotextos', link: '/organizacion/audiotextos/', badge: { text: 'revisión', variant: 'caution' } },
					],
				},
				{
					label: 'Clases',
					collapsed: false,
					items: [
						{
							label: 'Clase 1',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-1' },
						},
						{
							label: 'Clase 2',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-2' },
						},
						{
							label: 'Clase 3',
							collapsed: false,
							autogenerate: { directory: 'clases/clase-3' },
							/*badge: 'Nuevo',*/
							badge: { text: 'nuevo', variant: 'default' },
						},
						{
							label: 'Clase 4',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-4' },
						},
						{
							label: 'Clase 5',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-5' },
						},
						{
							label: 'Clase 6',
							collapsed: false,
							autogenerate: { directory: 'clases/clase-6' },
						},
						{
							label: 'Clase 7',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-7' },
						},
						{
							label: 'Clase 8',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-8' },
						},
						{
							label: 'Clase 9',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-9' },
						},
						{
							label: 'Clase 10',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-10' },
						},
						{
							label: 'Clase 11',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-11' },
						},
						{
							label: 'Clase 12',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-12' },
						},
						{
							label: 'Clase 13',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-13' },
						},
						{
							label: 'Clase 14',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-14' },
						},
						{
							label: 'Clase 15',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-15' },
						},
						{
							label: 'Clase 16',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-16' },
						},
						{
							label: 'Clase 17',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-17' },
						},
						{
							label: 'Clase 18',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-18' },
						},
						{
							label: 'Clase 19',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-19' },
						},
						{
							label: 'Clase 20',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-20' },
						},
						{
							label: 'Clase 21',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-21' },
						},
						{
							label: 'Clase 22',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-22' },
						},
						{
							label: 'Clase 23',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-23' },
						},
						{
							label: 'Clase 24',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-24' },
						},
						{
							label: 'Clase 25',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-25' },
						},
						{
							label: 'Clase 26',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-26' },
						},
						{
							label: 'Clase 27',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-27' },
						},
						{
							label: 'Clase 28',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-28' },
						},
						{
							label: 'Clase 29',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-29' },
						},
						{
							label: 'Clase 30',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-30' },
						},
						{
							label: 'Clase 31',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-31' },
						},
					],
				},
				/*
				{
					label: 'Acciones de Consolidación de Saberes (ACSs)',
					autogenerate: { directory: 'acs' },
				},
				{
					label: 'Trabajos Prácticos (TPs)',
					autogenerate: { directory: 'tps' },
				},
				*/
			],
		}),
	],
});
