<template>
  <v-container fluid>
    <v-card>
        <v-app-bar
            absolute
            color="primary"
            dark
            shrink-on-scroll
            src="https://picsum.photos/1920/1080?random"
            scroll-target="#scrolling-techniques-2"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                ></v-img>
            </template>

            <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>

            <v-app-bar-title>{{ rol }}</v-app-bar-title>

            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon color="deep-orange accent-3">mdi-fingerprint</v-icon>
            </v-btn>
            <v-btn icon @click="logo" >
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            app
            color="grey darken-2"
            class="navigator"
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ nombre }}</v-list-item-title>
                    <v-list-item-subtitle class="white--text">{{rol}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-btn
                icon
                @click.stop="mini = !mini"
                dark
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider></v-divider>
          <v-flex>
            <v-list>
              <v-list-group
                v-for="item in menu"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
                color="grey lighten-5"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" ></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="subItem in item.items"
                  :key="subItem.title"
                  link
                  :to="subItem.enlace"
                >
                
                  <v-list-item-icon>
                    <v-icon color="grey lighten-5">{{ subItem.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="subItem.title" @click="mini = !mini"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-flex>
        </v-navigation-drawer>
    </v-card>
    <v-card>
        <v-sheet
            id="scrolling-techniques-2"
            class="overflow-y-auto"
        >
          <v-container>
            <router-view></router-view>
          </v-container>
          
        </v-sheet>
    </v-card>    
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { logout, getName } from "../../login/helper/auth";
import rutas_admin from '../helper/admin-routes';

export default {
    data: () => ({
        mini: true,
        drawer: false,
        nombre: null,
        menu:null,
    }),
    computed:{
        ...mapState('loginModule',['rol'])
    },
    mounted(){
        this.nombre = getName()
        this.menu = rutas_admin()
    },
    methods:{
        logo(){
            logout()
        },
    },
}
</script>