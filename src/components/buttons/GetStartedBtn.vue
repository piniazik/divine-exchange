<template>
    <a class="text-base text-white font-semibold relative z-10 h-full w-fit flex justify-center items-center bg-btn-pattern rounded-la transition-colors duration-300 pattern"
        href="/" :style="{ minHeight: height, paddingLeft: paddingLeft || '0', paddingRight: paddingRight || '0', paddingTop: paddingTop || '0', paddingBottom: paddingBottom || '0' }">
        <slot></slot>
    </a>
</template>
<script>
    export default {
        name: 'GetStartedBtn',
        props: {
            height: {
                type: String,
                default: 'auto'
            },
            paddingLeft: {
                type: String,
                default: ''
            },
            paddingRight: {
                type: String,
                default: ''
            },
            paddingTop: {
                type: String,
                default: ''
            },
            paddingBottom: {
                type: String,
                default: ''
            }
        },
    }
</script>