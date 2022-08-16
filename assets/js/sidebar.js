(function($) {
    
    let win = $(window);
    let w = win.width();
    
    let body = $('body');
    let btn = $('#sidebarToggle');
    let sidebar = $('.sidebar');
    
    // Collapse on load
    
    if (win.width() < 991) {
        sidebar.addClass('collapsed');
    }
    
    sidebar.removeClass('mobile-hid');
    
    // Events
    
    btn.click(toggleSidebar);
    
    win.resize(function() {
        
        if (w==win.width()) {
            return;
        }
        
        w = win.width();
        
        if (w < 991 && !sidebar.hasClass('collapsed')) {
            toggleSidebar();
        } else if (w > 991 && sidebar.hasClass('collapsed')) {
            toggleSidebar();
        }
    });
    
    function toggleSidebar() { 
        
        if (win.width() < 768 || !sidebar.hasClass('collapsed')) {
            body.animate({'padding-left':'50px'},500);
        }
        else if (win.width() > 768 && sidebar.hasClass('collapsed')) {
            body.animate({'padding-left':'14rem'},500);
        }
        
        if (!sidebar.hasClass('collapsed')) {
            sidebar.fadeOut(500,function(){
                btn.hide();
                sidebar.addClass('collapsed');
                btn.fadeIn(200);
            });
        }
        else {
            sidebar.removeClass('collapsed');
            sidebar.fadeIn(500);
        }
       
    }
})(jQuery)