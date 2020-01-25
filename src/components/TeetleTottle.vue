<template>
    <section class="teetleTottle">
        <BaseMovement/>
        <BasicBlock/>
    </section>
</template>

<script>
    import BaseMovement from './BaseMovement'
    import BasicBlock from './BasicBlock'

    export default {
        name: "TeetleTottle",
        components: {
            BaseMovement, BasicBlock
        }
    }
</script>

<style scoped>
    .teetleTottle{
        height: 35%;
        width: 100%;
    }
</style>