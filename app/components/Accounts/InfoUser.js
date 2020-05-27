import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import I18n from '../../utils/I18n';
import { LanguageContext } from '../../context/LanguageContext';
import * as firebase from "firebase"
/* import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'; */
import { Snackbar } from 'react-native-paper';

export default function InfoUser(props) {
  
  const [ lang ] = useContext(LanguageContext);
  const { userInfo: { displayName, photoURL, email } } = props;
  const [ snackVisible, setSnackVisible ] = useState(false);
  const [ snackMessage, setSnackMessage ] = useState('');

  const onDismissSnackBar = () => setSnackVisible(false);
  
  
  const changeAvatar = async () => {
/*     const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamara = 
    resultPermission.permissions.cameraRoll.status;
    console.log(resultPermissionCamara)
    if (resultPermissionCamara === "denied") {
      setSnackVisible(true);
      setSnackMessage("Not Allowed");
    } else {
      setSnackVisible(true);
      setSnackMessage("Allowed");
    } */

  };
  
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={{
          uri: photoURL ? photoURL : 'https://api.adorable.io/avatars/103/abott@adorable.png'
        }}
      />
      <View>
        <Text style={styles.displayName}>{I18n.t('infoUserScreen.name', { locale: lang })}: { displayName ? displayName : ""  } </Text>
        <Text style={styles.displayName}> { email ? email : I18n.t('infoUserScreen.socialLogin', { locale: lang }) }</Text>
      </View>
      <View style={{ marginTop: 10 }}>
				<Snackbar visible={snackVisible} onDismiss={ onDismissSnackBar} duration={3000}>
					<Text>{snackMessage}</Text>
				</Snackbar>
			</View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold"
  }
});
