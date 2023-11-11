import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from '../App';
import { act } from 'react-dom/test-utils';

test('All element are present', async () => {
  render(<App />);

  expect(await screen.findByTestId("link-to-user-page")).toBeInTheDocument();
  expect(await screen.findByTestId("link-to-logs-page")).toBeInTheDocument();
});

test('WHEN user click on User link THEN User page is displayed', async () => {
  await window.history.replaceState({}, 'Test page', '/logs');
  render(<App />);

  let linkToUser = await screen.findByTestId("link-to-user-page");

  await act(async () => await userEvent.click(linkToUser));

  expect(await screen.findByTestId("user-page")).toBeInTheDocument();
});


test('WHEN user click on Logs link THEN Logs page is displayed', async () => {
  render(<App />);

  let linkToLogs = await screen.findByTestId("link-to-logs-page");

  await act(async () => await userEvent.click(linkToLogs));

  expect(screen.getByTestId("logs-page")).toBeInTheDocument()

});


test('WHEN goes to unkown page THEN Not Found page is displayed', async () => {
  await window.history.replaceState({}, 'Test page', '/unknown-page');
  render(<App />);

  expect(await screen.findByTestId("not-found-page")).toBeInTheDocument();
});