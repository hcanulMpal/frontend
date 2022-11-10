<template>
    <section>
        <div class="imgBx">
            <img src="@/assets/bg.jpg">
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2 >Login</h2>
                <v-form v-model="valid" @keydown.prevent.enter="submit" ref='form'>
                    <v-container fluid>
                            <v-row justify="center">
                                <v-col cols="12" md="8" sm="6">
                                    <v-text-field
                                        rounded
                                        v-model="User.user"
                                        outlined
                                        color="#296C61"
                                        label="Usuario"
                                        clearable
                                        autofocus
                                        :rules="rules.required"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="12" md="8" sm="6">
                                    <v-text-field
                                        v-model="User.password"
                                        rounded
                                        :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                                        color="#296C61"
                                        :type="show1 ? 'text' : 'password'"
                                        placeholder="Password"
                                        hint="Mínimo 8 caracteres"
                                        outlined
                                        counter
                                        clearable
                                        @click:append="show1 = !show1"
                                        @keydown.prevent.enter="submit"
                                        :rules="rules.required"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-container fluid class="inputBx">
                            <br>
                            <v-row justify="center">
                                <v-btn color="primary" dark x-large @click='submit' class="btninput"><v-icon class="ma-2">mdi-account-key</v-icon>Accede Aqui!</v-btn>
                            </v-row>
                            <br>
                            <br>
                        </v-container>
                </v-form>
            </div>
        </div>
        <Lector />
    </section>
</template>
<script>
import { mapMutations } from 'vuex';
import { rules } from "@/modules/globals/rules";
import { requestPost } from  "@/modules/globals/getAxios"
import { setToken, getRol } from "../helper/auth";
import Lector from './lectorLector.vue';

export default {
    name:"loginForm",
    components:{
        Lector,
    },
    data: () => ({
        valid: false,
        show1: false,
        User: {
            user: "",
            password: ""
        },
        rules: rules,
    }),
    methods: {
        ...mapMutations('loginModule',['mylector']),
        async submit() {
            this.$store.commit('loginModule/myLector', true)
            if (this.$refs.form.validate()){
                const logger = await requestPost(`/autho/signin`, this.User)
                if (logger == 401){
                    this.$store.commit('loginModule/myLector', true)
                    this.$swal({
                        title: 'Error',
                        text: "User name is wrong or password iswrong",
                        icon:'error',
                        footer:"Direrección de Informatica - Departamento de Desarrollo"
                    })
                }
                setToken(logger);
                this.$router.push({name:getRol()})
                this.$store.commit('loginModule/myLector', false)
            }
            
        },
    },
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    section
    {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
    }
    section .imgBx
    {
        position: relative;
        width: 50%;
        height: 100%;
    }
    section .imgBx::before
    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(255deg,  #EA9A2C, #8E334A, #296C61);
        z-index: 1;
        mix-blend-mode: screen;
    }
    section .imgBx img
    {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    section .contentBx
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }
    section .contentBx .formBx
    {
        width: 50%;
    }
    section .contentBx .formBx h2
    {
        color: #296C61;
        font-weight: 600;
        font-size: 1.5em;
        text-transform: uppercase;
        margin-bottom: 20px;
        border-bottom: 4px solid #EA9A2C;
        display: inline-block;
        letter-spacing: 1px;
    }
    .btninput:hover
    {
        background: #e91e63;
    }
    @media (max-width: 768px)
    {
        section .imgBx
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        section .contentBx
        {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        section .contentBx .formBx
        {
            width: 100%;
            padding: 40px;
            background: rgb(255 255 255 / 0.9);
            margin: 50px;
        }
    }
</style>