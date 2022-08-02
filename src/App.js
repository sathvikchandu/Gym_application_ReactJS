import './App.css';
import Reasons from './components/Reasons/Reasons';
import Header from './components/Header/Header';
import Programs from './components/programs/Programs';
import Plans from './components/Plans/Plans';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
//import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Header />
          <Programs />
          <Reasons />
          <Plans/>
          {/*<Testimonials />*/}
          <Contact/>
          <Footer/>
          
    </div>
  );
}

export default App;
