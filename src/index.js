import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from "./Context/Context"
import App from './App';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
<Context>
<App/>
</Context>
);


reportWebVitals();
