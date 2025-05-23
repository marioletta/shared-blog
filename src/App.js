import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import Writers from "./pages/writers/Writers";
import PageNotFound from "./pages/errors/PageNotFound";
import Edit from "./pages/edit/Edit";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {

    // const user = true;
    const {loggedIn} = useContext(AuthContext);

    return (
        <Router>
            <TopBar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register />}/>
                <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login />}/>
                <Route path="/writers" element={<Writers />}/>
                <Route path="/write" element={loggedIn ? <Write /> : <Register />}/>
                <Route path="/settings" element={loggedIn ? <Settings /> : <Navigate to="/login" />}/>
                <Route path="/post/:postId" element={<Single />}/>
                <Route path="/page-not-found" element={<PageNotFound />}/>
                <Route path="/edit/:postId" element={<Edit />}/>
            </Routes>
        </Router>
    );
}

export default App;
