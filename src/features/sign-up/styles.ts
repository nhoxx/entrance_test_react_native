import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'
import { Fonts } from '../../assets'
import { PADDING, height } from '../../utils/constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    linearGradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    content: {
        marginHorizontal: PADDING,
        flex: 1,
        justifyContent: 'flex-end'
    },
    input: {
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: Colors.hightlight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    inputDefault: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        height: 28,
        flex: 1,
        marginRight: 10,
        fontFamily: Fonts.LatoRegular,
        color: Colors.white
    },
    inputFocus: {
        fontSize: 16,
        lineHeight: 24,
    },
    txtTitle: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: Colors.placeholderTextColor,
        marginBottom: 15
    },
    txtStated: {
        color: 'white',
        fontFamily: Fonts.LatoRegular,
        fontSize: 22,
        lineHeight: 26.4,
        marginBottom: 70
    },
    btnNext: {
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: Colors.hightlight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconArrowRight: {
        width: 21,
        height: 12
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    txtPolicy: {
        color: Colors.placeholderTextColor,
        fontSize: 12,
        lineHeight: 19.44
    },
    txtYearsOfAge: {
        color: Colors.white,
        fontFamily: Fonts.LatoRegular,
        fontSize: 14,
        lineHeight: 16.8
    },
    viewChecked: {
        borderWidth: 1,
        borderColor: Colors.hightlight,
        borderRadius: 4,
        width: 23,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginRight: 10
    },
    iconCheck: {
        width: 16,
        height: 12
    },
    viewConfirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    imageBackground: {
        width: '100%',
        height: '60%',
    },
    txtError: {
        color: 'red',
        fontSize: 12,
        fontFamily: Fonts.LatoRegular,
        marginTop: 4
    }
})
