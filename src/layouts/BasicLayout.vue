<template>
  <div class="basic-layout">
      <Menu />
      <div class="ui container">
        <!-- En <slot /> está el contenido que envolvemos dentro de las etiquetas BasicLayout en Payrolls.vue -->
          <slot />
      </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';

export default {
  name: 'BasicLayout',
  components: {
    Menu,
  }
}
</script>

<style>

</style>