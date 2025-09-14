<template>
  <div :class="['perfil-container', { 'tablet-mode': isTabletMode }]">
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
      <h1 v-if="!isTabletMode">Meu Perfil</h1>
      
      <div class="perfil-content">
        <h1 v-if="isTabletMode" class="tablet-title">Meu Perfil</h1>
        
        <div class="perfil-card">
          <div class="perfil-foto-box">
            <label for="foto" class="perfil-foto-upload-label">
              <img :src="fotoPreview || placeholderImage" alt="" class="perfil-foto-preview" id="fotoPreview">
              <span class="upload-btn">Escolher nova foto</span>
              <input type="file" name="foto" id="foto" accept="image/*" @change="previewImage" style="display:none;">
            </label>
            <button @click="atualizarFoto" class="action-button">Atualizar Foto</button>
          </div>
          <div class="perfil-info">
            <p><strong>Nome:</strong> {{ userData.name }}</p>
            <p><strong>E-mail:</strong> {{ userData.email }}</p>
          </div>
          <div class="perfil-senha-form">
            <h2>Alterar Senha</h2>
            <input type="password" v-model="senhaAtual" placeholder="Senha atual" required>
            <input type="password" v-model="novaSenha" placeholder="Nova senha" required>
            <input type="password" v-model="confirmacaoSenha" placeholder="Confirme a nova senha" required>
            <button @click="alterarSenha" class="action-button">Alterar Senha</button>
          </div>
          
          <div v-if="successMessage" class="alert-success">{{ successMessage }}</div>
          <div v-if="errors.length" class="alert-error">
            <div v-for="(error, index) in errors" :key="index">{{ error }}</div>
          </div>
          
          <button @click="logout" class="logout-button">Sair</button>
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
  name: 'PerfilView',
  data() {
    return {
      userData: {
        name: 'Usuário Exemplo',
        email: 'usuario@exemplo.com',
        foto: ''
      },
      senhaAtual: '',
      novaSenha: '',
      confirmacaoSenha: '',
      fotoPreview: null,
      placeholderImage: 'https://via.placeholder.com/120',
      selectedFile: null,
      successMessage: '',
      errors: []
    }
  },
  methods: {
    previewImage(event) {
      if (event.target.files && event.target.files[0]) {
        this.selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.fotoPreview = e.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    atualizarFoto() {
      if (!this.selectedFile) {
        this.errors = ['Por favor, selecione uma imagem para upload.'];
        return;
      }
      
      // Simulação de upload bem-sucedido
      setTimeout(() => {
        this.userData.foto = this.fotoPreview;
        this.successMessage = 'Foto atualizada com sucesso!';
        this.errors = [];
        
        // Limpar mensagem após alguns segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }, 1000);
    },
    alterarSenha() {
      this.errors = [];
      
      // Validações
      if (!this.senhaAtual) {
        this.errors.push('Por favor, informe sua senha atual.');
      }
      
      if (!this.novaSenha) {
        this.errors.push('Por favor, informe uma nova senha.');
      }
      
      if (this.novaSenha !== this.confirmacaoSenha) {
        this.errors.push('As senhas não coincidem.');
      }
      
      if (this.novaSenha.length < 8) {
        this.errors.push('A senha deve ter pelo menos 8 caracteres.');
      }
      
      if (this.errors.length === 0) {
        // Simulação de alteração bem-sucedida
        setTimeout(() => {
          this.successMessage = 'Senha alterada com sucesso!';
          this.senhaAtual = '';
          this.novaSenha = '';
          this.confirmacaoSenha = '';
          
          // Limpar mensagem após alguns segundos
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        }, 1000);
      }
    },
    logout() {
      // Simulação de logout
      alert('Logout realizado com sucesso!');
      this.$router.push('/');
    }
  },
  computed: {
    isTabletMode() {
      // Detecta se está sendo renderizado dentro do tablet
      return this.$route.path.includes('/tablet');
    }
  }
}
</script>

<style scoped>
.perfil-container {
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

/* Modo tablet - sem fundo colorido */
.perfil-container.tablet-mode {
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
  height: calc(100% - 64px - 140px); /* Total - navbar - footer */
}

.tablet-title {
  color: #333;
  margin: 0 0 20px 0;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
}

.perfil-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

/* Ajustes específicos para elementos no modo tablet */
.tablet-mode .perfil-foto-preview {
  width: 90px;
  height: 90px;
}

.tablet-mode .upload-btn {
  font-size: 1rem;
  padding: 8px 16px;
}

.tablet-mode .action-button {
  font-size: 1rem;
  padding: 10px 20px;
  margin: 8px 0;
}

.tablet-mode .logout-button {
  font-size: 1rem;
  padding: 10px 24px;
}

.tablet-mode .perfil-info p {
  font-size: 1rem;
  margin: 8px 0;
}

.tablet-mode .perfil-senha-form h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.tablet-mode .perfil-senha-form input {
  font-size: 1rem;
  padding: 10px 12px;
  margin: 6px 0;
}

.tablet-mode .alert-success,
.tablet-mode .alert-error {
  font-size: 1rem;
  padding: 12px;
  margin: 12px 0;
}

h1 {
  color: #fff;
  margin: 0 0 20px 0;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  width: 100%;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* H1 no modo tablet (não visível) */
.tablet-mode h1 {
  display: none;
}

/* Para telas grandes (desktop), título maior */
@media (min-width: 1024px) {
  h1 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  
  /* No modo tablet, manter oculto mesmo em desktop */
  .tablet-mode h1 {
    display: none;
  }
}

.perfil-card {
  width: 95%;
  max-width: 500px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px auto;
}

/* Cartão no modo tablet */
.tablet-mode .perfil-card {
  width: 100%;
  max-width: 700px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 25px;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Para telas grandes (desktop), quando acessado diretamente */
@media (min-width: 1024px) {
  .perfil-card {
    max-width: 800px;
    padding: 35px;
  }
  
  /* Não aplicar mudanças de desktop no modo tablet */
  .tablet-mode .perfil-card {
    max-width: none;
    padding: 15px;
  }
}

.perfil-foto-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.perfil-foto-upload-label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.perfil-foto-preview {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #ddd;
  transition: border-color 0.3s;
}

.perfil-foto-upload-label:hover .perfil-foto-preview {
  border-color: #3a7bfd;
}

.upload-btn {
  background: #3a7bfd;
  color: #fff;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  transition: background 0.3s;
}

.upload-btn:hover {
  background: #2556a8;
}

.perfil-info {
  width: 100%;
  text-align: center;
}

.perfil-info p {
  font-size: 14px;
  margin: 6px 0;
  color: #555;
}

.perfil-info strong {
  color: #333;
  font-weight: 600;
}

.perfil-senha-form {
  width: 100%;
  max-width: 280px;
  box-sizing: border-box;
}

/* Para telas grandes (desktop), campos de formulário maiores */
@media (min-width: 1024px) {
  .perfil-senha-form {
    max-width: 400px;
  }
}

.perfil-senha-form h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.perfil-senha-form input {
  display: block;
  width: 100%;
  margin: 6px 0;
  padding: 8px 10px;
  border-radius: 6px;
  border: 2px solid #e0e0e0;
  background: #fff;
  color: #333;
  font-size: 13px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.perfil-senha-form input:focus {
  outline: none;
  border-color: #3a7bfd;
}

.action-button {
  background: #3a7bfd;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 8px;
}

.action-button:hover {
  background: #2556a8;
}

.logout-button {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;
}

.logout-button:hover {
  background: #c0392b;
}

.alert-success {
  color: #27ae60;
  background: #d5f5d5;
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 4px solid #27ae60;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.alert-error {
  color: #e74c3c;
  background: #fdd;
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 4px solid #e74c3c;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

/* Responsive - tablet específico */
@media (max-width: 800px) {
  .perfil-container {
    padding: 12px;
  }
  
  .perfil-card {
    max-width: 100%;
    padding: 15px;
  }
  
  .perfil-foto-preview {
    width: 80px;
    height: 80px;
  }
  
  .perfil-senha-form {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .perfil-container {
    padding: 10px;
  }
  
  .perfil-card {
    padding: 12px;
    gap: 12px;
  }
  
  h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
}
</style>
