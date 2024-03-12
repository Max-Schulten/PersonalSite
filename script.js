$(document).ready(function() {
    var navItems = document.querySelectorAll('.nav-link');
    var tabs = document.querySelectorAll('.tab-pane')

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
        // Remove active class from all nav-items
        navItems.forEach(function(nav) {
            nav.classList.remove('active');
        });

        // Add 'active' class to clicked nav-item
        item.classList.add('active');

        // Fade active tabs
        tabs.forEach(function(tab){
            let id = "#"+tab.id
            if($(id).hasClass('active')){
                $(id).removeClass('active')
                $(id).addClass('fade')
            }
        });
        // Activate selected tab
        $($(this).attr('href')).removeClass('fade')
        $($(this).attr('href')).addClass('active')
        });
    });
})