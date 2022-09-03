import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";

function Loading(){
    const { lang } = useContext(LocaleContext);
    return (
        <div className="Loading">
            <div className="Loader"></div>
            <h2 className="Loader__text">{lang === 'id' ? 'Memuat...' : 'Loading...'}</h2>
        </div>
    )
}

export default Loading;