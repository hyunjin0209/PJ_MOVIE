import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/sign/SignIn";
import UserJoin from "./component/UserJoin";
import LogIn from "./component/sign/LogIn";
import FindId from "./component/FindId";
import FindId2 from "./component/FindId2";
import MainHome from "./component/MainHome";

function App() {
  return (
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  );
}

const AppComponent = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userjoin" element={<UserJoin />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findid2" element={<FindId2 />} />
          <Route path="MainHome" element={<MainHome />} />
        </Routes>
      </Layout>
    </div>
  );
};

const Layout = ({ children }) => {
  return <div id="body">{children}</div>;
};

export default App;
