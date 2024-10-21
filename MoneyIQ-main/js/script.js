// Mudança de tema de dark para light
const toggleTheme = document.getElementById("toggleTheme"); /* chama o elemento toggleTheme */
const rootHtml = document.documentElement;

// Função para Alterar o Tema

function changeTheme () {
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// Fim da Função de Mudar Tema

/*-------------------------------Menu-------------------------------------- */ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')



/*------------------------ Remove menu mobile------------------------------*/

const navLink = document.querySelectorAll('.nav-link') /*Seleciona todos os elementos no documento que possuem a classe nav-link. O método querySelectorAll retorna uma NodeList (lista de nós), que é como uma lista de todos os elementos HTML que correspondem ao seletor CSS .nav-link.

const navLink: Cria uma constante chamada navLink que armazena essa lista de elementos.  */

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')/* função linkAction, que será executada quando um link de navegação for clicado.

  const navMenu = document.getElementById('nav-menu'): Seleciona o elemento com o ID nav-menu no documento. Esse elemento provavelmente é o menu de navegação.
  
  navMenu.classList.remove('show'): Remove a classe show do elemento nav-menu, escondendo ou modificando a aparência do menu. A classe show provavelmente controla a visibilidade do menu, então ao remover essa classe, o menu é ocultado quando um link é clicado.*/
}
navLink.forEach(n => n.addEventListener('click', linkAction)) /*  navLink.forEach(n => ...): Itera sobre cada elemento da lista de links de navegação (navLink).

n.addEventListener('click', linkAction): Para cada link (n), adiciona um ouvinte de evento que espera por um clique. Quando o link é clicado, a função linkAction é chamada.

Isso significa que quando qualquer link de navegação é clicado, a função linkAction será executada, e o menu de navegação será ocultado (removendo a classe show do menu).
*/






/*---------------------------------rolagem animation-----------------------------*/

const sr = ScrollReveal({
  origin: 'top',  /* significa que os elementos vão aparecer como se viessem de cima, na rolagem da pagina. */

  distance: '60px', /* Define a distância em que o elemento será movido ao longo do eixo Y (60px) durante a animação. */

  duration: 2000,/*  Define a duração da animação em milissegundos (2 segundos). */

  delay: 200, /* Define um atraso de 200ms antes da animação começar. */

  reset: true /* Define se a animação deve ser repetida toda vez que o elemento se torna visível. Se true, a animação será reiniciada ao rolar a página para cima e para baixo. */
});

sr.reveal('.home-text, .about-img, .skills-subtitle, .skills-text, .skills-title',{}); /* Essa linha especifica que os elementos com as classes home-text, about-img, skills-subtitle, skills-text e skills-title serão animados quando entrarem na área visível da tela, utilizando as configurações padrão definidas anteriormente. */

sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img',{delay: 400}); /* os elementos com as classes home-img, about-subtitle, about-text e skills-img terão a mesma animação, mas com um atraso adicional de 400ms. Isso significa que eles demorarão um pouco mais para começar a animação quando forem revelados. */

sr.reveal('.icon, .img',{ interval: 200}); /* os elementos com as classes icon e img serão animados, mas com um intervalo de 200ms entre cada elemento. Isso faz com que os elementos não apareçam todos ao mesmo tempo, mas em uma sequência de 200ms. */

sr.reveal('.skills-data, .work-img, .contact-input',{interval: 200}); /* os elementos com as classes skills-data, work-img e contact-input também serão revelados em uma sequência com intervalo de 200ms. */