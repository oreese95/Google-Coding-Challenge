import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const configRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/:category/search/:keyword'
                    component={Catalog}
                />
                <Route
                    path='/:category/:id'
                    component={Detail}
                />
                <Route
                    path='/:category'
                    component={Catalog}
                />
                <Route
                    exact
                    path="/"
                    //component={Home}
                    element={
                        <Home />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default configRoutes;