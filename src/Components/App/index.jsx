import Navbar from '../Navbar';
import CardContainer from '../CardContainer';
import Footer from '../Footer';
import ChangeColorModal from '../ChangeColorModal';
import { GlobalContext } from '../../context';

const App = () => {
  const { showModal } = GlobalContext();
  return (
    <>
      <Navbar />
      <CardContainer />
      <Footer />
      {showModal && <ChangeColorModal />}
    </>
  );
}

export default App;
