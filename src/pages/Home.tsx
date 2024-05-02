import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Statistic from './Statistic';
import CashBack from './CashBack';
import Action from './Action';
import Tokenomic from './Tokenomic';
import PoolDetail from './PoolDetail';

const Home = () => {
  return (
    <>
      <Header />
      <Wrap>
        <div className="container home">
          <div className="home-left">
            <Statistic />
            <Tokenomic />
          </div>
          <div className="home-right">
            <CashBack />
            <Action />
            <PoolDetail />
          </div>
        </div>
        <Footer />
      </Wrap>
    </>

  );
}

export default Home;

const Wrap = styled.div`
  width: 100%;
  min-height: calc(100vh - 86px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .home {
    display: flex;
    margin-top: 50px;
    margin-bottom: 100px;
    gap: 20px;
    .home-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .home-right {
      display: flex;
      width: 30%;
      min-width: 300px;
      flex-direction: column;
      gap: 20px;
    }
  }
`
