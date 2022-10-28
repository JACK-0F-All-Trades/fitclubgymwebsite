import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import JoinNow from './components/Join Now/JoinNow';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <JoinNow />
      <Footer />
    </>

  );
}

export default App;
