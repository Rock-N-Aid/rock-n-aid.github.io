<script setup>

import Translate from '@/components/utils/Translate.vue';
import { getAI } from '@/assets/js/store';

</script>

<template>

    <div class="col-lg-4 col-sm-6 mb-4">
        <!-- Portfolio item 1-->
        <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" :href="'#portfolioModal' + contentID">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" :src="image" alt="..." />
            </a>
            <div class="portfolio-caption">
                <div class="portfolio-caption-heading">{{ name }}</div>
                <div class="portfolio-caption-subheading text-muted">
                    <slot name = "shortDesc"></slot>
                </div>
            </div>
        </div>
    </div>

    <!-- PopUp -->

    <div class="portfolio-modal modal fade" :id="'portfolioModal' + contentID" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">{{ name }}</h2>
                                    <p class="item-intro text-muted"><slot name = "shortDesc"></slot></p>
                                    <img class="img-fluid d-block mx-auto" :src="image" alt="..." />
                                    <p><slot name = "longDesc"></slot></p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong><Translate pl="Gatunek:" en="Genre:" /></strong>
                                            {{ genre }}
                                        </li>
                                        <li>
                                            <strong><a style = "color: black" :href="socials">Social Media</a></strong>
                                        </li>
                                        <li>
                                            <strong><Translate pl="Członkowie:" en="Members:" /></strong>
                                            {{ members }}
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        <Translate pl="ZAMKNIJ" en="CLOSE" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            contentID: getAI()
        }
    },

    props: {
        name: {
            type: String,
            default: "jakiś zespół"
        },
        image: {
            type: String,
            default: "/assets/img/bands/template.jpg"
        },
        genre: {
            type: String,
            default: "Rock"
        },
        socials: {
            type: String,
            default: ""
        },
        members: {
            type: String,
            default: ""
        }
    }
}

</script>

<style scoped>

div.modal-content {
    padding: 20px !important;
    width: 65%;
    margin: auto;

}

/* div.modal-content > .container {
    margin: 0 !important;
} */

</style>