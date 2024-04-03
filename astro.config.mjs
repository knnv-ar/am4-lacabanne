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
						{ label: 'Bibliografía', link: '/organizacion/bibliografia/' },
						{ label: 'Audiotextos', link: '/organizacion/audiotextos/' },
					],
				},
				{
					label: 'Clases',
					items: [
						{
							label: 'Clase 1',
							autogenerate: { directory: 'clases/clase-1' },
						},
					],
				},
				{
					label: 'Acciones de Consolidación de Saberes (ACSs)',
					autogenerate: { directory: 'acs' },
				},
				{
					label: 'Trabajos Prácticos (TPs)',
					autogenerate: { directory: 'tps' },
				},
			],
		}),
	],
});
