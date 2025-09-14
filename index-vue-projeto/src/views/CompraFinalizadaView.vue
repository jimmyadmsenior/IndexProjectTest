<template>
  <div :class="['compra-container', { 'tablet-mode': isTabletMode }]">
    <!-- Efeito de confetes -->
    <div class="confetti-container">
      <div v-for="n in 50" :key="n" class="confetti" :style="getConfettiStyle(n)"></div>
    </div>

    <!-- Navbar para modo tablet -->
    <header v-if="isTabletMode" class="tablet-navbar">
      <div class="navbar-content">
        <div class="navbar-layout">
          <div class="navbar-logo">
            <img src="/media/Logo_Branca.png" alt="Logo Index" class="logo-img">
          </div>
          <nav class="navbar-menu">
            <ul>
              <li><a href="#">Smartphones</a></li>
              <li><a href="#">Tablets</a></li>
              <li><a href="#">Fones</a></li>
              <li><a href="#">Relógios</a></li>
              <li><a href="#">Notebooks</a></li>
            </ul>
          </nav>
          <div class="navbar-actions">
            <a href="#" class="navbar-btn navbar-btn-border">Login</a>
            <a href="#" class="navbar-btn navbar-btn-border">Cadastro</a>
          </div>
        </div>
      </div>
    </header>

    <main :class="{ 'tablet-main': isTabletMode }">
      <div class="compra-content">
        <div class="confirmation-container">
          <img src="/media/Ícone_Check_Verde.png" alt="Check" class="check-icon">
          <h1>Compra Finalizada!</h1>
          <p>
            Seu pagamento foi aprovado e sua compra foi concluída com sucesso.<br>
            Você receberá um e-mail com os detalhes e o código de rastreamento.<br>
            <strong>Obrigado por comprar conosco!</strong>
          </p>
          <button @click="voltarHome" class="home-button">Voltar para a Home</button>
        </div>
      </div>
    </main>

    <!-- Footer para modo tablet -->
    <footer v-if="isTabletMode" class="tablet-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <p>Conheça nosso repositório</p>
          <a href="https://github.com/jimmyadmsenior/Index" target="_blank">
            <img src="/media/Github_Logo.png" alt="GitHub" class="github-icon">
          </a>
        </div>
        <div class="footer-section">
          <h4>Nossas regras</h4>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos e Condições</a>
          <a href="#">Suporte</a>
          <a href="#">Sobre nós</a>
        </div>
        <div class="footer-section">
          <h4>Recursos</h4>
          <a href="#">Smartphones</a>
          <a href="#">Tablets</a>
          <a href="#">Fones</a>
          <a href="#">Relógios</a>
          <a href="#">Notebooks</a>
        </div>
        <div class="footer-section">
          <h4>Conecte-se</h4>
          <a href="#">Repositório</a>
          <a href="#">Nosso App</a>
        </div>
      </div>
      <div class="copy">
        <p>Copyright © 2025 Index Inc. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CompraFinalizadaView',
  mounted() {
    if (this.isTabletMode) {
      this.startConfetti();
    }
  },
  computed: {
    isTabletMode() {
      // Detecta se está sendo renderizado dentro do tablet
      return this.$route.path.includes('/tablet');
    }
  },
  methods: {
    voltarHome() {
      this.$router.push('/');
    },
    getConfettiStyle(index) {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomDelay = Math.random() * 1; // atraso de 0 a 1 segundo (reduzido de 3)
      const randomDuration = 1.5 + Math.random() * 1; // duração de 1.5 a 2.5 segundos (reduzido de 3-5)
      const randomX = Math.random() * 100; // posição horizontal de 0 a 100%
      const randomRotation = Math.random() * 360; // rotação aleatória
      
      return {
        backgroundColor: randomColor,
        left: randomX + '%',
        animationDelay: randomDelay + 's',
        animationDuration: randomDuration + 's',
        transform: `rotate(${randomRotation}deg)`
      };
    },
    startConfetti() {
      // Simular confetti para o modo tablet
      console.log('Confetti animation started!');
    }
  }
}
</script>

