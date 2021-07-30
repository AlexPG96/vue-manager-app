import { auth } from './firebase';
import firebase from 'firebase/app';

// Generamos esta función para poder reautenticar al usuario para poder cambiar su email y contraseña en la app desde Firebase
export function reauthenticate(password) {
    // Datos del usuario.
    const user = auth.currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(user.email, password)

    return user.reauthenticateWithCredential(credentials);

}