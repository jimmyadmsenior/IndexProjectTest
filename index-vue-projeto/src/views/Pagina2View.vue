<template>
  <div class="pagina2-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">🚀 Projeto Inovador</h1>
        <p class="hero-subtitle">Demonstração de tecnologias modernas</p>
      </div>
    </div>
    
    <div class="content-section">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Performance</h3>
          <p>Otimizado para velocidade e eficiência</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3>Design Moderno</h3>
          <p>Interface intuitiva e responsiva</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🔧</div>
          <h3>Tecnologia</h3>
          <p>Vue.js com componentes reutilizáveis</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Responsivo</h3>
          <p>Funciona em todos os dispositivos</p>
        </div>
      </div>
      
      <div class="stats-section">
        <div class="stat-item">
          <div class="stat-number">100%</div>
          <div class="stat-label">Vue.js</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">3</div>
          <div class="stat-label">Componentes</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2</div>
          <div class="stat-label">Páginas</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">∞</div>
          <div class="stat-label">Possibilidades</div>
        </div>
      </div>
      
      <div class="project-info">
        <h2>Sobre o Projeto</h2>
        <p>
          Este projeto demonstra a migração de páginas estáticas para uma aplicação Vue.js moderna, 
          utilizando conceitos avançados como roteamento, componentes reutilizáveis e props. 
          A visualização através de um laptop virtual oferece uma experiência única e imersiva.
        </p>
        
        <div class="tech-stack">
          <span class="tech-tag">Vue.js 3</span>
          <span class="tech-tag">Vue Router</span>
          <span class="tech-tag">Vite</span>
          <span class="tech-tag">CSS3</span>
          <span class="tech-tag">JavaScript ES6+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagina2View'
}
</script>

<style scoped>
.pagina2-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow-y: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.hero-section {
  padding: 60px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 300;
}

.content-section {
  padding: 30px 20px;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.feature-card p {
  opacity: 0.9;
  line-height: 1.5;
}

.stats-section {
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-info {
  text-align: center;
}

.project-info h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.project-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-section {
    flex-direction: column;
    gap: 20px;
  }
  
  .project-info h2 {
    font-size: 1.5rem;
  }
  
  .project-info p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 40px 15px;
  }
  
  .content-section {
    padding: 30px 15px;
  }
  
  .feature-card {
    padding: 20px;
  }
  
  .stats-section {
    padding: 20px;
  }
}
</style>
