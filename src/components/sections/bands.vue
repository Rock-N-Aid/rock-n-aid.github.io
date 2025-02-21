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

                <BandCard name = "Marshalls of Victory" image = "/assets/img/bands/band1.jpg" members = "Patryk Sławiński, Jan Krawczyk, Antoni Otwinowski, Alex Nemertsalov" socials = "https://marshallsofvictory.com/#/links/">
                    <template #shortDesc>
                        <Translate pl="Organizator, Klasyczny Rock" en="Event Organizer, Classic Rock" />
                    </template>
                    <template #genre>
                        <Translate pl="Klasyczny Rock" en="Classic Rock" />
                    </template>
                    <!-- <template #longDesc>
                        <Translate pl="Organizator" en="Event Organizer" />
                    </template> -->
                </BandCard>

                <BandCard name = "DeWaiters" image = "/assets/img/bands/dewaiters.jpg" members = "Jakub Tutaj, Grzegorz Jakieła, Witold Fudała" socials = "https://www.facebook.com/dewaiters/">
                    <template #genre>
                        <Translate pl="Instrumentalny Rock Progresywny" en="Instrumental Progressive Rock" />
                    </template>
                    <template #shortDesc>
                        <Translate pl="Instrumentalny Rock Progresywny" en="Instrumental Progressive Rock" />
                    </template>
                    <!-- <template #longDesc>
                        <Translate pl="Organizator" en="Event Organizer" />
                    </template> -->
                </BandCard>

                <BandCard name = "Devise" image = "/assets/img/bands/devise.jfif" members = "" socials = "https://www.facebook.com/people/Devise-Band/61556257292872/?_rdr">
                    <template #genre>
                        Heavy Metal
                    </template>
                    <template #shortDesc>
                        Heavy Metal
                    </template>
                    <!-- <template #longDesc>
                        <Translate pl="Organizator" en="Event Organizer" />
                    </template> -->
                </BandCard>

                <BandCard name = "Teatr Szachrajskiej Piguły" image = "/assets/img/bands/teatr.jpg" members = "" socials = "https://www.facebook.com/teatrszachrajskiejpiguly/">
                    <template #genre>
                        <Translate pl="Rock Psychodeliczny" en="Psychodelic Rock" />
                    </template>
                    <template #shortDesc>
                        <Translate pl="Rock Psychodeliczny" en="Psychodelic Rock" />
                    </template>
                    <!-- <template #longDesc>
                        <Translate pl="Organizator" en="Event Organizer" />
                    </template> -->
                </BandCard>

            </div>
        </div>
    </section>
    

</template>