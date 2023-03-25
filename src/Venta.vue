<script setup>
//import navegador from './components/navegador.vue'
import TablaVenta from './components/tablaventa.vue'
import formulario from './components/formulario.vue'
import metodopago from './components/metodopago.vue'

</script>

<template>
  <div>
    <h1>
      Venta
    </h1>
    <h3>
      Articulos <br> a pagar:
    </h3>
    <TablaVenta></TablaVenta>
    <h5>Fecha de<br>compra: 24/03/2023</h5>
    <h6>Subtotal: $200 <br>
        Descuento: $150<br>
        Total: $150<br>
        Impuesto: $100</h6><br><br>
        <div>
    <h6>Detalles de envío<br>
        (Aplica impuesto extra a envios internacionales)</h6>
        <formulario></formulario>
      </div>
    <div>
      <h6>Método de pago</h6>
      <metodopago></metodopago>
    </div>
  </div>
</template>