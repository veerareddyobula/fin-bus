import React from "react";
import * as $ from 'jquery';
import AppDefaultNavbar from "./../../../components/navbar/app-default-navbar";
import AppDefaultASide from "./../../../components/navbar/app-default-aside";

const AppDefaultContainer = () => {
  const [nowLayoutClass, setNowLayoutClass] = React.useState()

  const sidebar_dropdown = () => {
    if($(".main-sidebar").length) {

      $(".main-sidebar .sidebar-menu li a.has-dropdown").off('click').on('click', function() {
        var me     = $(this);
        var active = false;
        if(me.parent().hasClass("active")){
          active = true;
        }
        
        $('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideUp(500, function() {
          return false;
        });
        
        $('.main-sidebar .sidebar-menu li.active').removeClass('active');

        if(active===true) {
          me.parent().removeClass('active');          
          me.parent().find('> .dropdown-menu').slideUp(500, function() {            
            return false;
          });
        }else{
          me.parent().addClass('active');          
          me.parent().find('> .dropdown-menu').slideDown(500, function() {            
            return false;
          });
        }

        return false;
      });

      $('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideDown(500, function() {
        return false;
      });
    }
  }

  const toggle_sidebar_mini = (mini) => {
    let body = $('body');

    if(!mini) {
      body.removeClass('sidebar-mini');
      $(".main-sidebar").css({
        overflow: 'hidden'
      });
      $(".main-sidebar .sidebar-menu > li > ul .dropdown-title").remove();
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('data-toggle');
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('data-original-title');
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('title');
    }else{
      body.addClass('sidebar-mini');
      body.removeClass('sidebar-show');
      $(".main-sidebar .sidebar-menu > li").each(function() {
        let me = $(this);

        if(me.find('> .dropdown-menu').length) {
          me.find('> .dropdown-menu').hide();
          me.find('> .dropdown-menu').prepend('<li className="dropdown-title pt-3">'+ me.find('> a').text() +'</li>');
        }else{
          me.find('> a').attr('data-toggle', 'tooltip');
          me.find('> a').attr('data-original-title', me.find('> a').text());
          $("[data-toggle='tooltip']").tooltip({
            placement: 'right'
          });
        }
      });
    }
  }


  const toggleSidebar = (event)=>{
    event.preventDefault();
    var body = $("body"),
  w = $(window);

if(w.outerWidth() <= 1024) {
  body.removeClass('search-show search-gone');
  if(body.hasClass('sidebar-gone')) {
    body.removeClass('sidebar-gone');
    body.addClass('sidebar-show');
  }else{
    body.addClass('sidebar-gone');
    body.removeClass('sidebar-show');
  }

}else{
  body.removeClass('search-show search-gone');
  if(body.hasClass('sidebar-mini')) {
    toggle_sidebar_mini(false);
  }else{
    toggle_sidebar_mini(true);
  }
}

return false;
}

  const toggleLayout = ()=>{
    var w = $(window),
      layout_class = $('body').attr('className') || '',
      layout_classes = (layout_class.trim().length > 0 ? layout_class.split(' ') : '');
    if(layout_classes.length > 0) {
      layout_classes.forEach(function(item) {
        if(item.indexOf('layout-') !== -1) {
          setNowLayoutClass(item);
        }
      });
    }
    if(w.outerWidth() <= 1024) {
      if($('body').hasClass('sidebar-mini')) {
        toggle_sidebar_mini(false);
      }
      $("body").addClass("sidebar-gone");
      $("body").removeClass("layout-2 layout-3 sidebar-mini sidebar-show");
      $("body").off('click touchend').on('click touchend', function(e) {
        if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
          $("body").removeClass("sidebar-show");
          $("body").addClass("sidebar-gone");
          $("body").removeClass("search-show");
        }
      });
      

      if(nowLayoutClass === 'layout-3') {
        let nav_second_classes = $(".navbar-secondary").attr('class'),
          nav_second = $(".navbar-secondary");

        nav_second.attr('data-nav-classes', nav_second_classes);
        nav_second.removeAttr('class');
        nav_second.addClass('main-sidebar');

        let main_sidebar = $(".main-sidebar");
        main_sidebar.find('.container').addClass('sidebar-wrapper').removeClass('container');
        main_sidebar.find('.navbar-nav').addClass('sidebar-menu').removeClass('navbar-nav');
        main_sidebar.find('.sidebar-menu .nav-item.dropdown.show a').click();
        main_sidebar.find('.sidebar-brand').remove();
        main_sidebar.find('.sidebar-menu').before($('<div>', {
          class: 'sidebar-brand'
        }).append(
          $('<a>', {
            href: $('.navbar-brand').attr('href'),
          }).html($('.navbar-brand').html())
        ));

        sidebar_dropdown();
        $(".main-wrapper").removeClass("container");
      }
    }else {
      $("body").removeClass("sidebar-gone sidebar-show");
      if(nowLayoutClass)
        $("body").addClass(nowLayoutClass);

      let nav_second_classes = $(".main-sidebar").attr('data-nav-classes'),
        nav_second = $(".main-sidebar");

      if(nowLayoutClass === 'layout-3' && nav_second.hasClass('main-sidebar')) {
        nav_second.find(".sidebar-menu li a.has-dropdown").off('click');
        nav_second.find('.sidebar-brand').remove();
        nav_second.removeAttr('class');
        nav_second.addClass(nav_second_classes);

        let main_sidebar = $(".navbar-secondary");
        main_sidebar.find('.sidebar-wrapper').addClass('container').removeClass('sidebar-wrapper');
        main_sidebar.find('.sidebar-menu').addClass('navbar-nav').removeClass('sidebar-menu');
        main_sidebar.find('.dropdown-menu').hide();
        main_sidebar.removeAttr('style');
        main_sidebar.removeAttr('tabindex');
        main_sidebar.removeAttr('data-nav-classes');
        $(".main-wrapper").addClass("container");
      }else if(nowLayoutClass === 'layout-2') {
        $("body").addClass("layout-2");
      }
    }
  }

  React.useEffect(()=>{
    $(window).resize(toggleLayout);
    toggleLayout();
  })

  return (
    <div id="app">
      <div className="main-wrapper">
        <div className="navbar-bg"></div>
        <AppDefaultNavbar toggleSidebar={toggleSidebar} />
        <div className="main-sidebar">
        <AppDefaultASide />
      </div>
      </div>
    </div>
  );
};
export default AppDefaultContainer;
