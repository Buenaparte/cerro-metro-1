import React, {use} from 'react'
import Header_NoSession from '../components/Header_NoSession'
import { UserContext } from '../components/User_Context'
import Frame1_Home from '../components/Frame1_Home'

function Home() {

  const contextUser = use(UserContext)

  const {user, setUser} = contextUser

  console.log(user)
  return (
      <div className='container'>
        <Header_NoSession/>
        <Frame1_Home/>

        
      </div>
  )
}

export default Home
