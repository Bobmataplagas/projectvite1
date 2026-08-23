<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
  <section id="center">
    <div class="hero">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5BmfGtKsRN0BnSrljCR2gqmWBb4Ebb-Ob2svo6Al67KQMT3Zq0KKMqw&s=10" width="50%" height="50%" />
    </div>
    <button type="button" class="counter" @click="count++">
      Acariciar 🫱🐶 {{ count }}
    </button>
  </section>

  <div class="ticks"></div>

  <section id="next-steps">         
    <div id="social">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Redes sociales</h2>
      <p>Dónde hay más sobre mí</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/soy_alexburgosxd/" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/alex.burgos.37625843/" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Facebook
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@bobmataplagas3033" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            YouTube
          </a>
        </li>
      </ul>
    </div>
  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
