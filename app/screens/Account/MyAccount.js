import React, {useState, useEffect, useContext} from 'react';
import * as firebase from 'firebase'
import { View, Text} from 'react-native'
import Loading from '../../components/Loading'
import UserGuest from '../../screens/Account/UserGuest'
import UserLogged from '../../screens/Account/UserLogged'

/* BEGIN IMPORTING THEME CONTEXT */
import { LanguageContext } from "../../context/LanguageContext";
/* END IMPORTING THEME CONTEXT */
import I18n from '../../utils/I18n';

export default function MyAccount(props) {

  const { navigation } = props
  const [login, setLogin] = useState(null)
  const [ lang ] = useContext(LanguageContext);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true)
    })
  }, []);
  
  if (login === null) {
    return <Loading isVisible={true} text={I18n.t('userGuestScreen.loading', { locale: lang })} />;
  }

  return login ? <UserLogged /> : <UserGuest navigation={navigation}/> ;
}
