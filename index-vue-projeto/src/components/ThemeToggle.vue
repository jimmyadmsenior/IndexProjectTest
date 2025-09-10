<template>
  <div class="theme-toggle-container">
    <label class="switch">
      <input type="checkbox" id="theme-toggle" v-model="isDarkMode" @change="toggleTheme">
      <span class="slider round"></span>
    </label>
    <span class="theme-label">{{ isDarkMode ? 'Modo Escuro' : 'Modo Claro' }}</span>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    // Inicializar com base na preferência salva ou sistema
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Detectar preferência do sistema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.syncWithSystemTheme(prefersDarkScheme);
    prefersDarkScheme.addEventListener('change', this.syncWithSystemTheme);
  },
  methods: {
    toggleTheme() {
      if (this.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
      
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 1000);
    },
    syncWithSystemTheme(e) {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
          this.isDarkMode = true;
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          this.isDarkMode = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.theme-toggle-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-label {
  font-size: 0.9rem;
  color: #fff;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #3a7bfd;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3a7bfd;
}

input:checked + .slider:before {
  transform: translateX(22px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.theme-transition {
  transition: background 0.4s ease;
}
</style>
