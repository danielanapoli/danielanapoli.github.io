/** @type {import('next').NextConfig} */
const nextConfig = {
    // This exports your site to static files when building so that it can be hosted on GitHub pages
    output: 'export',

    // This correctly resolves your assets paths whether you're developing locally or running the live site on pages
    // Skip this if this is a personal/organization repo (the repo's name is the same as your account/organization name)
    // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '' 
};

export default nextConfig;
