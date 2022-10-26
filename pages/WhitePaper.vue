<template>
  <div>
    <client-only placeholder="Loading...">
      <pdf
        class="pdf"
        :src="require('static/assets/pdf/WHITEPAPER.pdf')"
        :page="17"
      ></pdf>
<!--      <pdf class="pdf" v-for="i in pageNum" :key="i" :src=file :page="i"></pdf>-->
    </client-only>
  </div>
</template>

<script>
  export default {
    name: "WhitePaper"
  }
</script>

<style scoped>
.pdf {
  /*border: 1px solid red;*/
  width: 60%;
  height: 60%;
  margin: 0 auto;
}
</style>
<!--<template>-->
<!--    <div>-->
<!--        <pdf-->
<!--            v-for="i in numPages"-->
<!--            :key="i"-->
<!--            :src="src"-->
<!--            :page="i"-->
<!--            style="display: inline-block; width: 25%"-->
<!--        ></pdf>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--import pdf from 'vue-pdf';-->

<!--var loadingTask = pdf.createLoadingTask('https://cdn.mozilla.net/pdfjs/tracemonkey.pdf');-->

<!--export default {-->
<!--    components: {-->
<!--        pdf-->
<!--    },-->
<!--    data() {-->
<!--        return {-->
<!--            src: loadingTask,-->
<!--            numPages: undefined,-->
<!--        }-->
<!--    },-->
<!--    mounted() {-->

<!--        this.src.promise.then(pdf => {-->

<!--            this.numPages = pdf.numPages;-->
<!--        });-->
<!--    }-->
<!--}-->

<!--</script>-->
