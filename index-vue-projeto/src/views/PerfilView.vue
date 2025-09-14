<template>
  <div :class="['perfil-container', { 'tablet-mode': isTabletMode }]">
    <h1 v-if="!isTabletMode">Meu Perfil</h1>
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
  padding: 10px;
  min-height: auto;
  width: 100% !important;
  justify-content: flex-start;
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
  max-width: none;
  background: #fff;
  border: none;
  border-radius: 0;
  padding: 15px;
  margin: 0;
  box-shadow: none;
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
