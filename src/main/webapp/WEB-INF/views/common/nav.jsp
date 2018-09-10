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
         	 <li class="nav-item mx-0 mx-lg-1" id="login_btn">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >Login</a>
            </li>
             <li class="nav-item mx-0 mx-lg-1" id="join_btn">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#">Join</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <script>
	$('#login_btn').click(function(){ 
		alert("진태똥멍청이래요");
		location.href = '${context}/move/public/member/login';
	});
	$('#join_btn').click(function(){ 
		location.href = '${context}/move/public/member/add';
	});
    </script>
