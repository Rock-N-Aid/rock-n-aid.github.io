<script setup>
    import Translate from '@/components/utils/Translate.vue';
</script>

<template>

    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start">Copyright &copy; Rock N' Aid 2024</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="https://www.youtube.com/@RockNAid" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="https://www.youtube.com/@RockNAid" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="https://www.youtube.com/@RockNAid" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a class="link-dark text-decoration-none me-3" href="#!"><Translate pl="Opcja 1" en="Option 1"/></a>
                    <a class="link-dark text-decoration-none" href="#!"><Translate pl="Opcja 2" en="Option 2"/></a>
                </div>
            </div>
        </div>
    </footer>

</template>