/** @type {import('next').NextConfig} */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixelbin.io',
                pathname: '**',
            },
        ],
    },
};

// Copy _worker.js to out folder after build
if (process.env.NODE_ENV === 'production') {
    try {
        const workerSrc = path.join(__dirname, '_worker.js');
        const workerDest = path.join(__dirname, 'out', '_worker.js');

        // Ensure out directory exists
        if (!fs.existsSync(path.join(__dirname, 'out'))) {
            fs.mkdirSync(path.join(__dirname, 'out'));
        }

        fs.copyFileSync(workerSrc, workerDest);
        console.log('✓ _worker.js copied to out folder');
    } catch (error) {
        console.warn('⚠ Could not copy _worker.js:', error.message);
    }
}

export default nextConfig;