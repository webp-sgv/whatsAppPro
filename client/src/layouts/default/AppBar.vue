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
      
      <v-btn to="/layout" rel="noopener noreferrer" variant="text">
        <v-icon icon="mdi-view-dashboard" size="large" start />
        Recursos
      </v-btn>

    </template>
  </v-app-bar>
  
</template>

<script>
  import jsonDefaultAppBar from '@/assets/json/AppBar.json';
  export default {
    data: {
      ret
    }
  }
</scrip