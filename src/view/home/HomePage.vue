<template lang="html">
  <div class="">
    homepage
    <headerNav :home_selected = 1 />
  </div>
</template>

<script>
import headerNav from '../../components/nav/headerNav';
export default {
    components: {
      headerNav,
    },
}
</script>

<style lang="css" scoped>
</style>
