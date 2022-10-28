<template>
<v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        fixed
        app
    >
    <v-list dense>
        <v-list-item :to="{path: '/home'}">
            <v-list-item-action>
                <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{path: '/login'}">
            <v-list-item-action>
                <v-icon>login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <router-view />
    </v-content>
    <v-footer color="indigo" app>
    <span class="white--text">&copy; 2017</span>
    </v-footer>
</v-app>
</template>

<script>
import LoginView from './views/LoginView.vue';

export default {
    name: 'App',

    data: () => ({
        drawer: null,
        items: [
            {
                
            }
        ]
    }),
    props: {
        source: String
    }
}
</script>