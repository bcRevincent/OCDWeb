<template>
  <div>
    <vue-particles
      id="particles-js"
      color="#fff"
      :particleOpacity="0.2"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <NavOne />
    <MyBanner/>
<!--    <BannerOne />-->
    <TodayPrice />
    <Features />
<!--    <Counter />-->
<!--&lt;!&ndash;    <ServiceOne />&ndash;&gt;-->
<!--&lt;!&ndash;    <ServiceTwo />&ndash;&gt;-->
<!--&lt;!&ndash;    <Video />&ndash;&gt;-->
<!--&lt;!&ndash;    <Screenshots />&ndash;&gt;-->
    <Pricing />
<!--&lt;!&ndash;    <Testimonial />&ndash;&gt;-->
<!--&lt;!&ndash;    <ClientsLogo />&ndash;&gt;-->
<!--&lt;!&ndash;    <BlogHome />&ndash;&gt;-->
<!--&lt;!&ndash;    <DownloadApp />&ndash;&gt;-->
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import BannerOne from "../components/BannerOne";
  import Footer from "../components/Footer";
  import Features from "../components/Features";
  import Counter from "../components/Counter";
  import ServiceTwo from "../components/ServiceTwo";
  import ServiceOne from "../components/ServiceOne";
  import Video from "../components/Video";
  import Screenshots from "../components/Screenshots";
  import Pricing from "../components/Pricing";
  import Testimonial from "../components/Testimonial";
  import ClientsLogo from "../components/ClientsLogo";
  import BlogHome from "../components/BlogHome";
  import DownloadApp from "../components/DownloadApp";
  import TodayPrice from "~/components/TodayPrice";
  import MyBanner from "~/components/MyBanner";
  export default {
    components: {
      DownloadApp,
      BlogHome,
      ClientsLogo,
      Testimonial,
      Pricing,
      Screenshots,
      Video,
      ServiceOne,
      ServiceTwo,
      Counter,
      Features,
      Footer,
      BannerOne,
      NavOne,
      TodayPrice,
      MyBanner
    }
  }
</script>

<style>
#particles-js {
  background: #0e0e0e;
  /*background-image: url('~@/static/assets/img/bgi.jpg');*/
  background-size: 100%;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
}
</style>
