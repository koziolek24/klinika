<template>
    <div v-if="isMobile">
        <div id="main-mob">
            <img src="../assetsPng/KlinikJa-93.jpg">
            <img src="../assetsPng/KlinikJa-1.jpg">
            <img src="../assetsPng/KlinikJa-5.jpg">
            <img src="../assetsPng/KlinikJa-8.jpg">
            <img src="../assetsPng/KlinikJa-10.jpg">
            <img src="../assetsPng/KlinikJa-15.jpg">
            <img src="../assetsPng/KlinikJa-17.jpg">
            <img src="../assetsPng/KlinikJa-28.jpg">
            <img src="../assetsPng/KlinikJa-32.jpg">
            <img src="../assetsPng/KlinikJa-51.jpg">
            <img src="../assetsPng/KlinikJa-55.jpg">
            <img src="../assetsPng/KlinikJa-63.jpg">
            <img src="../assetsPng/KlinikJa-69.jpg">
            <img src="../assetsPng/KlinikJa-74.jpg">
        </div>
    </div>
    <div v-else>
        <div id="main-not">
            <img src="../assetsPng/KlinikaJa-93.jpg">
            <img src="../assetsPng/KlinikaJa-1.jpg">
            <img src="../assetsPng/KlinikaJa-5.jpg">
            <img src="../assetsPng/KlinikaJa-8.jpg">
            <img src="../assetsPng/KlinikaJa-10.jpg">
            <img src="../assetsPng/KlinikaJa-15.jpg">
            <img src="../assetsPng/KlinikaJa-17.jpg">
            <img src="../assetsPng/KlinikaJa-28.jpg">
            <img src="../assetsPng/KlinikaJa-32.jpg">
            <img src="../assetsPng/KlinikaJa-51.jpg">
            <img src="../assetsPng/KlinikaJa-55.jpg">
            <img src="../assetsPng/KlinikaJa-63.jpg">
            <img src="../assetsPng/KlinikaJa-69.jpg">
            <img src="../assetsPng/KlinikaJa-74.jpg">

        </div>
    </div>
</template>



<script>
export default{
    data(){
        return
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 1000;
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';
    #main{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media only screen and (max-width: 1000px)
    {
        #main-mob{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

</style>
