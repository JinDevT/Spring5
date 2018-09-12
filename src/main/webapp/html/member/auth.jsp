<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
         	 <li class="nav-item mx-0 mx-lg-1" id="logout_btn">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >Logout</a>
            </li>
             <li class="nav-item mx-0 mx-lg-1" >
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >${user.name}님 Mypage</a>
            </li>
             <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" id="board_write">게시글쓰기</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" id="board_list">게시글목록보기</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <script>
    $('#board_write').click(function(){
    	alert('board_wirte click!!');
    });
    $('#board_list').click(function(){
    	alert('board_list click!!');
    })
    
    
    </script>
