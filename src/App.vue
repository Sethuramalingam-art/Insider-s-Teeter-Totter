<template>
    <div class="root">
        <Header/>
        <TeetleTottleTotalArea/>
    </div>
</template>

<script>
    import Header from './components/Header'
    import TeetleTottleTotalArea from './components/TeetleTottleTotalArea'

    export default {
        name: 'app',
        components: {
            Header,
            TeetleTottleTotalArea
        }
    }
</script>

<style lang="scss">
    .root{
        overflow: hidden;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
</style>
