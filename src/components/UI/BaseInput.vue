<template>
    <input type="text" :value="modelValue"
    @input="$emit('input', $event.target.value)" 
    :placeholder="placeholder" 
    :class="['input', getPropsFactory]" >
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String, 
            },
            modelValue:{
                type: String,
                default: null 
            },
            size: {
                type: String,
            }
        },
        computed: {
            getPropsFactory(){
                    return [
                        this.getWrappedSize,
                    ].join("")
                }
            },
            getWrappedSize(){
                switch(this.size){
                    case "lg":
                        return "input-lg";
                    case "sm":
                        return "input-sm";
                    default:
                        return "input";
                }
            }
    }
</script>

<style lang="scss" scoped>
    .input{
        width: 100%;
        height: 58px;
        font-size: 18px;
        line-height: 120%;
        letter-spacing: -0.02em;
        display: flex;
        align-items: center;
        padding-left: 20px;
        border: 1px solid rgba($color: #E6E6E6, $alpha: 1);
        border-radius: 10px;
            ::placeholder{
                color: #A6A6A6;
            }
        

    }
</style>