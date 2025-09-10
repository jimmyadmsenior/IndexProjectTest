<template>
  <footer>
    <div class="footer-content">
      <div class="footer-logo">
        <p>Conheça nosso repositório</p>
        <a href="https://github.com/jimmyadmsenior/Index" target="_blank">
          <i class="fab fa-github github-icon"></i>
          <span>GitHub</span>
        </a>
      </div>
      <div class="footer-section">
        <h4>Nossas regras</h4>
        <router-link to="/politica-privacidade">Política de Privacidade</router-link>
        <router-link to="/termos-condicoes">Termos e Condições</router-link>
        <router-link to="/suporte">Suporte</router-link>
        <router-link to="/sobre-nos">Sobre nós</router-link>
      </div>
      <div class="footer-section">
        <h4>Recursos</h4>
        <router-link to="/smartphones">Smartphones</router-link>
        <router-link to="/tablets">Tablets</router-link>
        <router-link to="/fones">Fones</router-link>
        <router-link to="/relogios">Relógios</router-link>
        <router-link to="/notebooks">Notebooks</router-link>
      </div>
      <div class="footer-section">
        <h4>Conecte-se</h4>
        <a href="https://github.com/jimmyadmsenior/Index">Repositório</a>
        <router-link to="/download-app">Nosso App</router-link>
      </div>
    </div>
    <div class="copy">
      <p>Copyright © 2025 Index Inc. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  background: #111;
  color: white;
  padding: 40px 5% 20px;
  margin-top: 60px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo .github-icon {
  font-size: 28px;
  margin-right: 8px;
}

.footer-logo a {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  color: #ccc;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section h4 {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.footer-section a {
  margin-bottom: 8px;
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #fff;
}

.copy {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #333;
  font-size: 14px;
  color: #888;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
