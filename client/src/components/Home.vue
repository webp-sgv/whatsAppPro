<template>

  <suspense>
    <template #default>
      <v-container class="fill-height">

        <v-responsive class="align-center text-center fill-height">

          <v-img height="300" src="@/assets/logo_complete.svg" />

          <div class="text-body-2 font-weight-light mb-n1 text-center">
            <h1 class="text-h2 text-truncate font-weight-bold text-title">Bem-Vindo</h1>
          </div>

          <h1 class="text-h4 font-weight-bold text-subtitle">Made in Brazil</h1>

          <v-avatar image="@/assets/img/svg/bandeira_brazil.svg"></v-avatar>

          <div class="py-14" />

          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">

              <v-btn to="/layout" min-width="164" rel="noopener noreferrer" target="_blank" variant="text">
                <v-icon icon="mdi-view-dashboard" size="large" start />

                Recursos
              </v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn color="primary" to="/start" min-width="228" rel="noopener noreferrer" size="x-large" target="_blank"
                variant="flat">
                <v-icon icon="mdi-play" size="large" start />

                Começar
              </v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn to="/about" min-width="164" rel="noopener noreferrer" target="_blank" variant="text">
                <v-icon icon="mdi-account-group" size="large" start />

                Ajuda
              </v-btn>
            </v-col>
          </v-row>

        </v-responsive>

      </v-container>
    </template>
    <template #fallback>
      <v-container>
        <v-skeleton-loader :loading="true" height="300" type="image, list-item-two-line"
          color="transparent"></v-skeleton-loader>
      </v-container>
    </template>
  </suspense>

</template>

<script>


export default {
  
}
</script>