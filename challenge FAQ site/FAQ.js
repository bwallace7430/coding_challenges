var buttons = document.getElementsByClassName('accordion')

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        content.classList.toggle('show');
    })
}