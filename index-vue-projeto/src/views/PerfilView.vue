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
/* Estilos para a página de perfil - design limpo para tablet */
.perfil-container {
  max-width: none;
  margin: 0;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  padding: 30px;
  color: #333;
  text-align: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;
}

.perfil-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
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
  border: 3px solid #ddd;
  margin-bottom: 8px;
  transition: border-color 0.3s;
}

.perfil-foto-upload-label:hover .perfil-foto-preview {
  border-color: #3a7bfd;
}

.upload-btn {
  background: #3a7bfd;
  color: #fff;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.3s;
}

.upload-btn:hover {
  background: #2556a8;
}

.perfil-info {
  font-size: 16px;
  margin-bottom: 12px;
  color: #555;
}

.perfil-info strong {
  color: #333;
  font-weight: 600;
}

.perfil-senha-form {
  width: 100%;
  max-width: 400px;
}

.perfil-senha-form h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
}

.perfil-senha-form input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: #fff;
  color: #333;
  font-size: 14px;
  transition: border-color 0.3s;
}

.perfil-senha-form input:focus {
  outline: none;
  border-color: #3a7bfd;
}

.action-button {
  background: #3a7bfd;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.3s;
}

.action-button:hover {
  background: #2556a8;
}

.logout-button {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 30px;
}

.logout-button:hover {
  background: #c0392b;
}

.alert-success {
  color: #27ae60;
  background: #d5f5d5;
  padding: 12px 15px;
  border-radius: 6px;
  margin-top: 15px;
  border-left: 4px solid #27ae60;
}

.alert-error {
  color: #e74c3c;
  background: #fdd;
  padding: 12px 15px;
  border-radius: 6px;
  margin-top: 15px;
  border-left: 4px solid #e74c3c;
}

/* Responsividade */
@media (max-width: 600px) {
  .perfil-container {
    padding: 20px 15px;
  }
  
  .perfil-card {
    padding: 20px;
  }
  
  .perfil-foto-preview {
    width: 100px;
    height: 100px;
  }
}
</style>
