import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// local imports
import Dashboard from './components/Dashboard';
import Display from './components/Display';

//clean up

// afterEach(cleanup);

// testing different parts of the baseball app

describe('foul balls', () => {
  test('if you click foul 4 times it stays at 2', () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('foulButton'));
    fireEvent.click(getByTestId('foulButton'));
    fireEvent.click(getByTestId('foulButton'));
    fireEvent.click(getByTestId('foulButton'));
    expect(getByTestId('strikeCount')).toHaveTextContent('2')
  });
})

describe('strikes', () => {
  test('if you click the strike button it goes up by 1', () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('strikeButton'));
    expect(getByTestId('strikeCount')).toHaveTextContent('1');
  })
});

describe('base on balls', () => {
  test('if you get 4 balls, you take your base! and reset the ball count to 0', () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('ballButton'));
    fireEvent.click(getByTestId('ballButton'));
    fireEvent.click(getByTestId('ballButton'));
    fireEvent.click(getByTestId('ballButton'));
    expect(getByTestId('ballCount')).toHaveTextContent('0');
  })
});


it('renders without crashing', () => {
  render(<App />);
});


// Steps: 

// 1. created a Dashboard.js and a Display.js where I would house my buttons and my counters

// 2. in my Dashboard, I set up useState and useEffect to create state for strikes and balls, and then did a useEffect that resets them back to 0 (which was their initial state anyways) 

// 3. created two change handlers, one for foul and one for hit that sets them appropriately to the values I'd want (in this case I used setStrikes(num => ++num) ) but ONLY when `if` the number is less than 2 and then reset the values of balls and strikes upon a hit

// 4. I then created some onClick handlers that pass a function to my strikes and balls (incrementing by 1) and created onclicks for foul/hit that pass in the change handlers

// 5. I also above these buttons passed in my display where I told it strike={strike} and ball={ball} and exported those so I can just import my Dashboard into my app and have all the pieces I need
