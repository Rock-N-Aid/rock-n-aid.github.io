<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import Links from "@/components/utils/links.vue";
</script>

<template>

    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start">Copyright &copy; Rock N' Aid 2024</div>
                <span class="col-lg-7" style = "text-align: center;">
                    <Links />
                </span>
                
                <div class="col-lg-4 text-lg-end">
                    <!-- <a class="link-dark text-decoration-none me-3" href="#!"><Translate pl="Opcja 1" en="Option 1"/></a> -->
                    <!-- <a class="link-dark text-decoration-none" href="#!"><Translate pl="Opcja 2" en="Option 2"/></a> -->
                </div>
            </div>
        </div>
    </footer>

</template>