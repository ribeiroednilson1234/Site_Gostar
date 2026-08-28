package banco_dados;

import java .sql.*;

public class conexaoBancoDados {
	Connection comBanco;
	
	public boolean abrirConexao() {
		String url = "jdbc:mysql://localhost/home/ovni/htdocs/Site_Gostar/DB/Like_DB.sql?port=3306&user=ovni&password=5eHPHoFhkU6l4Jzg";
		
		try {
			Class forName("com.mysql.jdbc.Driver");
			conBanco = DriverManager.getConnection(url = "//localhost/home/ovni/htdocs/Site_Gostar/DB/Like_DB.sql?port=3306&user=ovni&password=5eHPHoFhkU6l4Jzg";);
			return true;
		}
		catch (Excepition erro) {
		erro.printStackTrace();
		return false;
		}
	}
	public viod fecharConexao() {
		try {
		conBanco.close(url = "//localhost/home/ovni/htdocs/Site_Gostar/DB/Like_DB.sql?port=3306&user=ovni&password=5eHPHoFhkU6l4Jzg";);
		return true;
		}
		catch (SQLException erro) {
		erro.printStackTrace();
		return false;
		}
	}
	public Connection obterConexao("Like_DB.sql") {retur conBanco;}
	
}
-- FEITA A CONEXÃO COM O BANCO DE DADOS --
-- Abaixo inserir os objetos da tabela Mercadorias para o banco de dados--
packge banco_dados;
import java.sql.*;

