'use strict'

const inputUsername = new Vue({
  el: '#input-username',
  data: {
    username: '',
    message: ''
  },
  watch: {
    username: function(val, oldVal) {
      if(val.trim() === '') {
        this.message = '😢 名前を入力してください'
      } else if(val.length > 10) {
        this.message = '😭 10文字以内で入力してください'
      } else {
        this.message = '😃'
      }
    }
  }
})


