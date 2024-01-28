import { Provider } from "react-redux";
import { store } from "./app/store";
import SearchDoctor from "./pages/searchDoctor/SearchDoctor";
import AppRouter from "./router/AppRouter";
import DetailDoctor from "./pages/detailDoctor/DetailDoctor";
//import Home from "./pages/Home";



function App() {
  
  return (
    <div className="App">
       <Provider store={store}>
        <AppRouter/>
        {/* <DetailDoctor/> */}
      </Provider>
    </div>
  );
}

export default App;