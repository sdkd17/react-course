import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './05-useLayoutEffect/layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
    {/* <FocusScreen /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FormWithCustomHook /> */}
    {/*<SimpleForm />*/}
    {/* <CounterWithCustomHook /> */}
    {/* <CounterApp /> */}
    {/* <HooksApp /> */}
  </React.StrictMode>
)
