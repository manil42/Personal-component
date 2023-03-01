import { Home } from "@mui/icons-material";
import Breadcrumbs from "components/breadcrumbs/Breadcrumbs";
import BreadcrumbItem from "components/breadcrumbs/breadcrumbsItems/BreadcrumbItem";
import "./App.css";


function App() {
  return <div className="App">
    <Breadcrumbs>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/about">About</BreadcrumbItem>
      <BreadcrumbItem>About</BreadcrumbItem>
  </Breadcrumbs>
  </div>;
}

export default App;
