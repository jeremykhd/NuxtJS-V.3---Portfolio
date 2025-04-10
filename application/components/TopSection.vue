<script lang="ts" setup>
const props = defineProps<{
    leadingDescription: string,
    title: string;
}>();
</script>

<template>
    <section class="w-full flex justify-center p-10 md:p-20 md:pt-32">
        <div class="w-full justify-start content-center flex flex-col space-y-15 md:space-y-20">
            <div class="w-full sm:w-full md:w-3/5 lg:w-3/5 space-y-15 animate__animated animate__fadeInUp">
                <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                    {{title}}
                </h1>
                <p class="text-base md:text-xl text-gray-300">
                    {{leadingDescription}}
                </p>
            </div>
            <slot></slot>
        </div>
    </section>
</template>