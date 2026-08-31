<body = id=("{'mgmt_body.tpl'}")/>;
<body>
<header><h1><img src="foto4.png"width="50px"height="50px"> DENTRO DA VARANDA</h1></header>
<div class=".topnav">
	<nav>
		<ul>
			<li><a href="Site_Gostar/Fabrica/login_fabrica.html">Veja o Gostar</a></li>
		</ul>
	</nav>
</div>

<article= id=("{'mgmt_article.tpl'}")/>;

<h2>NESTE ESPAÇO ALGUMAS IMAGENS DOS PRODUTOS DISPONÍVEIS</h2>
<div class=".column">
<div class=".column .left">
<div class=".article>
	 <div class=".figure .img">
	  <figure>
	    <img src="foto1.jpeg"width="50px"height="75px">
	      <figcaption>CADEIRA<? $Preço =htmlspecialchars( $_POST['Preço_id'] )?></figcaption></img>
            <img src="foto2.jpeg"width="50px"height="75px">
	      <figcaption>MESA<? $Preço =htmlspecialchars $_POST['Preço_id'] ) ?></figcaption></img>
	    <img src="foto3.jpeg"width="50px"height="75px">
	      <figcaption>CONUJUNTO<? $Preço =htmlespecialchars( $_POST["Preço_id"] )?></figcaption></img>
	  </figure>
	</div>
	</div>
	</div>
	</div>
</article>

<section= id=("{'mgmt_section.tpl'}")/>;

<div class=".column">
<div class=".column .middle">
<div class=".section">
	<h3><p>Os produtos em demonstração são poduzidos de forma artesanal nota-se;</br>
	Que em algumas unidades produzidas pode haver pequenas diferenças durante</br>
	o processo de fabricação, eximindo o artesão de possível responsabilidade.</p></h3>
	</div>
	</div>
	</div>
</section>

<caption= id=("{'mgmt.caption.tpl'}")/>;
  
<div class=".column">
<div class=".column.middle">
<div class=".caption">
<fieldset><legend><h3>FORMULÁRIO DE CADASTRO DO CLIENTE</h3></legend>

<form = id=("{'mgmt_form.tpl'"})/>;

<form method="post" name="Comprar" id="options_id" action="insereConjunto.php" . action="<?php echo $_SERVER['PHP_SELF'];?> enctype="multipart/form-data">
<br>
	<label>CPF</label></br>
	<input type="text" name="CPF_id" id="CPF_id" maxlength="11" size="50px" action="comprados.php" required/></br>
    	<label>NOME</label></br>
    	<input type="text" name="Nome_id" id="Nome_id" maxlength="100" size="50px" action="comprados.php" required/></br>
    	<label>TELEFONE</label></br>
    	<input type="text" name="Telefone_id" id="Telefone_id" maxlength="11" size="50px" actiom="comprados.php" required/></br>
    	<label>ENDEREÇO</label></br>
    	<input type="text" name="Endereço_id" id="Endereço_id" maxlength="100" size="50px" actiom="comprados.php" required/></br>
    	<label>ENTREGA</label></br>
    	<input type="text" name="Entrega_id" id="Entrega_id" maxlength="200" size="50px" actiom="comprados.php" required/>
    	</fieldset>
    	
<h2>SELECIONE O PRODUTO DE SUA PREFERÊNCIA PARA COMPRAR.</h3>
<h3>PRODUTOS DISPONÍVEIS</h3<br>    

	<input type="checkbox" id="Cadeira_id" name="foto1.jpeg" size="1px" action="options.php" required><label id="001" name="Cadeira_id">Cadeira
    	<input type="checkbox" id="Mesa_id" name="foto2.jpeg" size="1px" action="options.php" required><label id="002" name="Mesa_id">Mesa
    	<input type="checkbox" id="Conjunto_id" name="foto3.jpeg" size="1px" action="options.php" required><label id="003" name="Conjunto_id">Conjunto

<h3>AGORA QUE VOÇÊ JÁ ESCOLHEU O SEU PRODUTO CONFIRME NO BOTÃO A SUA COMPRA.</h3>
        <input type="submit" id="options_id" value="Confirmar a compra" action="comprados.php"></br>
        <br><input type="reset" value="Limpar campos do formulário para uma nova compra">
	</br></form>
	</div>
	</div>
	</div>
</caption>

<aside = id=({'mgmt_aside.tpl'})/>;

<div class=".column">
<div class=".column .right">
<div class=".aside .figure .img">
<h5>Espaços do parceiro artesão</h5>
	  <figure>
	    <img src="foto1.jpeg"width="50px"height="75px">
	      <figcaption>CADEIRA</figcaption></img>
            <img src="foto2.jpeg"width="50px"height="75px">
	      <figcaption>MESA</figcaption></img>
	    <img src="foto3.jpeg"width="50px"height="75px">
	      <figcaption>CONUJUNTO</figcaption></img>
	  </figure>
	  </div>
	  </div>
	  </div>
</aside></body></html>
