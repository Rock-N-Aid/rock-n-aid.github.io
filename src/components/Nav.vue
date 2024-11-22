<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import TranslatorLangSelector from './utils/TranslatorLangSelector.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><img src="/assets/img/rocknaid/tekst.png" style="height: 70px;" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><RouterLink class="nav-link" to="#services"><Translate pl="CELE" en="?"/></RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#portfolio"><Translate pl="ZESPOŁY" en="BANDS"/></RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#about"><Translate pl="O NAS" en="ABOUT"/></RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#team"><Translate pl="?" en="TEAM"/></RouterLink></li>
                        <li class="nav-item"><RouterLink class="nav-link" to="#contact"><Translate pl="KONTAKT" en="CONTACT"/></RouterLink></li>
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