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

  <div style="border: solid Purple;">
  <h1 class="title" :class="myCondition ? 'highlight' : 'red'">ADA1</h1>
    <h3 class="myCondition title">Alejandro Burgos Rodríguez</h3>
  </div>

  <div style="border: solid blue;">
  <h2>Carrera:</h2>
  <p>Soy estudiante de la carrera de Administración en Tecnologías de la Información</p>
  </div>

  <div style="border: solid purple;">
  <h2>Lista no ordenada de videojuegos favoritos:</h2>
  <ul>
    <li>Metaphor: Re Fantazio</li>
    <li>The World Ends With You</li>
    <li>Persona 3</li>
    <li>Golden Sun</li>
  </ul>
  </div>

  <div style="border: solid blue;">
    <h2>Link de un video de mi canal:</h2>
    <a href="https://youtu.be/Dg3izx-_44s">Video</a>
  </div>
  
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5BmfGtKsRN0BnSrljCR2gqmWBb4Ebb-Ob2svo6Al67KQMT3Zq0KKMqw&s=10" 
  alt="perro" width="30%" height="30%">
  

  <HelloWorld />
</template>
<style scoped>
.title{
  color:blueviolet;
}

.highlight{
  color:yellow;
}

.red{
  color:red;
}
</style>

