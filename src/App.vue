<template>
    <banerPage/>
    <mainView/>
    <footerPage/>
</template>



<script>
import mainView from "./views/mainView.vue"
import banerPage from "./views/banerPage.vue"
import footerPage from "./views/footerPage.vue"
import 'animate.css';
export default {
    name: 'App',
    components:
    {
        mainView,
        banerPage,
        footerPage,
    }

}
</script>

<style lang="scss">
@import './styles/style.scss';
*
{
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $font-color;
    box-sizing: border-box;
}
body
{
    margin: 0;
}
</style>
