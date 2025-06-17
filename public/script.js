navLinks=document.querySelectorAll('#sidenav nav ul li a' );
menubtn.onclick= function(){
                if(sidenav.style.right=="-250px"){
                    sidenav.style.right="0";
                    menu.src="close.png";
                }else{
                    sidenav.style.right="-250";
                    menu.src="menu.png";
                }
            };
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        sidenav.style.right="-250px";
        menu.src="menu.png";
    });
});
 