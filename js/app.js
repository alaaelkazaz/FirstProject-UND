/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList= document.getElementById("navbar__list");
const topmenu= document.getElementById("navbar__list");
const navHeight=navList.outerHeight()+1;
const allSections=document.getElementsByTagName("section");
let  lastId="";
const topMenuHeight=topmenu.outerHeight();
let secNum=allSections.length ;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Adding sections to the Nav Bar with anchors to reach each when clicked 
for(i=0;i<secNum;i++){
	let secname=allSections[i].id;
	let anchor =document.createElement('a');
	anchor.href="#"+secname;
	anchor.innerText=secname;
	navList.appendChild(anchor);
}

 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
  
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("your-active-class")
         .end().filter("[href=#"+id+"]").parent().addClass("your-active-class");
   }                   
});
