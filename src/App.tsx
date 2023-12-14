import "./app.scss";
import { Route, Routes } from "react-router-dom";
import CoolBand from "./pages/coolBand";
import Main from "./pages/coolBand/main";
import Gallery from "./pages/coolBand/gallery";
import GalleryCards from "./components/GalleryCards";
import GalleryCard from "./components/GalleryCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<CoolBand />}>
          <Route index={true} element={<Main />}></Route>
          <Route path="events" element={<Gallery />}>
            <Route index element={<GalleryCards />}></Route>
            <Route path=":id" element={<GalleryCard />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