public class MercadoriasOptionsValues {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO MercadoriasOptionsValues (Options_id, Codigo_id, Modelo_id, Cadeira_id, Mesa_id, Conjunto_id, sort_type tinyint)"
		VALUES('"+strOptions+"', '"+strCodigo_id+"', '"+strModelo+"', '"+strCadeira+"', '"+strMesa+"', '"+strConjunto+"', '"+strsort_type_tinyint+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strOptions_id, strCodigo_id, strCadeira_id, strMesa_id, strConjunto_id, strModelo_id, strsort_type tinyint) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE MercadoriasOptionsValues SET Options_id = '"+strOptions+"', '"+strCodigo_id+"', '"+strModelo_id+"', '"+strCadeira+"', '"+strMesa+"', '"+strConjunto+"', '"+strsort_type_tinyint+"' WHERE Options_id = "+intCodigo_id, +strModelo_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM MercadoriasOptionsValues WHERE Options_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			}
} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		
		try {
		    if (strOrdem == "Codigo_id"& "Modelo_id")
		    	strComandoSQL = "SELECT * FROM MercadoriasOptionsValues ORDER BY Codigo_id, Modelo_id";
		    else
		    	strComandoSQL = "SELECT * FROM MercadoriasOptionsValues ORDER BY Cadeira_id, Mesa_id, Conjunto_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
--Abaixo os dados para a tabela Cliente--
packge banco_dados;
import java.sql.*;

public class Cliente {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Cliente (Cliente_id, CPF_id, Nome_id, Telefone_id, Endereco_id, Entrega-id)"
		VALUES('"+strCliente_id+"', '"+strCPF+"', '"+strNome_id+"', '"+strTelefone+"', '"+strEndereco+"', '"+strEntrega+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strCliente_id, strCPF_id, Nome_id, Telefone_id, Endereco_id, Entrega_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Cliente SET Cliente_id = '"+strCPF+"', '"+strNome+"', '"+strTelefone+"', '"+strEndereco+"', '"+strEntrega+"' WHERE Cliente_id = "+CPF_id, +Nome_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Cliente WHERE Cliente_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Excepition erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Cliente_id")
		    	strComandoSQL = "SELECT * FROM Cliente ORDER  Cliente_id";
		    else
		    	strComando = "SELECT * FROM Cliente ORDER BY ASC strNome_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
--Abaixo os dados para a tabela Mercadorias--
packge banco_dados;
import java.sql.*;

public class Mercadorias {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Mercadorias (Mercadorias_id, Mesa_id, Cadeira_id, Conjunto_id)"
		VALUES('"+strMercadorias+"', '"+strMesa+"', '"+strCadeira+"', '"+strConjunto+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strMesa_id, Cadeira_id, Conjunto_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Mercadorias SET Mercadorias_id = '"+strMesa+"', '"+strCadeira+"', '"+strConjunto+"' WHERE Mercadorias_id = "+Mesa_id, +Cadeira_id, +Conjunto_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Mercadorias WHERE Mercadorias_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Excepition erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Mercadorias_id")
		    	strComandoSQL = "SELECT * FROM Mercadorias ORDER  Mercadorias_id";
		    else
		    	strComandoSQL = "SELECT * FROM Mercadorias ORDER BY ASC strMesa_id, strCadeira_id, strConjunto_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
--Aqui insere para a tabela Cadeira--

packge banco_dados;
import java.sql.*;

public class Cadeira {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Cadeira (Cadeira_id, Codigo_id, Modelo_id, Data_id, Preco_da_venda_id)"
		VALUES('"+strCadeira+"', '"+strCodigo+"', '"+strModelo+"', '"+strData+"', '"+strPreco_da_venda+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strCadeira_id, strCodigo_id, strModelo_id, strData_id, strPreco_da_venda_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Cadeira SET Cadeira = '"+strCadeira+"', '"+strCodigo+"', '"+strModelo+"' '"+strData+"' '"+strPreco_da_venda+"' WHERE Codigo_id = "+strCodigo_id, +strModelo_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Cadeira WHERE Cadeira_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Excepition erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Codigo_id"& "Modelo_id")
		    	strComandoSQL = "SELECT * FROM Cadeira ORDER  Cadeira_id";
		    else
		    	strComandoSQL = "SELECT * FROM Cadeira ORDER BY ASC strCodigo_id, strModelo_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tebela Mesa--
packge banco_dados;
import java.sql.*;

public class Mesa {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Mesa (Mesa_id, Codigo_id, Modelo_id, Data_id, Preco_da_venda_id)"
		VALUES('"+strMesa+"', '"+strCodigo+"', '"+strModelo+"', '"+strData+"', '"+strPreco_da_venda+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strMesa_id, strCodigo_id, strModelo_id, strData_id, strPreco_da_venda_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Mesa SET Mesa = '"+strMesa+"', '"+strCodigo+"', '"+strModelo+"' '"+strData+"' '"+strPreco_da_venda+"' WHERE Codigo_id = "+strCodigo_id, +strModelo_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Mesa WHERE Mesa_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Codigo_id"& "Modelo_id")
		    	strComandoSQL = "SELECT * FROM Mesa ORDER  Mesa_id";
		    else
		    	strComandoSQL = "SELECT * FROM Mesa ORDER BY ASC strCodigo_id, strModelo_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tebela Conjunto--
packge banco_dados;
import java.sql.*;

public class Conjunto {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Conjunto (Conjunto_id, Codigo_id, Modelo_id, Data_id, Preco_da_venda_id)"
		VALUES('"+strConjunto+"', '"+strCodigo+"', '"+strModelo+"', '"+strData+"', '"+strPreco_da_venda+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strConjunto_id, strCodigo_id, strModelo_id, strData_id, strPreco_da_venda_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Conjunto SET Conjunto_id = '"+strConjunto+"', '"+strCodigo+"', '"+strModelo+"' '"+strData+"' '"+strPreco_da_venda+"' WHERE Codigo_id = "+strModelo_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Conjunto WHERE Conjunto_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Conjunto_id")
		    	strComandoSQL = "SELECT * FROM Conjunto ORDER  Codigo_id, Modelo_id";
		    else
		    	strComandoSQL = "SELECT * FROM Mesa ORDER BY ASC strModelo_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tebela Codigo--
packge banco_dados;
import java.sql.*;

public class Codigo {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Codigo (1_id, 2_id, 3_id)"
		VALUES('"+str1_id+"', '"+str2_id+"', '"+str3_id+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strCodigo_id, str1_id, str2_id, str3_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Codigo SET Codigo = '"+str1+"', '"+str2+"', '"+str3+"' WHERE Codigo_id = "+str1_id, +str2_id , str3_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Codigo WHERE Codigo = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Codigo_id")
		    	strComandoSQL = "SELECT * FROM Codigo ORDER  Codigo_id";
		    else
		    	strComandoSQL = "SELECT * FROM Mesa ORDER BY ASC str1_id, str2_id, str3_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tebela Modelo--
packge banco_dados;
import java.sql.*;

public class Modelo {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Modelo (strA_id, strB_id, strC_id)"
		VALUES('"+strA+"', '"+strB+"', '"+strC+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strA_id, strB_id, strC_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Modelo SET Modelo = '"+strA+"', '"+strB+"', '"+strC+"' WHERE Modelo_id = "+strA_id, +strB_id , strC_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Modelo WHERE Modelo = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Codigo_id")
		    	strComandoSQL = "SELECT * FROM Modelo ORDER  Modelo_id";
		    else
		    	strComandoSQL = "SELECT * FROM Modelo ORDER BY ASC strA_id, strB_id, strC_id" ;
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tebela Preco_da_venda--
packge banco_dados;
import java.sql.*;

public class Preco_da_venda {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Preco_da_venda (strPreço_id, strPreço_da_venda_id, strPreço_da_produçao_id, strPreço_negociado_id, strLucro_sobre_vendas_id)"
		VALUES('"+strPreco_id+"', '"+strPreco_da_venda_id+"', '"+strPreco_da_producao_id+"', '"+strPreco_negociado_id+"', ''"+strLucro_sobre_vendas_id+")";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strPreço_id, strPreço_da_venda_id, strPreço_da_produçao_id, strPreço_negociado_id, strLucro_sobre_vendas_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Preco_da_venda SET Preco_id = '"+strPreco_id+"', '"+strPreco_da_venda_id+"', '"+strPreco_da_producao_id+"', '"+strPreco_negociado_id+"', '"+strLucro_sobre_vendas_id+"' WHERE Preco_id = " strPreço_da_venda_id, strPreço_da_produçao_id, strPreço_negociado_id, strLucro_sobre_vendas_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Preco_da_venda WHERE Preco_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Codigo_id")
		    	strComandoSQL = "SELECT * FROM Preco_da_venda ORDER  Preco_id";
		    else
		    	strComandoSQL = "SELECT * FROM Modelo ORDER BY ASC strPreço_da_venda_id, strPreço_da_produçao_id, strPreço_negociado_id, strLucro_sobre_vendas_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tebela Produtos_Vendidos--
packge banco_dados;
import java.sql.*;

public class Produtos_Vendidos {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Produtos_Vendidos (strCPF_id, strCadeira_id, strMesa_id, strConjunto_id, strNome_id, strTelefone_id, strEntrega_id, strData_id)
			VALUES('"+strCPF_id+"', '"+strCadeira_id+"', '"+strMesa_id+"', '"+strConjunto_id+"', '"+strNome_id+"', '"+strTelefone_id+"', '"+strEntrega_id+"', '"+strData_id+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strCPF_id, strCadeira_id, strMesa_id, strConjunto_id, strNome_id, strTelefone_id, strEntrega_id, strData_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Produtos_Vendidos SET CPF_id = '"+strCPF_id+"', '"+strCadeira_id+"', '"+strMesa_id+"', '"+strConjunto_id+"', '"+strNome_id+"', '"+strTelefone_id+"', '"+strEntrega_id+"', '"+strData_id+"'  WHERE CPF_id = " strCPF_id, strCadeira_id, strMesa_id, strConjunto_id, strNome_id, strTelefone_id, strEntrega_id, strData_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Exception erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Produtos_Vendidos WHERE CPF_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		try {
		    if (strOrdem == "Codigo_id")
		    	strComandoSQL = "SELECT * FROM Produtos_Vendidos ORDER  CPF_id";
		    else
		    	strComandoSQL = "SELECT * FROM Produtos_Vendidos ORDER BY ASC strNome_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
} 
-- Aqui insere para a tabela estoque na fábrica --
packge banco_dados;
import java.sql.*;

public class Estoque {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Estoque (strEstocados_id, strCadeira_id, strMesa_id, strConjunto_id, strData_id, strQuantidade_id, strPreco_da_producao_id, strTotal_vendidos_id, )
		VALUES('"+strEstocados+"', '"+strCadeira+"', '"+strMesa+"', '"+strConjunto+"', '"+strData+"', '"+strQuantidade+"', '"+strPreco_daproducao+"', '"+Total_vendidos+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strEstocados_id, strCadeira_id, strMesa_id, strConjunto_id, strData_id, strQuantidade_id, strPreco_da_producao_id, strTotal_vendidos_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Estoque SET Estocados_id = '"+strEstocados+"', '"+strCadeira+"', '"+strMesa+"', '"+strConjunto+"', '"+strData+"', '"+strQuantidade+"', '"+strPreco_daproducao+"', '"+Total_vendidos+"' WHERE Estocados_id = "+intCodigo_id, +strEstocados_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Estoque WHERE Estocados_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			}
} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		
		try {
		    if (strOrdem == "Estocados_id"& "Modelo_id")
		    	strComandoSQL = "SELECT * FROM Estoque ORDER BY Estocados_id, Modelo_id";
		    else
		    	strComandoSQL = "SELECT * FROM Estocados_id ORDER BY strCadeira_id, strMesa_id, strConjunto_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tabela Produzidos na fabrica --
packge banco_dados;
import java.sql.*;

public class Produzidos {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO Produzidos (Produzidos_id, Moeda_id, Codigo_id, Modelo_id, Cadeira_id, Mesa_id, Conjunto_id, Custo_da_producao_id, Quantidade_id, Data_id, Total_Produzidos_id)
		VALUES('"+strProduzidos+"', '"+strMoeda+"', '"+strCodigo+"', '"+strModelo+"', '"+strCadeira+"', '"+strMesa+"', '"+strConjunto+"', '"+Custo_da_producao+"' , '"+strQuantidade+"', '"+strData+"', '"+Total_Produzidos+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strProduzidos_id, strMoeda_id, strCodigo_id, strModelo_id, strCadeira_id, strMesa_id, strConjunto_id, strCusto_da_producao_id, strQuantidade_id, Data_id, strTotal_Produzidos_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Produzidos SET Produzidos_id = '"+strMoeda+"', '"+strCodigo+"', '"+strModelo+"', '"+strCadeira+"', '"+strMesa+"', '"+strConjunto+"', '"+Custo_da_producao+"', '"+strQuntidade+"', '"+strData+"', '"+strTotal_Produzidos+"' WHERE Produzidos_id = "+intCodigo_id, +strQuantidade_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Produzidos WHERE Produzidos_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			}
} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		
		try {
		    if (strOrdem == "Produzidos_id")
		    	strComandoSQL = "SELECT * FROM Estoque ORDER BY Produzidos_id, Modelo_id";
		    else
		    	strComandoSQL = "SELECT * FROM Produzidos_id ORDER BY strCadeira_id, strMesa_id, strConjunto_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Aqui insere para a tabela Dispesas diversas --
packge banco_dados;
import java.sql.*;

public class Dispesas_diversas {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO  Dispesas_diversas (Despesas_diversas_id, Contratados_id, Servicos_id, Valor_do_servico_id)
		VALUES('"+strDispesas_diversas+"', '"+strContratados+"', '"+strServicos+"', '"+strValor_do_servico+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(int intCodigo,String strDespesas_diversas_id, strContratados_id, strServicos_id, strValor_do_servico_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Dispesas_diversas SET Dispesas_diversas_id  = '"+strDispesas_diversas+"', '"+strContratados+"', '"+strServicos+"', '"+strValor_do_servico+"' WHERE Dispesas_diversas_id = "+intCodigo_id, strContratado_id, strValor_do_servico_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Dispesas_diversas WHERE Dispesas_diversas_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			}
} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		
		try {
		    if (strOrdem == "Dispesas_diversas")
		    	strComandoSQL = "SELECT * FROM Dispesas_diversas ORDER BY strContratados_id, strServico_id, strValor_do_servico";
		    else
		    	strComandoSQL = "SELECT * FROM Dispesas_diversas_id ORDER BY strDispesas_diversas_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Neste espaço abaixo instere o Balanço --
packge banco_dados;
import java.sql.*;

public class Balanco {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO  Balanco (Fechamento_id, Total_Custo_de_produção_id, Total_de_vendas_realisadas_id, 
Total_Lucro_sobre_vendas_realisadas_id, Total_Despesas_de_compras_id, Total_Gastos_diversos_id, Data_id) 
		VALUES('"+strFechamento+"', '"+strTotal_Custo_de_produção+"', '"+strTotal_de_vendas_realisadas+"',  '"+strTotal_Lucro_sobre_vendas_realisadas+"', '"+strTotal_Despesas_de_compras+"', '"+strTotal_Gastos_diversos+"', '"+strData+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(strFechamento_id, strTotal_Custo_de_produção_id, strTotal_de_vendas_realisadas_id, strTotal_Lucro_sobre_vendas_realisadas_id, strTotal_Despesas_de_compras_id, strTotal_Gastos_diversos_id, strData_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Balanco SET Fechamento_id  = '"+strFechamento+"', '"+strTotal_Custo_de_produção+"', '"+strTotal_de_vendas_realisadas+"', '"+strTotal_Lucro_sobre_vendas_realisadas+"', '"+strTotal_Despesas_de_compras+"', '"+strTotal_Gastos_diversos+"', '"+strData+"' WHERE Fechamento_id = "+intCodigo_id, Balanco_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Balanco WHERE strFechamento_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			}
} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		
		try {
		    if (strOrdem == "Balanco")
		    	strComandoSQL = "SELECT * FROM Balanco ORDER BY ASC strFechamento_id";
		    else
		    	strComandoSQL = "SELECT * FROM Fechamento_id ORDER BY Balanco";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
-- Tratamento para inserir na tabela Colaborador --
packge banco_dados;
import java.sql.*;

public class Colaborador {
	private Connection conBanco;
	private PreparedStartement psComando;
	private ResultSet rsRegistros;
	
	public void configurarConexao(Connection conBanco) { this.conBanco = conBanco; }
	
	public boolean inserirRegistro(String strDescricao) {
		String strComandoSQL;
			
			try {
			    strComandoSQL = "INSERT INTO  Colaborador (CPF_id, Nome_id, Senha_id, Endereco_id) 
		VALUES('"+strCPF+"', '"+strNome+"', '"+strSenha+"',  '"+strEndereco+"')";
			    psComando = conBanco.prepareStatement(strComandoSQL);
			    psComando.executeUpdate();
			    
			    return true;
			}
			catch (Exception erro) {
			orro.printStackTrace();
			return false;
			}
	}
	
	public boolean alterarRegistro(strCPF_id, strNome_id, strSenhs_id, strEnderco_id) {
	Sting strComandoSQL;
	
			try {
			strComandoSQL = "UPDATE Colaborador SET CPF_id  = '"+strCPF_id+"', '"+strNome+"', '"+strSenha+"', '"+strEndereco+"' WHERE Colaborador_id = "+intCodigo_id, CPF_id;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;  
			}
			catch (Excepition erro) {
			erro.printStckTrace();
			return false;
			}
	}
	public boolean excluirRegistro (int intCodigo){
		String strComandoSQL;
		
		try {
			strComandoSQL = "DELETE FROM Colaborador WHERE strCPF_id = "+intCodigo;
			psComando = conBanco.prepareStatemant(strComandoSQL);
			psComando.executeUpdate();
			
			return true;
		}
			catch (Exception erro) {
			erro.printStackTrace();
			return false;
			}
} 
	puclic ResultSet listarRegistros(String strOrdem) {
	String strComandoSQL;
		
		try {
		    if (strOrdem == "Colaborador")
		    	strComandoSQL = "SELECT Colaborador FROM intCPF_id ORDER BY ASC strNome_id";
		    else
		    	strComandoSQL = "SELECT Colaborador FROM strNome_id ORDER BY strEndereco_id";
		    	
		    	psComando = conBanco.prepareStatement(strComandoSQL);
		    	rsRegistros = psComando.executeQuery();
		    	return rsRegistros;		    
		}
		catch (Exception erro) {
			erro.printStackTrace();
			return null;
		}
	}	
}
