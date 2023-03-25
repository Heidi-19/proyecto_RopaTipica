<script setup>
//import navegador from './components/navegador.vue'

import TablaCarrito from './components/tablacarrito.vue'
import boton from './components/boton.vue'

</script>

<template>
  <div id="app">   
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
      <h1>Carrito</h1><br>

    <h3>Articulos</h3><br>
    
    <!--<navegador></navegador>-->
    <TablaCarrito></TablaCarrito><br>
    <boton></boton>
    <boton></boton><br>
    <boton></boton>
    <a href="./Venta.vue"></a>
    <p></p>
  </div>
</template>