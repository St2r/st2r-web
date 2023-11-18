import {MuiProvider} from '~/components/root-layout/providers';
import {AppRoot} from '~/components/root-layout';
import {FC} from 'react';
import {EmotionProvider} from '~/components/root-layout/providers/emotion';
import {LinksFunction} from "@remix-run/node";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

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
