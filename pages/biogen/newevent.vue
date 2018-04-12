<template>
  <section class="container">
    <biogen-event-create />
  </section>
</template>

<script>
import BiogenEventCreate from "~/components/BiogenEventCreate.vue";

export default {
  components: {
    BiogenEventCreate
  },
  head() {
    return {
      title: "Biogen Create Event"
    };
  }
};
</script>


