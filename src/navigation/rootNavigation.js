import * as React from "react";
import { CommonActions } from "@react-navigation/native";

export const navigationRef = React.createRef()

export const resetStack = () => {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index:0,
            routes: [
                {name:"MainScreen"}
            ]
        })
    )
}

export const navigationStack = (destination) => {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index:0,
            routes: [
                {name:destination}
            ]
        })
    )
}