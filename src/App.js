import { Provider } from "react-redux";
import { Navbar, Search, SectionWrapper } from "./components/";
import PostContainer from "./components/PostContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Search />
      <SectionWrapper>
        <PostContainer />
      </SectionWrapper>
    </Provider>
  );
}

export default App;
