import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagenLogo from '../../components/ImagenLogo'
import CustomViewContainer from '../../components/CustomViewContainer'
import RegisterForm from '../../components/Accounts/RegisterForm'
export default function userGuest(props) {
    return (
        <KeyboardAwareScrollView>
            <ImagenLogo />
            <CustomViewContainer>
                <RegisterForm />
            </CustomViewContainer>
        </KeyboardAwareScrollView>
    )
}

const style = StyleSheet.create({

});
