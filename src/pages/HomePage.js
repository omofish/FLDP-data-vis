import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import DashboardOverview from "./dashboard/DashboardOverview";

// components
import Sidebar from "../components/Sidebar";
import Preloader from "../components/Preloader";
import Comparison from "./Comparison";

const RouteWithLoader = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    {" "}
                    <Preloader show={loaded ? false : true} />{" "}
                    <Component {...props} />{" "}
                </>
            )}
        />
    );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Route
            {...rest}
            render={(props) => (
                <>
                    <Preloader show={loaded ? false : true} />
                    <Sidebar />

                    <main className="content">
                        <Component {...props} />
                    </main>
                </>
            )}
        />
    );
};

export default () => (
    <Switch>
        <RouteWithSidebar
            exact
            path={Routes.Presentation.path}
            component={Presentation}
        />
        <RouteWithSidebar
            exact
            path={`${Routes.DashboardOverview.path}`}
            component={DashboardOverview}
        />
        <RouteWithSidebar
            exact
            path={`${Routes.DashboardOverview.path}/:id`}
            component={DashboardOverview}
        />
        <RouteWithSidebar
            exact
            path={Routes.Comparison.path}
            component={Comparison}
        />
    </Switch>
);
