import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const updateUser = (data) => {
        setUser(data);
    }
    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { UserContext, UserProvider };
