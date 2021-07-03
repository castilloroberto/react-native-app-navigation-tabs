import React from "react";
import { Text } from "react-native";
import { AuthNavProps } from "../AuthParamList";
import { Center } from "../Center";

export function Register({
    navigation,
    route
}:AuthNavProps<'Register'>) {
    return(
        <Center>
            <Text>Registrarse</Text>
        </Center>
    )
}