window.addEventListener('load', function(){
    const wrapperApp       = document.querySelector('#wrapperApp')
    const sidebar          = document.querySelector('.sidebarApp')
    const btnToogleSidebar = document.querySelector('#btnToogleSidebar')

    btnToogleSidebar?.addEventListener('click', (e) => {
        e.preventDefault()
        wrapperApp.classList.toggle('sidebarMin')
    })


    const changeSidebarClass = () => {
        let bodyWidth = document.body.clientWidth
        let maxWidth = '991'

        if (bodyWidth > maxWidth) {
            wrapperApp?.classList.remove('sidebarMin')
        } else if (bodyWidth <= maxWidth + 1) {
            wrapperApp?.classList.add('sidebarMin')
        };
    }

    window.addEventListener('resize', function(){
        changeSidebarClass()
    })

    changeSidebarClass()


    /*! --------------------------------------------------------------------
    * navigation-active / Jquery
    * --------------------------------------------------------------------*/
    const currentUrl = window.location.pathname;

    $('.navSidebarApp a[href$="'+currentUrl+'"]').parent('li').addClass('active');

    $('.navSidebarApp .sub-menu li.active').closest('.collapse').addClass('show');
    $('.navSidebarApp .sub-menu li.active').parents('.nav-item').addClass('active');

    $('.nav-item.active').find('.dropdown').attr("aria-expanded","true")
})
