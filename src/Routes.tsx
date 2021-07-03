import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Text} from 'react-native'
import { AppTabs } from './AppTabs'
import { AuthParamList } from './AuthParamList'
import { AuthContext } from './AuthProvider'
import { Center } from './Center'
import { Login } from './Screens/Login'
import { Register } from './Screens/Register'

interface RoutesProps {

}
const Stack = createStackNavigator<AuthParamList>()


export const Routes: React.FC<RoutesProps> = ({}) => {

    const {User,login} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        AsyncStorage.getItem('user').then(userString =>{
            
            console.log('userString :',userString);

            if(userString)
                login()

            setLoading(false)

        }).catch((error)=>{
            console.log('Error :',error);
        })
        
    }, [])


    if(loading) return(
        <Center>
            <ActivityIndicator animating={true} size='large'/>
        </Center>
    ) 

        return (
            <NavigationContainer>

                {User ?(
                        <AppTabs/>
                    ):(
                        <Stack.Navigator>
                            <Stack.Screen 
                            options={{
                                headerTitle:"Iniciar Sesion"
                            }}
                            name="Login" 
                            component={Login}/>

                            {/* pantalla de Registro */}
                            <Stack.Screen 
                            name="Register"
                            options={{
                                headerTitle:"Crear Cuenta"
                            }} 
                            component={Register}/>
                        </Stack.Navigator>
                    )
                }
                 
            </NavigationContainer>
        )
}
