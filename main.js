var change = new Vue({
    el: '#change',
    data: {
      message: 'Zaloguj się'
    },
    methods: {
      changeMe() {
        this.message = 'Zalogowany!'
      }
    }
  });