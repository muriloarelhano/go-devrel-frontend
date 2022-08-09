import { Container } from '@chakra-ui/react';
import Footer from '../components/home/Footer';
import HeaderMenu from '../components/home/Header/Header'


function Model() {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.xl">
      </Container>
      <Footer/>
    </>
  );

}

export default Model;
