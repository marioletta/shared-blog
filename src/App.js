import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Writers from "./pages/writers/Writers";
import PageNotFound from "./pages/errors/PageNotFound";
import Edit from "./pages/edit/Edit";

function App() {

    const user = true;

    return (
        <Router>
            <TopBar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={user ? <Home /> : <Register />}/>
                <Route path="/login" element={user ? <Home /> : <Login />}/>
                <Route path="/writers" element={<Writers />}/>
                <Route path="/write" element={user ? <Write /> : <Register />}/>
                <Route path="/settings" element={user ? <Settings /> : <Register />}/>
                <Route path="/post/:postId" element={<Single />}/>
                <Route path="/page-not-found" element={<PageNotFound />}/>
                <Route path="/edit/:postId" element={<Edit />}/>
            </Routes>
        </Router>
    );
}

export default App;
