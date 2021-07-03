import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'


type User = null | {username:string}


export const AuthContext = React.createContext<{
User:User,
login:()=> void
logout:()=> void
}>({
    User: null,
    login: ()=> {},
    logout: ()=> {}
})


interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {

    const [user, setUser] = useState<User>(null)

        return (
            <AuthContext.Provider value={{
                User:user,
                login:()=>{
                    const fakeUser = { username:'Robert' } 
                    setUser(fakeUser)
                    AsyncStorage.setItem('user',JSON.stringify(fakeUser))
                },
                logout:()=>{
                    
                    setUser(null)
                    AsyncStorage.removeItem('user')
                }
            }}>
                {children}
            </AuthContext.Provider>
        )
}