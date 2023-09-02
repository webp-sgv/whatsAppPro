<template>
  <v-app-bar scroll-behavior="elevate" scroll-threshold="0">

    <v-app-bar-title>

      <suspense>
        <template #default>
          <v-avatar image="../../assets/gears_allow_white.svg" size="25"></v-avatar>
        </template>
        <template #fallback>
          Aguarde
        </template>
      </suspense>
      Wpp - Pro
    </v-app-bar-title>

    <template v-slot:append>

      <Suspense>
        <template #default>

          <v-btn v-for="key, i in itemsAppBar[0].list_to" :key="i" :to="key.to" :rel="key.rel" :variant="key.variant">
            <v-icon :icon="key.icon" :size="key.size" start />
            {{ key.title }}
          </v-btn>
          
        </template>
        <template #fallback>
          Aguarde...
        </template>
      </Suspense>

      
      <v-btn to="/account" rel="" variant="text">
        <v-icon icon="mdi-account" size="larger" start />
        Acessar
      </v-btn>

    </template>
  </v-app-bar>
</template>

<script>

import jsonDefaultAppBar from '@/assets/json/AppBar.json';

export default {
  data: () => ({
    itemsAppBar: jsonDefaultAppBar
  }),
}
</script>
