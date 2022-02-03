<template>
  <div class="input-phone">
    <h1>Input phone</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'InputPhone'
})
export default class InputPhone extends Vue {
}
</script>

<style scoped>
.input-phone {
  color: red;
}
</style>
