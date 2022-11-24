import "./App.css";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/common/navbar";
import Customers from "./components/cusotmers";
import Rentals from "./components/rentals";

function App() {
  return (
    <main className="container">
      <NavBar />
      {/* <Switch>
        <Route path="/rentals" component={Rentals} />
        <Route path="/customers" component={Customers} />
        <Route path="/" component={Movies} />
      </Switch> */}
      <Movies />
    </main>
  );
}

export default App;
