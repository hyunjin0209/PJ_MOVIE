import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestSignIn from "./component/sign/TestSignIn";
import UserJoin from "./component/sign/UserJoin";
import LogIn from "./component/sign/LogIn";
import ResetPassword from "./component/sign/ResetPassword";
import FindId from "./component/sign/FindId";
import FindId2 from "./component/sign/FindId2";
import BoardList from "./component/Board/BoardList";
import BoartWriting from "./component/Board/BoardWriting";
import DetailBoard from "./component/Board/DetailBoard";
import NowScreening from "./movie/NowScreening";
import MainPage from "./component/MainPage/MainPage";
import MyPage from "./component/MyPage/MyPage";
import AskList from "./component/MyPage/AskList";
import UserDataUpdate from "./component/MyPage/UserDataUpdate";
import SelectRegion from "./component/MovieReservation/SelectRegion";
import CheckReservation from "./component/MyPage/CheckReservation";
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
          <Route path="/signin" element={<TestSignIn />} />
          <Route path="/userjoin" element={<UserJoin />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findid2" element={<FindId2 />} />
          <Route path="/boardList" element={<BoardList />} />
          <Route path="/boardwriting" element={<BoartWriting />} />
          <Route path="/detailboard" element={<DetailBoard />} />
          <Route path="/nowscreening" element={<NowScreening />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/asklist" element={<AskList />} />
          <Route path="/userdataupdate" element={<UserDataUpdate />} />
          <Route path="/selectregion" element={<SelectRegion />} />
          <Route path="/CheckReservation" element={<CheckReservation />} />
        </Routes>
      </Layout>
    </div>
  );
};

const Layout = ({ children }) => {
  return <div id="body">{children}</div>;
};

export default App;
