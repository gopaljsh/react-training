import React from "react";
import {Route, Redirect} from 'react-router-dom';

import auth from './auth';

export const LoginRoute = ({children, ...rest}) => {
    return (
        <Route {...rest} 
            render={(props) => {
                //let {test} = {...rest};
                if(auth.isAuthenticated()) {
                    console.log('true');
                    return <Redirect to={
                        {
                            pathname: '/dashboard/mobile',
                            state: props.location
                        }
                    }></Redirect> 
                } else {
                    return children
                }
            }}></Route>
    );
}
