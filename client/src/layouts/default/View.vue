<template>
  <v-main>
    <LoadingScreen v-if="isLoading"></LoadingScreen>
    <router-view />
  </v-main>
</template>

<script>
import LoadingScreen from "@/components/LoadingPage.vue";
export default {
  name: "Inventory",
  data() {
    return {
      isLoading: true
    };
  },
  components: {
    LoadingScreen
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
</script>

<style>
*::-webkit-scrollbar {
  width: 3px;
  background-color: #FCE4EC;
}

*::-webkit-scrollbar-thumb {
  background-color: #006064;

  background-image: -webkit-gradient(linear, 0 0, 0 100%,
      color-stop(.5, rgba(255, 255, 255, .2)),
      color-stop(.5, transparent), to(transparent));
}
</style>