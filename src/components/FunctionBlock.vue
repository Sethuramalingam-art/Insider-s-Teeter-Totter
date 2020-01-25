<template>
    <div :class="functionBlockName"
         :style="functionBlockInlineStyle"
         :ref="'element'">
        {{ block.weight }}
    </div>
</template>

<script>
    export default {
        name: "FunctionBlock",
        props: {
            block: {
                type: Object,
                required: true
            },
            side: {
                type: Boolean
            },
            top: {
                type: Number
            }
        },
        methods: {
            roundUp(number) {
                return Math.round(number * 100) / 100
            },
            getBlockBottomCoord() {
                const domElement = this.$refs.element;

                return domElement.getBoundingClientRect().bottom;
            }
        },
        computed: {
            functionBlockName() {
                const {type} = this.block;

                switch (type) {
                    case 0:
                        return 'shape-circle';
                    case 1:
                        return 'shape-triangle';
                    case 2:
                        return 'shape-rectangle'
                }
            },
            functionBlockInlineStyle() {
                const {offset, type, height} = this.block;
                const {side, roundUp, top} = this;

                const topOffset = top || 0;
                const leftOffset = side ? 50 + offset * 10 : 50 - offset * 10;
                const blockHeight = type !== 1 ?
                    {
                        height: `${roundUp(height)}px`,
                        width: `${roundUp(height)}px`,
                        lineHeight: `${roundUp(height)}px`
                    }
                    :
                    {
                        borderWidth: `0 ${roundUp(height)}px ${roundUp(height)}px ${roundUp(height / 2)}px`,
                        lineHeight: `${roundUp(height * 1.2)}px`
                    };

                return {
                    top: `${topOffset}px`,
                    left: `${leftOffset}%`,
                    ...blockHeight
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .shape-circle, .shape-rectangle, .shape-triangle {
        position: absolute;
        transform: translate(-50%, -100%);
        text-align: center;
    }

    .shape-circle{
        background-color: #c4c6db;
        border-radius: 50%;
    }

    .shape-triangle {
        width: 0;
        height: 0;
        line-height: 4rem;
        border-style: solid;
        border-color: transparent transparent rgb(190, 149, 149) transparent
    }

    .shape-rectangle {
        background-color: #f5f117;
    }
</style>