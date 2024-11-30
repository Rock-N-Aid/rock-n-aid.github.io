<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import BandCard from '@/components/BandCard.vue';
</script>

<template>

    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase"><Translate pl="ZESPOŁY" en="BANDS" /></h2>
                <h3 class="section-subheading text-muted"><Translate pl="Zespoły, które zagrają na naszym koncercie" en="Bands, that will play on our concert" /></h3>
            </div>
            <div class="row">

                <BandCard name = "Marshalls of Victory" image = "/assets/img/bands/band1.jpg" genre = "Hard Rock" members = "Patryk Sławiński, Jan Krawczyk, Antoni Otwinowski, Alex Nemertsalov" socials = "https://marshallsofvictory.com/#/links/">
                    <template #shortDesc>
                        <Translate pl="Organizator" en="Event Organizer" />
                    </template>
                    <!-- <template #longDesc>
                        <Translate pl="Organizator" en="Event Organizer" />
                    </template> -->
                </BandCard>

            </div>
        </div>
    </section>
    

</template>