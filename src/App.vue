<template>
  <template v-if="user">
    <router-view/>
  </template>
  <Auth v-if="!user && user !== undefined" />
  
</template>

<script>
// Packages
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { auth } from './utils/firebase.js';

// Views
import Auth from "./views/Auth.vue";

export default {
  name: "App",
  components: {
    Auth,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    //const user = store.state.user; Si no lo hacemos reactivo, siempre tendrá el valor inicial sin posibilidad de modificarlo.

    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        store.commit("setUser", user);
      })
    });

    return {
      user,
    }

  }
}

</script>

<style lang="scss">

</style>
