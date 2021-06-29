import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'

import defaultStyles from '../config/styles'
import colors from '../config/colors'

function AppTextInput ({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
})
