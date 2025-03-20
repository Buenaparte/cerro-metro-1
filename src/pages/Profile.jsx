import React, { useContext, useEffect } from 'react';
import Header_NoSession from '../components/Header_NoSession';
import { UserContext } from '../components/User_Context';

export default function Profile() {
    const contextUser = useContext(UserContext);
    const { profile } = contextUser;

    useEffect(() => {
        console.log("Perfil cargado:", profile);  // Verificar el contenido de profile
    }, [profile]);

    return (
        <>
            <Header_NoSession/>
            <div>{profile.email}</div>
            <div>{profile.tipoUsuario}</div>
        </>
    )
}
