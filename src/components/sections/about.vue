<script setup>
    import Translate from '@/components/utils/Translate.vue';
</script>

<!-- <template>

    <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase"><Translate pl="O PROJEKCIE" en="ABOUT" /></h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/img/about/1.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 class="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/img/about/2.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 class="subheading">An Agency is Born</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/img/about/3.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>December 2015</h4>
                            <h4 class="subheading">Transition to Full Service</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/img/about/4.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>July 2020</h4>
                            <h4 class="subheading">Phase Two Expansion</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
                        <h4>
                            Be Part
                            <br />
                            Of Our
                            <br />
                            Story!
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>

</template> -->

<template>
<section id="about" class="py-5 bg-dark text-light page-section">
    <div class="container text-center">
    <div class="text-center">
        <h2 class="section-heading text-uppercase p-5"><Translate pl="O PROJEKCIE" en="ABOUT" /></h2>
    </div>
    <p class="lead mb-4">
      <strong>Rock N' Aid Underground Kraków</strong>
    <Translate
      pl=" to wyjątkowe wydarzenie muzyczne organizowane przez zespół 
      <em>Marshalls of Victory</em>. Celem koncertu jest nie tylko promocja muzyki rockowej w jej różnorodnych podgatunkach, 
      ale przede wszystkim zebranie funduszy na pomoc charytatywną. Podczas koncertu wystąpi kilka zespołów, 
      każdy reprezentujący inny styl muzyki rockowej – od klasycznego rocka, przez hard rock, aż po alternatywę." 
      
      en=" is a unique music event organized by the band Marshalls of Victory. The concert aims not only to promote rock music in its diverse subgenres but also, and most importantly, to raise funds for charitable causes. Several bands will perform during the event, each representing a different style of rock music—ranging from classic rock and hard rock to alternative." 
      
    />
    </p>
    <p class="mb-4 p-3">
      <Translate
    
        pl="Wstęp na wydarzenie jest całkowicie darmowy, a środki na cele charytatywne będą zbierane za pośrednictwem dedykowanej zbiórki, promowanej w trakcie koncertu. Projekt skierowany jest do społeczności lokalnej i miejskiej, tworząc przestrzeń do wspólnego świętowania muzyki i pomagania innym. " 
      
        en="Admission to the event is completely free, with funds for charity being collected through a dedicated fundraiser promoted during the concert. The project is aimed at the local and urban community, creating a space to celebrate music together while supporting those in need." 
      
      />
    </p>
    
    <div class="row gy-4 mb-4 mb-md-5 p-5">
        <div class="col-12 col-md-4">
          <div class="card border border-dark">
            <div class="card-body p-5">
              <h3 class="display-5 fw-bold text-primary text-center mb-2">13.03.2025</h3>
              <p class="fw-bold text-center m-0"><Translate pl="DATA" en="DATE" /></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card border border-dark">
            <div class="card-body p-5">
              <h3 class="display-5 fw-bold text-primary text-center mb-2">10</h3>
              <p class="fw-bold text-center m-0"><Translate pl="ZESPOŁÓW" en="BANDS" /></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card border border-dark">
            <div class="card-body p-5">
              <h3 class="display-5 fw-bold text-primary text-center mb-2">3</h3>
              <p class="fw-bold text-center m-0"><Translate pl="CELE" en="GOALS" /></p>
            </div>
          </div>
        </div>
    </div>
    <div class="text-center">
      <!-- <img src="path/to/your/image.jpg" alt="Kraków Underground Rock N' Aid" class="img-fluid rounded shadow-lg"> -->
    </div>
  </div>
</section>

</template>