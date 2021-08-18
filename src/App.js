import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Slid from "./components/slider/Slid"
import{ Container } from 'react-bootstrap'
import Contact from "./components/Contact/contact"
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Slid></Slid>
        <Container>
        <Route path='/'  component={Slid} exact />
        {/* <Route path='/home'  component={Slid} exact /> */}

         </Container>
        <Contact></Contact>
     {/* <h1>Welcom to 1st website</h1> */}
     </main>
     <Footer />
    </Router>
  );
}

export default App;
