<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

            <div id="banner" class="banner editable">
                <div class="portada">
                    <div class="contenido">
                            <div class="logo">
                                <img src="static/logorojosinnombre.png" alt="" class="logotipo">
                            </div>
                            <h1 class="titulo edit" @click="getText('titulo')"><img class="criptologo" src="static/ether.png" alt="">{{ titulo }}</h1>
                            <div class="bloqueLinea"><p class="resumen edit" @click="getText('resumen')">{{resumen}}</p></div>
                    </div>
                </div>
                    
                <div class="correo">
                    <p class="correotext edit" @click="getText('correoText')">{{correoText}}</p>
                </div>
                <div class="membrete">
                    <p class="fecha edit" @click="getText('fecha')">{{fecha}}</p>
                    <p class="nombre edit" @click="getText('nombre')">{{nombre}}</p>
                </div>
            </div>

        </div>
    </div>


    <div class="rightContent">
        <div class="franjaColor">
         
        </div>
        <div class="sidebar">
            <h1 class="tituloEdicion" style="color:#42020c">Editar contenido</h1>

            <div class="editAreaContent">
                <textarea v-model="titulo" id="titulo"></textarea>
                <textarea v-model="resumen" id="resumen"></textarea>
                <textarea v-model="correoText" id="correoText"></textarea>
                <textarea v-model="fecha" id="fecha"></textarea>
                <textarea v-model="nombre" id="nombre"></textarea>
                <br>
                <button @click="aceptar" data-visible="">Aceptar</button>
                <div class="noneSelected">
                    <h1>Haz click sobre un párrafo para editarlo.</h1>
                </div>
            </div>            

            <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" name="resume" v-on:change="readURL">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fa fa-pencil"></i>
                </span>
                <span class="file-label">
                </span>
                </span>
            </label>
            </div>          
            <img id="muestra" src="" alt="">

            <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" name="resume" v-on:change="readURLCriptoLogo">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fa fa-pencil"></i>
                </span>
                <span class="file-label">
                </span>
                </span>
            </label>
            </div>          
            <img id="muestraCriptoLogo" src="" alt="">            
            

            <div class="botonera">
                <button id="calcelar" @click="volver">Cancelar</button>
                <button id="capture" @click="capture">Listo</button>
                <button id="termine" @click="volver">Terminé</button>
            </div>
        </div>
    </div>

</div>

</template>

<script>

import domtoimage from 'dom-to-image-chrome-fix';
export default {
  name: 'Banner3',
  data () {
    return {
      titulo: 'título',
      resumen: 'TEXTO INFORMATIVO TEXTO INFORMATIVO. TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO',
      correoText: 'INFO@minotaurcrypto.com',
      fecha: 'FECHA:25-05-2018',
      nombre: 'BY: NOMBRE DE PRUEBA'
    }
  },
  methods: {
    capture: function(elemento){
        var elemento =  document.getElementById("banner");
        elemento.className = "banner";
        domtoimage.toJpeg(elemento,{quality: 0.95})
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'banner.jpeg';
                link.href = dataUrl;
                link.click();
            }).then(function(){
                elemento.className = "banner editable";
            });
    },
    readURL: function(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementsByClassName('portada')[0].setAttribute('style', 'background-image: url(' + e.target.result + ')');
          //$('.imagen').css('background-image', 'url(' + e.target.result + ')');
          document.getElementById('muestra').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    readURLCriptoLogo: function(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.querySelector(".criptologo").setAttribute("src", e.target.result);
          document.getElementById('muestraCriptoLogo').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    volver: function(){
        this.$router.push("/");
    },
    getText: function(variable){
        var textAreas = document.getElementsByTagName("textarea");
        for(let n = 0; n < textAreas.length; n++)
        {
            textAreas[n].style.display = "none";
        }
        document.querySelector(".noneSelected").style.display = "none";

        document.querySelector("#" + variable).style.display = "block";
        document.querySelector(".editAreaContent button").style.display = "block";
        document.querySelector(".editAreaContent button").setAttribute("data-visible", variable);
        
    },
    aceptar: function(){
        var variable = document.querySelector(".editAreaContent button").getAttribute("data-visible");
        document.querySelector("#" + variable).style.display = "none";
        document.querySelector(".editAreaContent button").style.display = "none";
        document.querySelector(".noneSelected").style.display = "block";
    }

  },
  mounted(){
      document.getElementById('muestra').setAttribute('src', 'static/gente.jpg');
      document.getElementById('muestraCriptoLogo').setAttribute('src', 'static/ether.png');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/***********************************************************************************************/
/*  ESTILOS DE LA EDICIÓN  */

.edit{
    cursor:pointer;
}
.edit:hover{
    color:red;
}

.editAreaContent{
    position: relative;
    height: 300px;
    width: 80%;
    margin: 20px 0px;
}

.editAreaContent .noneSelected{
    display: block;
}

.editAreaContent textarea{
    position: relative;
    margin:auto;
    border:solid;
    border-width: 1.5px;
    border-color: #42020c;
    height: 50%;
    width: 100%;
    padding: 20px;
    font-size: 16pt;
    background-color: rgb(240, 232, 232);
    display:none;
    resize: none;
}
.editAreaContent button{
    display: none;
}
/***********************************************************************************************/

img.criptologo{
    display: inline-block;
    height: 120px;
    width: 120px;
}

.bloqueLinea{
    position: relative;
    display: block;
    height: 50px;
    width: auto;
}
#muestra{
    position: relative;
    height: 100px;
    width: auto;
}
#muestraCriptoLogo{
    position: relative;
    height: 100px;
    width: auto;
}

