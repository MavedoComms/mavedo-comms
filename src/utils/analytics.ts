// Type definitions for analytics globals
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function initAnalytics() {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_ID as string | undefined;

  if (plausibleDomain) {
    const s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', plausibleDomain);
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  } else if (gaId) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
  }
}

export function trackPageview(path: string) {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_ID as string | undefined;

  if (window.plausible && plausibleDomain) {
    window.plausible('pageview', { props: { path } });
  } else if (window.gtag && gaId) {
    window.gtag('event', 'page_view', { page_path: path });
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_ID as string | undefined;

  if (window.plausible && plausibleDomain) {
    window.plausible(name, { props: params || {} });
  } else if (window.gtag && gaId) {
    window.gtag('event', name, params || {});
  }
}