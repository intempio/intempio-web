<template>
  <section class="container">
    <sunovion-event-create />
  </section>
</template>

<script>
import SunovionEventCreate from "~/components/SunovionEventCreate.vue";

export default {
  components: {
    SunovionEventCreate
  },
  head() {
    return {
      title: "Sunovion Create Event"
    };
  }
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 25px auto;
}
</style>
