import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import "./assets/css/style.scss";
import { BackWrap } from "./component/layout/BackWrap";
import ContentWrap from "./component/layout/ContentWrap";
import Menu from "./component/layout/Menu";
import Home from "./page/Home";
import List from "./page/camp/List";
import StoreList from "./page/store/StoreList";
import UserMypage from "./page/user/UserMypage";
function Layout() {
    <>
        <BackWrap>
            <ContentWrap>
                <main>
                    <Outlet />
                </main>
            </ContentWrap>
            <Menu />
        </BackWrap>
    </>;
}

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/diary/list" element={<List />} />
                        <Route path="/store/list" element={<StoreList />} />
                        <Route path="/user/mypage" element={<UserMypage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
