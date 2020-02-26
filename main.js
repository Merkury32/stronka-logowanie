var change = new Vue({
    el: '#myApp',
    data: {
      lang:'pl',
      tr:{
        pl:{
          headerText: "powered by piotr",
          formHeader: "Zaloguj się",
          passwordInput: "Hasło",
          rememberMessage: "Zapamiętaj mnie",
          loginButton: "Zaloguj",
          passwordRemember: "Nie pamiętasz hasła?",
          footerCreator: "Ta strona jest produktem stworzonym przez Piotra",
          footerSeeMore: "Dowiedz się więcej tutaj",
          footerPrivateText: "GitHub project repo"
        },
        en:{
          headerText: "powered by piotr",
          formHeader: "Login",
          passwordInput: "Password",
          rememberMessage: "Remember me",
          loginButton: "Login",
          passwordRemember: "Don't remember password?",
          footerCreator: "This site is a product created by Piotr",
          footerSeeMore: "Learn more here",
          footerPrivateText: "GitHub project repo"
        }
      }
    },
    methods: {
      changeMe: function(){
        if(this.lang == "pl"){
          this.lang = 'en';
        }else{
          this.lang = 'pl';
        }
        
      }
    }
  });

