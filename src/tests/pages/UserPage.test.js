import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import UserPage from '../../pages/UserPage';

test("All element are present", async () => {
    render(<UserPage />);
});


