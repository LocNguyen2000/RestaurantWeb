const model = {
    user: null,
    userInfo: {
        name: null,
        phone: null,
        password: null
    }
}
model.currentUser = function(user){
    model.user = user
}
model.setInfo = function(info){
    model.userInfo = info
}
model.signOut = function(){
    model.user = null
    model.userInfo = null
    console.log(model);
}
