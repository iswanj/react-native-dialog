import React from 'react';

import Page from "./Page";
import { AlertServiceProvider } from "./alert";

export default function App() {
  
  return (
    <AlertServiceProvider>
      <Page />
    </AlertServiceProvider>
  );
}
