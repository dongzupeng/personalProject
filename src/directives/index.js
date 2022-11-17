import Vue from 'vue'

import lazyLoad from "./lazyload";
import insertDom from "./drag";
import inserted from "./hasRole";
Vue.directive('lazyload', lazyLoad)
Vue.directive('drag', insertDom)
Vue.directive('hasRole', inserted)