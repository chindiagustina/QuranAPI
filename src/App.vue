<script>
    import Navigation from "./components/Navigation.vue";
    export default {
        name: "App",
        components: {
            Navigation,
        },
    };
</script>

<template>
    <Navigation />

    <router-view />
</template>

<style>
    * {
        margin: 0;
    }
    #app {
        min-height: 100vh;
        background-color: #2b2b2b;
    }
</style>
