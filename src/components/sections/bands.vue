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

                <BandCard name = "Marshalls of Victory" image = "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/441169124_122114091620291832_3714412926982809132_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=d2uTjMQU2UQQ7kNvgH3f-Bx&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=AbvvZ5NdLSp8JJYItDBEFQY&oh=00_AYDIiUf61tKXzIrwHWONhJpWEvJ_0y7IeRSwNG_yLGhxCw&oe=674947A2" genre = "Hard Rock" members = "Patryk Sławiński, Jan Krawczyk, Antoni Otwinowski, Alex Nemertsalov" socials = "https://marshallsofvictory.com/#/links/">
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