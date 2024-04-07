import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header , Footer } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
