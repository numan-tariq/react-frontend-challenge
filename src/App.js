import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader/";
import Collections from "./pages/Collections/";
import Welcome from "./pages/Welcome/";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/collections" exact>
            <Collections />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
