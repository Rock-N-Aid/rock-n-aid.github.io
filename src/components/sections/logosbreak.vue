<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import ZZT from '@/components/logos/zzt.vue';
    import RNA from '@/components/logos/rna.vue';
</script>

<template>

    <div class="py-5">
        <div class="container">
            <span class = "greyed-out">

                <div class="row align-items-center">
                    <div class="col-md-3 col-sm-6 my-3">
                        <RNA />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <ZZT />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <RNA />
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <ZZT />
                    </div>

                </div>

        </span>
            <div style = "text-align: center; display: flex; justify-content: center;">
                <RouterLink to="/partners"><button class = "btn btn-primary"><Translate pl="Więcej" en="More"/></button></RouterLink>
                
            </div>
        </div>
    </div>

</template>

<style scoped>

.greyed-out{
    filter: grayscale(0.2);
}

hr {
    display: inline-block;
    width: 5rem;
    margin: 1rem 10px;
    height: 2px;
    border-width: 0;
    background-color: #000000 !important;
    color: #000000 !important;

}

</style>