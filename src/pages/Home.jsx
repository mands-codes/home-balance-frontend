import { useState } from 'react';
import { useAuth } from '../context/AuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NewBoard from '../modals/NewBoard';

export default function Home() {
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{
                width: '98%', height: '98px',
                backgroundColor: '#f8f9fa',
                margin: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '3px #e0e0e0',

            }}>
                <Card.Body>
                    <Card.Title>Bem-vindo, {user.displayName}!</Card.Title>
                    <Card.Text>
                        Este é o seu painel de controle. Aqui você pode gerenciar suas contas, cartões, categorias, transações e membros.
                    </Card.Text>
                </Card.Body>
        </Card>
       <Card style={{ width: '18rem', backgroundColor: '#f8f9fa',
                margin: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '3px #e0e0e0', }}>
      <Card.Body>
        <Card.Title>Crie seu primeiro board</Card.Title>
        <Card.Text>
          Um board reúne contas, cartões, categorias, transações e membros.
        </Card.Text>
                    <Button
                        style={{ backgroundColor: '#E63462', border: 'none' }} onClick={handleShow}>
                        Criar Board
                    </Button>
      </Card.Body>
            </Card>
            <NewBoard isOpen={show} onClose={handleClose} />
            </>
    )
}
