import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    if(!user) {
        return  <>
                    <div>Please Login!!</div>
                </>
    }
    else{
        return <>
                    <div>
                        <h2>Profile</h2>
                        <h3>Username: {user.username}</h3>
                        <h3>Password: {user.password}</h3>
                    </div>
                </>
    }
}

export default Profile
