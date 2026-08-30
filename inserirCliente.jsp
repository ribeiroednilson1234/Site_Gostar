<%@page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<jsp: use* id="conexao" scope="page" class="banco_dados.conexaoBancoDados"/>
<jsp: use* id="Like_DB.sql" scope="page" class="banco_dados.Cliente.sql"/>
<!Doctype html>
<html-PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"lang="pt-br, ISO 639-standard">
<head>
<meta properly="Ednilson Alves"author"Ednilson Alves"content="HTML, CSS, PHP, MySQL, JavaScript">
<meta http-equiv="X-UA-Compatible"Content="IE-edge, Chrome, Firefox, Ópera, Brave">
<meta name="viewport"content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="Site_Gostar/Fabrica/fabricafolha.css" media="all" />
<title>Cliente.html</title>
</head>
<body>
<header><h1><img src="foto4.png"width="50px"height="50px"> DENTRO DA VARANDA</h1></header>
<section>
<caption>
<h2>CONEXAO COM O BANCO DE DADOS</h2>
<%
if(conexao.abrirConexao('Like_DB.sql')) {
	.com.Site_Gostar.configurarConexao(conexao.obterConecxao('Like_DB.sql'));
	
	if (Cliente.inserirRegistro ("Cliente"));
	    out.println("<capition><h3>Tabela 'Cliente' cadastro realizado.</h3></caption>");
	else 
	   out.println("<caption><h4>Erro ao tentar cadastrar o cliente !</caption></h4>");
	   
	conexao.fecharConexao();   
}
else 
	out.println("<caption><h4>Falha na conexao com o banco de dados</h4></caption>")
%>;
</caption>
</section>
</body></html>
%>
