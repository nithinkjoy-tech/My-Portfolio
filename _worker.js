export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Check if request is for Svelte docs
        if (url.pathname.startsWith('/docs/svelte-otp-input')) {
            try {
                const pathWithoutPrefix = url.pathname.replace('/docs/svelte-otp-input', '') || '/';
                const svelteUrl = new URL(request.url);
                svelteUrl.hostname = 'svelte-otp-input-docs.pages.dev';
                svelteUrl.pathname = pathWithoutPrefix;
                svelteUrl.protocol = 'https:';

                const response = await fetch(svelteUrl.toString(), {
                    method: request.method,
                    headers: request.headers,
                    body: request.body
                });

                // IMPORTANT: Check for redirects FIRST
                if (response.status >= 300 && response.status < 400) {
                    const location = response.headers.get('location');
                    if (location) {
                        // Rewrite the location to include /docs/svelte-otp-input prefix
                        const newLocation = location.startsWith('/docs/svelte-otp-input')
                            ? location
                            : `/docs/svelte-otp-input${location}`;

                        // Return the redirect with rewritten location
                        return new Response(null, {
                            status: response.status,
                            statusText: response.statusText,
                            headers: {
                                'location': newLocation,
                                'cache-control': 'no-cache'
                            }
                        });
                    }
                }

                // If it's HTML, rewrite relative paths
                if (response.headers.get('content-type')?.includes('text/html')) {
                    let html = await response.text();
                    html = html.replace(/href="\/(?!\/)/g, 'href="/docs/svelte-otp-input/');
                    html = html.replace(/src="\/(?!\/)/g, 'src="/docs/svelte-otp-input/');
                    return new Response(html, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers
                    });
                }
                return response;
            } catch (error) {
                return new Response('Error proxying to Svelte docs: ' + error.message, { status: 500 });
            }
        }
        // For all other routes, let Next.js handle it
        return fetch(request);
    }
};