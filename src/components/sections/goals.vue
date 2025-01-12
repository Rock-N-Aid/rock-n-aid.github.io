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
                        <h4 class="my-3"><Translate pl="POMOC" en="HELP" /></h4>
                        <p class="text-muted"><Translate pl="Celem Rock N' Aid Underground jest wsparcie charytatywne, poprzez organizację koncertu, którego zyski zostaną przeznaczone na pomoc fundacji na rzecz dzieci osieroconych/zagrożonych utratą opieki rodzicielskiej." en = "The purpose of Rock N' Aid Underground is to support charity through the organization of the concert, the proceeds of which will be donated to a foundation for orphaned children." /></p>
                    </div>
                    
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-guitar fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><Translate pl="INTEGRACJA LOKALNYCH ZESPOŁÓW" en="INTEGRATION OF LOCAL BANDS" /></h4>
                        <p class="text-muted"><Translate pl="Projekt stwarza przestrzeń do integracji lokalnych zespołów rockowych, które wspólnie tworzą wyjątkowe wydarzenie. Poprzez współpracę różnych grup muzycznych, Rock N' Aid Underground Kraków promuje artystów z regionu, pomagając im dotrzeć do szerszej publiczności." en="The project creates a space for the integration of local rock bands, which together create a unique event. Through the collaboration of various musical groups, Rock N' Aid Underground Kraków promotes regional artists, helping them reach a wider audience." /></p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-headphones-simple fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><Translate pl="ZAPREZENTOWANIE NOWEJ MUZYKI" en="PRESENTATION OF NEW MUSIC" /></h4>
                        <p class="text-muted"><Translate pl="W trakcie koncertu uczestnicy będą mieli okazję odkrywać nowe zespoły i podgatunki muzyki rockowej, które mogą być im dotąd nieznane. Dzięki różnorodności występujących grup, publiczność pozna unikalne brzmienia i style, poszerzając swoje muzyczne horyzonty." en="During the concert, attendees will have the opportunity to discover new bands and subgenres of rock music that may have been unfamiliar to them. Thanks to the diversity of the performing groups, the audience will experience unique sounds and styles, expanding their musical horizons." /></p>
                    </div>
                </div>
            </div>
        </section>

</template>