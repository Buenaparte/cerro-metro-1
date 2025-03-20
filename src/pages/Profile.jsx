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
            <Header_NoSession />
            <div className="container mx-auto p-8">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <div className="flex items-center space-x-6">
                        {/* Foto de perfil */}
                        <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
                            <img src={profile?.fotoPerfil || '/path/to/default-image.jpg'} alt="Foto de perfil" className="w-full h-full object-cover" />
                        </div>

                        {/* Información del usuario */}
                        <div>
                            <h1 className="text-4xl font-bold">{profile?.name || 'Nombre de Usuario'}</h1>
                            <p className="text-lg text-gray-600">Correo: {profile?.email || 'No disponible'}</p>
                            <p className="text-lg text-gray-600">Teléfono: {profile?.telefono || 'No disponible'}</p>
                            <p className="text-lg text-gray-600">Tipo de usuario: {profile?.userType|| 'No disponible'}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold">Actividades completadas</h2>
                        <div className="mt-4">
                            {profile?.actividades && profile.actividades.length > 0 ? (
                                <ul className="space-y-3">
                                    {profile.actividades.map((actividad, index) => (
                                        <li key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition">
                                            <h3 className="text-lg font-bold">{actividad.titulo}</h3>
                                            <p className="text-sm text-gray-600">{actividad.descripcion}</p>
                                            <p className="text-sm">Fecha: {actividad.fecha}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500">No has completado ninguna actividad aún.</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-8">
                        <button 
                            onClick={() => {} /* Aquí va el método de logout, si es necesario */}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
