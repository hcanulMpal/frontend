<template>
    <v-container class="mt-16">
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section class=" mb-15">
                    <v-card class="mx-auto pa-3 mt-12"
                        max-width="1200">
                        <v-img 
                        height="150"
                        width="150"
                        class="mx-auto mt-3 rounded-circle"
                        :src= "require('@/assets/alex/MaryHernandezP.jpg')"
                        ></v-img>
                        <div class="text-center">
                            <h1 class=" mt-5 title"> Mary Hernández </h1>
                            <p class="font-weight-medium" >Presidenta Municipal de Felipe Carrillo Puerto, Quintana Roo</p>
                            <div class="text-justify">
                                <p>Nací en 1998 en la ciudad de Felipe Carrillo puerto, estudie mi preparatoria en el CBTis72 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe facere magnam quaerat. Sequi eos, autem laborum cum animi error quibusdam ducimus ab eius! Amet inventore dolores ut consequatur eveniet! <br> Soy una activista la cual ama a la gente, en especial a los que luchan por perseguir sus sueños y nunca se rinden Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit at deleniti ullam, ut perferendis fugit omnis ipsum totam in. Asperiores harum atque voluptates suscipit maiores dolorum aspernatur culpa porro!</p>
                                <p>Mis metas más grandes y que nunca imagine tener, fueron el ser Presidenta del Municipio de Felipe Carrillo Puerto Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe error, omnis dolore iure labore fuga enim qui architecto exercitationem sunt id deserunt eos, dicta modi! Alias quam ex autem.</p>
                                <p><span class="font-weight-bold">Partido:</span> Morena</p>
                                <p><span class="font-weight-bold">Organizaciones fundadas:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure iste aperiam qui quo dicta. Animi quod iure soluta, recusandae veritatis deleniti placeat cupiditate explicabo, quibusdam odit repudiandae nobis. Iste, voluptates.</p>
                            </div>
                            <div>
                                <h1 class="font-weight-bold ma-5 ">Mis redes sociales</h1>
                                    <v-row class="justify-center pa-4">
                                        <div class="facebook ma-1">
                                            <a href="https://www.facebook.com/MaryHernandezFCP" target="_blank"><v-icon color="white">mdi-facebook</v-icon></a>
                                        </div>
                                        <div class="instagram ma-1">
                                            <a href="https://instagram.com/ma.ryhernandez?igshid=YmMyMTA2M2Y=" target="_blank"><v-icon color="white">mdi-instagram</v-icon></a>
                                        </div>
                                        <div v-if="$route.path == '/'">
                                        <sheet-page class="pt-9"></sheet-page>
                                        </div>
                                        <router-view max-height="1000" />
                                    </v-row>
                            </div>
                        </div>

                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
    export default{
        name:'presidentaPre',
        data(){
            return{
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style scoped>
    
    .facebook
{
    background: #3b5998;
    padding: 20px 30px;
    color: #fff;
    outline: none;
    text-decoration:none
}
.instagram
{
    background: #d6164df4;
    padding: 20px 30px;
    color: #fff;
    outline: none;
    text-decoration:none;
}
</style>