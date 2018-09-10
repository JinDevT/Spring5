<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html lang="en">
<body>
<div id="wrapper">
	<jsp:include page="../common/header.jsp" />
		<jsp:include page="../common/loginBox.jsp"/>
		<jsp:include page="menuBox.jsp"/>
	</div> 		
	
	<div id="content">
	이동페이지: ${pagename}
	<c:choose>
        <c:when test="${pagename eq 'add'}">
              <jsp:include page="add.jsp"/>
        </c:when>
        <c:when test="${pagename eq 'login'}">
               <jsp:include page="login.jsp"/>
        </c:when>
        <c:when test="${pagename eq 'search'}">
               <jsp:include page="search.jsp"/>
        </c:when>
        <c:when test="${pagename eq 'modify'}">
               <jsp:include page="modify.jsp"/>
        </c:when>
        <c:when test="${pagename eq 'remove'}">
        		<jsp:include page="remove.jsp"/>
        </c:when>
        <c:otherwise>
        	<jsp:include page="retrieve.jsp"/>
        </c:otherwise>
    </c:choose>	
	</div>
	
	<div id ="footer"> <!-- content end -->		
		
		
</div>

<script> 
 member.main('${context}');
</script>	
</body>
</html>
