import React from 'react';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Layout from "src/layout";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);


