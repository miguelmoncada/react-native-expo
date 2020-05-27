import React, {useRef} from 'react'
import { ScrollView } from 'react-native'
import ImagenLogo from '../../components/ImagenLogo'
import CreateAccount from '../../components/Accounts/CreateAccount'
import CustomViewContainer from '../../components/CustomViewContainer'
import CustomDivider from '../../components/CustomDivider'
import LoginForm from '../../components/Accounts/LoginForm'
import Toast, {DURATION} from 'react-native-easy-toast'

export default function Login(props) {
    
    const {navigation} = props
    const toastRef = useRef(); 

    return (
      <ScrollView>
        <ImagenLogo />
        <CustomViewContainer>
            <CreateAccount navigation={navigation}/>
        </CustomViewContainer>
        <CustomDivider />
        <CustomViewContainer>
          <LoginForm toastRef={toastRef} navigation={navigation}/>
        </CustomViewContainer>
        <Toast ref={toastRef} position="top" opacity={0.7} />
      </ScrollView>   
    );
}