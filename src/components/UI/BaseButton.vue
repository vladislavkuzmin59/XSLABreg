<template>
    <div>
        <button @click="$emit('click')" :disabled="disabled" :class="['btn', getPropsFactory]">
            <slot />
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            theme: {
                type: String,
                 // Тема кнопки: primary, success, danger, warning
            },
            size: {
                type: String,
                default: "md", // Размеры кнопки: sm, md, lg
            },
            disabled: {
                type: Boolean,
                default: false,
            }, // состояние кнопки
        },
        computed: {
    getPropsFactory() {
      return [
        this.getWrappedTheme,
        this.getWrappedSizes,
        this.outline ? "btn-outline" : null,
      ].join(" ");
    },
    getWrappedSizes() {
      switch (this.size) {
        case "sm":
          return "btn-sm";
        case "md":
          return "bnt-md";
        case "lg":
          return "btn-lg";
        default:
          return "btn";
      }
    },
    getWrappedTheme() {
      switch (this.theme) {
        case "primary":
          return "btn-primary";
        case "success":
          return "btn-success";
        case "secondary":
          return "btn-secondary";
        case "warning":
          return "btn-warning";
        case "error":
          return "btn-error";
        case "registr":
          return "btn-registr";
        default:
          return "btn-danger";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
    .btn{
        background: inherit;
        display: flex;
        align-items: center;
        border-radius: 10px;
        outline: none;
        border: none;
        cursor: pointer;
        &.btn-primary{
            justify-content: center;
            color:#162A2D;
            background: #BCF6FF;
        }   
            &.btn-secondary{
              justify-content: center;
                background: white;
                border: 1px solid rgba($color: #E6E6E6, $alpha: 1.0);
            }
            &.btn-registr{
              justify-content: center;
              background: #FFE2A3;
              color: #342C1B;
            }
            &.btn-lg{
                width: 100%;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 450;
                font-size: 18px;
                line-height: 120%;
            }
            &.btn-sm{
                display: flex;
                align-items: center;
                width: fit-content;
                padding: 0 0.7vw;
                height: 3.5vh;
                gap: 0.5vw;
                border-radius: 8px;
                font-weight: 450;
                font-size: 18px;
                line-height: 100%;
                letter-spacing: -0.02em;
            }
        }
</style>