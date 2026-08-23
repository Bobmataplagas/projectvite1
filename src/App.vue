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
    <img src="https://instagram.fmid2-1.fna.fbcdn.net/v/t51.2885-19/447291622_1649577125794714_2779345369607117205_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDIxLkMzIn0%3D&_nc_ohc=6zGIOzOewt0Q7kNvwE_9qbZ&_nc_oc=Adq3Lg3jqftHSIfAUAB5-2EOOLEvEWO0l9nCIuMJaPFdrJ0y2mmUfIYCQPvdeFzXAEoCLvSrq3crTPo12C8H-691&_nc_zt=24&_nc_ht=instagram.fmid2-1.fna&_nc_ss=7b6a8&oh=00_AQG-bjhV7o-MUVxsaw4XJ7hQQ3UiGzzCmnv3jfbfe_hAdA&oe=6A913AC7" width="15%" height="15%"/>
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
  </ul>
  <img src="https://preview.redd.it/ryan-beckford-black-hackerman-matrix-hack-meme-hd-template-v0-jbcj0uqbihg41.jpg?width=1080&crop=smart&auto=webp&s=1f1fdd3babf829ca1b2805ebe9137c599ca4347a" width="15%" height="15%"/>
  </div>
  
  <div class="border1">
  <ul>
    <h2 class = "name">Cosas favoritas</h2>
    <li><p class="highlight">Videojuegos</p></li>
    <li><p class="highlight">Perros</p></li>
    <li><p class="highlight">Entrenar</p></li> 
    <li><p class="highlight">Anime</p></li> 
  </ul>
  <img src="https://i.redd.it/i-really-miss-the-sonic-artwork-from-the-2000s-v0-z8zjdhz2tzbf1.png?width=704&format=png&auto=webp&s=357d219e6582230070be3ed5c316e29378022ad7" width="20%" height="20%"/>
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

