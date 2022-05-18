import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Clientlogo from './Components/sectionlogo/Clientlogo';
import Work from './Components/works/works';
import Feature from './Components/Feature/Feature';
import FinalFeature from './Components/FinalFature/FinalFeature';
import Newselter from './Components/Newselter/Newselter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <div className="allcomponent">
   <Navbar />
   <Clientlogo/>
   <Work />
   <Feature />
   <FinalFeature />
   <Newselter />
   <Footer />
   </div>
   
   </>
  );
}

export default App;
