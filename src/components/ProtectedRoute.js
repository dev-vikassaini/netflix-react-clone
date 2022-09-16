import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { DEFAULT_ROUTES } from "../configuration/Route.Configuration";

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to={DEFAULT_ROUTES.HOME} />;
    } else {
        return children;
    }
};

export default ProtectedRoute;