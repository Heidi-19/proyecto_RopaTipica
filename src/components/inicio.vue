<template>
  <div class="pagina-inicio mx-auto">
      <div class="container">
        <form v-if="!mostrarRegistro" @submit.prevent="login">
          <h2>Inicio de sesión</h2>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="correo@gmail.com" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="1234" required >
          </div>
          <button type="submit" class="btn btn-primary">Iniciar sesión</button>
          <button type="button" class="btn btn-link" @click="mostrarRegistroFunc()">Registrarse</button>
        </form>
        <div class="mt-3"> 
          <registro v-if="mostrarRegistro"  @submit.prevent="login" @registroComp="registroCompletado = $event"></registro>
        </div>
      </div>
    </div>
</template>

<script>
import registro from './registro.vue'

export default {
  name: 'InicioSesion',
  data() {
    return {
      email: '',
      password: '',
      loggedIn: false,
      mostrarRegistro: false,
      registroCompletado: false
    }
  },
  methods: {
    login() {
      if (this.email === 'correo@gmail.com' && this.password === '1234' || this.registroCompletado === true) {
        alert('Bienvenido!')
        this.loggedIn = true
        //Se emite el evento que recibira App.vue
        this.$emit('Eventologin', true);
      } else {
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.')
      }
    },
    mostrarRegistroFunc() {
      this.mostrarRegistro = true;
    },
  },
  components: {
    registro
  }
}
</script>