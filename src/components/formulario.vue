<template>
    <div>
        <form class="formulario">
      <div class="prin">
      <label for="pais" class="pais">País: </label>
      <select id="pais" class="pais">
        <option value="">Selecciona un país</option>
        <option v-for="pais in paises" :value="pais">{{ pais }}</option>
      </select>
      <br><br>
      <label for="estado" class="estado">Estado: </label>
      <select id="estado" class="estado">
        <option value="">Selecciona un estado</option>
        <option v-for="estado in estados" :value="estado">{{ estado }}</option>
      </select>
      <br><br>
    </div>
    <div class="sec">
      <label for="ciudad" class="ciudad">Ciudad: </label>
      <select id="ciudad" class="ciudad">
        <option value="">Selecciona una ciudad</option>
        <option v-for="ciudad in ciudades" :value="ciudad">{{ ciudad }}</option>
      </select>
    
    
      <br><br>
      <label for="colonia" class="colonia">Colonia: </label>
      <select id="colonia" class="colonia">
        <option value="">Selecciona una colonia</option>
        <option v-for="colonia in colonias" :value="colonia">{{ colonia }}</option>
      </select>
      <br><br>
    </div>
  <div class="ter">
    <label>No. Calle: </label>
    <input value="" type="text">
    <br><br> 
  </div>
  <div class="cuartdiv">
    <label>Email address: </label>
    <input value="" type="text">
    <br><br> 
    
    <label>Codigo Postal: </label>
    <input value="" type="text">
    <br><br> 
  </div>
  <div class="quintdiv">
    <label>Detalles de envío: </label>
    <input value="" type="text">
    <br><br> 
    <label>Costo de envío: </label>
    <input value="" type="text">
  </div>
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

<style>
     .formulario{
      display: grid;
      background-color:aliceblue;
      width: 700px;
      height: 300px;
      align-items: center;
     }

     .prin{
      background-color: aliceblue;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      
     }
     .estado{
      
      
     }

     .ciudad{
      
      
     }

     .sec{
      background-color: aliceblue;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      
     }

     .ter{
      background-color: aliceblue;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      
     }

     .cuartdiv{
      background-color: aliceblue;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      
     }

     .quintdiv{
      background-color: aliceblue;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      
     }
</style>