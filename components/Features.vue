<template>
  <div>
  <section class="pb-110" id='features'>
      <div class="container">
        <div class="row justify-content-center">
          <h1>
            &nbsp;
          </h1>
        </div>
          <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                  <!-- section title -->
                  <div class="section-title text-center">
                    <h2><font color="#f0f8ff">Advance Features</font></h2>
                  </div>
                  <!-- End of section title -->
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-12 col-lg-12">
                  <div class="feature-carousel owl-carousel">

                    <swiper :options="swiperOptions">

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/project-management.svg" class="svg" alt=""></div>
                        <h5><font color="#f0f8ff">Lab Diamond<br> Offering</font></h5>
                        <p><font color="#f0f8ff">This is the first project to integrate laboratory diamonds with blockchain technology.</font></p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/solution.svg" class="svg" alt=""></div>
                        <h5><font color="#f0f8ff">Decentralized Sales<br> Platform</font></h5>
                          <p><font color="#f0f8ff">One Carat Diamond is the first and the largest platform
with the largest diamond laboratories in the world, selling through their own token OCD.</font></p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/planning.svg" class="svg" alt=""></div>
                        <h5><font color="#f0f8ff">Staking Mining</font></h5>
                          <p><font color="#f0f8ff">You only need to stake your own tokens anytime, anywhere, and you can get new tokens without relying powerful computational resources.</font></p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/goal.svg" class="svg" alt=""></div>
                        <h5><font color="#f0f8ff">Fulfilling Redemption<br> Promise</font></h5>
                          <p><font color="#f0f8ff">We are committed to exchange diamonds with your tokens on a pro rata basis, independent of current diamond and token prices.</font></p>
                      </div><!-- End of single feature inner -->
                      </swiper-slide>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                  </div><!--/.feature-carousel-->
              </div><!--/.col-->
          </div><!--/.row-->
      </div><!--/.container-->
    <div class="tableLine"></div>
  </section>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "Features",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2
            },
            320:{
                slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>
.tableLine {
    position: relative;
    margin-top: 40px;
    /*align-content: center;*/
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
  /*overflow: auto;*/
    color: rgba(101, 101, 101, 1);
  }
</style>
