import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import useQuery from "../hooks/useQuery";
import { Container } from "react-bootstrap";


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

        setIsLoading(false);
    }, [userId, typeId]);

    return <Container data-testid="profile-page" gap={10}>
        {isLoading ? <p>Cargando...</p> : <UserForm user={user} />}
    </Container>
}