<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../common/header.jsp"/>
<div id="contentbox">
	<div id="searchBox">
	<input id ="searchBtn" type="button" value="검색" />
	<input id="searchWord" name="searchWord" type="text" placeholder="검색어 입력" />
	<select id ="searchOption"  name="searchOption">
				<option value="serah">검색조건</option>
				<option value="userid">아이디</option>
				<option value="name">이 름</option>
				<option value="teamid">팀 명</option>
	</select>
		
	</div>	<br />
	<table id="contentBoxTab" >
				<tr id="contentBoxMeta">
					<th>아이디</th>
					<th>이 름</th>
					<th>나 이</th>
					<th>성 별</th>
					<th>역 할</th>
					<th>팀 명</th>
				</tr>
				<c:forEach items="${list}" var="user" >
				<tr>
					<td>${user.userid}</td>
					<td><a class="username" id="${user.userid}">${user.name}</a> 
					</td>
					<td>${user.age}</td>
					<td>${user.gender}</td>
					<td>${user.roll}</td>
					<td>${user.teamid}</td>
				</tr>
				</c:forEach>
				<tr>
				<td colspan="6">
					 전체인원수 : ${page.rowCount} <br />
					 <ul class="pageBox">
					 	<c:if test="${page.existPrev}"> 
					 		<li class = "pageNum" id="${page.prevBlock}">◀PREV</li>
					 	</c:if>
					 	<c:forEach  begin="${page.beginPage}"
					 			    end="${page.endPage}"
					  				step="1" varStatus="i" >
					 	<li>
					 		<a class="pageNum" id="${i.index}">${i.index}</a>
					 	
					 	</li>
					 	</c:forEach> 
					 	 <c:if test="${page.existNext}">
					 		<li  class="pageNum" id="${page.nextBlock}">NEXT▶</li>
					 	</c:if> 
					 </ul>
						<%-- <span><c:out value = "${x}"/></span> --%>
				
				</td>
				</tr>
		</table>
</div>
<script>
	admin.main('${context}');
</script>
