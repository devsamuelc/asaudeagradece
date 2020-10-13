var subscribeButton = document.getElementById('subscribe');
var subscribeWindow = document.getElementsByClassName('emailfield');

if (subscribeWindow.style.display === 'none'){
    subscribeButton.addEventListener("click", function(){
        subscribeWindow.style.display = 'flex';
})
}
