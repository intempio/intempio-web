<template>
  <section class="container">
    <div class="child">
      <h1 class="title">
        intempio
      </h1>

      <div class="links">
        <nuxt-link to="/biogen" class="button--grey">Biogen</nuxt-link>
        <nuxt-link to="/sunovion" class="button--grey">Sunovion</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  position: relative;
}
.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}

.button--grey {
  display: inline-block;

  /* border: 1px solid #35495e; */
  color: #35495e;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #35495e;
  /* background-color: #35495e; */
  text-decoration: underline;
}

.title {
  display: block;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 0;
}

.subtitle {
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
