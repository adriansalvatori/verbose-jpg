<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

       <div class="banner editable" id="banner">
                <div class="logo"><img src="static/logorojosinnombre.png" alt="" class="logotipo"></div>
            <div class="contenido">
                <h1 class="titulo edit" @click="getText('titulo0')">{{titulo0}}</h1> 
                <p class="fecha edit" @click="getText('fecha')">{{fecha}}</p>
            </div>
                <h1 class="titulo1 edit" @click="getText('titulo1')">{{titulo1}}!</h1>
                <h1 class="titulo2 edit" @click="getText('titulo2')">{{titulo2}}</h1>
                
                <div class="cajaPrecios">
                    <div class="priceBox">
                        <div class="bloqueLinea"><p class="edit"  @click="getText('linea1')">{{linea1}}</p></div>
                        <div class="bloqueLinea"><p class="edit"  @click="getText('linea2')">{{linea2}}</p></div>
                        <div class="bloqueLinea"><p class="edit"  @click="getText('linea3')">{{linea3}}</p></div>
                    </div>
                    <div class="priceBox floatRight">
                            <div class="bloqueLinea"><p class="edit"  @click="getText('linea4')">{{linea4}}</p></div>
                            <div class="bloqueLinea"><p class="edit"  @click="getText('linea5')">{{linea5}}</p></div>
                            <div class="bloqueLinea"><p class="edit"  @click="getText('linea6')">{{linea6}}</p></div>
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
                <textarea v-model="titulo0" id="titulo0"></textarea>
                <textarea v-model="fecha" id="fecha"></textarea>
                <textarea v-model="titulo1" id="titulo1"></textarea>
                <textarea v-model="titulo2" id="titulo2"></textarea>
                <textarea v-model="linea1" id="linea1"></textarea>
                <textarea v-model="linea2" id="linea2"></textarea>
                <textarea v-model="linea3" id="linea3"></textarea>
                <textarea v-model="linea4" id="linea4"></textarea>
                <textarea v-model="linea5" id="linea5"></textarea>
                <textarea v-model="linea6" id="linea6"></textarea>
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
  name: 'Banner4',
  data () {
    return {
      titulo0: 'TITULO',
      fecha: '25-05-2018',
      titulo1: '¡ESTO ES UN TITULO DE PRUEBA!',
      titulo2: '¡ESTO ES OTRO TITULO DE PRUEBA!',
      linea1: 'Prueba: $2500',
      linea2: 'Prueba: $2500',
      linea3: 'Prueba: $2500',
      linea4: 'Prueba: $2500',
      linea5: 'Prueba: $2500',
      linea6: 'Prueba: $2500'
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

        .banner{
            
     background: linear-gradient(to bottom right, #4a3838, #c28e3b);
            height: 1000px;
            width: 2000px; 
        }
        .titulo{
            position: relative;
            color: white;
            text-align: left;
            font-size: 110px;
            padding-top: 95px;
            left: 154px;
        }
        .fecha{
            position: relative;
            color: white;
            margin-left: 154px;
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
            text-align: center;
          
            margin: 0 auto;
              margin-top: 61px;
        }
        .titulo2{
            color: white;
            position: relative;
            font-size: 35px;
            max-width: 90%;
            text-align: center;
            margin: 0 auto;

      
        }

        .cajaPrecios{
            position: relative;
            display: block;
            margin: auto;
            height: 35%;
            width: 80%;
            margin-top: 30px;
        }

        .priceBox{
           position: relative;
    float: left;
    border-style: solid;
    border-radius: 16px;
    height: 100%;
    border-width: 8px;
    width: 48%;
    border-color: white;
    color: white;
    font-size: 31px;
    display: flex;
    padding: 40px;
    font-weight: 800 !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        }

        .priceBox .bloqueLinea p {
            font-weight: 600 !important;
            font-size: 38px;
        }

        .floatRight{
            float: right;
        }

</style>
