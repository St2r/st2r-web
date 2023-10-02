import {MuiProvider} from '~/components/root-layout/providers';
import {AppRoot} from '~/components/root-layout';
import {FC} from 'react';
import {EmotionProvider} from '~/components/root-layout/providers/emotion';

const Bootstrap: FC = () => {
  return (
    <EmotionProvider>
      <MuiProvider>
        <AppRoot/>
      </MuiProvider>
    </EmotionProvider>
  )
}

export default Bootstrap;
