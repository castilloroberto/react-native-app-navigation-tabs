import React, { useContext, useState } from "react"
import { Button, Pressable, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { AuthNavProps } from "../AuthParamList"
import { AuthContext } from "../AuthProvider"
import { Center } from "../Center"

export function Login({
    navigation,
    route
}:AuthNavProps<'Login'>) {

    const {login} = useContext(AuthContext)
    return(
        <Center>
            <Text style={{
                fontSize:20,
                position:'absolute',
                top:20
            }}>Iniciar sesion</Text>
            <Text style={{
                color:'gray',
                fontSize:15,
                fontWeight:'bold'
            }}>
                Ingrese su nombre de usuario:
            </Text>
            <TextInput
                style={{
                    backgroundColor:'white',
                    width:'80%',
                    marginVertical:10
                }}
                placeholder='Nombre de usuario'/>
            <Button title="Iniciar sesion" onPress={login}/>
            
            
            <Text 
                style={{
                    position:'absolute',
                    bottom:60,
                    color:'gray'
                }}>
                Si aun no esta registrado
                </Text>   
            <Pressable
                 style={{
                     backgroundColor:'#00a8ff',
                     padding:5,
                     borderRadius:5,
                     position:'absolute',
                     bottom:20
                    }} 
                    onPress={()=>{
                        navigation.navigate('Register')
                    }}>
                <Text style={{color:'white'}}>Crear Cuenta</Text>
            </Pressable>

        </Center>
    )
}