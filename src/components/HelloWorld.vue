<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-25 17:45:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-25 23:03:15
 * @FilePath: \auto-size\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div class="name">名称  韵味妈咪宠物寄养医院</div>
  <div class="des">
    ：爱宠屋双林动物医院是1993年建立的一家规范性宠物医院，医院配备了美国IDEXX  5分类全血细胞分析仪ProCyte DX，美国IDEXX生化仪Catalyst  One、IDEXX血气离子分析仪、美国DR-X光机、动物专用sv-2000呼吸麻醉机、意大利百盛兽用彩超、心电监护仪、动物专用心电图机、动物专用血压计、电脑型高频电刀、超声波洁牙机、小动物牙科眼科骨科专用器件、牙科X光机、内窥镜、摄影显微镜、尿比重仪、检耳镜、检眼镜、培养箱、洁牙机等设备。 医院院长杨金福是我市较早从事小动物疾病临床和教学的西南民族大学。
  </div>
</template>

<style scoped>
.name{
  font-size: 18px;
}
.des{
  font-size: 12.266px;
}
</style>
