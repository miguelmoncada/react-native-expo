import React from 'react'
import { ScrollView } from 'react-native'
import ImagenLogo from '../../components/ImagenLogo'
import CreateAccount from '../../components/Accounts/CreateAccount'
import CustomViewContainer from '../../components/CustomViewContainer'
import CustomDivider from '../../components/CustomDivider'

export default function Login(props) {
    
    const {navigation} = props 

    return (
      <ScrollView>
        <ImagenLogo />
        <CustomViewContainer>
            <CreateAccount navigation={navigation}/>
        </CustomViewContainer>
        <CustomDivider />
        <CustomViewContainer>
        </CustomViewContainer>
      </ScrollView>   
    );
}