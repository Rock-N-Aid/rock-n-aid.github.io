<script setup>
    import Translate from '@/components/utils/Translate.vue';
</script>

<template>

    <header class="masthead">
        <span id = "backIMG"></span>
        <div class="container">
            <!-- <h1 style="font-size: 2.5vw;">
                <Translate pl = "ROCK N' AID - Linki" en = "ROCK N' AID - Links" />
            </h1> -->
            <!-- <h1 style="font-size: 4.5vw;">
                
            </h1> -->
            
            <div id = "linkList">
                <!-- Facebook -->
                <br>
                <a data-mdb-ripple-init class="btn btn-primary linkItem fb" href="#!" role="button"
                ><i class="fab fa-facebook-f"></i
                ></a>

                <!-- Instagram -->
                <a data-mdb-ripple-init class="btn btn-primary linkItem in" href="#!" role="button"
                ><i class="fab fa-instagram"></i
                ></a>

                <!-- Youtube -->
                <a data-mdb-ripple-init class="btn btn-primary linkItem yt" href="#!" role="button"
                ><i class="fab fa-youtube"></i
                ></a>
            </div>


            
            <!-- <div class="d-flex justify-content-center align-items-center gap-4 mb-5">

            </div>
            <RouterLink class="nav-link" to="#services"><a class="btn btn-primary btn-xl text-uppercase mt-4"><Translate pl="ZACZYNAMY" en = "START" /></a></RouterLink> -->
        </div>
    </header>

</template>




<!-- Script for countdown timer -->
<script>

</script>

<style scoped>
    header.masthead {
        background-image: none;
    }
    #backIMG {
        z-index: -1;
        display: inline-block;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("/assets/img/header-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(1px) grayscale(0.4);
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }



    #linkList {
        
        
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 50%; 
    }

    @media (max-width: 1200px) {
        #linkList {
            width: 90%;

        }
    }

    .yt{
        background-color: #c42727;
    }
    .in{
        background-color: #ab8c24;
    }
    .fb{
        background-color: #344d83;
    }

    @keyframes brightUp {
        from {
            filter:brightness(1);
        }
        to {
            filter:brightness(0.9);
        }
    }

    .yt:hover, .fb:hover, .in:hover{
        animation-name: brightUp;
        animation-duration: 0.3s;
        filter:brightness(0.9);
        
    }

    .linkItem {
        border: 1px solid rgb(31, 31, 31);
        margin: 5px 0;
        
    }
</style>