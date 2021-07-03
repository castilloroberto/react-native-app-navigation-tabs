import AsyncStorage from '@react-native-async-storage/async-storage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext, useState } from 'react'
import { Button, Text } from 'react-native'
import { AppParamList } from './AppParamList'
import { AuthContext } from './AuthProvider'
import { Center } from './Center'
import Icon from 'react-native-vector-icons/Ionicons';



interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>()




export const AppTabs: React.FC<AppTabsProps> = ({}) => {
        return (
            <Tabs.Navigator 
                screenOptions={({route})=>({
                    tabBarIcon: ({color,size})=>{
                        if (route.name == "Home") {
                            
                            return <Icon name="ios-person" size={30} color="#4F8EF7"/>
                        }else if (route.name == "Search"){
                            return <Icon name="search-outline" size={size} color={color}/>
                        }
                    }
                })}
                tabBarOptions={{
                    activeTintColor:'tomato',
                    inactiveTintColor:'gray'
                }}
                >

                <Tabs.Screen name='Home' component={Home}/>
                      
                <Tabs.Screen name='Search' component={Search}/>
            </Tabs.Navigator>
        )
}

function Home() {
    const {logout} = useContext(AuthContext)

    
    return (
        <Center>
            <Text>Home</Text>
            <Text>Welcome</Text>
            <Button title="Cerrar Sesion" onPress={(()=> logout())}/>
        </Center>
    )
}

function Search() {
    return (
        <Center>
            <Text>Search</Text>
        </Center>
    )
}