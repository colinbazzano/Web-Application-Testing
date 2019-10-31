import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './components/Dashboard';

// testing different parts of the baseball app

describe('strikes', () => {
  test('if you click the strike button it goes up by 1', () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('strikeButton'));
    expect(getByTestId('strikeCount')).toBe('1');
  })
});


it('renders without crashing', () => {
  render(<App />);
});
