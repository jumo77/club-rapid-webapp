import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App';
import './css/bootstrap.css';
import './css/styles.css';


const root = createRoot(document.getElementById("root"));
root.render(<App/>);

