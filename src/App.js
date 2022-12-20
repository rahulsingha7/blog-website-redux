import { Provider } from "react-redux";
import "./App.css";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <Search></Search>
        <Blogs></Blogs>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
