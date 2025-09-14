<template>
  <div class="programming-home">
    <!-- Matrix effect background -->
    <canvas ref="matrixCanvas" class="matrix-bg"></canvas>
    
    <!-- Terminal window -->
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-controls">
          <span class="control red"></span>
          <span class="control yellow"></span>
          <span class="control green"></span>
        </div>
        <div class="terminal-title">portfolio.exe</div>
      </div>
      
      <div class="terminal-content">
        <div class="terminal-line">
          <span class="prompt">$</span>
          <span class="typed-text">{{ typedText }}</span>
          <span class="cursor">|</span>
        </div>
        
        <div class="code-output" v-if="showOutput">
          <div class="output-line">Inicializando portfólio...</div>
          <div class="output-line">Carregando projetos Vue.js...</div>
          <div class="output-line success">✓ Sistema pronto!</div>
          
          <div class="project-menu">
            <div class="menu-title">Selecione um projeto para visualizar:</div>
            
            <div 
              @click="goToTabletView('perfil')" 
              class="menu-item"
              @mouseenter="playHoverSound"
            >
              <span class="menu-number">[1]</span>
              <span class="menu-text">Sistema de Perfil</span>
              <span class="menu-desc">// Gerenciamento completo de usuário</span>
            </div>
            
            <div 
              @click="goToTabletView('pagina2')" 
              class="menu-item"
              @mouseenter="playHoverSound"
            >
              <span class="menu-number">[2]</span>
              <span class="menu-text">Projeto Inovador</span>
              <span class="menu-desc">// Demonstração de tecnologias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating code snippets -->
    <div class="floating-code">
      <div class="code-snippet snippet-1">
        <span class="keyword">const</span> <span class="variable">projeto</span> = <span class="string">'Vue.js'</span>
      </div>
      <div class="code-snippet snippet-2">
        <span class="function">router</span>.<span class="method">push</span>(<span class="string">'/perfil'</span>)
      </div>
      <div class="code-snippet snippet-3">
        <span class="keyword">export default</span> { <span class="property">name</span>: <span class="string">'Portfolio'</span> }
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      typedText: '',
      showOutput: false,
      fullText: 'welcome_to_portfolio.init()',
      typeSpeed: 100
    }
  },
  methods: {
    goToTabletView(page) {
      this.$router.push({ name: 'tablet-view', params: { page } })
    },
    
    typeText() {
      let index = 0
      const typing = setInterval(() => {
        if (index < this.fullText.length) {
          this.typedText += this.fullText[index]
          index++
        } else {
          clearInterval(typing)
          setTimeout(() => {
            this.showOutput = true
          }, 1000)
        }
      }, this.typeSpeed)
    },
    
    initMatrixEffect() {
      const canvas = this.$refs.matrixCanvas
      const ctx = canvas.getContext('2d')
      
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]().*;'
      const fontSize = 14
      const columns = canvas.width / fontSize
      const drops = []
      
      for (let i = 0; i < columns; i++) {
        drops[i] = 1
      }
      
      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = '#0F3460'
        ctx.font = fontSize + 'px monospace'
        
        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      }
      
      setInterval(draw, 35)
    },
    
    playHoverSound() {
      // Simular som de hover com vibração visual
      const menuItems = document.querySelectorAll('.menu-item')
      menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.transform = 'translateX(10px)'
        })
        item.addEventListener('mouseleave', () => {
          item.style.transform = 'translateX(0)'
        })
      })
    }
  },
  
  mounted() {
    this.initMatrixEffect()
    setTimeout(() => {
      this.typeText()
    }, 1000)
    
    // Cursor personalizado
    document.body.style.cursor = 'none'
    
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    })
  },
  
  beforeUnmount() {
    // Restaurar cursor normal
    document.body.style.cursor = 'auto'
    const cursor = document.querySelector('.custom-cursor')
    if (cursor) {
      cursor.remove()
    }
  }
}
</script>

<style scoped>
/* Importar fonte de programação */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

