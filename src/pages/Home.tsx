import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Wrap>
        <Footer />
      </Wrap>
    </>

  );
}

export default Home;

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
