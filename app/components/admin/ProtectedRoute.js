import React from "react";
import {Route, Redirect} from "react-router-dom";
import Auth from "../../helpers/Auth";

export const ProtectedRoute = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => {
            if (Auth.authenticated) {
                return <Component {...props} />;
            } else {
                return (
                    <Redirect to={{pathname: "/admin-login", state: {from: props.location ? props.location : '/'}}}/>
                );
            }
        }}
        />
    );
};