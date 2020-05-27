import React, {useRef} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagenLogo from '../../components/ImagenLogo'
import CustomViewContainer from '../../components/CustomViewContainer'
import RegisterForm from '../../components/Accounts/RegisterForm'
import Toast, {DURATION} from 'react-native-easy-toast'


export default function userGuest(props) {
    const {navigation} = props 
    const toastRef = useRef();
    
    return (
        <KeyboardAwareScrollView>
            <ImagenLogo />
            <CustomViewContainer>
                <RegisterForm toastRef={toastRef} navigation={navigation}/>
            </CustomViewContainer>
            <Toast ref={toastRef} position="top" opacity={0.7} />
        </KeyboardAwareScrollView>
    )
}