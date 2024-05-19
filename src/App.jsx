import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import About from './components/About/about'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Project from './components/Project/Project'


const App =()=> {
  return (
    <>
          <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
