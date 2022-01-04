import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

import Registration from "./Registration";

const Router = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
        </>
    )
}

export default Router

/* <Route index element={<div>Default Page Content</div>} /> */