(function($){var menuContainer=$('.menu-container');var menuToggle=menuContainer.find('.menu-button');var siteHeaderMenu=menuContainer.find('#site-header-menu');var siteNavigation=menuContainer.find('#site-navigation');var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':false}).append($('<span />',{'class':'screen-readers',text:screenReaderText.expand}));(function(){if(!menuToggle.length){return;}
menuToggle.add(siteNavigation).attr('aria-expanded','false');menuToggle.on('click',function(){$(this).add(siteHeaderMenu).toggleClass('toggled-on');$(this).add(siteNavigation).attr('aria-expanded',$(this).add(siteNavigation).attr('aria-expanded')==='false'?'true':'false');});})();$('.menu-item-has-children > a').after(dropdownToggle);siteHeaderMenu.find('.menu-item-has-children').attr('aria-haspopup','true');siteHeaderMenu.find('.dropdown-toggle').click(function(e){screenReaderSpan=$(this).find('.screen-readers');e.preventDefault();$(this).toggleClass('toggled-on');$(this).nextAll('.sub-menu').toggleClass('toggled-on');$(this).attr('aria-expanded',$(this).attr('aria-expanded')==='false'?'true':'false');screenReaderSpan.text(screenReaderSpan.text()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand);});$('.sub-menu .menu-item-has-children').parent('.sub-menu').addClass('has-sub-menu');$('.menu-item a, button.dropdown-toggle').on('keydown',function(e){if([37,38,39,40].indexOf(e.keyCode)==-1){return;}
switch(e.keyCode){case 37:e.preventDefault();e.stopPropagation();if($(this).hasClass('dropdown-toggle')){$(this).prev('a').focus();}
else{if($(this).parent().prev().children('button.dropdown-toggle').length){$(this).parent().prev().children('button.dropdown-toggle').focus();}
else{$(this).parent().prev().children('a').focus();}}
if($(this).is('ul ul ul.sub-menu.toggled-on li:first-child a')){$(this).parents('ul.sub-menu.toggled-on li').children('button.dropdown-toggle').focus();}
break;case 39:e.preventDefault();e.stopPropagation();if($(this).next('button.dropdown-toggle').length){$(this).next('button.dropdown-toggle').focus();}
else{$(this).parent().next().children('a').focus();}
if($(this).is('ul.sub-menu .dropdown-toggle.toggled-on')){$(this).parent().find('ul.sub-menu li:first-child a').focus();}
break;case 40:e.preventDefault();e.stopPropagation();if($(this).next().length){$(this).next().find('li:first-child a').first().focus();}
else{$(this).parent().next().children('a').focus();}
if(($(this).is('ul.sub-menu a'))&&($(this).next('button.dropdown-toggle').length)){$(this).parent().next().children('a').focus();}
if(($(this).is('ul.sub-menu .dropdown-toggle'))&&($(this).parent().next().children('.dropdown-toggle').length)){$(this).parent().next().children('.dropdown-toggle').focus();}
break;case 38:e.preventDefault();e.stopPropagation();if($(this).parent().prev().length){$(this).parent().prev().children('a').focus();}
else{$(this).parents('ul').first().prev('.dropdown-toggle.toggled-on').focus();}
if(($(this).is('ul.sub-menu .dropdown-toggle'))&&($(this).parent().prev().children('.dropdown-toggle').length)){$(this).parent().prev().children('.dropdown-toggle').focus();}
break;}});})(jQuery);