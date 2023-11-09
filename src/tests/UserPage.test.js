import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import UserPage from '../pages/UserPage';

test("All element are present", async () =>  {
    render(<UserPage />);
});

test("Create user", async () => {});

test("Create user wrong fields", async () => {});

test("Find user", async () => {});

test("Edit user", async () => {});

test("Edit user wrong fields", async () => {});

test("Delete user", async () => {});


