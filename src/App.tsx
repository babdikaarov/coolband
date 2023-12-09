import "./app.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CoolBand from "./pages/coolBand";
import NotFoundPage from "./pages/notfound(404)";
import Main from "./pages/main";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CoolBand />}>
        <Route index={true} element={<Main />}></Route>
        <Route path="/event" element={<NotFoundPage />}></Route>
        <Route path="/events" element={<NotFoundPage />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
