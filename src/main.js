// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import Lazyload from 'vue-lazyload'
import Resource from 'vue-resource'

FastClick.attach(document.body)

Vue.use(Resource)
Vue.use(Lazyload, {
	loading: require('assets/lazy.svg')
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	template: '<App/>',
	components: { App }
})
