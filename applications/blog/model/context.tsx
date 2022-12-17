'use client';

import { interfaces, Container } from 'inversify';
import {createContext, ReactNode, useContext, useMemo} from 'react';
import {ThemeModel} from '@model/theme';

const ServiceContext = createContext<Container>(new Container());

export const ServiceProvider = ({children}: {children: ReactNode}) => {
  const container = useMemo(() => {
    const ctn = new Container();
    ctn.bind('test').toConstantValue({a: Date.now()});
    ctn.bind(ThemeModel).toSelf().inSingletonScope();
    return ctn;
  }, []);

  return (
    <ServiceContext.Provider value={container}>
      {children}
    </ServiceContext.Provider>
  )
}

export const useService = <T,>(symbol: interfaces.ServiceIdentifier<T>) => {
  const ctn = useContext(ServiceContext);
  return ctn.get(symbol);
}
