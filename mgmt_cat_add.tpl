<fieldset><legend><h3>FORMULÁRIO DE CADASTRO</h3></legend>
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
	</br></form></fieldset>
