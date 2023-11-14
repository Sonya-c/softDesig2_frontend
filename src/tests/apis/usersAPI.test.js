import { UsersApi } from "../../apis/usersAPI";

test('UsersApi.getAll() returns an array of users', async () => {
    await UsersApi.getAll()
        .then((users) => {
            console.log(users);
        }).catch(() => {
            console.log("An error has ocurred");
        });
});