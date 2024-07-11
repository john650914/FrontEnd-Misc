export function createHtmlPlugin() {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/<html[^>]*>/i, (match) => match.replace('index.html', 'main.html'));
    },
  };
}