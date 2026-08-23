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

  <div style="border: solid blue;">
  <h2 class="name">Perfil</h2>
  <p class="highlight">Estudiante de quinto semestre de LATI en la UADY, nivel alto de inglés para escuchar, leer y nivel intermedio para hablar.</p>
  <p class="highlight">Tengo dominio en la computadora, gusto por las tecnologías, amor a los videojuegos, organizado y creativo  </p>
  </div>

  <div style="border: solid purple;">
  <h2 class="name">Educación</h2>
  <ul>
    <li>Metaphor: Re Fantazio</li>
    <li>The World Ends With You</li>
    <li>Persona 3</li>
    <li>Golden Sun</li>
  </ul>
  </div>

  <div style="border: solid blue;">
    <h2 class="name">Link de un video de mi canal:</h2>
    <a href="https://youtu.be/Dg3izx-_44s">Video</a>
  </div>
  
  <HelloWorld />
</template>
<style scoped>

.border1{
  border: solid rgba(255, 34, 34, 0.61);
}

.title{
  color:rgb(216, 57, 57);
}

.highlight{
  color:rgb(255, 255, 255);
}

.name{
  color:rgb(214, 34, 88);
}
</style>

