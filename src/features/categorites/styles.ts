import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'
import { PADDING, height, width } from '../../utils/constants'
import { Fonts } from '../../assets';
export const GAP = 10;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    linearGradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        paddingHorizontal: PADDING,
        paddingBottom: PADDING * 2
    },
    imageBackground: {
        width: '100%',
        height: '60%',
    },
    itemContainer: {
        borderRadius: 20,
        width: ((width - (PADDING * 2) - (GAP * 2)) / 3),
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginTop: GAP,
        height: 71,
        paddingHorizontal: GAP,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.white12
    },
    txtWelcome: {
        color: Colors.white,
        fontFamily: Fonts.LatoRegular,
        fontSize: 22,
        lineHeight: 26.4,
        marginTop: height / 4
    },
    subWelcome: {
        color: Colors.white82,
        fontFamily: Fonts.LatoRegular,
        fontSize: 14,
        lineHeight: 22.68,
        marginBottom: 15,
    },
    txtItem: {
        color: Colors.white82,
        fontFamily: Fonts.LatoRegular,
        fontSize: 14,
        lineHeight: 22.68,
        textAlign: 'center'
    }
})
