<template>
    <nav class="navbar">
        <div class="logo">
            Mi Sitio: WikiBurgod 🦔
        </div>
        <div class="nav-links">
            <RouterLink class="nav-link" to="/">Inicio</RouterLink>

            <div class="dropdown"
            @mouseenter="showMenuCont=true"
            @mouseleave="showMenuCont=false">
                <span class="menu-title">Contenido <span class="arrow">⌄</span></span>
                <div v-if="showMenuCont" class="dropdown-content">
                    <RouterLink to="/constants">Constants</RouterLink>
                    <RouterLink to="/objectLiterals">Object Literals</RouterLink>
                    <RouterLink to="/headerComponent">HeaderComponent</RouterLink>
                    <RouterLink to="/usovbind">Uso de v-bind</RouterLink>
                    <RouterLink to="/importacion">Importación y exportación</RouterLink>
                    <RouterLink to="/promesas">Promesas</RouterLink>
                </div>
            </div>

            <div class="dropdown"
            @mouseenter="showMenu=true"
            @mouseleave="showMenu=false">
                <span class="menu-title">Arreglos <span class="arrow">⌄</span></span>
                <div v-if="showMenu" class="dropdown-content">
                    <RouterLink to="/arreglomovie">Recorrido de movies</RouterLink>
                    <RouterLink to="/arreglosimple">Recorrido</RouterLink>
                </div>
            </div>

            <div class="dropdown"
            @mouseenter="showMenuC=true"
            @mouseleave="showMenuC=false">
                <span class="menu-title">Componentes <span class="arrow">⌄</span></span>
                <div v-if="showMenuC" class="dropdown-content">
                    <RouterLink to="/arraycomponent">Comp. tipo Array</RouterLink>
                    <RouterLink to="/tipoPadre">Padre</RouterLink>
                </div>
            </div>

            <div class="dropdown"
            @mouseenter="showMenuR=true"
            @mouseleave="showMenuR=false">
                <span class="menu-title">Rutas <span class="arrow">⌄</span></span>
                <div v-if="showMenuR" class="dropdown-content">
                    <RouterLink to="/example">Example</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenuCont = ref(false)
const showMenu = ref(false)
const showMenuR = ref(false)
const showMenuC = ref(false)
</script>

<style scoped>
.navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 28px;
    min-height: 58px;
    padding: 0 28px;
    background: #3347ff7a;
    border-bottom: 1px solid #40586b;
    box-shadow: 0 5px 16px rgb(0 0 0 / 18%);
}

.nav-links {
    display: flex;
    align-items: stretch;
    min-height: 58px;
    gap: 4px;
}

.logo {
    color: #f0f5f7;
    font-size: 100%;
    font-weight: bold;
    white-space: nowrap;
}

.nav-link,
.menu-title {
    display: flex;
    align-items: center;
    padding: 0 14px;
    color: #d8e1e8;
    font-size: 90%;
    font-weight: 500;
    text-decoration: none;
    transition: background 160ms ease, color 160ms ease;
}

.nav-link:hover,
.nav-link.router-link-active,
.menu-title:hover,
.dropdown:focus-within .menu-title {
    color: #ffffff;
    background: #6665652a;
}

.dropdown {
    position: relative;
    display: flex;
    align-items: stretch;
}

.menu-title {
    cursor: pointer;
}

.arrow {
    margin-left: 7px;
    color: #ff0062;
    font-size: 15px;
    line-height: 1;
}

.dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 20;
    min-width: 210px;
    padding: 6px;
    background: #1e2d3a;
    border: 1px solid #40586b;
    box-shadow: 0 12px 24px rgb(0 0 0 / 28%);
    display: flex;
    flex-direction: column;
}

.dropdown-content a {
    padding: 10px 12px;
    color: #d8e1e8;
    font-size: 80%;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
}

.dropdown-content a:hover,
.dropdown-content a.router-link-active {
    color: #ffffff;
    background: #ec13045b;
}

@media (max-width: 720px) {
    .navbar {
        align-items: flex-start;
        flex-direction: column;
        gap: 0;
        padding: 12px 14px 0;
    }

    .logo {
        padding: 0 8px 12px;
    }

    .nav-links {
        width: 100%;
        min-height: 46px;
        overflow-x: auto;
    }

    .nav-link,
    .menu-title {
        min-height: 46px;
        padding: 0 11px;
        font-size: 90%;
    }
}
</style>
