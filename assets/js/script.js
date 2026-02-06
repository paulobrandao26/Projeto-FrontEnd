  
  const about = document.querySelector('#about');

  async function getAboutGithub() {
    
   try{
       const resposta = await fetch ('https://api.github.com/users/paulobrandao26/repos?sort=update&per_page=6')   
       const perfil = await resposta.json();

       about.innerHTML = '';
       about.innerHTML =` <figure class="about-image">
              <img src="${perfil.avatar_url}" alt="Foto do perfil - ${perfil.name}">
         </figure>

          <article class="about-content">
           <h2>Sobre mim</h2>

               <p>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta assumenda, quasi sit reiciendis nihil id enim facilis
                iste exercitationem nostrum minus ipsa neque officia dolorum
            ea optio est quis magni.
        </p>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dicta assumenda, quasi sit reiciendis nihil id enim facilis
            iste exercitationem nostrum minus ipsa neque officia dolorum
            ea optio est quis magni.
        </p>

        <div class="about-buttons-data">

            <div class="buttons-container">
                <a href="${perfil.html_url}" target="_blank" class="botao">GitHub</a>
                <a href="#" target="_blank" class="botao-outline">Currículo</a>
            </div>

            <div class="data-container">

                <div class="data-item">
                    <span class="data-number">${perfil.followers}</span>
                    <span class="data-label">Seguidores</span>
                </div>

                <div class="data-item">
                    <span class="data-number">${perfil.public_repos}</span>
                    <span class="data-label">Repositórios</span>
                </div>

            </div>

        </div>
    </article>
    `;
   } catch (error){
    console.error('Erro ao buscar dados do Githu:', error)
   }
}  

getAboutGithub();