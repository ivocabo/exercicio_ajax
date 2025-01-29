document.addEventListener('DOMContentLoaded', function () {
    async function preencherPerfil(usuario) {
        try {
            const url = `https://api.github.com/users/${usuario}`;

            const resposta = await fetch(url);
            
            if (!resposta.ok) {
                throw new Error('Não foi possível carregar os dados do perfil.');
            }

            const dados = await resposta.json();

            document.getElementById('avatar').src = dados.avatar_url;
            document.getElementById('name').textContent = dados.name || 'Nome não disponível';
            document.getElementById('username').textContent = `@${dados.login}`;
            document.getElementById('repos').textContent = dados.public_repos;
            document.getElementById('followers').textContent = dados.followers;
            document.getElementById('following').textContent = dados.following;
            document.getElementById('profile-link').href = dados.html_url;
            
        } catch (erro) {
            alert('Erro ao carregar o perfil: ' + erro.message);
        }
    }

    preencherPerfil('ogiansouza');
});
