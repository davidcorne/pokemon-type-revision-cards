import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const port = parseInt(process.env.PORT || '5173', 10);

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port
	}
});