<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterComponent />
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

main {
  min-height: calc(100vh - 64px - 260px); /* altura total - navbar - footer */
}

.theme-transition {
  transition: background 0.4s ease;
}
</style>
