import "./App.css";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
