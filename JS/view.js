const view = {};

view.showComponents = function (name) {
  switch (name) {
    case "login": {
      let app = document.getElementById("app");
      app.innerHTML = components.login;

      let form = document.getElementById("log-in-form");
      form.onsubmit = formSubmitHandler;

      function formSubmitHandler(e) {
        e.preventDefault();
        let loginInfo = {
          name: form.name.value,
          phone: form.phone.value,
        };
        controller.login(loginInfo)
      }
      break;
    }
    case "home": {
      let app = document.getElementById("app");
      app.innerHTML = components.home;

      let reservation = document.getElementById("start")
      reservation.onclick = linkCLickHandler

      function linkCLickHandler(e){
        e.preventDefault()
        view.showComponents('reservation')
      }
      break;
    }
    case "reservation":{
      let app = document.getElementById('app')
      app.innerHTML = components.reservation;

      let form = document.getElementById("reservation-form")
      form.onsubmit = formSubmitHandler 

      function formSubmitHandler(e){
        e.preventDefault()
        let ReservationForm = {
          name: form.fullName.value,
          phone: form.phoneNumber.value,
          day: form.day.value,
          size: form.size.value,
          time: form.time.value
        } 
        console.log(ReservationForm)
      } 
      break;
    }
  }
};
