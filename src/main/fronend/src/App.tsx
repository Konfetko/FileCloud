import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthorizationPage from "./pages/AuthorizationPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/auths"} element={<AuthorizationPage/>}/>
                <Route path={"/"} element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;