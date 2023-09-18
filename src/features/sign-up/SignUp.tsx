import React, { useState } from 'react'
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Images } from '../../assets'
import { Colors } from '../../utils/colors'
import { ACTIVE_OPACITY, REGEX_LOWERCASE, REGEX_NUBER, REGEX_SPECIAL, REGEX_UPPERCASE } from '../../utils/constants'
import { TextInputComponent } from './widget/TextInputComponent'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signUp } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux';

export const SingUpScreen = () => {
    const { bottom } = useSafeAreaInsets();
    const Regex = [REGEX_LOWERCASE, REGEX_UPPERCASE, REGEX_NUBER, REGEX_SPECIAL];
    const [level, setLevel] = useState(0);
    const dispatch = useDispatch() as any;

    return (
        <View style={styles.container}>
            <Image
                resizeMode={'stretch'}
                source={Images.background} style={styles.imageBackground} />
            <LinearGradient
                colors={Colors.linearGradient} style={styles.linearGradient}>
                <Formik
                    initialValues={{ password: '', email: '', checked: false, secureTextEntry: true }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('The email is not valid.')
                            .required('The email is required'),
                        password: Yup.string()
                            .required('The password is required')
                            .min(6)
                            .max(18)
                    })}
                    onSubmit={(values) => {
                        dispatch(signUp(values));
                    }}>
                    {props => {
                        return (
                            <KeyboardAwareScrollView
                                scrollEnabled={false}
                                enableOnAndroid={true}
                                enableAutomaticScroll={(Platform.OS === 'ios')}
                                contentContainerStyle={{
                                    flex: 1
                                }}
                            >
                                <View style={styles.content}>
                                    <Text style={styles.txtStated}>{'Let’s get you started!'}</Text>
                                    <TextInputComponent
                                        title={'Your email'}
                                        placeholder={'Your email'}
                                        value={props.values.email}
                                        onFocus={props.handleBlur('email')}
                                        error={props.touched.email && props.errors.email && props.values.email.length ? props.errors.email : ''}
                                        onChangeText={props.handleChange('email')}
                                    />
                                    <TextInputComponent
                                        title={'Your password'}
                                        placeholder={'Your password'}
                                        value={props.values.password}
                                        maxLength={18}
                                        onFocus={props.handleBlur('password')}
                                        level={level}
                                        secureTextEntry={props.values.secureTextEntry}
                                        error={props.touched.password && props.errors.password && props.values.password.length ? props.errors.password : ''}
                                        onChangeText={(value) => {
                                            let count = 0;
                                            for (let i = 0; i < Regex.length; i++) {
                                                if (Regex[i].test(value)) {
                                                    count++;
                                                }
                                            }
                                            setLevel(count);
                                            props.setFieldValue('password', value)
                                        }
                                        }
                                        rightComponent={
                                            <TouchableOpacity
                                                activeOpacity={ACTIVE_OPACITY}
                                                onPress={() => props.setFieldValue('secureTextEntry', !props.values.secureTextEntry)}
                                            >
                                                {
                                                    !props.values.secureTextEntry ?
                                                        <Image source={Images.showPassword} style={{
                                                            width: 19,
                                                            height: 10,
                                                            tintColor: Colors.placeholderTextColor
                                                        }} />
                                                        :
                                                        <Image source={Images.hidePassword} style={{
                                                            width: 19,
                                                            height: 19,
                                                            tintColor: Colors.placeholderTextColor
                                                        }} />
                                                }
                                            </TouchableOpacity>
                                        }
                                    />
                                    <View style={styles.viewConfirm}>
                                        <TouchableOpacity
                                            onPress={() => props.setFieldValue('checked', !props.values.checked)}
                                            activeOpacity={ACTIVE_OPACITY}
                                            style={styles.viewChecked}>
                                            {props.values.checked ? <Image source={Images.check} style={styles.iconCheck} /> : null}
                                        </TouchableOpacity>
                                        <Text style={styles.txtYearsOfAge}>{'I am over 16 years of age'}</Text>
                                    </View>
                                    <Text style={styles.txtPolicy}>{'By clicking Sign Up, you are indicating that you have read and agree to the'}
                                        <Text style={{
                                            color: Colors.hightlight
                                        }}>{' Terms of Service'}</Text>
                                        {' and '}
                                        <Text style={{
                                            color: Colors.hightlight
                                        }}>{'Privacy Policy'}</Text>
                                    </Text>
                                    <View style={[styles.bottom, {
                                        marginBottom: bottom + 20,
                                    }]}>
                                        <Text style={{
                                            color: Colors.white
                                        }}>{'Sign Up'}</Text>
                                        <TouchableOpacity
                                            onPress={() => props.handleSubmit()}
                                            activeOpacity={ACTIVE_OPACITY}
                                            disabled={!props.isValid}
                                            style={styles.btnNext}>
                                            <Image source={Images.arrowRight} style={styles.iconArrowRight} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </KeyboardAwareScrollView>
                        );
                    }
                    }
                </Formik>
            </LinearGradient>
        </View>
    )
}
