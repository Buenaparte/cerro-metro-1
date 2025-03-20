import { createContext, useEffect, useState } from "react";
import { app } from "../credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";


// Usa --> const {logged,profile, setLogged} = profileContext para tener información del usuario logueado

const UserContext = createContext(null);

const auth = getAuth(app)

const db = getFirestore(app)

const UserProvider = ({children}) => {

    const [user, setUser] = useState("")
    const [profile, setProfile] = useState({})
    const [logged, setLogged] = useState(false)
    const [isGuia, setIsGuia] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(userConnected)=>{
            if(userConnected){
                const userDocRef = doc(db, 'users', userConnected.uid)
    
                try {
                    const docSnap = await getDoc(userDocRef)
                    
                    if(!docSnap.exists()){
                        console.log("Documento no encontrado")
                        setProfile({})
                    }
                    setProfile(docSnap.data())
                    console.log(docSnap.data())
                    setLogged(true)
                } catch (error) {
                    console.log(error)
                    setProfile({})
                    setLogged(false)
                    
                }
            }else{
                setProfile({})
    
            }
        })

        return ()=> unsubscribe()
    }, [])
    

    return(<UserContext value={{user,setUser, profile, setProfile, logged, setLogged, isGuia}}>{children}</UserContext>)
}

export {UserContext, UserProvider}