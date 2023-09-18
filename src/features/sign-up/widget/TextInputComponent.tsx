import React, { memo } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import { styles } from '../styles'
import { Colors } from '../../../utils/colors'
const MIN_LEVEL = 100 / 4;
const LEVEL_COLORS = [
    {
        name: 'Week',
        color: 'rgba(224, 81, 81, 1)'
    },
    {
        name: 'Fair',
        color: 'rgba(227, 160, 99, 1)'
    },
    {
        name: 'Good',
        color: 'rgba(100, 127, 255, 1)'
    },
    {
        name: 'Strong',
        color: 'rgba(145, 226, 183, 1)'
    }
];
interface Props extends TextInputProps {
    title?: string,
    error?: string,
    level?: number,
    rightComponent?: JSX.Element
}

export const TextInputComponent = memo((props: Props) => {
    const _percentLevel = props.level ? MIN_LEVEL * props.level : 0;
    return (
        <View style={{
            marginBottom: 26,
        }}>
            <Text style={styles.txtTitle}>{props.value?.length ? props.title : ''}</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor ?? Colors.placeholderTextColor}
                    value={props.value ?? ''}
                    onChangeText={props.onChangeText}
                    style={[
                        styles.inputDefault,
                        props.value.length && styles.inputFocus
                    ]}
                    {...props}
                />
                {
                    props.level && !props.error ?
                        <View style={{
                            backgroundColor: LEVEL_COLORS[props.level - 1].color,
                            height: 1,
                            position: 'absolute',
                            bottom: -1,
                            width: `${_percentLevel}%`,
                        }} />
                        :
                        null
                }
                {
                    props.rightComponent
                }
            </View>
            {props.error && <Text style={styles.txtError}>{props.error}</Text>}
            {props.level && !props.error ? <Text style={[styles.txtError, {
                textAlign: 'right',
                color: LEVEL_COLORS[props.level - 1].color
            }]}>{LEVEL_COLORS[props.level - 1].name}</Text> : null
            }
        </View>
    )
});
