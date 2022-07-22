$(document).ready(function() {

    let slideAtual = 1;
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 1000)

    function mudarSlide() {
        // remove o slide anterior
        console.log("Slide atual:", slideAtual);
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])

        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])

        }
        // Adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);

        // Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) -1) {
            slideAtual = 0
        }

    }

    $("#barras").click(function() {

        $("#menu").toggleClass("menu-ativo");

        // toggle
        // if( $("#menu").hasClass("menu-ativo") ) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
        

    })

    
})


function mostrarMenu() {
    let menu = document.getElementById("menu") 

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function buscaRapida() {
    let buscaProdutosCadastrados = document.getElementById("campo-busca").value
    alert(buscaProdutosCadastrados)
}

// function cadastrarNewsletter() {
//     let email = document.getElementById("campo-email").value

//     alert(email)
//     console.log(email)
// }






// DOM - Document Object Model