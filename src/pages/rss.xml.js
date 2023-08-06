import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Learner Roebi | Blog',
    description: 'My journey learning Astro',
    site: 'https://stately-seahorse-ef56b6.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
