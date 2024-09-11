import React from 'react'

import { hydrateRoot } from 'react-dom/client';

import App from '../src/app'
import Index from '../src/container';
import About from '../src/container/about';

const container = document.getElementById('root');

const root = hydrateRoot(container, (
    <>
        <Index />
        <About />
    </>
));

console.log(root);

