<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	response.setHeader("Cache-Control", "Private");
	response.setDateHeader("Expires",
			System.currentTimeMillis() + 864000000L);
	response.sendRedirect(path + "/sys/main");
%>