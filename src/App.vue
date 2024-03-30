<template>
    <banerPage/>
    <mainView/>
    <footerPage/>
    <ImageModal/>
</template>



<script>
import mainView from "./views/mainView.vue"
import banerPage from "./views/banerPage.vue"
import footerPage from "./views/footerPage.vue"
import 'animate.css';
import ImageModal from "./views/ImageModal.vue"
export default {
    name: 'App',
    components:
    {
        mainView,
        banerPage,
        footerPage,
        ImageModal
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
