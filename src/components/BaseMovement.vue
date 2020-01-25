<template>
    <div class="swing" :style="inlineStyleSwing">
        <FunctionBlock v-for="block in leftSideBlocks"
               :block="block"
               :key="block.id"/>
        <FunctionBlock v-for="block in rightSideBlocks"
               :block="block"
               :side="true"
               :key="block.id"/>
    </div>
</template>

<script>
    import FunctionBlock from './FunctionBlock'
    import {mapState, mapMutations} from 'vuex'
    import {NEW_RIGHT_BLOCK} from '../constants'

    export default {
        name: "BaseMovement",
        components: {
            FunctionBlock
        },
        computed: {
            ...mapState([
                'rightSideBlocks',
                'leftSideBlocks'
            ]),
            swingBending() {
                return this.$store.getters.swingBending
            },
            inlineStyleSwing() {
                return {
                    transform: `rotate(${this.swingBending / 2}deg)`
                }
            }
        },
        methods: {
            ...mapMutations({
                addRightBlock: NEW_RIGHT_BLOCK,
            })
        },
        beforeMount() {
            this.addRightBlock()
        }
    }
</script>

<style lang="scss" scoped>
    .swing {
        width: 100%;
        height: 0.5rem;
        background-color: #263238;
        position: relative;
        transform: rotate(0deg);
        transition: transform 0.4s ease-in-out;
    }
</style>