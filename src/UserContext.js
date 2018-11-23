import React from "react";
export const UserContext = React.createContext({});

export function withUser(Component) {
    return function WrappedComponent(props) {
        return (
            <UserContext.Consumer>
                {LoginUser => <Component {...props} LoginUser={LoginUser}/>}
            </UserContext.Consumer>
        );
    };
}
