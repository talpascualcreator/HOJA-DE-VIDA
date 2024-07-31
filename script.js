let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("tecnica-trombon");
        habilidades[1].classList.add("solfeo-teoria");
        habilidades[2].classList.add("metodos-ensenanza");
        habilidades[3].classList.add("armonia-composicion");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("htmlcss");
        habilidades[6].classList.add("photoshop");
        habilidades[7].classList.add("java");
        habilidades[8].classList.add("php");
        habilidades[9].classList.add("planificacion-lecciones");
        habilidades[10].classList.add("adaptacion-niveles");
        habilidades[11].classList.add("ensenanza-individual-grupal");
        habilidades[12].classList.add("creatividad-innovacion");
        habilidades[13].classList.add("comunicacion-efectiva");
        habilidades[14].classList.add("paciencia-empatia");
        habilidades[15].classList.add("trabajo-equipo");
        habilidades[16].classList.add("resolucion-problemas");
        habilidades[17].classList.add("comunicacion");
        habilidades[18].classList.add("trabajo");
        habilidades[19].classList.add("creatividad");
        habilidades[20].classList.add("dedicacion");
        habilidades[21].classList.add("proyect");
      
       
       
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 