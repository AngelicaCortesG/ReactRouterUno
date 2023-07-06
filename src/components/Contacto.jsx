import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Navigation() {
  return (
    <Form className="text-center">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Correo electrónico</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Descripción</Form.Label>
      <Form.Control placeholder="Describe brevemente tu solicitud" />
    </Form.Group>
    <Button variant="secondary" type="submit">
      Enviar
    </Button>
  </Form>
  );
}
