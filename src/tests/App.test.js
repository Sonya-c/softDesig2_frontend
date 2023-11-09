import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from '../App';
import { act } from 'react-dom/test-utils';

test('All element are present', async () =>  {
  render(<App />);
  
  let linkToUser = await screen.findByText("Users");
  let linkToLogs = await screen.findByText("Logs");

  expect(linkToUser).toBeInTheDocument();
  expect(linkToLogs).toBeInTheDocument();
});

test('WHEN user click on User link THEN User page is displayed', async () =>  {
  render(<App />);
  
  let linkToUser = await screen.findByText("Users");
  
  act(() => {
    userEvent.click(linkToUser);
  });

  await screen.findByTestId("user-page");
});


test('WHEN user click on Logs link THEN Logs page is displayed', async () =>  {
  render(<App />);
  
  let linkToLogs = await screen.findByText("Logs");
  
  act(() => {
    userEvent.click(linkToLogs);
  });
  
  await screen.findByTestId("logs-page");
});


test('WHEN goes to unkown page THEN Not Found page is displayed', async () =>  {
  await window.history.replaceState({}, 'Test page', '/unknown-page');
  render(<App />);

  await screen.findByTestId("not-found-page");
});