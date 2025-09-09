import type { Plugin } from 'vite';
import { icons } from './icon-config'; 

export function mdIconPlugin(): Plugin {
  return {
    name: 'custom:icon-link-replacer',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) {
        return null;
      }
      const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

      const modifiedCode = code.replace(markdownLinkRegex, (match, linkText, url) => {
        const iconKey = linkText.toUpperCase();
        if (icons[iconKey]) {
          const svgIcon = icons[iconKey];
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="${linkText}">${svgIcon}</a>`;
        }
        
        return match;
      });

      return modifiedCode;
    },
  };
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function sidebarIconPlugin() {
  const sidebarLinks = document.querySelectorAll('.VPLink.link.link .text');

  sidebarLinks.forEach((el) => {
    const element = el as HTMLElement;
    let text = element.innerHTML;
    let iconReplaced = false;

    for (const [key, svg] of Object.entries(icons)) {
      const placeholder = `_${key}_`;
      
      if (text.includes(placeholder)) {
        text = text.replace(placeholder, svg);
        iconReplaced = true;
      }
    }

    if (iconReplaced) {
      element.innerHTML = text;
    }
  });
}