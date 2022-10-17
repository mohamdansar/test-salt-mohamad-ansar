import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './screen/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path='/' component={Home} exact />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
