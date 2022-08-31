import { Link, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArsipPage from "./pages/ArsipPage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import Page404 from "./pages/Page404";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header-content">
          <div className="App__header-logo">
            <Link to='/'>
              <h3>CatatanKu</h3>
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
      <main className="App__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArsipPage />} />
          <Route path="/note/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
