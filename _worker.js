export default {
    async fetch(request) {
        const url = new URL(request.url);

        if (url.pathname.startsWith('/docs/svelte-otp-input')) {
            // Fetch from your Svelte docs without redirecting
            const svelteUrl = new URL(request.url);
            svelteUrl.pathname = svelteUrl.pathname.replace('/docs/svelte-otp-input', '');
            svelteUrl.hostname = 'svelte-otp-input-docs.pages.dev';
            svelteUrl.protocol = 'https:';

            const response = await fetch(svelteUrl);

            // Clone the response so we can modify headers if needed
            const newResponse = new Response(response.body, response);

            // Add headers to prevent caching issues
            newResponse.headers.set('Cache-Control', 'public, max-age=3600');

            return newResponse;
        }

        // Otherwise route to Next.js (default)
        return fetch(request);
    }
};