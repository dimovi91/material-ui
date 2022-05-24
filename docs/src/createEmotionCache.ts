import createCache from '@emotion/cache';

// TODO: test the CI
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
