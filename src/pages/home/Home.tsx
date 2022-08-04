import { Container } from '@chakra-ui/react';
import Banner from '../../components/home/Banner';
import Footer from '../../components/home/Footer';
import HeaderMenu from '../../components/home/Header/Header'
import InfoComponent from '../../components/home/InfoItems/InfoComponent';
import NotifyCallToAction from '../../components/home/NotifyCallToAction';
import SignUpCallToAction from '../../components/home/SignUpCallToAction';

function Home() {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.xl">
        <Banner />
        <InfoComponent />
        <SignUpCallToAction />
        <NotifyCallToAction/>
      </Container>
      <Footer/>
    </>
  );

}

export default Home;
