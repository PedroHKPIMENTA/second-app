import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

declare const test: (name: string, fn: () => void) => void;

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  if (baseElement === undefined) {
    throw new Error('Expected the app to render');
  }
});
