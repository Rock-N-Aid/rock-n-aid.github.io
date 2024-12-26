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
        </div>
    </div>

</template>

<style scoped>

.greyed-out{
    filter: grayscale(0.2);
}

</style>