import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/sign/SignIn";
import UserJoin from "./component/UserJoin";
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
        </Routes>
      </Layout>
    </div>
  );
};

const Layout = ({ children }) => {
  return <div id="body">{children}</div>;
};

export default App;
