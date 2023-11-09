import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useNavigate } from "react-router-dom";

import App from '../App';

test('All element are present', async () =>  {
  render(<App />);
  
  let linkToClients = await screen.findByText("Clients");
  let linkToLogs = await screen.findByText("Logs");

  expect(linkToClients).toBeInTheDocument();
  expect(linkToLogs).toBeInTheDocument();
});

test('WHEN user click on Clients link THEN Clients page is displayed', async () =>  {
  render(<App />);
  
  let linkToClients = await screen.findByText("Clients");
  
  await userEvent.click(linkToClients);

  await screen.findByTestId("client-page");
});


test('WHEN user click on Logs link THEN Logs page is displayed', async () =>  {
  render(<App />);
  
  let linkToLogs = await screen.findByText("Logs");
  
  await userEvent.click(linkToLogs);

  await screen.findByTestId("logs-page");
});


test('WHEN goes to unkown page THEN Not Found page is displayed', async () =>  {
  await window.history.replaceState({}, 'Test page', '/unknown-page');
  render(<App />);

  await screen.findByTestId("not-found-page");
});