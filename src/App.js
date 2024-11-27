import './App.css';
import Adopt from './landingPets/Adopt';
import Footer from './landingPets/Footer';
import MyComponent from './components/MyComponent';
import Header from './landingPets/Header';
import Hero from './landingPets/Hero';
//import Reviews from './landingPets/Reviews';
import Services from './landingPets/Services';
/*import Counter from './components/Counter';
<Counter/>*/

function App() {
  return (
    <div className="bg-[#EBEAFF]">
      <Header/>
      <Adopt/>
      <Services/>
      <Footer/>
      <MyComponent/>
    </div>
  );
}

export default App;
