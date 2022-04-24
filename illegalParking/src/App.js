import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";

import LoadingModal from "./components/Modal/LoadingModal";
import SportsCar from "./components/Sportscar/SportsCar";

import MainPage from "./pages/MainPage/MainPage";
import "./index.scss";

const App = () => {
    const history = useHistory();
    const isLoading = useSelector((state) => state.loading.isLoading);
    return (
        <>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
                <Route render={()=> history.replace(<h1>404page</h1>)} />
            </Switch>
            {isLoading && <LoadingModal></LoadingModal>}
            <SportsCar />
        </>
    );
};

export default App;
