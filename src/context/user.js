import React from 'react';
import { useState } from 'react';



// create a provider component
function UserProvider({ children }) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider

    const [user, setUser] = useState(null)

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
  }

  const UserContext = React.createContext();
  
  export { UserContext, UserProvider };