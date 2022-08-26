import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/layout';
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
    <Padre/>
    {/* <CallbackHook /> */}
    {/* <MemoHook /> */}
    {/* <Memorize /> */}
    {/* <Layout /> */}
    {/* <FocusScreen /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FormWithCustomHook /> */}
    {/*<SimpleForm />*/}
    {/* <CounterWithCustomHook /> */}
    {/* <CounterApp /> */}
    {/* <HooksApp /> */}
  </React.StrictMode>
)
