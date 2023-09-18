import { Dimensions } from "react-native"

export const ACTIVE_OPACITY = 0.8;
export const PADDING = 24;
export const { width, height } = Dimensions.get('window');
export const REGEX_UPPERCASE = new RegExp('^(?=.*[A-Z]).+$');
export const REGEX_LOWERCASE = new RegExp('^(?=.*[a-z]).+$');
export const REGEX_NUBER = new RegExp('^(?=.*\\d).+$');
export const REGEX_SPECIAL = new RegExp('^(?=.*[-+_!@#$%^&*.,?]).+$');



