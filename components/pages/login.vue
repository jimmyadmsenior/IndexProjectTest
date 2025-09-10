<template>
	<div class="login-container">
		<form class="login-form" @submit.prevent="handleLogin">
			<h2>Login</h2>
			<div class="input-group">
				<label for="email">Email</label>
				<input type="email" id="email" v-model="email" required placeholder="Digite seu email" />
			</div>
			<div class="input-group">
				<label for="password">Senha</label>
				<input type="password" id="password" v-model="password" required placeholder="Digite sua senha" />
			</div>
			<button type="submit">Entrar</button>
			<p class="register-link">Não tem conta? <a href="#">Cadastre-se</a></p>
		</form>
	</div>
</template>

<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		handleLogin() {
			// Aqui você pode adicionar a lógica de autenticação
			alert(`Bem-vindo, ${this.email}!`);
		}
	}
};
</script>

<style scoped>
.login-container {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
}
.login-form {
	background: #fff;
	padding: 2.5rem 2rem;
	border-radius: 16px;
	box-shadow: 0 8px 32px rgba(44, 62, 80, 0.15);
	width: 100%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
}
.login-form h2 {
	text-align: center;
	color: #2575fc;
	margin-bottom: 1rem;
}
.input-group {
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
}
.input-group label {
	font-weight: 500;
	color: #444;
}
.input-group input {
	padding: 0.7rem;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	font-size: 1rem;
	transition: border-color 0.2s;
}
.input-group input:focus {
	border-color: #2575fc;
	outline: none;
}
button[type="submit"] {
	background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
	color: #fff;
	border: none;
	border-radius: 8px;
	padding: 0.8rem;
	font-size: 1.1rem;
	font-weight: bold;
	cursor: pointer;
	transition: background 0.2s;
}
button[type="submit"]:hover {
	background: linear-gradient(90deg, #2575fc 0%, #6a11cb 100%);
}
.register-link {
	text-align: center;
	font-size: 0.95rem;
	color: #666;
}
.register-link a {
	color: #2575fc;
	text-decoration: none;
	font-weight: 500;
}
.register-link a:hover {
	text-decoration: underline;
}
</style>
