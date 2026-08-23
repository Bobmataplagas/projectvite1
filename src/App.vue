<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';


const myId="coffe"
let myCondition=false
let condition2 = false
const movies=["Lord of the Rings", "Star Wars", "Dune", "Batman"]

</script>

<template>
  <HeaderComponent> </HeaderComponent>

  <div class="border1">
  <h1 class="title" :class="myCondition ? 'highlight' : 'name'">Desarrollo profesional</h1>
    <h3 class="myCondition title">Alejandro Burgos Rodríguez</h3>
  </div>

  <div>
  <h2 class="name">Perfil</h2>
  <p class="highlight">Estudiante de quinto semestre de LATI en la UADY, nivel alto de inglés para escuchar, leer y nivel intermedio para hablar.</p>
  <p class="highlight">Tengo dominio en la computadora, gusto por las tecnologías, amor a los videojuegos, organizado y creativo  </p>
  <p> _ </p>
  </div>

  <div class="border1">
  <h2 class="name">Educación</h2>
    <p class = "color4">Carrera</p>
    <p class="highlight">UADY Facultad de Contaduría </p>
    <p class="highlight">Licenciatura en Administración Tecnologías de la información | Quinto semestre </p>
    <p> _ </p>
    <p class = "color4">Bachillerato</p>
    <p class="highlight">UADY Preparatoria n°2 </p> 
    <p class="highlight">Septiembre 2021 - Junio 2024 </p>
    <p> _ </p>
  </div>

  <div class="border1">
  <ul>
    <h2 class = "name">Habilidades</h2>
    <li><p class="highlight">Programación en Java</p></li>
    <li><p class="highlight">Mantenimiento de equipos</p></li> 
    <li><p class="highlight">Redes y comunicaciones</p></li> 
    <li><p class="highlight">Organizado</p></li> 
    <li><p class="highlight">Trabajo en equipo</p></li> 
    <li><p class="highlight">Paquetería de Office (Word, Excel, PowerPoint)</p></li> 
    <li><p class="highlight">Diseño de interfaz y experiencia de usuario</p></li> 
    <p> _ </p>
  </ul>
  </div>
  
  <div class="border1">
  <h2 class="name">Idiomas</h2>
    <p class="color4">Inglés: </p>
    <p class="highlight">Nivel alto para escuchar, leer y nivel intermedio para hablar</p>
    <p> _ </p>
    <p class="color4">Español: </p>
    <p class="highlight">Nivel nativo</p>
  </div>
  
  <HelloWorld />
</template>
<style scoped>

.border1{
  border: solid rgba(252, 6, 6, 0.295);
}

.title{
  color:rgb(211, 57, 216);
}

.highlight{
  color:rgb(255, 255, 255);
}

.name{
  color:rgb(214, 34, 88);
}

.color4{
  color:rgb(228, 28, 201);
}

</style>

