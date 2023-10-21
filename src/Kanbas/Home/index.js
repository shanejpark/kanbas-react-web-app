import ModuleList from "../Modules/ModuleList.js";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="row">
      <h1>Home</h1>
      <ModuleList />
    </div>
  );
}

export default Home;
