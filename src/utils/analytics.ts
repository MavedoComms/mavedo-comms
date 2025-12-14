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
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
  }
}

export function trackPageview(path: string) {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_ID as string | undefined;

  if ((window as any).plausible && plausibleDomain) {
    (window as any).plausible('pageview', { props: { path } });
  } else if ((window as any).gtag && gaId) {
    (window as any).gtag('event', 'page_view', { page_path: path });
  }
}

export function trackEvent(name: string, params?: Record<string, any>) {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_ID as string | undefined;

  if ((window as any).plausible && plausibleDomain) {
    (window as any).plausible(name, { props: params || {} });
  } else if ((window as any).gtag && gaId) {
    (window as any).gtag('event', name, params || {});
  }
}