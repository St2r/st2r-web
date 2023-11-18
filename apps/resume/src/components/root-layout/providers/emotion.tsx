import type {FC, PropsWithChildren} from 'react';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

export const EmotionProvider: FC<PropsWithChildren> = ({children}) => {
  const cache = createCache({
    key: 'css',
  });

  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  )
}