.programming-home {
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  color: #00ff41;
  font-family: 'Fira Code', 'Courier New', monospace;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  opacity: 0.3;
}

.terminal-window {
  background: rgba(15, 15, 15, 0.95);
  border: 2px solid #00ff41;
  border-radius: 8px;
  width: 90vw;
  max-width: 900px;
  min-width: 600px;
  box-shadow: 
    0 0 50px rgba(0, 255, 65, 0.3),
    inset 0 0 20px rgba(0, 255, 65, 0.1);
  z-index: 10;
  backdrop-filter: blur(10px);
  animation: terminalGlow 2s ease-in-out infinite alternate;
}

.terminal-header {
  background: #1a1a1a;
  border-bottom: 1px solid #00ff41;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px 6px 0 0;
}

.terminal-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #ffbd2e; }
.green { background: #28ca42; }

.terminal-title {
  color: #00ff41;
  font-weight: 600;
  font-size: 14px;
}

.terminal-content {
  padding: 20px;
  min-height: 400px;
}

.terminal-line {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
}

.prompt {
  color: #ff6b6b;
  margin-right: 10px;
  font-weight: bold;
}

.typed-text {
  color: #00ff41;
  font-weight: 500;
}

.cursor {
  color: #00ff41;
  animation: blink 1s infinite;
  font-weight: bold;
}

.code-output {
  margin-top: 30px;
  animation: fadeInUp 1s ease-out;
}

.output-line {
  margin: 8px 0;
  color: #888;
  font-size: 14px;
}

.output-line.success {
  color: #00ff41;
  font-weight: 600;
}

.project-menu {
  margin-top: 30px;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
}

.menu-title {
  color: #00ff41;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 16px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 15px 10px;
  margin: 8px 0;
  border-left: 3px solid #333;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.menu-item:hover {
  border-left-color: #00ff41;
  background: rgba(0, 255, 65, 0.1);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

.menu-number {
  color: #ff6b6b;
  font-weight: bold;
  margin-right: 15px;
  min-width: 30px;
}

.menu-text {
  color: #00ff41;
  font-weight: 600;
  margin-right: 15px;
  flex: 1;
}

.menu-desc {
  color: #666;
  font-style: italic;
  font-size: 12px;
}

.floating-code {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.code-snippet {
  position: absolute;
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0.7;
  animation: float 6s ease-in-out infinite;
}

.snippet-1 {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.snippet-2 {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.snippet-3 {
  bottom: 15%;
  left: 10%;
  animation-delay: 4s;
}

.keyword {
  color: #ff6b6b;
  font-weight: 600;
}

.variable {
  color: #4ecdc4;
}

.string {
  color: #ffe66d;
}

.function {
  color: #a8e6cf;
}

.method {
  color: #ff8b94;
}

.property {
  color: #dda0dd;
}

/* Animações */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(1deg);
  }
  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

@keyframes terminalGlow {
  0% {
    box-shadow: 
      0 0 50px rgba(0, 255, 65, 0.3),
      inset 0 0 20px rgba(0, 255, 65, 0.1);
  }
  100% {
    box-shadow: 
      0 0 80px rgba(0, 255, 65, 0.5),
      inset 0 0 30px rgba(0, 255, 65, 0.2);
  }
}

/* Cursor personalizado */
:global(.custom-cursor) {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #00ff41;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  animation: cursorPulse 1.5s infinite;
}

@keyframes cursorPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .terminal-window {
    width: 95vw;
    min-width: 320px;
    margin: 20px;
  }
  
  .terminal-content {
    padding: 15px;
  }
  
  .terminal-line {
    font-size: 16px;
  }
  
  .menu-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .floating-code {
    display: none;
  }
  
  .programming-home {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .terminal-window {
    width: 98vw;
    margin: 10px;
  }
  
  .terminal-line {
    font-size: 14px;
  }
  
  .menu-text {
    font-size: 14px;
  }
  
  .menu-desc {
    font-size: 11px;
  }
  
  .terminal-content {
    padding: 10px;
  }
}
</style>
