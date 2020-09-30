import React from 'react'
import { View, Text, Image } from 'react-native'

const ChatScreen = () => {
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Image source={{ uri: 'https://www.kashan.sa/assets/images/agency/services/apps_development/app_support.png' }} style={{ width: 350, height: 350, }} />
        </View>
    )
}

export default ChatScreen
