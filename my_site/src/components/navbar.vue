<template>
    <div>
        <v-app-bar>
            <v-app-bar-nav-icon v-on:click="drawer = !drawer" />
            <v-toolbar-title>TheConsoleGardenMG</v-toolbar-title>
            <v-spacer />
            <div v-if="darkmode">
                <v-btn text v-on:click="ToggleDarkMode">
                    <v-icon left>wb_sunny</v-icon>
                    <span>Light Mode</span>
                </v-btn>
            </div>
            <div v-else>
                <v-btn text v-on:click="ToggleDarkMode">
                    <v-icon left>brightness_3</v-icon>
                    <span>Dark Mode</span>
                </v-btn>
            </div>
        </v-app-bar>

        <v-navigation-drawer temporary app v-model="drawer">
            <div>
                <v-row justify="center">
                    <v-col cols="6" class="mt-5">
                        <v-avatar size="100">
                            <img src="/avatar-1.png" />
                        </v-avatar>
                    </v-col>
                </v-row>
                <p class="text-center mt-1 subheading">TheConsoleGardenMG</p>
            </div>

            <v-list>
                <v-list-item
                    v-for="page in pages"
                    v-bind:key="page.name"
                    router
                    :to="page.route"
                >
                    <v-list-item-action>
                        <v-icon>{{ page.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>
                        {{ page.name }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            darkmode: true,
            drawer: false,
            pages: [
                { name: "Home", icon: "home", route: "/" },
                { name: "projects", icon: "folder", route: "/projects" },
            ],
        };
    },
    methods: {
        ToggleDarkMode: function() {
            this.darkmode = !this.darkmode;
            this.$vuetify.theme.dark = this.darkmode;
        },
    },
};
</script>

<style scoped></style>
