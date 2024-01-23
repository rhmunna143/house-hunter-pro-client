/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useCurrentUser from "../Hooks/useCurrentUser";

const ProtectedRoute = ({ children }) => {
    const { users, isLoading } = useCurrentUser()

    if (isLoading) {
        return <div className="">Loading...</div>
    }

    if (!users) {
        return <Navigate to={"/login"} />
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;