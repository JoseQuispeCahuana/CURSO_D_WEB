function fnValidar06()
{
	var xTexto = document.getElementById("txtTexto").value;
	if(!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(xTexto))) 
	{
		alert("Escribe CORREO valido...");  
		return false;
	}

	/// Caso contrario ///
	return true;
}