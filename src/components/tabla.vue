<template>
    <div>
     <table class="table  table-hover table-bordered" style="width: 80%">
       <thead>
         <tr>
           <th>ID</th>
                     <th> Nombre </th>
                     <th> Género </th>
                     <th> Teléfono </th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
                     <td> Andres </td>
                     <td> Hombre </td>
           <td>1354545444</td>
         </tr>
         <tr>
           <td>2</td>
                     <td> Margarita </td>
                     <td> Mujer </td>
           <td>13545451111</td>
         </tr>
         <tr>
           <td>3</td>
                     <td> Omar </td>
                     <td> Hombre </td>
           <td>1354545222</td>
         </tr>
       </tbody>
   
     </table>
   
    </div>
  </template>
   
  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
   
  <style scoped>
   
  </style>