<template>
  <div>
    <h2>Registro de Cliente</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="cliente.nombre" required>
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="cliente.apellido" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="cliente.email" required>
      </div>
      <div>
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" v-model="cliente.telefono" required>
      </div>
      <div>
        <label for="contraseña">Contraseña:</label>
        <input type="Password" id="contrasaña" v-model="cliente.contrasaña" required>
      </div>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cliente: {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        contraseña:''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí podrías enviar los datos del cliente a tu servidor
      console.log('Datos del cliente:', this.cliente);
      // Aquí podrías realizar una petición HTTP para guardar los datos del cliente en tu servidor
      // Por ejemplo, usando axios o fetch
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */

</style>
