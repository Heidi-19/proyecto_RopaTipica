<template>
    <div>
     <table class="table table-hover table-bordered" id="tabla" style="width: 80%">
        <tr>
          <th>Artículo</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
  <tbody>
    <tr v-for="(fila, index) in fila" :key="index">
      <td>{{ fila.columna1 }}</td>
      <td>{{ fila.columna2 }}</td>
      <td>{{ fila.columna3 }}</td>
    </tr>

  </tbody>
   
     </table>
   
    </div>
  </template>
   
<script>
  export default {
    name: "TablaVenta",
    data () {
      return {
        fila:[
        { columna1: "Artículo 1", columna2: "X1", columna3: "$100" },
        { columna1: "Artículo 2", columna2: "X1", columna3: "$100" }]
    }
}
}
</script>

   
  <style scoped>
   #tabla{
    background-color: aliceblue;
    border-color:blue;
  }
  </style>