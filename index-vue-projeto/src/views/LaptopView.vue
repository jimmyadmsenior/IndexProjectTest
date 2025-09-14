<template>
  <div class="tablet-view">
    <TabletFrame :initial-page="selectedPage" />
  </div>
</template>

<script>
import TabletFrame from '../components/TabletFrame.vue'

export default {
  name: 'TabletView',
  components: {
    TabletFrame
  },
  computed: {
    selectedPage() {
      return this.$route.params.page || 'perfil'
    }
  },
  mounted() {
    // Esconder a barra de navegação se houver
    document.body.style.overflow = 'hidden'
  },
  unmounted() {
    // Restaurar o scroll quando sair da página
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.tablet-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>