// src/app/pages/layout.tsx
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="layout">
        <header>
          <h1>Marketplace de NFTs</h1>
        </header>
        <main>{children}</main>
      </div>
    </Provider>
  );
};

export default Layout;
