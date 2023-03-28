<script>
// Importa los subcomponentes necesarios
import navbar from './components/navegador.vue'
import tabla from './components/tabla.vue'

export default {
  // Registra los subcomponentes
  components: {
    navbar,
    tabla
  }
}
</script>


<!-- Define el componente de la aplicación web -->
<template>
<div id="app">
    <div class="container">
        <div>
          <navbar></navbar>
          <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
          <h1>Esto es un mensaje</h1>
          <a href="Carrito.vue">Carrito</a>
          <tabla></tabla>
        </div>
    </div>
  </div>
</template>

 