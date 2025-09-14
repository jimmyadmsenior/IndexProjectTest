# Pasta de Imagens

Para que as imagens funcionem corretamente, adicione os seguintes arquivos nesta pasta:

## Imagens Necessárias:

1. **Logo_Branca.png** - Logo branca da Index para a navbar
2. **Github_Logo.png** - Logo do GitHub para o footer
3. **placeholder_produto.png** - Imagem placeholder para perfil

## Como adicionar:

1. Copie suas imagens para esta pasta (`public/media/`)
2. Certifique-se que os nomes dos arquivos estão corretos
3. As imagens serão acessíveis via `/media/nome-do-arquivo.png`

## Depois de adicionar as imagens:

Descomente as linhas no PerfilView.vue:
- Linha do logo: `<img src="/media/Logo_Branca.png" alt="Logo Index" class="logo-img">`
- Linha do GitHub: `<img src="/media/Github_Logo.png" alt="GitHub" class="github-icon">`