<style scoped>
.compra-container {
  width: 100vw !important;
  max-width: none !important;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Modo tablet - fundo normal */
.compra-container.tablet-mode {
  background: #fff !important;
  padding: 0;
  min-height: auto;
  width: 100% !important;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
}

/* Navbar do tablet */
.tablet-navbar {
  background: #111;
  width: 100%;
  position: relative;
  z-index: 1001;
}

.navbar-content {
  width: 100%;
  padding: 0;
}

.navbar-layout {
  display: grid;
  grid-template-columns: 1.2fr auto 1.2fr;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  height: 64px;
  box-sizing: border-box;
}

.navbar-logo {
  justify-self: start;
}

.logo-img {
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
  gap: 40px;
  margin: 0;
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
  gap: 24px;
  justify-self: end;
}

.navbar-btn {
  color: #fff;
  background: #111;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 7px 12px;
}

.navbar-btn-border {
  border: 1.5px solid #fff;
  border-radius: 10px;
  padding: 7px 22px;
  font-weight: 600;
}

.navbar-btn:hover {
  color: #33aaff;
}

/* Main content no tablet */
.tablet-main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  height: calc(100% - 64px - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.compra-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.confirmation-container {
  background: rgba(30, 30, 30, 0.97);
  border-radius: 24px;
  padding: 48px 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
  text-align: center;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Versão compacta para tablet */
.tablet-mode .confirmation-container {
  background: rgba(30, 30, 30, 0.97);
  border-radius: 16px;
  padding: 30px 25px;
  max-width: 320px;
  width: 75%;
}

.check-icon {
  width: 64px;
  margin-bottom: 18px;
  display: block;
}

.tablet-mode .check-icon {
  width: 48px;
  margin-bottom: 15px;
}

h1 {
  color: #00c86f;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.tablet-mode h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  color: #fff;
  font-size: 1.13rem;
  margin-bottom: 22px;
  line-height: 1.5;
}

.tablet-mode p {
  font-size: 0.95rem;
  margin-bottom: 18px;
}

.home-button {
  display: inline-block;
  margin-top: 10px;
  padding: 14px 40px;
  font-size: 1.08rem;
  border-radius: 10px;
  background: #00c86f;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.tablet-mode .home-button {
  padding: 12px 30px;
  font-size: 1rem;
}

.home-button:hover {
  background: #00a85c;
}

/* Footer do tablet */
.tablet-footer {
  background: #f8f9fa;
  border-top: 1px solid #dee2e6;
  padding: 25px 20px 15px;
  margin-top: auto;
  font-size: 0.9rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 100%;
  margin: 0 auto;
}

.footer-logo p {
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
  font-size: 1rem;
}

.github-icon {
  height: 22px;
  width: auto;
  transition: opacity 0.3s;
}

.github-icon:hover {
  opacity: 0.8;
}

.footer-section h4 {
  color: #333;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 1rem;
}

.footer-section a {
  display: block;
  color: #666;
  text-decoration: none;
  margin-bottom: 6px;
  transition: color 0.3s;
  font-size: 0.9rem;
}

.footer-section a:hover {
  color: #333;
}

.copy {
  text-align: center;
  padding-top: 15px;
  margin-top: 20px;
  border-top: 1px solid #dee2e6;
}

.copy p {
  color: #666;
  font-size: 0.85rem;
}

/* Para telas grandes (desktop), quando acessado diretamente */
@media (min-width: 1024px) {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .confirmation-container {
    max-width: 500px;
    padding: 60px 40px;
  }
}

/* Efeito de confetes */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 500;
  overflow: hidden;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  top: -10px;
  border-radius: 50%;
  animation: confetti-fall linear infinite;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

/* Variações dos confetes */
.confetti:nth-child(odd) {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}

.confetti:nth-child(even) {
  width: 6px;
  height: 12px;
  border-radius: 1px;
}

.confetti:nth-child(3n) {
  width: 12px;
  height: 6px;
  border-radius: 50%;
}

.confetti:nth-child(4n) {
  width: 14px;
  height: 14px;
  border-radius: 3px;
}
</style>