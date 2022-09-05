import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Links from "./pages/Links/Links";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Home />
        <Skills />
        <Portfolio />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
