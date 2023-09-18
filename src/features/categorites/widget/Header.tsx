import React, { } from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ACTIVE_OPACITY, PADDING } from '../../../utils/constants'
import { Colors } from '../../../utils/colors'
import { Images } from '../../../assets'



export const HeaderCategory = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{
            position: 'absolute',
            top: top + 10,
            width: '100%',
            right: PADDING,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                <Image source={Images.arrowLeft} style={{
                    width: 8,
                    height: 14
                }} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                <Text style={[styles.txtItem, {
                    color: Colors.white
                }]}>{'Done'}</Text>
            </TouchableOpacity>
        </View>
    )
}
