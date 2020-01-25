<template>
    <main class="basicBlockArea">
        <DropShapeBlock/>
        <TeetleTottle/>
    </main>
</template>

<script>
    import DropShapeBlock from './DropShapeBlock'
    import TeetleTottle from './TeetleTottle'

    export default {
        name: "TeetleTottleTotalArea",
        components:{
            DropShapeBlock, TeetleTottle
        }
    }
</script>

<style lang="scss" scoped>
    .basicBlockArea {
         display: flex;
        flex-direction: column;
        padding-top: 1rem;
        width: 40%;
        height: 100%;
        margin: 0 auto;
       
    }
</style>