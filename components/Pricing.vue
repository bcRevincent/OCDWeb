<template>
  <div id="showPrice" class="pricing" >
  </div>
</template>

<script>
// import * as echarts from "echarts";
export default {
  name: 'Pricing',
  mounted() {
    this.DrawLine()
  },
  methods: {
    DrawLine() {
      let myChart = this.$echarts.init(document.getElementById('showPrice'), 'light')
      var option;

      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        };
      }

      let data = [];
      let now = new Date(2022, 10, 20);
      let oneDay = 24 * 3600 * 1000;
      let value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
        data.push(randomData());
      }
      option = {
        title: {
          text: 'History Average Price of One Carat Lab Diamond',
          textStyle: {
            color: '#FFF',
            fontStyle: 'italic',
            fontWeight: 'bolder',
            fontSize: 30,
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          axisLabel: {
            fontSize: 20,
            color: '#fff'
    }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 20,
            color: '#fff'
          },
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            emphasis: {
      itemStyle: {
        // 高亮时点的颜色。
        color: 'blue'
      },
      label: {
        show: true,
        // 高亮时标签的文字。
        // formatter: 'This is a emphasis label.'
      }
    },
            showSymbol: false,
            data: data,
            lineStyle: {
                                color: '#FF00FF',
                                width: 4
                            }
          }
        ]
      };
      setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 5000);
      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.pricing {
  background: rgba(0, 0, 0, 0.5);
  background-image: url('~@/static/assets/img/bgi.jpg');
  background-size: 100%;
  width: 60%;
  height: 40vh;
  overflow: auto;
  position: relative;
  fill-opacity: 60;
  margin: 0 auto;
  opacity: 0.6;
  /*position: center;*/
}
</style>
