import React from 'react'

import { hydrateRoot } from 'react-dom/client';

import App from '../src/app'

const container = document.getElementById('root');

const root = hydrateRoot(container, App);

console.log(root);

