<template>
  <div class="perfil-container">
    <h1>Meu Perfil</h1>
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
    </div>
    <button @click="logout" class="logout-button">Sair</button>
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
  }
}
</script>

<style scoped>
/* Estilos para a página de perfil */
.perfil-container {
  max-width: 500px;
  margin: 90px auto 0 auto;
  background: rgba(30,30,30,0.97);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
  padding: 40px 32px 32px 32px;
  color: #fff;
  text-align: center;
}

.perfil-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.perfil-foto-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.perfil-foto-upload-label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.perfil-foto-preview {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-bottom: 8px;
}

.upload-btn {
  background: #3a7bfd;
  color: #fff;
  padding: 6px 18px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s;
}

.upload-btn:hover {
  background: #2556a8;
}

.perfil-info {
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.perfil-senha-form {
  width: 100%;
}

.perfil-senha-form input {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #222;
  color: #fff;
}

.action-button {
  background: #3a7bfd;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  margin-top: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.action-button:hover {
  background: #2556a8;
}

.logout-button {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 32px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 24px;
}

.logout-button:hover {
  background: #c0392b;
}

.alert-success {
  color: #0f0;
  margin-top: 10px;
}

.alert-error {
  color: #f55;
  margin-top: 10px;
}

/* Adicionar responsividade */
@media (max-width: 600px) {
  .perfil-container {
    padding: 20px 8px;
  }
  .perfil-foto-preview {
    width: 90px;
    height: 90px;
  }
}
</style>
