import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import LogsPage from '../pages/LogsPage';

test("All element are present", async () =>  {
    render(<LogsPage />);
});

test("find log with date", async () => {});
test("find log with type", async () => {});
test("find log with identifier", async () => {});
