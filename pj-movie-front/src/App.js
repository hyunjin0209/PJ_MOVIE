import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./component/sign/SignIn";
import UserJoin from "./component/UserJoin";
import LogIn from "./component/sign/LogIn";
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
        </Routes>
      </Layout>
    </div>
  );
};

const Layout = ({ children }) => {
  return <div id="body">{children}</div>;
};

export default App;
