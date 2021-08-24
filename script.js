function initTabNav(){
    //o script abaixo manipula as imagens dos animais, ao clicar numa imagem, abre o texto correspondente
    const tabMenu = document.querySelectorAll('.js-tabmenu li');//selecionando todos os js-tabmenu,colocando um evento em cada li especifica
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    //abaixo verificação se os itens de fato existem:
    if(tabMenu.length && tabContent.length){
        //abaixo é para a section da reposa aparecer por primeiro para mostrar que ha texto e imagens que podem ser clicadas:
        tabContent[0].classList.add('ativo');
        //abaixo criação de função adiciona uma classe nos itens das sections de acordo com o numero que passar
        //ex: se passar o 0, adiciona classe na section raposa
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo'); //aqui exclui
            });
            tabContent[index].classList.add('ativo'); //aqui cria
        }
        //abaixo adicionaum evento ao clicar, ao clicar passa um numero do item que foi clicado dentro da função activeTab
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function(){
                activeTab(index);
            })
        })
    }
}
initTabNav();
function initAccordion(){
    //função abaixo esconde a pergunta e mostra ao clicar
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length){
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');
    
        function activeAccordion(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }
    
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
   
}
initAccordion();

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = querySelector('href');
    //esse scroll ainda n eh suportado pelo chrome apenas mozilla
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    //forma alternativa de dar scroll suave
    //     const topo = section.offsetTop;
    //     window.scrollTo({
    //         top: topo,
    //         behavior: 'smooth',
    //     });
     }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}
initScrollSuave();

const sections = document.querySelectorAll('.js-scroll');
function initAnimacaoScroll(){
    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;
        //função que anima o scroll:
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(section < 0){
                    section.classList.add('ativo');
                }
            })
        }
        
        window.addEventListener('scroll', animaScroll);
    }  
}

initAnimacaoScroll();
