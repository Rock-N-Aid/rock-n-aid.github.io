<!-- <script setup>
    import Translate from '@/components/utils/Translate.vue';
    import PartnerCard from '@/components/PartnerCard.vue';
</script>

<template>

    <header class="masthead">
        
        <section class="page-section" id="portfolio">
        <div class="container">

            <div class="row">

                <PartnerCard name = "Marshalls of Victory" image = "/assets/img/bands/band1.jpg" members = "Patryk Sławiński, Jan Krawczyk, Antoni Otwinowski, Alex Nemertsalov" socials = "https://marshallsofvictory.com/#/links/">
                    <template #shortDesc>
                        <Translate pl="Organizator, Klasyczny Rock" en="Event Organizer, Classic Rock" />
                    </template>
                    <template #genre>
                        <Translate pl="Klasyczny Rock" en="Classic Rock" />
                    </template>
                </PartnerCard>

                <PartnerCard name = "DeWaiters" image = "/assets/img/bands/dewaiters.jpg" members = "Jakub Tutaj, Grzegorz Jakieła, Witold Fudała" socials = "https://www.facebook.com/dewaiters/">
                    <template #genre>
                        <Translate pl="Instrumentalny Rock Progresywny" en="Instrumental Progressive Rock" />
                    </template>
                    <template #shortDesc>
                        <Translate pl="Instrumentalny Rock Progresywny" en="Instrumental Progressive Rock" />
                    </template>

                </PartnerCard>

                <PartnerCard name = "Devise" image = "/assets/img/bands/devise.jfif" members = "" socials = "https://www.facebook.com/people/Devise-Band/61556257292872/?_rdr">
                    <template #genre>
                        Heavy Metal
                    </template>
                    <template #shortDesc>
                        Heavy Metal
                    </template>
                </PartnerCard>

            </div>
        </div>
    </section>
    </header>

</template> -->











<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import PartnerCard from '@/components/PartnerCard.vue';
    import ZZT from '@/components/logos/zzt.vue';
    import RNA from '@/components/logos/rna.vue';
    import Malik from '../logos/malik.vue';
    import TK from '../logos/tk.vue';
    import SS from '../logos/ss.vue'
</script>

<template>

    <header class="masthead">
        
        <section class="page-section" id="portfolio">
        <div class="container">
            <div class="py-5">
        <div class="container card col-12" style = "background-color: #EEEEEEDD">
            <span class = "greyed-out">

                <div class="row align-items-center">
                    <div class="col-md-3 col-sm-6 my-3">
                        <ZZT />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <TK />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <SS />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <Malik />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-3 col-sm-6 my-3">
                        <Malik />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <SS />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <TK />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <ZZT />
                    </div>

                </div>

        </span>
        </div>
    </div>
        </div>
    </section>
    </header>

</template>




<style scoped>

.greyed-out{
    filter: grayscale(0.2);
}

</style>

