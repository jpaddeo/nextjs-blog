import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
  const mdToHtml = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);
  return mdToHtml.toString();
}
