import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// CHANGE THESE VARIABLES
		name: 'svásuðr',
		location: 'NZ - Manawatu',
		apiKey: '2533e2afb233598a20e7e92ad91a01bc'
	}
});

export default app;