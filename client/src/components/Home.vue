<template>
  <suspense>
    <v-container class="fill-height">

      <v-responsive class="align-center text-center fill-height">

        <v-img :height="dataJson[0].img_logo_height" :src="dataJson[0].img_logo" />

        <div class="text-body-2 font-weight-light mb-n1 text-center">
          <h1 class="text-h2 text-truncate font-weight-bold text-title">{{ dataJson[0].title }}</h1>
        </div>

        <h1 class="text-h4 font-weight-bold text-subtitle">{{ dataJson[0].sub_title }}</h1>

        <v-avatar :image="dataJson[0].flag"></v-avatar>

        <div class="py-14" />

        <v-row class="d-flex align-center justify-center">

          <v-col v-for="(key, i) in dataJson[0].list_btn" :key="i" :cols="key.cols">

            <v-btn :color="key.color" :to="key.to" :min-width="key.min_width" :rel="key.rel" :target="key.target" :variant="key.variant">
              <v-icon :icon="key.icon" :size="key.size" start />

              {{ key.title }}
            </v-btn>

          </v-col>

        </v-row>

      </v-responsive>
    </v-container>
    <template #fallback>
      Aguarde...
    </template>
    
  </suspense>
  
</template>

<script>

// FILE JSON
import FileJsonHomeGuide from '@/assets/json/HomeGuide.json';

export default {
  data: () => ({
    dataJson: FileJsonHomeGuide
  }),
}
</script>