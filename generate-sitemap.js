import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.yenreach.com';  // Replace with your site's URL

// List your site routes here
const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/explore', changefreq: 'daily', priority: 0.8 },
    { url: '/explore/products', changefreq: 'daily', priority: 0.8 },
    { url: '/explore/jobs', changefreq: 'daily', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/blogs', changefreq: 'daily', priority: 0.7 },
    { url: '/faqs', changefreq: 'monthly', priority: 0.7 },
    { url: '/signup', changefreq: 'monthly', priority: 0.5 },
    { url: '/login', changefreq: 'monthly', priority: 0.5 },
    { url: '/terms', changefreq: 'monthly', priority: 0.5 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
    { url: '/subsidiaries', changefreq: 'monthly', priority: 0.5 },
    { url: '/password-recovery', changefreq: 'monthly', priority: 0.5 },
    { url: '/password_reset', changefreq: 'monthly', priority: 0.5 },
    { url: '/contact', changefreq: 'monthly', priority: 0.5 },
    { url: '/users/profile', changefreq: 'monthly', priority: 0.7 },
    { url: '/users/profile/edit', changefreq: 'monthly', priority: 0.6 },
    { url: '/users/verify_payment', changefreq: 'monthly', priority: 0.6 },
    { url: '/users/billboard', changefreq: 'monthly', priority: 0.6 },
    { url: '/users/', changefreq: 'monthly', priority: 0.6 },
];


async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(path.resolve(__dirname, 'dist', 'sitemap.xml'));

  urls.forEach(url => {
    sitemap.write(url);
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap).then((data) => data.toString());
  writeStream.write(sitemapOutput);
  writeStream.end();

  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(err => {
  console.error(err);
});
