const components = {};

components.home = `
<style>

.box{
    width: 900px;
    float: right;
    // border: 1px solid black;
}
.box ul li{
    width: 120px;
    float: left;
    margin: 10px auto;
    text-align: center;
    list-style: none;
}
.box ul li a{
    font-size: 17px;
    text-decoration: none;
    color: darkgray;
}

.box ul li a:hover{
    color: white;
}
.wd{
    width: 500px;
    height: 740px;
    background-color: black;
    opacity: 0.9;
    padding: 55px;
}
.wd h1{
    text-align: center;
    text-transform: uppercase;
    font-weight: 100px;
}
.wd h4{
    text-align: justify;
    color: darkgray;
    font-weight: normal;
}
.wd h2{
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
    padding: 5px;
    margin: 5px auto;
}
.opt form, input[type="button"]{
    background-color: black;
    color: white;
    padding: 10px;
    margin: 10px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
}
form, input[type="button"]:hover{
    background-color: green;
}
</style>
<section id = "home">
<div class="box">
    <ul>
        <li><a href = "">Home</a></li>
        <li><a href = "">Menu</a></li>
        <li><a href = "">Team</a></li>
        <li><a href = "">Contact</a></li>
    </ul>
</div>
<div class = "wd">
    <h1>Welcome!</h1><br>

    <h4>Welcome, dear customer <br>
        This is my restaurant manager Web-application. Its name is My Restaurant. 
         I hope that you will enjoy it.
    </h4>
    <br>
    <h2>Reservation</h2>
    <div class = "opt">
        <form method = "post">
            <input id = "start" type = "button" value = "Start Now">
        </form>
    </div>
    <div>
        <hr>
        <br>
        <style> span{display: flex; justify-content: center; align-items: center;} </style>
        <span> Location: West Lake View </span>
        <span> Open everyday: 7:00pm - 11:00pm </span>
        <span> Started since 24-10-2020.</span>

    </div>
</div>
</section>


`;
components.login = `
<style>
    .form-area{
        position: absolute;
        top: 25%;
        left: 35%;
        // transform: (translate(-50%, -50%));
        width: 400px;
        height: 500px;
        box-sizing: border-box;
        background: rgba(0,0,0,0.5);
        padding: 40px;
    }
    h3{
        display:flex;
        justify-content: center;
        margin: 0;
        padding: 0 0 20px;
        font-weight: bold;
        color: #ffffff;
    }
    .form-area p{
        margin: 0;
        padding: 0;
        font-weight: bold;
        color: #ffffff;
    }
    ::placeholder{
        color: #ffffff;
    }
    .form-area input{
        margin-bottom: 20px;
        width: 100%;
    }
    .form-area input[type = tel],.form-area input[type = text] {
        border:none;
        border-bottom: 1px solid #ffffff;
        background-color: transparent;
        outline: none;
        height: 45px;
        color: #ffffff;
        display: 16px;
    }
    .form-area input[type = tel]:focus,
    .form-area input[type = text]:focus{
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image-slice: 1;
    }
    .form-area input[type = submit]{
        border: none;
        height: 40px;
        outline: none;
        color: #ffffff;
        font-size: 15px;
        background-color: tomato;
        cursor: pointer;
        border-radius: 20px;
    }
    .form-area input[type = submit]:hover{
        background-color: cyan;
        color:white;
    }
    .form-area a{
        color: #ffffff;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
    }
    

    </style>
    <div class = "form-area">
        <h3>Login Form</h3>
        <form id = "log-in-form">
            <p> Name </p>
            <input type = "text" name = "name" placeholder = "Enter your name" required>
            <p>Phone </p>
            <input type = "tel" name = "phone"  placeholder = " Enter your phone number" required>
            
            <input type = "submit" name = "" id = "log-in-btn" placeholder = "Sign In">
        </form>
    </div>     
`;
components.reservation = `
<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Poppins", sans-serif;
  }
  .banner {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./img/banner.jpg") center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-bottom: 20px;
  }
  .card-container {
    display: grid;
    grid-template-columns: 420px 420px;
  }
  .card-img {
    background: url("./img/card-img.jpg") center/cover no-repeat;
  }
  .banner h2 {
    padding-bottom: 40px;
    margin-bottom: 20px;
  }
  .card-content {
    background: #fff;
    height: 400px;
  }
  .card-content h3 {
    text-align: center;
    color: #000;
    padding: 25px 0 10px 0;
    font-size: 26px;
    font-weight: 500;
  }
  .form-row {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  form select,
  form input {
    display: block;
    width: 100%;
    margin: 15px 12px;
    padding: 5px;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    border-bottom: 1px solid #eee;
    font-weight: 300;
  }
  form input[type="text"],
  form input[type="number"],
  form input::placeholder,
  select {
    color: #9a9a9a;
  }
  form input[type="submit"] {
    color: #fff;
    background: #f2745f;
    padding: 12px 0;
    border-radius: 4px;
    cursor: pointer;
  }
  form input[type="submit"]:hover {
    opacity: 0.9;
  }
  @media (max-width: 992px) {
    .card-container {
      grid-template-columns: 100%;
      width: 100vw;
    }
    .card-img {
      height: 330px;
    }
  }
</style>
<section class="banner">
  <h2>BOOK YOUR TABLE</h2>
  <div class="card-container">
    <div class="card-img"></div>
    <div class="card-content">
      <h3>Reservation</h3>
      <form id = "reservation-form">
        <div class="form-row">
          <select name="day">
            <option selected="selected" disabled="disabled">Select day</option>
            <option value="Sunday">Sunday</option>
            <option value="Saturday">Saturday</option>
            <option value="Friday">Friday</option>
            <option value="Thursday">Thursday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Monday">Monday</option>
          </select>
        </div>
        <div class="form-row">
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" />
        </div>
        <div class="form-row">
          <input type="number" name="size" max = 5 placeholder="Party Size" min="1" />
          <select name = "time">
            <option selected = "selected" disabled = "disabled"> Choose Time</option>
            <option value = "07:00pm - 07:30pm">07:00pm - 07:30pm</option>
            <option value = "07:30pm - 08:00pm">07:30pm - 08:00pm</option>
            <option value = "08:00pm - 08:30pm">08:00pm - 08:30pm</option>
            <option value = "08:30pm - 09:00pm">08:30pm - 09:00pm</option>
            <option value = "09:00pm - 09:30pm">09:00pm - 09:30pm</option>
            <option value = "09:30pm - 10:00pm">09:30pm - 10:00pm</option>
            <option value = "10:00pm - 10:30pm">10:00pm - 10:30pm</option>
            <option value = "10:30pm - 11:00pm">10:30pm - 11:00pm</option>
          </select>
        </div>
        <div class = "form-row">
          <input id = "form-button" type="submit" value="BOOK TABLE" />
        </div>
      </form>
    </div>
  </div>
</section>

`;
