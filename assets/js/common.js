// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    // Admin mode - Press Shift+Ctrl+A to toggle
    var adminMode = localStorage.getItem('adminMode') === 'true';
    updateAdminUI(adminMode);
    
    $(document).on('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 65) { // Shift+Ctrl+A
            adminMode = !adminMode;
            localStorage.setItem('adminMode', adminMode);
            updateAdminUI(adminMode);
            console.log('Admin mode: ' + (adminMode ? 'ON' : 'OFF'));
        }
    });

    // Publication cover toggle
    var $toggleCovers = $('#toggleCovers');
    if ($toggleCovers.length) {
        // Load saved preference from localStorage
        var showCovers = localStorage.getItem('showPublicationCovers');
        if (showCovers === null) {
            showCovers = false;
        } else {
            showCovers = showCovers === 'true';
        }
        
        $toggleCovers.prop('checked', showCovers);
        updateCoverVisibility(showCovers);
        
        // Handle toggle change
        $toggleCovers.on('change', function() {
            var isChecked = $(this).is(':checked');
            localStorage.setItem('showPublicationCovers', isChecked);
            updateCoverVisibility(isChecked);
        });
    } else {
        // If toggle doesn't exist, hide covers by default
        updateCoverVisibility(false);
    }
});

function updateAdminUI(isAdmin) {
    var $coverToggle = $('#coverToggle');
    if (isAdmin) {
        $coverToggle.show();
    } else {
        $coverToggle.hide();
    }
}

function updateCoverVisibility(show) {
    if (show) {
        $('.publication-cover-container').css('display', '').addClass('show-covers');
        $('.publication-content').removeClass('col-md-12 col-xl-12').addClass('col-md-9 col-xl-10');
    } else {
        $('.publication-cover-container').removeClass('show-covers');
        $('.publication-content').removeClass('col-md-9 col-xl-10').addClass('col-md-12 col-xl-12');
    }
}

