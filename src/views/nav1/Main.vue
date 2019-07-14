<template>
  <section>main</section>
</template>

<script>
import { request } from '../../api/api'
export default {
  mounted() {
    request
      .apiGet('/option/role', { token: localStorage.getItem('token') })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>
</style>