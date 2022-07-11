import Header from './components/Header';
import Intro from './components/Intro';
import Url from './components/Url';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Card from './components/Card';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Url /> 
     <Statistics />
      <Boost />
      <Footer />
      <Card />
    </div>
  );
}
