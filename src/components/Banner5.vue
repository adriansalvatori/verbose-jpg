<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

            <div id="banner" class="banner editable">
                    <div class="logo"><img src="static/logorojosinnombre.png" alt="" class="logotipo"></div>
                <div class="contenido">
                    <h1 class="titulo edit"  @click="getText('titulo0')">{{titulo0}}</h1> 
                    <p class="fecha edit"  @click="getText('fecha')">{{fecha}}</p>
                </div>
                    <h1 class="titulo1 edit"  @click="getText('titulo1')">{{titulo1}}</h1>
                    <div class="precio1">
                        <p class="pPrecio edit"  @click="getText('linea1')">{{linea1}}</p>
                    </div>

                    <h1 class="nombre edit" @click="getText('nombre')" >{{nombre}}</h1>
            </div>

        </div>
    </div>


    <div class="rightContent">
        <div class="franjaColor">
           
        </div>
        <div class="sidebar">
            <h1 class="tituloEdicion" style="color:#42020c">Editar contenido</h1>

            <div class="editAreaContent">
                <textarea v-model="titulo0" id="titulo0"></textarea>
                <textarea v-model="fecha" id="fecha"></textarea>
                <textarea v-model="titulo1" id="titulo1"></textarea>
                <textarea v-model="titulo2" id="titulo2"></textarea>
                <textarea v-model="linea1" id="linea1"></textarea>
                <textarea v-model="nombre" id="nombre"></textarea>
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
  name: 'Banner5',
  data () {
    return {
      titulo0: 'Info',
      fecha: 'FECHA:25-05-2018',
      titulo1: '¡Esto es un titulo de prueba!',      
      fecha: '25-05-2018',
      linea1: 'ESTO ES UN TEXTO DE PRUEBA ESTO ES UN TEXTO DE PRUEBA ESTO ES UN TEXTO DE PRUEBA ESTO ES UN TEXTO DE PRUEBA',
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
            
     background: linear-gradient(to bottom right, #4a3838, #c28e3b);
            height: 1000px;
            width: 2000px; 
        }
        .titulo{
            position: relative;
            color: white;
            margin-left: 130px;
            font-size: 80px;
            padding-top: 95px;
        }
        .fecha{
            position: relative;
            color: white;
            margin-left: 135px;
            margin-top: 20px;
            font-size: 30px;
        }
        .logo{
            margin-top: 35px;
            position: relative;
            float: right;
            width: 347px;
           
        }
        .logo .logotipo{
            width: 251px;

        }
        .titulo1{
            color: white;
            position: relative;
            font-size: 65px;
            max-width: 90%;
            margin: 0 auto;
            margin-top: 61px;
            text-align:center;
        }

        .precio1 {
            border-style: solid;
            border-radius: 16px;
            height: auto;
            width: 65%;
            margin: 60px auto ;
            border-color: white;
            border-width: 8px;
            color: white;
            padding: 60px;
            font-weight: 400;
 
        }
        .pPrecio{
            font-size: 35px;
        }
        .nombre{
            position: relative;
            float:right;
            right: 150px;
            color: white;
            font-size: 30px;
            margin-top: 15px;
        }
</style>
