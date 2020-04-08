import React from 'react'
import { StyleSheet ,Text, View, ScrollView, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import ImagenLogo from '../../components/ImagenLogo'
import CreateAccount from '../../components/CreateAccount'

export default function Login(props) {
    
    const {navigation} = props 

    return (
      <ScrollView>
          <ImagenLogo />
        <View style={style.viewContainer}>
            <CreateAccount navigation={navigation}/>
        </View>
        <Divider style={style.divider} />
        <View style={style.viewContainer}>
        </View>
      </ScrollView>   
    );
}

const style = StyleSheet.create({
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40,
    }
});
