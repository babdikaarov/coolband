import { Outlet } from "react-router-dom";

function App() {
  console.log(document.documentElement.clientWidth + " browser width");
  console.log(window.innerWidth + " device width");
  console.log(screen.width + " browser content width");

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
