import React from "react";
import { Routes, Route } from "react-router-dom";
import Kontak from "./Page/Kontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import App from "./App"

function AppRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu_makanan" element={<MenuMakanan />} />
                <Route path="/menu_minuman" element={<MenuMinuman />} />
                <Route path="/kontak" element={<Kontak />} />
            </Routes>
        </div>
    );
}

export default AppRoute;
