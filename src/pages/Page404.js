import React from "react";
import { Link } from "react-router-dom";
import "../css/Display-Error.css"

export default function Page404(){

    return (
        <div className="Display-Error">
            <div className="Display-Error__Container">
                <div className="Display-Error__Content">
                    <h2 className="Display-Error__Title">404</h2>
                    <p className="Display-Error__Subtitle">Maaf Halaman Tidak Di Temukan</p>
                    <p className="Display-Error__MiniTitle">Tapi jangan khawatir, Kamu dapat menemukan banyak hal lain di beranda kami.</p>
                    <Link to="/" rel="noopener noreferrer" className="Display-Error__Link">Kembali Ke Halaman Utama</Link>
                </div>
            </div>
        </div>
    );
}
