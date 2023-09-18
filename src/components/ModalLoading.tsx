import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { Colors } from '../utils/colors';
import { useSelector } from 'react-redux';

const ModalLoading = () => {
    const isModalLoading = useSelector((state: any) => state?.userReducer?.isModalLoading);
    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={isModalLoading}>
            <View style={styles.centeredView}>
                <ActivityIndicator size={'large'} color={Colors.white} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.loading
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalLoading;