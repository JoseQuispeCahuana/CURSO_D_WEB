function fnValidar02()
{
	var xValor = document.getElementsById('lstPreferencias').value;
	if(xValor=="")
	{
		alert("Selecciones una preferencia...");
		return false;
	}
	/// Caso contrario ///
	return true;
}