.botonera{
    position:absolute;
    height: 60px;
    width: 100%;
    background-color: rgb(247,247,247);
    bottom: 0;
}

.botonera > button {
    display: inline-block;
    height: 35px;
    width: 100px;
    margin-left: 15px;
    margin-top: 15px;
    border: none;
     background: linear-gradient(to bottom right, #4a3838, #c28e3b);
    color: white;
    font-weight: 600;
    transition: transform 0.2s;
}
.botonera > button:hover {
    transform: scale(1.2);
}


.textInputs{
    margin-top: 20px;
    height: 30px;
    width: 80%;
    margin: auto;

    border: 5px solid white;
    padding: 5px; 
    box-shadow: 5px 10px rgba(224, 221, 213, 0.3);
}

.textArea{
    height: 150px;
}

.cajaBanner{
    position:relative;
    top: 20%;
    margin: auto;
    height: 300px;
    width: 800px;
}

.bloqueColor{
    position: relative;
    height: 20%;
    width: inherit;
}
.franjaColor{
    position: absolute;
    top: 0;
    margin-bottom: 15px;
    height: 5px;
    width: 100%;
    background: linear-gradient(to bottom right, #4a3838, #c28e3b)
}
.all{
    position:absolute;
    height: 100%;
    width: 100%;
}

.leftContent{
    float:left;
    position: relative;
    height: inherit;
    width: 70%;
    overflow: auto;
    background-color: #3d3f42;
}

.rightContent{
    float: left;
    position: relative;
    padding: 0;
    height: inherit;
    width: 30%;
    background-color: rgb(247,247,247);
}

.sidebar{
    margin: auto;
    padding-left: 20px;
    padding-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
}

.logo_header{
    position: relative;
    top: 35px;
    left: 35px;
    display: block;
    height: 80px;
    width: auto;
}

.banner {
    position: absolute;
    height: 1000px;
    width: 2000px;
    font-family: Montserrat,sans-serif;
       letter-spacing: 9px;     text-transform:uppercase;     font-weight: 600;
    /*transition: .3s ease-in;*/
}

.editable {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(.35);
}
.portada {
    background-image: url("../assets/gente.jpg");
    background-size: cover; 
    background-repeat: no-repeat;
    position: relative;
    width: 2000px;
    height: 800px;

  
}
.titulo{
    position: relative;
    color: white;
    margin-left: 110px;
    margin-top: 65px;
    font-size: 80px;
    padding-top: 195px;
    display: flex;
    margin-bottom: 70px;
    z-index: 99999;
}
.resumen{
    color:white;
    margin-left: 110px;
    font-size: 38px;
    text-align: left;
    margin-top: 5px;
    max-width: 1250px;
    z-index: 99999;
}

.portada::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    
     background: linear-gradient(to bottom right, #4a3838, #c28e3b);
    opacity: 0.8;
}
.portada{
  position: relative;
}

.contenido  {
    position: relative;
    z-index: 99999;
}
.correo{
    position: absolute;
    background: white;
    width: 1000px;
    height: 200px;
    text-align: center;
}
.correotext{
    font-size: 29px;
   font-weight: 600 !important;
    color: #333333;
    margin-right: 471px;
    margin-left: 110px;
    margin-top: 86px;
}
.membrete{
    position: relative;
    background: #333333;
    color: white;
    width: 1000px;
    height: 200px;
    box-sizing: border-box;
    float: right;
    text-align: right;
    padding-right: 80px;
}
.fecha {
    margin-top: 55px;
    font-weight: 400;
    font-size: 25px;
}
.nombre {
    margin-top: 11px;
    font-weight: 400;
    font-size: 25px;
}
.logo{
    position: relative;
    float: right;
    width: 347px;
    margin-top: 30px;

    z-index: 99999;
}
.logo .logotipo{
    width: 251px;

}
</style>
