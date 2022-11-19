import { GlobalContext } from '../../context';
import Navbar from '../Navbar';
import CardContainer from '../CardContainer';
import Footer from '../Footer';
import ChangeColorModal from '../ChangeColorModal';

const App = () => {
  const { isShowModal } = GlobalContext();
  return (
    <>
      <Navbar />
      <CardContainer />
      <Footer />
      {isShowModal && <ChangeColorModal />}
    </>
  );
}

export default App;
