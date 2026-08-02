import { useEffect } from 'react';

// URL canonique stable du site (sous-domaine Vercel gratuit).
const BASE_URL = 'https://getdocuflow.vercel.app';

const DEFAULT = {
  title: 'DocuFlow — Plateforme de gestion documentaire | Test gratuit',
  description:
    'DocuFlow, la plateforme de gestion documentaire pour entreprises : demandes de documents, suivi en temps réel, GED, messagerie et rôles. Sans carte bancaire, déployée en 5 minutes. Demandez un test gratuit.',
};

/**
 * Met à jour le SEO par page (titre, description, og:, canonical).
 * @param {{ title?: string, description?: string, path?: string }} opts
 */
export default function useSEO({ title, description, path = '/' } = {}) {
  useEffect(() => {
    document.title = title || DEFAULT.title;
    const desc = description || DEFAULT.description;
    const canonical = BASE_URL + (path === '/' ? '' : path);

    const setAttr = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, '');
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setAttr('meta[name="description"]', 'content', desc);
    setAttr('meta[property="og:title"]', 'content', title || DEFAULT.title);
    setAttr('meta[property="og:description"]', 'content', desc);
    setAttr('meta[property="og:url"]', 'content', canonical);

    // Canonical (élément link, pas meta)
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [title, description, path]);
}
