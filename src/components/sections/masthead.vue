<script setup>
    import Translate from '@/components/utils/Translate.vue';
</script>

<template>

    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading"><Translate pl = "OFICJALNA STRONA PROJEKTU" en = "OFFICIAL SITE OF PROJECT" /></div>
            <div class="masthead-heading text-uppercase"><Translate pl="ROCK N' AID UNDERGROUND" en="ROCK N' AID UNDERGROUND" /></div>
            <RouterLink class="nav-link" to="#services"><a class="btn btn-primary btn-xl text-uppercase"><Translate pl="ZACZYNAMY" en = "START" /></a></RouterLink>
        </div>
    </header>

</template>