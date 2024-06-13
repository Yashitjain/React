import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="Bloggy" about="About Bloggy"/>
      <Form heading="Enter Your Text"/>
      {/* ,<About></About> */}
    </> 
  );
}

export default App;
