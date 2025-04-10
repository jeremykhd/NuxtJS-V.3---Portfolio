<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import type { Portfolio } from "~/types/data";

const props = defineProps<{
    portfolio: Portfolio
}>();

const route = useRoute();
const isScrolled = ref(false);
const isMenuOpen = ref(false);

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
:class="{
    'bg-black shadow-lg' : isScrolled, 
    'bg-transparent' : !isScrolled,
}">
<div class="hidden sm:visible w-full sm:flex flex-row justify-between">
    <div class="flex">
    </div>
    <div class="flex flex-row text-base/7 subpixel-antialiased font-medium tracking-wide">
        <ul class="flex flex-row">
            <li class="px-4 transition-colors delay-200 hover:text-green-300" :class="{'text-green-300' : route.name === 'index'}">
                <nuxt-link to="/">
                    Accueil
                </nuxt-link>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300" :class="{'text-green-300' : route.name === 'about'}">
                <nuxt-link to="/about">
                    A propos de moi
                </nuxt-link>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300" :class="{'text-green-300' : route.name === 'projets'}">
                <nuxt-link to="/projets">
                    Projets
                </nuxt-link>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300" :class="{'text-green-300' : route.name === 'contact'}">
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
<div class="w-fit cursor-pointer" v-on:click="isMenuOpen = true">
    <Icon name="ri-menu-2-line" style="color:white" size="20"></Icon>
</div>
</div>
</header>
<transition name="fadeInLeft">
    <div v-if="isMenuOpen" 
    class="fixed animate__animated z-10 w-screen h-screen overflow-hidden bg-black">
        <div class="h-full w-full flex flex-col justify-between p-10 space-y-20">
            <div class="flex flex-row">
                <button v-on:click="isMenuOpen = false">
                    <Icon name="ri-arrow-left-line" style="color:white" size="36"></Icon>
                </button>
                
            </div>
            <ul class="flex flex-col space-y-10 items-start">
                <li class="px-4 transition-colors delay-200 hover:text-green-300 text-left text-4xl" :class="{'text-green-300' : route.name === 'index'}" v-on:click="isMenuOpen = false">
                    <nuxt-link to="/">
                        Accueil
                    </nuxt-link>
                </li>
                <li class="px-4 transition-colors delay-200 hover:text-green-300 text-center text-4xl" :class="{'text-green-300' : route.name === 'about'}" v-on:click="isMenuOpen = false">
                    <nuxt-link to="/about">
                        A propos de moi
                    </nuxt-link>
                </li>
                <li class="px-4 transition-colors delay-200 hover:text-green-300 text-center text-4xl" :class="{'text-green-300' : route.name === 'projets'}" v-on:click="isMenuOpen = false">
                    <nuxt-link to="/projets">
                        Projets
                    </nuxt-link>
                </li>
                <li class="px-4 transition-colors delay-200 hover:text-green-300 text-center text-4xl" :class="{'text-green-300' : route.name === 'contact'}" v-on:click="isMenuOpen = false">
                    <nuxt-link to="/contact">
                        Contact
                    </nuxt-link>
                </li>
            </ul>
            <div class="flex">  
                <ul class="flex flex-row">
                    <li class="px-4 transition-colors delay-200 hover:text-green-300">
                        <a :href="portfolio.url?.linkedin ?? '#'">
                            <Icon name="ri:linkedin-fill" style="color:white" size="36"></Icon>
                        </a>
                    </li>
                    <li class="px-4 transition-colors delay-200 hover:text-green-300">
                        <a :href="portfolio.url?.github ?? '#'">
                            <Icon name="ri:github-fill" style="color:white" size="36"></Icon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</transition>
</template>