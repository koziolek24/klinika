<template>
    <div id="container-main">
        <div id="main-1">
            <RouterView/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    components:
    {
    }

}
</script>
<style lang="scss" scoped>
    #container-main
    {
        display: flex;
        justify-content: center;
        background-image: url("../assetsPng/tło.png");
        background-repeat: repeat;
        background-size: contain;
        #main-1
        {
            width: 80vw;
            max-width: 1500px;
        }
    }
</style>