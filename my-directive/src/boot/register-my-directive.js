import Vue from 'vue'
import MyDirective from '../component/my-directive.js'

// We globally register our directive with Vue;
// Rememeber that all directives in Vue will start with 'v-'
// but that should not be part of your directive name
// https://vuejs.org/v2/guide/custom-directive.html
// 'my-directive' will be used as 'v-my-directive'
Vue.directive('my-directive', MyDirective)
