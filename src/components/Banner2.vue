<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

            <div id="banner" class="banner editable">
                <div class="contenido">
                    <h1 class="titulo edit" @click="getText('titulo')">{{titulo}}</h1>
                    <h1 class="subtitulo edit" @click="getText('subtitulo')">{{subtitulo}}</h1>
                    <div class="bloqueLinea"><p class="resumen edit" @click="getText('linea1')">{{linea1}}</p></div>
                </div>
                
                <div class="imagen">
                        <div class="logo"><img src="static/logorojosinnombre.png" alt="" class="logotipo"></div> 
                </div>
                <div class="correo">
                    <p class="correotext">{{correoText}}</p>
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
                <textarea v-model="subtitulo" id="subtitulo"></textarea>
                <textarea v-model="linea1" id="linea1"></textarea>
                <textarea v-model="correotext" id="correotext"></textarea>
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
  name: 'Banner2',
  data () {
    return {
      titulo: 'Título',
      subtitulo: 'Subtítulo',
      linea1: 'TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO',
      correoText: 'INFO@minotaurcrypto.com'
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
          document.getElementsByClassName('imagen')[0].setAttribute('style', 'background-image: url(' + e.target.result + ')');
          //$('.imagen').css('background-image', 'url(' + e.target.result + ')');
          document.getElementById('muestra').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    volver: function(){
        this.$router.push("/");
    },
    getText: function(variable){
        var majorParent = event.target.parentElement.parentElement;
        document.querySelector(".editAreaContent textarea").style.display = "none";
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
    height: 400px;
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
#muestra{
    position: relative;
    height: 100px;
    width: auto;
}


.bloqueLinea{
    position: relative;
    display: block;
    height: 50px;
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

/*--------------------------------------*/
        .contenido{
            float: left;
            background:#333333;
            width: 1000px;
            height: 1000px;
        }
        .titulo{
            position: relative;
            color: white;
            margin-left: 152px;
            margin-top: 220px;
            font-size: 80px;
        }
        .subtitulo{
            position: relative;
            color: white;
            margin-left: 198px;
            margin-top: 30px;
            margin-bottom: 60px;
            font-size: 55px;
        }
        .resumen{
            color: white;
            margin-left: 198px;
            font-size: 28px; 
            margin-top: 5px;
            width: 680px;
        }
        .imagen {
            height: 1000px;
            float: right;
            width: 1000px;
            background: url('../assets/gente.jpg');
            background-size: cover;
            background-position: center;
            z-index: 9999;
        }
        .imagen::after {
            height: 1000px;
            width: 1000px;
            position: absolute;
            content: "";
            background: linear-gradient(to right, #333333 , #333333);
            opacity: 0.8;
        }
      
        .logo{
            position: relative;
            float: right;
            width: 218px;
            margin-top: 30px;
            margin-right: 32px;
            z-index: 99
        }
        .logo .logotipo{
            width: 251px;
            margin-left: -21px;
            z-index: 99999;
        }
        .correo{
            position: relative;
            background: white;
            width: 50%;
            height: 143px;
            text-align: center;
            float: right;
            margin-top: -143px
        }
        .correotext{
            margin-left: 195px;
            font-size: 29px;
            font-weight: 600 !important;
            color: #333333;
            margin-right: 471px;
            margin-top: 52px;
        }

</style>
