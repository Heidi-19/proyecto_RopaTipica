<template>
    <div>
        <form>
      <label for="pais">País: </label>
      <select id="pais">
        <option value="">Selecciona un país</option>
        <option v-for="pais in paises" :value="pais">{{ pais }}</option>
      </select>
      <br><br>
      <label for="estado">Estado: </label>
      <select id="estado">
        <option value="">Selecciona un estado</option>
        <option v-for="estado in estados" :value="estado">{{ estado }}</option>
      </select>
      <br><br>
      <label for="ciudad">Ciudad: </label>
      <select id="ciudad">
        <option value="">Selecciona una ciudad</option>
        <option v-for="ciudad in ciudades" :value="ciudad">{{ ciudad }}</option>
      </select>
      <br><br>
      <label for="colonia">Colonia: </label>
      <select id="colonia">
        <option value="">Selecciona una colonia</option>
        <option v-for="colonia in colonias" :value="colonia">{{ colonia }}</option>
      </select>
      <br><br>  
    <label>Email address: </label>
    <input value="" type="text">
    <br><br> 
    <label>No. Calle: </label>
    <input value="" type="text">
    <br><br> 
    <label>Codigo Postal: </label>
    <input value="" type="text">
    <br><br> 
    <label>Detalles de envío: </label>
    <input value="" type="text">
    <br><br> 
    <label>Costo de envío: </label>
    <input value="" type="text">
    
    </form>  
    </div>
</template>
<script>
  export default {
  data() {
    return {
      paises: ['México', 'Estados Unidos', 'Canadá'], // lista de países
      estados: ['Oaxaca', 'Guerrero', 'Nueva York'], // lista de estados, vacía al principio
      ciudades: ['Tlaxiaco','Nochixtlán','Chicago'], // lista de ciudades, vacía al principio
      colonias: ['Centro','Benito Juarez','Thomas Edisson'], // lista de colonias, vacía al principio

    }
  }
}
</script>