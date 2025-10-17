export default {
    async fetch(request) {
        const url = new URL(request.url);

        if (url.pathname.startsWith('/docs/svelte-otp-input')) {
            // Route to your Svelte docs
            const svelteUrl = new URL(request.url);
            // Replace the path prefix to route to the root of your Svelte site
            svelteUrl.pathname = svelteUrl.pathname.replace('/docs/svelte-otp-input', '');
            svelteUrl.hostname = 'svelte-otp-input-docs.pages.dev';
            svelteUrl.protocol = 'https:';

            return fetch(svelteUrl);
        }

        // Otherwise route to Next.js (default)
        return fetch(request);
    }
};