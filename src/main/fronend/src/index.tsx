import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from "./store/Store";
import IContext from "./models/IContext";

const store = new Store()

export const Context = createContext<IContext>({
    store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{store}}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Context.Provider>
);

