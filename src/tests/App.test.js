import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('Test Case 1', () => {
    render(<App />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('Test Case 2', () => {
    render(<App />);

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('Test Case 3', () => {
    render(<App />);

    expect(screen.getByAltText('profile')).toBeInTheDocument();
  });
});