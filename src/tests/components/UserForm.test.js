import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import UserForm from '../../components/UserForm';
import { act } from 'react-dom/test-utils';


const testUserData = {
    "id": "101",
    "idType": "ti",
    "names": "User name",
    "lastnames": "User lastname",
    "gender": "nb",
    "birthDate": "",
    "email": "user@domain.tld",
    "phone": "3033332222",
    "profileImage": "https://via.placeholder.com/150",
}

test('renders UserForm (update/delete mode)', async () => {
    render(<UserForm />);

    expect(await screen.findByTestId("user-form")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-profile-image")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-load-image")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-id")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-id-type")).toBeInTheDocument();

    // expect user-form-birthday
    expect(await screen.findByTestId("user-form-gender")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-names")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-lastnames")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-email")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-phone")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-update-btn")).toBeInTheDocument();
    expect(await screen.findByTestId("user-form-delete-btn")).toBeInTheDocument();
});

test('renders UserForm (create mode)', async () => {
    render(<UserForm create />);

    expect(await screen.findByTestId("user-form")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-profile-image")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-load-image")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-id")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-id-type")).toBeInTheDocument();

    // expect user-form-birthday
    expect(await screen.findByTestId("user-form-gender")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-names")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-lastnames")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-email")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-phone")).toBeInTheDocument();

    expect(await screen.findByTestId("user-form-create-btn")).toBeInTheDocument();
});

test('GIVEN an user THEN show user data as default', async () => {

    render(<UserForm user={testUserData} />);

    expect(await screen.findByDisplayValue("101")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("TI")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("User name")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("User lastname")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("No binario")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("user@domain.tld")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("3033332222")).toBeInTheDocument();

});

test("[create] WHEN user change id THEN show updated id", async () => {
    render(<UserForm create />);

    await act(async () =>
        await userEvent.type(
            await screen.findByTestId("user-form-id"), "314"
        )
    );
    expect(await screen.findByDisplayValue("314")).toBeInTheDocument();
});

test("[update/date] WHEN user change id THEN not updated id", async () => {
    render(<UserForm user={testUserData} />);

    await act(async () =>
        await userEvent.type(
            await screen.findByTestId("user-form-id"), "314"
        )
    );
    expect(await screen.findByDisplayValue("101")).toBeInTheDocument();
});