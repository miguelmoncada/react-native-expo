import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase'
import { View, Text} from 'react-native'
import Loading from '../../components/Loading'
import UserGuest from '../../screens/Account/UserGuest'
import UserLogged from '../../screens/Account/UserLogged'

export default function MyAccount(props) {

  const { navigation } = props
  const [login, setLogin] = useState(null)
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true)
    })
  }, []);
  
  if (login === null ) {
    return (<Loading isVisible={true} text="Cargando..." />);
  }

  return login ? <UserLogged /> : <UserGuest navigation={navigation}/> ;
}
