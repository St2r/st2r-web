import {FC} from 'react';
import {useAtomValue} from 'jotai/index';
import {$Language} from '~/atoms/language';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {CssBaseline, styled} from '@mui/material';


const Html = styled('html')(({theme}) => ({
  padding: 0,
  margin: 0,
  minHeight: '100vh',
}))

const Body = styled('body')(({theme}) => ({
  padding: 0,
  margin: 0,
  minHeight: '100vh',
}))

export const AppRoot: FC = () => {
  const lang = useAtomValue($Language);
  return (
    <Html lang={lang}>
      <head>
        <meta charSet="utf-8"/>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        {/*<Outlet context={{target: 'head'}}/>*/}
        <Meta/>
        <Links/>
      </head>
      <Body>
        <Outlet context={{target: 'body'}}/>
        <CssBaseline/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
      </Body>
    </Html>
  )
}