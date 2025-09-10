<template>
  <div class="home">
    <h1>Bem-vindo ao Projeto Vue</h1>
    <p>Este projeto demonstra a migração de páginas do projeto Index para Vue.js</p>
    
    <div class="pages-container">
      <router-link to="/perfil" class="page-card">
        <h2>Página de Perfil</h2>
        <p>Visualizar e editar informações de perfil</p>
        <div class="btn">Acessar</div>
      </router-link>
      
      <router-link to="/pagina2" class="page-card">
        <h2>Página 2</h2>
        <p>Segunda página do projeto (em breve)</p>
        <div class="btn">Acessar</div>
      </router-link>
    </div>
    
    <ThemeToggle class="theme-toggle" />
  </div>
</template>

<script>
import ThemeToggle from '../components/ThemeToggle.vue'

export default {
  name: 'HomeView',
  components: {
    ThemeToggle
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

p {
  margin-bottom: 40px;
  color: #666;
}

.pages-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.page-card {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.page-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.page-card h2 {
  color: #333;
  margin-bottom: 10px;
}

.page-card p {
  color: #666;
  margin-bottom: 20px;
  flex-grow: 1;
}

.btn {
  background-color: #3a7bfd;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2556a8;
}

.theme-toggle {
  margin: 0 auto;
  justify-content: center;
}

/* Tema escuro */
html[data-theme="dark"] .home {
  background-color: #1e1e1e;
}

html[data-theme="dark"] h1,
html[data-theme="dark"] h2 {
  color: #fff;
}

html[data-theme="dark"] p {
  color: #ccc;
}

html[data-theme="dark"] .page-card {
  background-color: #2a2a2a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

html[data-theme="dark"] .page-card h2 {
  color: #fff;
}

html[data-theme="dark"] .page-card p {
  color: #ddd;
}

/* Tema claro */
html[data-theme="light"] .home {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .pages-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
