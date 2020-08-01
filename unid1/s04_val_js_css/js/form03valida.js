function fnValidar03()
{	
	var elementoPref = document.getElementByName('chkPrefer');
	for (var i = 0; i < elementoPref.length; i++) 
	{
		if (!elementoPref[i].checked) 
		{
			alert("Elemento sin check " + elementoPref[i].value);
			return false;
		}
	}

	var elementoEstado = document.getElementByName("radEstado");
	var seleccionado = false;
	var valorSeleccionado = "";
	for(var i = 0; i < elementoEstado.length; i++) 
	{
		if(elementoEstado[i].checked)
		{
			valorSeleccionado = elementoEstado[i].value;
			seleccionado = true;
		}
	}

	if (!seleccionado) {
		alert("elija estado civil");
		return false;
	}
	alert("estado civil elegido:" + valorSeleccionado);

	/// Caso contrario ///
	return true;
}