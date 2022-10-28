<template>
  <header class="header">
          <!-- Start Header Navbar-->
      <div :class="`main-header ${sticky ? 'sticky fadeInDown' : ''}`">
          <div class="main-menu-wrap">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                          <!-- Logo -->
                          <div class="logo">
                              <nuxt-link to="/">
                                  <img src="/assets/img/logo.svg" alt="jironis">
                              </nuxt-link>
                          </div>
                          <!-- End of Logo -->
                      </div>
                      <div class="col-xl-8 col-lg-6 col-md-4 col-6 menu-button">
                          <div class="menu--inner-area clearfix">
                              <div class="menu-wraper">
                                  <nav>
                                      <!-- Header-menu -->
                                      <div class="header-menu dosis">

                                        <div id="menu-button" class="">
                                          <i class="fa fa-bars"></i>
                                        </div>

                                          <ul class="main-nav">
                                            <li><a class=navigate href=#>Home</a></li>
<!--                                                  <ul>-->
<!--                                                      <li class="active"><nuxt-link to="/">Home 1</nuxt-link></li>-->
<!--                                                      <li><nuxt-link to="/index2">Home 2</nuxt-link></li>-->
<!--                                                  </ul>-->
                                            </li>
<!--                                            <li><nuxt-link to="/WhitePaper"><font color="#f0f8ff" size="5">WhitePaper</font></nuxt-link></li>-->
                                            <li><a class=navigate href=assets/pdf/WHITEPAPER.pdf>WHITEPAPER</a></li>
                                            <li><a class=navigate href="#whitePaper">Swap Diamond</a></li>
                                            <li><a class=navigate href="#showPrice">Pricing</a></li>
<!--                                            <li><a href="#"><font color="#f0f8ff" size="4">Twitter</font></a>-->
<!--                                                  <ul>-->
<!--                                                      <li><nuxt-link to="/blog">Blog Posts</nuxt-link></li>-->
<!--                                                      <li><nuxt-link to="/blog-details">single Post</nuxt-link></li>-->
<!--                                                  </ul>-->
<!--                                              </li>-->
                                          </ul>
                                      </div>
                                      <!-- End of Header-menu -->
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-2 col-md-4 col-sm-5 d-md-block d-none">
                          <div class="urgent-call text-right">
                            <a href="#" class="btn"><font size="4">Launch App</font></a>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      <!-- End Header Navbar-->
  </header>
</template>

<script>
    // import pdf from 'vue-pdf';
    export default {
      name: "NavOne",
      data(){
        return {
          sticky: false,
          // url:"E:/archives/others/ADT/WHITEPAPER.pdf",
          // pdfURL: 'E:/archives/others/ADT/WHITEPAPER.pdf',
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);

        this.mobileMenu();
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.sticky = true
          }
          else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

        mobileMenu() {
            //Mobile Menu Toggle
            let mainNavToggler = document.querySelector("#menu-button");
            let mainNav = document.querySelector(".main-nav");

            mainNavToggler.addEventListener("click", function () {
                //mainNavToggler.classList.add('menu-opened');
                mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
            });
        }

      }
    }
</script>

<style scoped>
.main-menu-wrap .navigate:hover {
    /*border-color: #36324a;*/
    /*background: #9fcdff;*/
    color: #f77fdf;
}

.sticky .main-menu-wrap .navigate {
    border-color: #5b39c9;
    color: #ffe8a1;
    /*background: #ffe8a1;*/
}

.sticky .main-menu-wrap .navigate:hover {
    /*border-color: #36324a;*/
    /*background: #9fcdff;*/
    color: #f77fdf;
}

.navigate {
  color: #fff;
  font-size: 160%;
  font-family: Georgia, "Times New Roman", Times, serif;
}

</style>
