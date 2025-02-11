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
            <button class=" group flex flex-row justify-center space-x-2 w-fit cursor-pointer text-gray-400 rounded-4xl bg-black px-6 py-4 transition-all duration-300 border-2 hover:border-green-300  hover:text-white">
                <nuxt-link to="/contact">
                    Parlons-nous
                </nuxt-link>
                <Icon name="ri:message-2-line" class="text-gray-400 group-hover:text-white" size="20"></Icon>
            </button>
        </div>
    </div>
</template>