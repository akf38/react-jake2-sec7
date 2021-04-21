import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../Components/pages/Top";
import { Users } from "../Components/pages/Users";
import { DefaultLayout } from "../Components/templates/DefaultLayout";
import { HeaderOnly } from "../Components/templates/HeaderOnly";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
