import React from "react";
import {Route, Redirect} from 'react-router-dom';

import auth from './auth';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} 
            render={(props) => {
                //let {test} = {...rest};
                if(auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: props.location
                        }
                    }></Redirect>
                }
            }}></Route>
    );
}
