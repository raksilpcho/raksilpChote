import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'

const Loading = () => {

    return (
        <View style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: 'rgba(255,255,255,0.7)',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ActivityIndicator size="large" color="#3887C8" />
        </View>
    )
}

export default Loading