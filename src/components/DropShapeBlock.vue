<template>
    <section class="dropbox">
        <FallingBlock v-for="(block, index) in fallingBlocks"
                      :block="block"
                      :index="index"
                      :timeOut="timeOut"
                      @finished-falling="onFinishFalling"
                      :key="block.id">
        </FallingBlock>
    </section>
</template>

<script>
    import FallingBlock from './FallingBlock'
    import {mapMutations} from 'vuex'
    import {
        INITI_FALLBLOCK,
        MOVE_LEFT,
        MOVE_RIGHT,
        INCREASING_ITERATION_COUNT,
        DECREASE_TIMEOUT,
        DELAY_TIMEOUT
    } from '../constants'

    export default {
        name: "DropShapeBlock",
        components: {
            FallingBlock
        },
        data() {
            return {
                timeOut: DELAY_TIMEOUT,
                iterationCounter: 0
            }
        },
        computed: {
            fallingBlocks() {
                return this.$store.state.fallingBlocks;
            }
        },
        methods: {
            ...mapMutations({
                initializeFallingBlocks: INITI_FALLBLOCK,
                moveBlockRight: MOVE_RIGHT,
                moveBlockLeft: MOVE_LEFT,
            }),
            onKeyDown(ev) {
                if (ev.keyCode === 39) this.moveBlockRight();
                if (ev.keyCode === 37) this.moveBlockLeft();
            },
            onFinishFalling() {
                this.iterationCounter++;
                if (this.iterationCounter === INCREASING_ITERATION_COUNT) {
                    this.timeOut -= DECREASE_TIMEOUT;
                    this.iterationCounter = 0;
                }
            }
        },
        beforeMount() {
            this.initializeFallingBlocks();
            window.addEventListener('keydown', this.onKeyDown)
        },
        beforeDestroy() {
            window.removeEventListener('keydown', this.onKeyDown)
        }
    }
</script>

<style lang="scss" scoped>
    .dropbox {
        height: 65%;
        width: 100%;
        position: relative;
    }
</style>