import React from 'react'
import useAuthStore from '../store/authStore';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={"/auth"} replace />;
    }

    return children;
}

export default ProtectedRoute;