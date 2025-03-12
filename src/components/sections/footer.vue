<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import Links from "@/components/utils/links.vue";
</script>

<template>

    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 text-lg-start">Copyright &copy; Rock N' Aid 2025</div>
                <span class="col-lg-6" style = "text-align: center;">
                    <Links />
                </span>
                
                <div class="col-lg-3 text-lg-end"><a  class = "link-dark me-3" href="/assets/Regulamin_wydarzenia_Rock_N_Aid_2025.pdf" target = "_blank">Regulamin wydarzenia</a></div>
            </div>
        </div>
    </footer>

</template>