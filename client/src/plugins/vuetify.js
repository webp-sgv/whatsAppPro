/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { VStepper } from 'vuetify/labs/VStepper';

// Composables
import { createVuetify } from 'vuetify';
import colors from 'vuetify/lib/util/colors'

var statusDark = localStorage.getItem("theme-dark");

if (!statusDark) {
  if (window.matchMedia) {
    var statusDarkModeBrowser = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (statusDarkModeBrowser) {
      statusDark = true
    } else {
      statusDark = false
    }
  } else {
    // Default (when Media-Queries are not supported)
  }
}

const themerDefault = {
  dark: statusDark ? true : false,
  colors: {
    background: '#FCE4EC',
    surface: '#006064',
    primary: '#009688',
    'primary-darken-1': '#E0F2F1',
    secondary: '#00B8D4',
    'secondary-darken-1': '#18FFFF',
    title: '#2b2b2b',
    subtitle: '#545454',
    error: '#BF360C',
    info: '#80CBC4',
    success: '#009688',
    green: '#004D40',
    warning: '#FFC400',
    gray: '#C5CAE9',
    CONNECTED: '#009688',
    CLOSED: '#FF3D00',
    INITIALIZING: '#F9A825',
    QRCODE: '#00897B'
  },
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'themerDefault',
      themes: {
        themerDefault,
      },
    },
    components: {
      VSkeletonLoader,
      VStepper
    },
  },
  
)