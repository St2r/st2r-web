import {ReactNode} from 'react';

const RootLayout = async ({
                            children,
                          }: { children: ReactNode }) => {

  return (
    <div>
      <div>layout 2</div>
      <div>{children}</div>
    </div>
  )
}

export default RootLayout;
