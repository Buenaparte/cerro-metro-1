import React, { use } from 'react'
import Header_NoSession from '../components/Header_NoSession'
import { UserContext } from '../components/User_Context'

export default function Profile() {
    
    const contextUser = use(UserContext)
    const {user, setUser, profile} = contextUser

    console.log(profile)
    console.log('perfil encontrado' + profile.name)

    return (
        <>
            <Header_NoSession/>
            <div>Profile</div>
        </>
    )
}
