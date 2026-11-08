import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Modal, Form } from 'react-bootstrap';

export default function NewBoard({ isOpen, onClose }) {
    const { user } = useAuth();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const resposta = await fetch("https://sua-api.com/api/transacoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, descricao }),
    });

    if (!resposta.ok) throw new Error("Erro ao salvar");

    setDescricao("");
    setNome("");
  } catch (erro) {
    console.error(erro);
  }
};

  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Criar novo board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="descricao">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ex.: Casa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descricao">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ex.: Contas da Casa e despesas domésticas"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#E63462', border: 'none' }}  onClick={handleSubmit} type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
