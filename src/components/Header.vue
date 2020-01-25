<template>
    <header class="header">
        <div class="header__container">
            <div class="header__pauseButton" @click="togglePause">
                Click to play    
                <font-awesome-icon :icon="pauseButton"></font-awesome-icon>
            </div>
        </div>
    </header>
</template>

<script>
    import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
    import {mapMutations, mapState} from 'vuex'
    import {PAUSING_TOGGLE} from '../constants'

    export default {
        name: 'Header',
        computed: {
            ...mapState({
                isPaused: state => state.isPaused
            }),
            pauseButton() {
                return this.isPaused ? faPlay : faPause
            }
        },
        methods: {
            ...mapMutations({
                togglePause: PAUSING_TOGGLE
            }),
        }
    }
</script>

<style scoped lang="scss">
    $primary-color: rgba(90, 33, 33, 0);
    $secondary-color: #1b92ce;

    .header {
        width: 55%;
        background-color: $primary-color;
        color: $secondary-color;
    }

    .header__container {
        width: 80%;
        margin: 0 auto;
    }

    .header__pauseButton {
        width: 31%;
        cursor: pointer;
        font-size: 2rem;
        line-height: 2rem;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.4s ease-in-out;

        &:hover {
            background-color: lighten($primary-color, 10%);
        }
    }

</style>
