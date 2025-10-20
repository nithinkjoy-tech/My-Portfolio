export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Check if request is for Svelte docs
        if (url.pathname.startsWith('/docs/svelte-otp-input')) {
            // Redirect root to basic-usage at the Worker level
            if (url.pathname === '/docs/svelte-otp-input' || url.pathname === '/docs/svelte-otp-input/') {
                return new Response(null, {
                    status: 307,
                    headers: {
                        'location': '/docs/svelte-otp-input/basic-usage'
                    }
                });
            }

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

                // Handle redirects from SvelteKit
                if (response.status >= 300 && response.status < 400) {
                    const location = response.headers.get('location');
                    if (location) {
                        let newLocation = location;
                        if (!location.startsWith('/docs/svelte-otp-input')) {
                            newLocation = `/docs/svelte-otp-input${location}`;
                        }
                        return new Response(null, {
                            status: response.status,
                            statusText: response.statusText,
                            headers: {
                                'location': newLocation,
                                'cache-control': 'no-cache, no-store, must-revalidate'
                            }
                        });
                    }
                }

                // Only process HTML if NOT a redirect
                if (response.headers.get('content-type')?.includes('text/html')) {
                    let html = await response.text();
                    // Rewrite href attributes
                    html = html.replace(/href="\/(?!\/)/g, 'href="/docs/svelte-otp-input/');
                    // Rewrite src attributes
                    html = html.replace(/src="\/(?!\/)/g, 'src="/docs/svelte-otp-input/');
                    // Rewrite relative paths starting with ./
                    html = html.replace(/href="\.\//g, 'href="/docs/svelte-otp-input/');
                    html = html.replace(/src="\.\//g, 'src="/docs/svelte-otp-input/');
                    // Rewrite import paths
                    html = html.replace(/from\s+["']\/(?!\/)/g, 'from "/docs/svelte-otp-input/');
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