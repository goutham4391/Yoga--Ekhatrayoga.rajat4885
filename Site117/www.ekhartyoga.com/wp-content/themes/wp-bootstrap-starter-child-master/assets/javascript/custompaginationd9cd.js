jQuery(function($) {

    var divs = $("div.user-content-classes > div.classItem, div.user-content-programs > div.programitem, div.latest-articles.pagination > div");
    var y = 1;
    for(var i = 0; i < divs.length; i+=12) {
        divs.slice(i, i+12).wrapAll("<div class='row classelement page-mimi' id='container-pagnation'></div>");
        $('test').attr('id', 'value' + y);
        y++;
    }


    $('.classelement').each(function(i){
        i += 1;
        var newID=$(this).attr('id') + i;
        $(this).attr('id',newID);
    });

    var numberOfClassPages = $('.classelement').length;


    $('#ey-wp-pagination').luckmoshyPagination({

        totalPages: numberOfClassPages,
        // the current page that show on start
        startPage: 1,

        // maximum visible pages
        visiblePages: 5,

        initiateStartPageClick: true,

        // template for pagination links
        href: false,

        // variable name in href template for page number
        hrefVariable: '{{number}}',

        // Text labels
        first: 'First',
        prev: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g></svg>',
        last: 'Last',

        // carousel-style pagination
        loop: true,

        // callback function
        onPageClick: function (event, page) {
            $('.page-active').removeClass('page-active');
            $('#container-pagnation'+page).addClass('page-active');
        },

        // pagination Classes
        paginationClass: 'pagination',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last hidden',
        firstClass: 'first hidden',
        pageClass: 'page-item ',
        activeClass: 'active',
        disabledClass: 'disabled'

    });

});