 
import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "./Routes/routesConfig";


function App() {

  return (
    <div>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </div>
  );
}
export default App
