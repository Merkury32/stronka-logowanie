var change = new Vue({
    el: '#change',
    data: {
      message: 'Zaloguj się'
    },
    methods: {
      change: function () {
        this.message = 'Zalogowany!'
      }
    }
  })