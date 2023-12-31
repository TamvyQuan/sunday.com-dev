import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../config/firebaseSetup';
import logging from '../../config/logging';

export interface IAuthRouteProps {
    children: React.ReactNode;
 }

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    if (!auth.currentUser)
    {
        logging.warn('No user detected, redirecting');
        return <Navigate to="/login" />;
    }

    return (
        <div>{children}</div>
    );
}

export default AuthRoute;