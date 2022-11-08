<template>
    <v-container>
        <v-theme-provider>
            <v-responsive>
                <section class="mt-16 pt-16">
                    <v-sheet
                        id="scrolling-techniques-4"
                        class="overflow-y-auto"
                    >
                        <v-card>
                        <img src="@/assets/organigrama.jpg" usemap="#organigrama" height="2200px">
                        <map name="organigrama">
                            <area shape="rect" coords="160,  42, 310, 160" alt="Saturnino" @click="buscar(15)">
                            <area shape="rect" coords="160, 162, 310, 287" alt="Edmundo"   @click="buscar(17)">
                            <area shape="rect" coords="160, 285, 310, 414" alt="Denisse"   @click="buscar(13)">
                            <area shape="rect" coords="447,  42, 597, 150" alt="Didier"    @click="buscar2(7)">
                            <area shape="rect" coords="419, 198, 606, 331" alt="President" @click="buscar2(6)">
                            <area shape="rect" coords="633, 209, 784, 331" alt="maria"     @click="buscar(20)">
                            <area shape="rect" coords="816,  47, 967, 157" alt="maria"     @click="buscar(33)">
                            <area shape="rect" coords="816, 179, 967, 281" alt="laura"     @click="buscar(44)">
                            <area shape="rect" coords="729, 303, 967, 450" alt="daniela"   @click="buscar(19)">

                            <area shape="rect" coords="106, 478, 253, 598" alt="daniela"   @click="buscar(14)">
                            <area shape="rect" coords="280, 478, 420, 598" alt="Lic. Hernan"   @click="buscar(12)">
                            <area shape="rect" coords="445, 478, 589, 598" alt="juliana"   @click="buscar(11)">
                            <area shape="rect" coords="610, 478, 762, 598" alt="juliana"   @click="buscar(26)">
                            <area shape="rect" coords="800, 478, 940, 598" alt="adan"      @click="buscar(25)">

                            <area shape="rect" coords="106, 584, 253, 704" alt="frida"      @click="buscar(29)">
                            <area shape="rect" coords="280, 584, 420, 704" alt="jimmy"      @click="buscar(23)">
                            <area shape="rect" coords="445, 584, 589, 704" alt="celmy"      @click="buscar(18)">
                            <area shape="rect" coords="610, 584, 762, 704" alt="edgar"      @click="buscar(0)">
                            <area shape="rect" coords="800, 584, 940, 734" alt="said"       @click="buscar(42)">

                            <area shape="rect" coords="106, 700, 253, 806" alt="malco"      @click="buscar(30)">
                            <area shape="rect" coords="280, 700, 420, 806" alt="fabio"      @click="buscar(24)">
                            <area shape="rect" coords="445, 700, 589, 806" alt="edgar"      @click="buscar(41)">

                            <area shape="rect" coords="106, 816, 253, 908" alt="nadia"      @click="buscar(31)">
                            <area shape="rect" coords="280, 816, 420, 908" alt="jesus"      @click="buscar(27)">
                            <area shape="rect" coords="445, 816, 589, 908" alt="omars"      @click="buscar(39)">

                            <area shape="rect" coords="106, 932, 253, 1010" alt="hulfo"     @click="buscar(32)">
                            <area shape="rect" coords="280, 932, 420, 1010" alt="jose "     @click="buscar(37)">
                            <area shape="rect" coords="445, 932, 589, 1010" alt="rober"     @click="buscar(22)">

                            <area shape="rect" coords="106, 1039, 253, 1112" alt="luis "    @click="buscar(34)">
                            <area shape="rect" coords="280, 1039, 420, 1112" alt="erick"    @click="buscar(38)">
                            <area shape="rect" coords="445, 1039, 589, 1112" alt="angel"    @click="buscar(55)">

                            <area shape="rect" coords="106, 1105, 253, 1214" alt="arami"    @click="buscar(35)">
                            <area shape="rect" coords="280, 1105, 420, 1214" alt="panti"    @click="buscar(70)">
                            <area shape="rect" coords="445, 1105, 589, 1214" alt="odise"    @click="buscar(56)">

                            <area shape="rect" coords="106, 1221, 253, 1316" alt="manue"    @click="buscar(47)">
                            <area shape="rect" coords="280, 1221, 420, 1316" alt="hugo "    @click="buscar(71)">
                            <area shape="rect" coords="445, 1221, 589, 1316" alt="veron"    @click="buscar(16)">

                            <area shape="rect" coords="106, 1337, 253, 1418" alt="aguil"    @click="buscar(36)">
                            <area shape="rect" coords="280, 1337, 420, 1418" alt="artur"    @click="buscar(40)">
                            <area shape="rect" coords="445, 1337, 589, 1418" alt="albah"    @click="buscar(-1)">

                            <area shape="rect" coords="106, 1453, 253, 1520" alt="luisa"    @click="buscar(69)">
                            <area shape="rect" coords="280, 1453, 420, 1520" alt="josec"    @click="buscar(28)">

                            <area shape="rect" coords="106, 1569, 253, 1622" alt="nancy"    @click="buscar(68)">
                            <area shape="rect" coords="280, 1569, 420, 1622" alt="danie"    @click="buscar(48)">

                            <area shape="rect" coords="106, 1685, 253, 1772" alt="migue"    @click="buscar(50)">
                            <area shape="rect" coords="280, 1685, 420, 1772" alt="joel"     @click="buscar(53)">

                            <area shape="rect" coords="280, 1780, 420, 1876" alt="danie"    @click="buscar(54)">
                            
                            <area shape="rect" coords="106, 1840, 253, 1944" alt="maria"    @click="buscar(51)">

                            <area shape="rect" coords="106, 1956, 253, 2050" alt="luisa"    @click="buscar(52)">

                            <area shape="rect" coords="106, 2062, 253, 2156" alt="luisa"    @click="buscar(57)">
                        </map>
                    </v-card>
                    </v-sheet>
                    
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
import { requestGET } from "@/modules/globals/getAxios.js"

    export default {
        name:'orgaMpal',
        data(){
            return{
                mary:require("@/assets/maHdez.jpeg"),
                totalData:undefined,
            }
        },
        async created(){
            this.totalData = await requestGET("/landing/funcionarios")
            this.totalData2 = await requestGET("/landing/regidores")
        },
        methods:{
            async buscar(id){
                const datos = this.totalData.find( element => {
                    if( element.id_officials === id){
                        return element
                    } else if (id == 0){
                        element.url_photo ='https://via.placeholder.com/600x600.png/002233?text=Foto%20Funcionario'
                        element.name = 'ING. EDGAR EMMANUEL CAUICH BRICEÑO'
                        element.dependence = "COORDINACIÓN DE ATENCIÓN Y SEGUIMIENTO DE OBRAS"
                        element.email = "Sin Contancto"
                        return element
                    }else if (id == -1){
                        element.url_photo ='https://via.placeholder.com/600x600.png/002233?text=Foto%20Funcionario'
                        element.name = 'LIC. JOHNY ALEJANDRO ALBA HERNANDEZ'
                        element.dependence = "ALCALDE DE LA CARCEL PÚBLICA MUNICIPAL"
                        element.email = "Sin Contancto"
                        return element
                    }
                    })
                this.dialogo(datos)
            },
            async buscar2(id){
                const datos = this.totalData2.find( element => element.id_governing === id)
                this.dialogo(datos)
            },

            async dialogo(datos){
                this.$swal({
                    title: datos.dependence,
                    html:"<img style='border-radius: 50%;' src="+datos.url_photo+" width='200px'> <br> <p><h3>"+ datos.name+"</h3></p><br> <p>CORREO:<h4>"+ datos.email +"</h4></p>",
                    footer:"FELIPE CARRILLO PUERTO"
               })
            },
        },
    }
</script>
<style scoped>
    area:hover {
        color: orange;
        cursor: hand;
    }
</style>