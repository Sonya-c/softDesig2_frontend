import { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";

import { Container } from "react-bootstrap";

import UserForm from "../components/UserForm";
import Loading from "../utils/Loading";

import { delay } from "../utils/utils";

export default function ProfilePage() {
    const userId = useQuery().get('id');
    const typeId = useQuery().get('typeId');

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(userId, typeId);
        setUser({
            "id": 100100100,
            "idType": "ti",
            "names": "Max",
            "lastnames": "Power",
            "gender": "nb",
            "birthDate": "2001-01-01",
            "email": "max@power.com",
            "phone": "3222222",
            "profileImage": "https://via.placeholder.com/150",
        });

        delay(5000).then(() => // this is just for testing purposes, remove it when you use the API
            setIsLoading(false)
        );
    }, [userId, typeId]);

    return <Container data-testid="profile-page" gap={10}>
        {isLoading ?
            <Loading /> : <UserForm user={user} />}
    </Container>
}