<script>
// Importa los subcomponentes necesarios
import navbar from './components/navegador.vue'
import tabla from './components/tabla.vue'
import InicioSesion from './components/inicio.vue'

export default {
  // Registra los subcomponentes
  components: {
    navbar,
    tabla,
    InicioSesion
  },
  // Define los datos de la aplicación
  data() {
    return {
      loggedIn: false // Indica si el usuario está autenticado o no
    }
  }
}
</script>


<!-- Define el componente de la aplicación web -->
<template>
<div id="app">
    <div class="container">
      <!-- Si el usuario no está autenticado, muestra el componente de inicio de sesión -->
      <div v-if="!loggedIn">
        <InicioSesion @Eventologin="loggedIn = $event"></InicioSesion>
      </div>
      <div v-else>
        <!-- Si el usuario está autenticado, muestra el contenido principal -->
        <div>
          <navbar></navbar>
          <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
          <h1>Esto es un mensaje</h1>
          <a href="Carrito.vue">Carrito</a>
          <tabla></tabla>
        </div>
      </div>
    </div>
  </div>
</template>

 