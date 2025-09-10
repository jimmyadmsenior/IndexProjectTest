<template>
  <div class="pagina2-container">
    <h1>Página 2</h1>
    <p>Esta página será substituída pela segunda página do projeto original.</p>
    <button @click="$router.push('/')" class="back-button">Voltar para Home</button>
  </div>
</template>

<script>
export default {
  name: 'Pagina2View'
}
</script>

<style scoped>
.pagina2-container {
  max-width: 800px;
  margin: 90px auto;
  padding: 30px;
  text-align: center;
  background: rgba(30,30,30,0.97);
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  color: #fff;
}

.back-button {
  background: #3a7bfd;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.back-button:hover {
  background: #2556a8;
}
</style>
