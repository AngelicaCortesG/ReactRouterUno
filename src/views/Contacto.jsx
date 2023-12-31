import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 text-center">Cuéntanos, ¿En qué te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};
