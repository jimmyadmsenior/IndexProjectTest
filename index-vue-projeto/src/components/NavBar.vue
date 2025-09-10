<template>
  <header class="navbar-index">
    <div class="navbar-content">
      <div class="navbar-grid">
        <div class="navbar-logo">
          <router-link to="/">
            <img src="/media/Logo_Branca.png" alt="Logo Index" class="logo-img">
          </router-link>
        </div>
        <nav class="navbar-menu">
          <ul>
            <li><router-link to="/smartphones">Smartphones</router-link></li>
            <li><router-link to="/tablets">Tablets</router-link></li>
            <li><router-link to="/fones">Fones</router-link></li>
            <li><router-link to="/relogios">Relógios</router-link></li>
            <li><router-link to="/notebooks">Notebooks</router-link></li>
          </ul>
        </nav>
        <div class="navbar-actions">
          <router-link to="/sacola" class="navbar-btn navbar-btn-sacola" title="Sacola">
            <i class="fas fa-shopping-bag"></i>
          </router-link>
          <router-link to="/login" class="navbar-btn navbar-btn-login">Login</router-link>
          <router-link to="/cadastro" class="navbar-btn navbar-btn-cadastro">Cadastro</router-link>
          <router-link to="/perfil" class="navbar-btn navbar-btn-perfil" title="Meu perfil">
            <i class="fas fa-user"></i>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-index {
  background: #111;
  color: #fff;
  width: 100%;
  min-width: 0;
  box-shadow: none;
  border: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1001;
}

.navbar-content {
  width: 100%;
  padding: 0;
}

.navbar-grid {
  display: grid;
  grid-template-columns: 1.2fr auto 1fr;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  box-sizing: border-box;
}

.navbar-logo {
  justify-self: start;
}

.navbar-logo .logo-img {
  height: 32px;
}

.navbar-menu {
  justify-self: center;
  height: 64px;
  display: flex;
  align-items: center;
}

.navbar-menu ul {
  display: flex;
  gap: 32px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  align-items: center;
  height: 64px;
}

.navbar-menu a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
}

.navbar-menu a:hover {
  color: #33aaff;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  justify-self: end;
  padding-left: 56px;
}

.navbar-btn {
  color: #fff;
  background: #111;
  text-decoration: none;
}

.navbar-btn-sacola {
  border: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-btn-login, .navbar-btn-cadastro {
  border: 1.5px solid #fff;
  padding: 7px 22px;
  border-radius: 10px;
  font-weight: 600;
}

.navbar-btn-perfil {
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
}

.navbar-btn-perfil i {
  font-size: 24px;
}

a, a:visited {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #33aaff;
}
</style>
