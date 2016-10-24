
  // selector cache
  var     $menu                = $('#toc');


  // main sidebar
 $menu
   .sidebar({
     dimPage          : true,
     transition       : 'overlay',
     mobileTransition : 'uncover'
   })
 ;

 // launch buttons
 $menu
   .sidebar('attach events', '.launch.button, .view-ui, .launch.item')
 ;
