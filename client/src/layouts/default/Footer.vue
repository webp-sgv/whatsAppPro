<template>

    <v-footer class="bg-title">

        <v-row justify="center" no-gutters>

            <v-btn v-for="(link, i) in listJson[0].list_link" :key="i" :color="link.color" :variant="link.variant" :class="link.class" :rounded="link.rounded">
                <v-icon v-if="link.icon" :icon="link.icon" :size="link.size" :color="link.icon_color" start />
                {{ link.title }}
            </v-btn>

            <v-divider></v-divider>
            
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Wpp - Pro</strong>
            </v-col>
            
        </v-row>
        
    </v-footer>

</template>

<script>

// FILE JSON
import FooterJsonFile from '@/assets/json/Footer.json';

export default {
    data: () => ({
        listJson: FooterJsonFile
    }),
}
</script>