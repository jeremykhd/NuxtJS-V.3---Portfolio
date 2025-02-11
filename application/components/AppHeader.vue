<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import type { Portfolio } from "~/types/data";

const props = defineProps<{
    portfolio: Portfolio
}>();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 25; // Change la valeur selon le scroll
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
<header 
class="z-1 overflow-hidden w-full flex flex-row justify-between p-8 content-start px-16 sticky top-0 transition-all duration-500" 
:class="isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'">
<div class="hidden sm:visible w-full sm:flex flex-row justify-between">
    <div class="flex">
    </div>
    <div class="flex flex-row text-base/7 subpixel-antialiased font-medium tracking-wide">
        <ul class="flex flex-row">
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <nuxt-link to="/">
                    Accueil
                </nuxt-link>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <nuxt-link to="/about">
                    A propos de moi
                </nuxt-link>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <nuxt-link to="/projets">
                    Projets
                </nuxt-link>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <nuxt-link to="/contact">
                    Contact
                </nuxt-link>
            </li>
        </ul>
    </div>
    <div class="flex">  
        <ul class="flex flex-row">
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <a :href="portfolio.url?.linkedin ?? '#'">
                    <Icon name="ri:linkedin-fill" style="color:white" size="20"></Icon>
                </a>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <a :href="portfolio.url?.github ?? '#'">
                    <Icon name="ri:github-fill" style="color:white" size="20"></Icon>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="sm:hidden w-full flex justify-start">
<div class="w-fit cursor-pointer" v-on:click="console.log('hhhh')">
    <Icon name="ri-menu-2-line" style="color:white" size="20"></Icon>
</div>
</div>
</header>
</template>