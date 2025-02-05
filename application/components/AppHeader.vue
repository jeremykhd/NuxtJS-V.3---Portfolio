<template>
<header class="w-full flex flex-row justify-between p-8 content-start px-16">
    <div class="flex">
    </div>
    <div class="flex flex-row text-base/7 subpixel-antialiased font-medium tracking-wide">
        <ul class="flex flex-row">
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <nuxt-link to="/">
                    Home
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
                <a href="#">
                    <Icon name="ri:linkedin-fill" style="color:white" size="20"></Icon>
                </a>
            </li>
            <li class="px-4 transition-colors delay-200 hover:text-green-300">
                <a href="#">
                    <Icon name="ri:github-fill" style="color:white" size="20"></Icon>
                </a>
            </li>
        </ul>
    </div>
</header>
</template>