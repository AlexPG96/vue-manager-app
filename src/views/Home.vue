<template>
  <div class="home">
    <h1>Estamos en Home</h1>
    <button @click="logOut">Cerrar sesión</button>
  </div>
</template>

<script>
import { auth } from "../utils/firebase";

export default {
  name: 'Home',
  setup() {
    //Función para desloguearse a través de Firebase.
    const logOut = () => {
      auth.signOut();
    }

    return { 
      logOut,
    }
  }
}
</script>
