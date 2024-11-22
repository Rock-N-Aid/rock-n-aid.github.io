<script setup>
    import Translate from '@/components/utils/Translate.vue';
</script>

<template>

    <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase"><Translate pl="CELE PROJEKTU" en="PROJECT GOALS"/></h2>
                    <h3 class="section-subheading text-muted"><Translate pl="Cele, które nami kierują przy tworzeniu tego projektu" en="The goals that guide us in creating this project"/></h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-handshake fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><Translate pl="POMOC" en="" /></h4>
                        <p class="text-muted">Celem Rock N' Aid Underground jest wsparcie charytatywne, poprzez organizację koncertu, którego zyski zostaną przeznaczone na pomoc [ORGANIZACJA DO WYBRANIA]</p>
                    </div>
                    
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-guitar fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><Translate pl="INTEGRACJA LOKALNYCH ZESPOŁÓW" en="" /></h4>
                        <p class="text-muted">Projekt stwarza przestrzeń do integracji lokalnych zespołów rockowych, które wspólnie tworzą wyjątkowe wydarzenie. Poprzez współpracę różnych grup muzycznych, Rock N' Aid Underground Kraków promuje artystów z regionu, pomagając im dotrzeć do szerszej publiczności.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-headphones-simple fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><Translate pl="ZAPREZENTOWANIE NOWEJ MUZYKI" en="" /></h4>
                        <p class="text-muted">W trakcie koncertu uczestnicy będą mieli okazję odkrywać nowe zespoły i podgatunki muzyki rockowej, które mogą być im dotąd nieznane. Dzięki różnorodności występujących grup, publiczność pozna unikalne brzmienia i style, poszerzając swoje muzyczne horyzonty.</p>
                    </div>
                </div>
            </div>
        </section>

</template>