<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

            <div id="banner" class="banner editable">
                <div class="innerContent">
                    <div class="bloque bloque1">
                        <img class="logo" src="static/logorojosinnombre.png" alt="">
                    </div>
                    <div class="bloque bloque2"></div>
                    <div class="overContent">
                        <div class="textContent">
                            <div class="lineaBanner6"><h1 class="edit" @click="getText('titulo')">{{titulo}}</h1></div>
                            <br>
                            <div class="lineaBanner6 edit" @click="getText('linea1')">{{linea1}}</div>
                        </div>
                    </div>

                    <img class="imagenEjemplo" src="static/ejemplo.jpg" alt="">
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
                <textarea v-model="titulo" id="titulo" class="textarea"></textarea>
                <textarea v-model="linea1" id="linea1" class="textarea"></textarea>
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
  name: 'Banner1',
  data () {
    return {
      titulo: 'Título',
      linea1: 'TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO TEXTO INFORMATIVO TEXTO',
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
          document.querySelector("img.imagenEjemplo").setAttribute("src", e.target.result);
          document.getElementById('muestra').setAttribute('src', e.target.result);
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
      var src = document.querySelector("img.imagenEjemplo").getAttribute("src");
      document.getElementById('muestra').setAttribute('src', src);
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
         .banner{
            position:absolute;
            display: table-cell;
            height: 1000px;
            width: 2000px;
            
     background: linear-gradient(to bottom right, #4a3838, #c28e3b);
            vertical-align: middle;
            text-align: center;
            padding: 50px;
            font-family: Montserrat;
        }
        .innerContent{
            position: relative;
            display: inline-block;
            margin: auto;
            height: 100%;
            width: 100%;
        }
        .bloque{
            position:relative;
            height: 100%;
            width: 30%; 

        }
        .bloque1{
            float:left;
            border-left: 5px solid white;
            border-bottom: 5px solid white;
        }
        .bloque2{
            float: right;
            border-right: 5px solid white;
            border-top: 5px solid white;
        }
        .logo{
            position:relative;
            height: 200px;
            float: left;
            left: 50px;
        }
        .textContent{
            position:relative;
            float: left;
            height: auto;
            width: 50%;
            font-family: Montserrat !important;
            font-size: 25pt !important;
        }
        .lineaBanner6{
            text-align: left;
        }
        .overContent{
            position:absolute;
            float: left;
            height: auto;
            width: 100%;
            padding-left: 50px;
            padding-top: 250px;
        }
        .overContent .textContent{
            color:white;
            font-family: verdana;
            font-size: 40pt;
            left:50px;
            max-width: 800px;
        }
        .lineaBanner6 h1{
            font-size: 58pt;
        }
        .innerContent .imagenEjemplo{
            position: absolute;
            float: right;            
            width:auto;
            height: 95%;
            top: 40px;
            right: 40px;
            opacity: 0.5;
        }
</style>
