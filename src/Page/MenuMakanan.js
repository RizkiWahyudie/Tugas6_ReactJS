import DaftarMakanan from "../Lib/DaftarMakanan";
import Header from "./Header";
import React, { Component } from "react";

class MenuMakanan extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Daftar Makanan Favourite</h3>
                <table style={{ width: "100%" }} >
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((value, index) => {
                                return (
                                    <td key={index}>
                                        <center>
                                            <img src={value.img} alt="" width="150" height="100" />
                                            <p>{value.namaMakanan}</p>
                                            <p>Harga : Rp. {value.harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MenuMakanan;