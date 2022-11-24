import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/cusotmers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import "./App.css";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:_id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
