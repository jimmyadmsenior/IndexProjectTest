<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },
  computed: {
    shouldShowLayout() {
      // Não mostrar navbar e footer nas páginas do tablet ou na home com tema de programação
      return !this.$route.path.includes('/tablet') && this.$route.name !== 'home'
    }
  }
}
</script>

<template>
  <div id="app">
    <NavBar v-if="shouldShowLayout" />
    <main>
      <router-view />
    </main>
    <FooterComponent v-if="shouldShowLayout" />
  </div>
</template>

<style>
/* Estilos globais */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --background-color: #f5f5f5;
  --text-color: #333;
  --card-bg: #fff;
  --border-color: #e0e0e0;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

html[data-theme="dark"] {
  --background-color: #1e1e1e;
  --text-color: #f5f5f5;
  --card-bg: #2a2a2a;
  --border-color: #444;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
  max-width: none !important;
  height: 100vh !important;
  overflow-x: hidden !important;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, var(--background-color) 0%, #e0e0e0 100%);
  color: var(--text-color);
  min-height: 100vh;
  transition: background 0.4s;
}

html[data-theme="dark"] body {
  background: linear-gradient(135deg, #232323 0%, #23272b 100%);
}

html[data-theme="light"] body {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
}

#app {
  width: 100vw !important;
  max-width: none !important;
  min-height: 100vh;
  margin: 0 !important;
  padding: 0 !important;
  text-align: left !important;
}

main {
  min-height: calc(100vh - 64px - 260px); /* altura total - navbar - footer */
  width: 100vw !important;
  max-width: none !important;
  margin: 0;
  padding: 0;
}

.theme-transition {
  transition: background 0.4s ease;
}
</style>
