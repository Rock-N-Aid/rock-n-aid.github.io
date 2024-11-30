<script setup>
    import Translate from '@/components/utils/Translate.vue';
</script>

<template>

    <header class="masthead">
        
        <div class="container">
            <span class = "mastheadBackgroundImage"></span>
            <div class="masthead-subheading"><Translate pl = "OFICJALNA STRONA KONCERTU" en = "OFFICIAL EVENT SITE" /></div>
            <h1 style="font-size: 4.5vw;">ROCK N' AID UNDERGROUND</h1>
            
            <div class="d-flex justify-content-center align-items-center gap-4 mb-5">
                <div class="text-center">
                    <span class="fs-1 fw-bold">{{ countdown.days }}</span>
                    <p class="fs-5"><Translate pl="DNI" en="DAYS"/></p>
                </div>
                <div class="text-center">
                    <span class="fs-1 fw-bold">{{ countdown.hours }}</span>
                    <p class="fs-5"><Translate pl="GODZIN" en="HOURS"/></p>
                </div>
                <div class="text-center">
                    <span class="fs-1 fw-bold">{{ countdown.minutes }}</span>
                    <p class="fs-5"><Translate pl="MINUT" en="MINUTES"/></p>
                </div>
                <div class="text-center">
                    <span class="fs-1 fw-bold">{{ countdown.seconds }}</span>
                    <p class="fs-5"><Translate pl="SEKUND" en="SECONDS"/></p>
                </div>
            </div>

            <div class="btn-group mb-4"> 
                <button type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa-solid fa-calendar me-2 fa-lg"></i> 
                    <span style = "font-size: 80%;"><Translate pl="DODAJ DO KALENDARZA" en="ADD TO CALENDAR" /></span>
                    
                </button>
            
                <div class="dropdown-menu w-100">
                    <a class="dropdown-item py-2 mb-2" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Koncert+Rock+N%27+Aid+Underground&details=Rock+N%27+Aid+Underground+to+koncert%2C+który+łączy+muzykę+rockową+z+szczytnym+celem%21+Zorganizowane+przez+zespół+Marshalls+of+Victory+wydarzenie+ma+na+celu+nie+tylko+dostarczenie+niezapomnianych+muzycznych+emocji%2C+ale+także+wsparcie+lokalnej+społeczności+poprzez+zbiórkę+funduszy+na+pomoc+charytatywną.%0A%0ANa+scenie+pojawią+się+zespoły%2C+które+zaprezentują+różne+podgatunki+rocka%2C+zapewniając+różnorodność+i+prawdziwą+muzyczną+podróż%2E+Wstęp+jest+darmowy%2C+ale+każda+przekazana+złotówka+na+zbiórkę+charytatywną+będzie+miały+ogromne+znaczenie%21%0A%0ADołącz+do+nas+13+marca+2025+roku%2C+o+godzinie+18%3A00%2C+w+Zespole+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego+w+Krakowie+%28ul.%2E+Ułanów+3%29%2E+Przeżyj+rockową+noc+w+sercu+Krakowa%2C+pomagając+jednocześnie+tym%2C+którzy+najbardziej+tego+potrzebują.%0A%0ANie+przegap+tej+wyjątkowej+okazji%21+Przyjdź%2C+baw+się%2C+wspieraj%2C+razem+możemy+więcej%21&location=Zespół+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego%3A+Technikum+Komunikacyjne+Nr+25%2C+Ułanów+3%2C+31-450+Kraków%2C+Polska&dates=20250313T180000Z/20250313T200000Z&reminder=1440" target="_blank">
                      <i class="fab fa-google"></i> Google
                    </a>
                    <a class="dropdown-item py-2 mb-2" href="data:text/calendar;charset=utf-8,BEGIN%3AVEVENT%0ADTSTART%3A20250313T180000Z%0ADTEND%3A20250313T200000Z%0ASUMMARY%3AKoncert+Rock+N%27+Aid+Underground%0ADESCRIPTION%3ARock+N%27+Aid+Underground+to+koncert%2C+który+łączy+muzykę+rockową+z+szczytnym+celem%21+Zorganizowane+przez+zespół+Marshalls+of+Victory+wydarzenie+ma+na+celu+nie+tylko+dostarczenie+niezapomnianych+muzycznych+emocji%2C+ale+także+wsparcie+lokalnej+społeczności+poprzez+zbiórkę+funduszy+na+pomoc+charytatywną.%0A%0ANa+scenie+pojawią+się+zespoły%2C+które+zaprezentują+różne+podgatunki+rocka%2C+zapewniając+różnorodność+i+prawdziwą+muzyczną+podróż%2E+Wstęp+jest+darmowy%2C+a+fundusze+będą+zbierane+poprzez+zbiórkę+na+miejscu%2E+Wydarzenie+jest+skierowane+do+lokalnej+społeczności.%0A%0ADołącz+do+nas+13+marca+2025+roku%2C+o+godzinie+18%3A00%2C+w+Zespole+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego+w+Krakowie+%28ul.%2E+Ułanów+3%29%2E+Przeżyj+rockową+noc+w+sercu+Krakowa%2C+pomagając+jednocześnie+tym%2C+którzy+najbardziej+tego+potrzebują.%0A%0ANie+przegap+tej+wyjątkowej+okazji%21+Przyjdź%2C+baw+się%2C+wspieraj%2C+razem+możemy+więcej%21&LOCATION=Zespół+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego%3A+Technikum+Komunikacyjne+Nr+25%2C+Ułanów+3%2C+31-450+Kraków%2C+Polska%0AREMINDER%3A1440%0AEND%3AVEVENT" download="RockNAidKalendarz.ics">
                        <i class="fab fa-apple"></i> Apple
                    </a>
                    <a class="dropdown-item py-2 mb-2" href="https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&subject=Koncert+Rock+N%27+Aid+Underground&location=Zespół+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego%3A+Technikum+Komunikacyjne+Nr+25%2C+Ułanów+3%2C+31-450+Kraków%2C+Polska&startdt=2025-03-13T18:00:00&enddt=2025-03-13T20:00:00&body=Rock+N%27+Aid+Underground+to+koncert%2C+który+łączy+muzykę+rockową+z+szczytnym+celem%21+Zorganizowane+przez+zespół+Marshalls+of+Victory+wydarzenie+ma+na+celu+nie+tylko+dostarczenie+niezapomnianych+muzycznych+emocji%2C+ale+także+wsparcie+lokalnej+społeczności+poprzez+zbiórkę+funduszy+na+pomoc+charytatywną.%0A%0ANa+scenie+pojawią+się+zespoły%2C+które+zaprezentują+różne+podgatunki+rocka%2C+zapewniając+różnorodność+i+prawdziwą+muzyczną+podróż%2E+Wstęp+jest+darmowy%2C+ale+każda+przekazana+złotówka+na+zbiórkę+charytatywną+będzie+miały+ogromne+znaczenie%21%0A%0ADołącz+do+nas+13+marca+2025+roku+o+godzinie+18%3A00+w+Zespole+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego+w+Krakowie+%28ul.%2E+Ułanów+3%29%2E+Przeżyj+rockową+noc+w+sercu+Krakowa%2C+pomagając+jednocześnie+tym%2C+którzy+najbardziej+tego+potrzebują.%0A%0ANie+przegap+tej+wyjątkowej+okazji%21+Przyjdź%2C+baw+się%2C+wspieraj%2C+razem+możemy+więcej%21" target="_blank">
                      <i class="fab fa-microsoft"></i> Outlook
                    </a>
                    <a class="dropdown-item py-2 mb-2" href="https://calendar.yahoo.com/?v=60&view=d&st=2025-03-13T18%3A00%3A00&et=2025-03-13T20%3A00%3A00&title=Koncert+Rock+N%27+Aid+Underground&in_loc=Zespół+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego%3A+Technikum+Komunikacyjne+Nr+25%2C+Ułanów+3%2C+31-450+Kraków%2C+Polska&desc=Rock+N%27+Aid+Underground+to+koncert%2C+który+łączy+muzykę+rockową+z+szczytnym+celem%21+Zorganizowane+przez+zespół+Marshalls+of+Victory+wydarzenie+ma+na+celu+nie+tylko+dostarczenie+niezapomnianych+muzycznych+emocji%2C+ale+także+wsparcie+lokalnej+społeczności+poprzez+zbiórkę+funduszy+na+pomoc+charytatywną.%0A%0ANa+scenie+pojawią+się+zespoły%2C+które+zaprezentują+różne+podgatunki+rocka%2C+zapewniając+różnorodność+i+prawdziwą+muzyczną+podróż%2E+Wstęp+jest+darmowy%2C+ale+każda+przekazana+złotówka+na+zbiórkę+charytatywną+będzie+miały+ogromne+znaczenie%21%0A%0ADołącz+do+nas+13+marca+2025+roku%2C+o+godzinie+18%3A00%2C+w+Zespole+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego+w+Krakowie+%28ul.%2E+Ułanów+3%29%2E+Przeżyj+rockową+noc+w+sercu+Krakowa%2C+pomagając+jednocześnie+tym%2C+którzy+najbardziej+tego+potrzebują.%0A%0ANie+przegap+tej+wyjątkowej+okazji%21+Przyjdź%2C+baw+się%2C+wspieraj%2C+razem+możemy+więcej%21" target="_blank">
                      <i class="fab fa-yahoo"></i> Yahoo
                    </a>
                    
                    <div class="dropdown-divider"></div>
                    
                    <a class="dropdown-item py-3 mb-2" href="data:text/calendar;charset=utf-8,BEGIN%3AVEVENT%0ADTSTART%3A20250313T180000Z%0ADTEND%3A20250313T200000Z%0ASUMMARY%3AKoncert+Rock+N%27+Aid+Underground%0ADESCRIPTION%3ARock+N%27+Aid+Underground+to+koncert%2C+który+łączy+muzykę+rockową+z+szczytnym+celem%21+Zorganizowane+przez+zespół+Marshalls+of+Victory+wydarzenie+ma+na+celu+nie+tylko+dostarczenie+niezapomnianych+muzycznych+emocji%2C+ale+także+wsparcie+lokalnej+społeczności+poprzez+zbiórkę+funduszy+na+pomoc+charytatywną.%0A%0ANa+scenie+pojawią+się+zespoły%2C+które+zaprezentują+różne+podgatunki+rocka%2C+zapewniając+różnorodność+i+prawdziwą+muzyczną+podróż%2E+Wstęp+jest+darmowy%2C+ale+każda+przekazana+złotówka+na+zbiórkę+charytatywną+będzie+miały+ogromne+znaczenie%21%0A%0ADołącz+do+nas+13+marca+2025+roku%2C+o+godzinie+18%3A00%2C+w+Zespole+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego+w+Krakowie+%28ul.%2E+Ułanów+3%29%2E+Przeżyj+rockową+noc+w+sercu+Krakowa%2C+pomagając+jednocześnie+tym%2C+którzy+najbardziej+tego+potrzebują.%0A%0A‘Nie+przegap+tej+wyjątkowej+okazji%21+Przyjdź%2C+baw+się%2C+wspieraj%2C+razem+możemy+więcej%21%0ALOCATION%3AZespół+Szkół+Nr+1+im.%2E+św.%2E+Rafała+Kalinowskiego%3A+Technikum+Komunikacyjne+Nr+25%2C+Ułanów+3%2C+31-450+Kraków%2C+Polska%0AEND%3AVEVENT" download="RockNAidKalendarz.ics">
                    <Translate pl="Uniwersalnie (.ics)" en="Universally (.ics)" /></a>
                </div>
            </div>
            <RouterLink class="nav-link" to="#services"><a class="btn btn-primary btn-xl text-uppercase mt-4"><Translate pl="ZACZYNAMY" en = "START" /></a></RouterLink>
        </div>
    </header>

</template>




<!-- Script for countdown timer -->
<script>
    export default {
        data() {
            return {
                targetDate: new Date('2025-03-13T00:00:00'),
                countdown: {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
            };
        },
        methods: {
            updateCountdown() {
                const now = new Date();
                const difference = this.targetDate - now;

                if (difference > 0) {
                  this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
                  this.countdown.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                  this.countdown.minutes = Math.floor((difference / (1000 * 60)) % 60);
                  this.countdown.seconds = Math.floor((difference / 1000) % 60);
                } else {
                  this.countdown.days = 0;
                  this.countdown.hours = 0;
                  this.countdown.minutes = 0;
                  this.countdown.seconds = 0;
                }
            }
        },
        mounted() {
            this.updateCountdown();
            this.interval = setInterval(this.updateCountdown, 1000);
        },
        beforeUnmount() {
            clearInterval(this.interval);
        }
    };
</script>