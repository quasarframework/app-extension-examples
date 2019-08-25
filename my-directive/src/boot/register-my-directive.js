import Vue from 'vue'
import MyDirective from '../component/MyDirective.vue'

// we globally register our directive
Vue.directive('my-directive', MyDirective)
