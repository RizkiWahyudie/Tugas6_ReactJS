import React, { Component } from "react";
import "../Style/Header.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div id="head">
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <center>
                                <td>
                                    <h2>
                                        <NavLink to="/" className="link">
                                            Home
                                        </NavLink>
                                        |
                                    </h2>
                                </td>
                                <td>
                                    <h2>
                                        <NavLink to="/menu_makanan" className="link">
                                            Makanan
                                        </NavLink>
                                        |
                                    </h2>
                                </td>
                                <td>
                                    <h2>
                                        <NavLink to="/menu_minuman" className="link">
                                            Minuman
                                        </NavLink>
                                        |
                                    </h2>
                                </td>
                                <td>
                                    <h2>
                                        <NavLink to="/kontak"  className="link">
                                            Kontak
                                        </NavLink>
                                    </h2>
                                </td>
                            </center>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Header;