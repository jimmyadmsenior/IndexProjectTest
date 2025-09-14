<template>
  <div class="tablet-container">
    <div class="tablet-device">
      <!-- Tela do tablet -->
      <div class="tablet-screen">
        <div class="screen-bezel">
          <!-- Home button/indicator -->
          <div class="home-indicator"></div>
          
          <!-- Conteúdo da página -->
          <div class="page-content">
            <component :is="currentComponent" v-if="currentComponent" />
            <div v-else class="loading-screen">
              <div class="loading-spinner"></div>
              <p>Carregando página...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Controles de navegação flutuantes -->
    <div class="navigation-controls">
      <button @click="goBack" class="nav-btn back-btn">
        ← Voltar ao Terminal
      </button>
      <div class="page-switcher">
        <button 
          @click="switchPage('perfil')" 
          :class="{ active: currentPage === 'perfil' }"
          class="switch-btn"
        >
          👤 Perfil
        </button>
        <button 
          @click="switchPage('pagina2')" 
          :class="{ active: currentPage === 'pagina2' }"
          class="switch-btn"
        >
          🚀 Projeto
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PerfilView from '../views/PerfilView.vue'
import Pagina2View from '../views/Pagina2View.vue'

export default {
  name: 'TabletFrame',
  components: {
    PerfilView,
    Pagina2View
  },
  props: {
    initialPage: {
      type: String,
      default: 'perfil'
    }
  },
  data() {
    return {
      currentPage: this.initialPage
    }
  },
  computed: {
    currentComponent() {
      switch (this.currentPage) {
        case 'perfil':
          return 'PerfilView'
        case 'pagina2':
          return 'Pagina2View'
        default:
          return null
      }
    }
  },
  methods: {
    switchPage(page) {
      this.currentPage = page
    },
    goBack() {
      this.$router.push('/')
    }
  },
  mounted() {
    // Adiciona uma pequena animação de entrada
    setTimeout(() => {
      this.$el.classList.add('tablet-loaded')
    }, 100)
  }
}
</script>

<style scoped>
.tablet-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.tablet-device {
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
  transition: transform 0.8s ease;
  animation: tabletEntrance 1.2s ease-out;
}

.tablet-container.tablet-loaded .tablet-device {
  transform: perspective(1000px) rotateX(5deg) rotateY(0deg);
}

.tablet-screen {
  width: 800px;
  height: 600px;
  background: #1a1a1a;
  border-radius: 25px;
  padding: 15px;
  box-shadow: 
    0 0 60px rgba(0, 0, 0, 0.4),
    inset 0 2px 15px rgba(255, 255, 255, 0.1),
    0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
}

.tablet-screen::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 20px;
  background: linear-gradient(145deg, #333, #111);
  z-index: 1;
}

.screen-bezel {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
}

.home-indicator {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  z-index: 10;
}

.page-content {
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 15px;
}

.page-content::-webkit-scrollbar {
  display: none;
}

.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: white;
  color: #666;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #2a5298;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

.navigation-controls {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  gap: 20px;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  font-family: 'Fira Code', monospace;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.page-switcher {
  display: flex;
  gap: 15px;
}

.switch-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.switch-btn.active {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border-color: rgba(255, 255, 255, 0.9);
}

.switch-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

@keyframes tabletEntrance {
  from {
    opacity: 0;
    transform: perspective(1000px) rotateX(-30deg) rotateY(0deg) translateY(50px);
  }
  to {
    opacity: 1;
    transform: perspective(1000px) rotateX(5deg) rotateY(0deg) translateY(0px);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 1024px) {
  .tablet-screen {
    width: 700px;
    height: 525px;
  }
  
  .navigation-controls {
    width: 700px;
  }
}

@media (max-width: 768px) {
  .tablet-screen {
    width: 90vw;
    max-width: 600px;
    height: 450px;
  }
  
  .navigation-controls {
    width: 90vw;
    max-width: 600px;
    flex-direction: column;
    gap: 20px;
  }
  
  .tablet-container.tablet-loaded .tablet-device {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
  }
}

@media (max-width: 480px) {
  .tablet-screen {
    width: 95vw;
    height: 400px;
    padding: 10px;
  }
  
  .nav-btn, .switch-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>