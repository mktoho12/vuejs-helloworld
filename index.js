"use strict"

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `You loaded this page on ${Date.now().toLocaleString()}`
  }
})

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn javaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

