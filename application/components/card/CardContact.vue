<script lang="ts" setup>
import type { Contact } from '~/types/data';

const props = defineProps<{
    contact: Contact
}>()
</script>

<template>
    <div class="w-full h-fit p-4 flex justify-center animate__animated animate__fadeInUp">
        <div class="bg-green-300 w-fit h-full rounded-4xl justify-center items-center flex flex-col p-10 xl:p-15 space-y-4">
            <p class="text-2xl md:text-4xl lg:text-4xl xl:text-5xl tracking-wide text-black text-center font-normal">
                {{ contact.leadingDescription }}
            </p>
            <p class="hidden md:flex text-lg lg:text-lg xl:text-xl tracking-wide text-black text-center font-normal pt-10 pb-10">
                {{ contact.description }}
            </p>
            <nuxt-link to="/contact">
                <button class=" group flex flex-row justify-center items-center space-x-2 w-fit cursor-pointer text-gray-400 rounded-4xl bg-black px-6 py-4 transition-all duration-300 border-2 hover:border-green-300  hover:text-white">
                    <p>Parlons-nous</p>
                    <Icon name="ri:message-2-line" class="justify-end" size="20"></Icon>
                </button>
            </nuxt-link>
        </div>
    </div>
</template>