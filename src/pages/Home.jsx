import React, {use} from 'react'
import Header_NoSession from '../components/Header_NoSession'
import { UserContext } from '../components/User_Context'
import Pagina_Principal from '../components/Pagina_Principal'
import Footer from '../components/Footer'

function Home() {

  const contextUser = use(UserContext)

  const {user, setUser} = contextUser

  console.log(user)
  return (
      <div className='container'>
        <Header_NoSession/>
        <Pagina_Principal/>
      </div>
     
    
      
  )
}

export default Home
