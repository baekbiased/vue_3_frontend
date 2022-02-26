<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

</script>

<template>
  <div>
    <Header></Header>

    <div class="d-flex align-items-stretch">
      <Sidebar></Sidebar>
      <RouterView />
    </div>
  </div>


</template>
