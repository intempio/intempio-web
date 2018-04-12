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


