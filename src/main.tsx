import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App.tsx';
import './index.css';


const auth = import.meta.env.VITE_GRAPH_AUTH;

const client = new ApolloClient({
  uri: `https://cg.optimizely.com/content/v2?auth=${auth}&cache=true`,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
