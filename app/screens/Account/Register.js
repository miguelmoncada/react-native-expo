import React, {useRef} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagenLogo from '../../components/ImagenLogo'
import CustomViewContainer from '../../components/CustomViewContainer'
import RegisterForm from '../../components/Accounts/RegisterForm'
import Toast, {DURATION} from 'react-native-easy-toast'


export default function userGuest(props) {

    const toastRef = useRef();

    return (
        <KeyboardAwareScrollView>
            <ImagenLogo />
            <CustomViewContainer>
                <RegisterForm toastRef={toastRef}/>
            </CustomViewContainer>
            <Toast ref={toastRef} position="center" opacity={0.5} />
        </KeyboardAwareScrollView>
    )
}

const style = StyleSheet.create({

});
