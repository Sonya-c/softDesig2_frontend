import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import useQuery from "../hooks/useQuery";
import { Container } from "react-bootstrap";


export default function ProfilePage() {
    const userId = useQuery().get('id');
    const typeId = useQuery().get('typeId');

    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(userId, typeId);
        setUser({ id: 100100100, type: 'cedula', names: 'juan', lastnames: 'perez', email: '', phone: '123' });

    }, [userId, typeId]);

    return <Container data-testid="profile-page" gap={10}>
        <UserForm user={user} update delete />
    </Container>
}