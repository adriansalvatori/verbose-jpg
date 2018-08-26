<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

            <div id="banner" class="banner editable">
                <img src="static/logorojosinnombre.png" alt="">
                <div class="titulo">
                    <h1 class="linea1 edit" @click="getText('mainTitle')">{{mainTitle}}</h1>
                    <div class="linea2 edit" @click="getText('fecha')">{{fecha}}</div>
                    <div class="texto">
                        <h1 class="titulo edit" @click="getText('titulo')">{{titulo}}</h1>
                        <div class="comunicado edit" @click="getText('comunicado')">
                            {{comunicado}}
                        </div>
                </div>
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
                <textarea v-model="mainTitle" id="mainTitle" class="textarea"></textarea>
                <textarea v-model="fecha" id="fecha" class="textarea"></textarea>
                <textarea v-model="titulo" id="titulo" class="textarea"></textarea>
                <textarea v-model="comunicado" id="comunicado" class="textarea"></textarea>
                <br>
                <button @click="aceptar" data-visible="">Aceptar</button>
                <div class="noneSelected">
                    <h1>Haz click sobre un párrafo para editarlo.</h1>
                </div>
            </div>

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
  name: 'Banner8',
  data () {
    return {
        mainTitle: "SIGNALS",
        fecha: "17-05-1989",
        titulo: 'ESTO ES UN COMUNICADO DE PRUEBA',
        comunicado: 'Lorem ipsum dolor sit amet, quam at nec, eros vel, sit curabitur interdum sed dolor id. Nec malesuada sed sollicitudin varius, in vulputate imperdiet etiam wisi venenatis, tincidunt congue litora in vivamus quam, in amet pellentesque nibh risus, malesuada phasellus ut mauris quam.',
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
    letter-spacing: 9px;
    text-transform:uppercase;
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
            height: 1000px;
            width: 2000px;
           
     background: linear-gradient(to bottom right, #4a3838, #c28e3b);

        }
        .banner img{
            position: relative;
            float: right;
            top: 25px;
            right: 25px;
            height: 200px;
            width: auto;
        }
        .banner .titulo{
            position: relative;
            float: left;
            text-align: right;
            height: 200px;
            width: 350px;
            padding-top: 50px;
        }
        .banner .linea1{
            font-size: 40pt;
            color: white;
        }
        .banner .linea2{
            font-size: 25pt;
            color: white;
        }
       .banner .texto{
            position: relative;
            height: 500px;
            width: 1700px;
            margin-left: 150px;
            margin-right: 150px;
            top:150px;
            background-color: rgb(0,0,0,0);
            border: 5px solid white;
            color: white;
            padding-bottom: 25px;
        }
        .banner .texto .titulo{
            position: relative;
            height: 20%;
            width: 100%;
            font-size: 55px;
            margin-bottom: 35px;
            font-weight: 600;
            text-align: center;
        }
        .banner .texto .comunicado{
            position: relative;
            height: 70%;
            width: 90%;
            margin: auto;
            top: 25px;
            font-size: 25pt;
            text-align: justify;
            word-wrap:break-word;
        }
</style>
