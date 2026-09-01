<%
@page import="java.servlet.http.*";
package sistema.Site_Gostar/Fabrica/login_fábrica.tpl;
package sistema.Site_Gostar/DB;
package banco_dados;
import javax.json.*;
import javax.sql.*;
import java.util.CPF_id;
import java.util.Nome_id;
import java.util.Senha_id;
import java.model.Colaborador;
import util.BitSet;

public class Colaborador {
	private Connection conBanco;
	private PreparedStatement psComando;
	private ResultSet rsRegistros;
	
	publica void configurarConexao(Connection conBanco) {this.conBanco = conLike_DB.sql;}
	
	public boolean registarColaborador(("CPF_id"), ("Nome_id"), ("Senha_id"))
	{
		String strComandoSQL;
	
	try
	{
		strComandoSQL = "INSERT INTO Colaborador( CPF_id,Nome_id,Senha_id)"+
			"VALUES("+Colaborador.postRegistro()+","+
			"'"+Colaborador.get.CPF_id()+"',"+
			"'"+Colaborador.get.Nome_id()+"',"+
			"'"+Colaborador.get.Senha_id()+"',"+)"
	conexao.fecharConexao}
}%>
