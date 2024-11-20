<script setup>
    import TranslatorLangSelector from './utils/TranslatorLangSelector.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><img src="/assets/img/navbar-logo.svg" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><RouterLink class="nav-link" to="#services">NavBar</RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#portfolio">Portfolio</RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#about">About</RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#team">Team</RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#contact">Contact</RouterLink></li>
                    </ul>
                </div>
            </div>
            <TranslatorLangSelector />
        </nav>
</template>

<script>

export default {
    
}

</script>