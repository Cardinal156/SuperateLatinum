import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'SuperateLatinum'; // Replace with your repository name

const nextConfig: NextConfig = {
    output: 'export', // Enables static export
    assetPrefix: isGitHubPages ? `/${repoName}/` : '',
    images: {
        unoptimized: true, // Required if you use Next.js Image component
    },
    basePath: isGitHubPages ? `/${repoName}` : '',
};

export default nextConfig;
