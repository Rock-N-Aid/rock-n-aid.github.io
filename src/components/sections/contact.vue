<script setup>
    import Translate from '@/components/utils/Translate.vue';
    import PHPForm from '@/components/utils/PHPForm.vue';
    import TranslatedInput from '@/components/utils/TranslatedInput.vue';
</script>

<template>

<section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase"><Translate pl="SKONTAKTUJ SIĘ Z NAMI" en="CONTACT US"/></h2>
                    <h3 class="section-subheading text-muted" style="color: #d2d2d2 !important;"><Translate pl="Wypełnij formularz a odpowiemy tak szybko jak to tylko możliwe" en="Complete the form and we will respond as soon as possible"/></h3>
                    
                    <span v-if = "sentSuccess">
                        <div class="alert alert-dismissible alert-secondary">
                        <button type="button" class="btn-close" data-bs-dismiss="alert" @click.prevent="sentSuccess = false"></button>
                        <strong><Translate en = "Sent!" pl = "Wysłano!" /></strong> <Translate en = "We recieved your email. We'll contact you as soon as possible!" pl = "Otrzymaliśmy twój email. Odpowiemy na niego tak szybko, jak to możliwe!" />
                        </div>
                    </span>
                    <span v-if = "sentError">
                        <div class="alert alert-dismissible alert-danger">
                        <button type="button" class="btn-close" data-bs-dismiss="alert" @click.prevent="sentSuccess = false"></button>
                        <strong><Translate en = "Error!" pl = "Błąd!" /></strong> <Translate en = "An unknown error occurred. Please try again later." pl = "Wystąpił nieoczekiwany błąd. Sprobowaj ponownie później." />
                        </div>
                    </span>
                </div>
                <PHPForm id="contactForm" :model = "form" @sent = "sent" @formResponse="response" action = "https://marshallsofvictory.com/assets/php/hosting/rnaContact.php">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <!-- Name input-->
                                <TranslatedInput pl="Imię i Nazwisko *" en="Your Name *">
                                    <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" v-model = "form.name" required/>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </TranslatedInput>
                            </div>
                            <div class="form-group">
                                <!-- Email address input-->
                                <TranslatedInput pl="Twój Email *" en="Your Email *">
                                <input class="form-control" id="email" type="email" v-model="form.mail" required/>
                                </TranslatedInput>
                                    <!-- <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" v-model = "form.mail" required/> -->
                                
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                                <!-- Phone number input-->
                                <TranslatedInput pl="Numer Telefonu *" en="Your Phone *">
                                <input class="form-control" id="phone" type="number" placeholder="Your Phone *" data-sb-validations="required" v-model = "form.phone" required/>
                                </TranslatedInput>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <!-- Message input-->
                                <TranslatedInput pl="Wiadomość *" en="Your Message *">
                                    <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" v-model = "form.message" required></textarea>
                                </TranslatedInput>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted-->
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form-->
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    <!-- Submit Button-->
                    <span v-if = "sending">
                        <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit"><Translate pl="WYSYŁANIE..." en="SENDING..." /></button></div>
                    </span>
                    <span v-else>
                        <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit"><Translate pl="WYŚLIJ WIADOMOŚĆ" en="SEND MESSAGE" /></button></div>
                    </span>
                    
                </PHPForm>
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" style="margin-top: 70px"><Translate pl="LUB NAPISZ DO NAS" en="OR MESSAGE US"/></h2>

                    <div style="margin-top: 30px;">
                        <a href="mailto:rocknaidunderground@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style="margin-right: 15px; margin-top: -5px;" fill="white" class="bi bi-envelope-at-fill" viewBox="0 0 16 16"><path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/><path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/></svg></a>
                        <a href="mailto:rocknaidunderground@gmail.com" style="text-decoration: none; color: #bd0606; font-size: 20px;">rocknaidunderground@gmail.com</a>
                    </div>

                </div>
            </div>
        </section>

</template>



<script>
    export default {
        data() {
            return {
                form: {},
                sentSuccess: false,
                sentError: false,
                sending: false
            }

        },
        methods: {
            sent() {
                this.sending = true;
                this.sentSuccess = false;
                this.sentError = false;
            },
            response(e) {
                this.sending = false;
                console.log(JSON.stringify(e));
                if (e.success) {
                    this.sentSuccess = true;
                } else {
                    this.sentError = true;
                }
            }
        }
    }
</script>