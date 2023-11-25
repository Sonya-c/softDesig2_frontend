import { UsersApi } from "../apis/usersAPI";

import { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";

import { Container } from "react-bootstrap";

import UserForm from "../components/UserForm";
import Loading from "../utils/Loading";

import ErrorMsg from "../utils/ErrorMsg";

export default function ProfilePage() {
  const userId = useQuery().get('doc');
  const typeId = useQuery().get('docType');

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(undefined);

  useEffect(() => {
    if (!userId || !typeId) {
      setIsLoading(false);
      return;
    }

    console.info("ProfilePage. userId: ", userId, "typeId: ", typeId);

    UsersApi.getById(userId, typeId).then((user) => {
      setUser(user);
    }).catch((error) => {
      if (error.response.status === 404) {
        setErrorMsg("Usuario no encontrado")
      } else {
        setErrorMsg(undefined)
      }
      setError(true);
    }).then(() => {
      setIsLoading(false);
    });
  }, [userId, typeId]);

  return <Container data-testid="profile-page" gap={10}>
    {
      isLoading ? <Loading /> :
        error ? <ErrorMsg msg={errorMsg} /> :
          <UserForm user={user || undefined} />
    }
  </Container>
}