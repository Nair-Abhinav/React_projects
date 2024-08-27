import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
  // we need the access of the global value which is in the usercontext.js file.
  // so we need to import the usercontext.js file here.
  // to make it global and allow every child to access it, we need to wrap the children with the UserContext.Provider 

  const [user , setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user , setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
