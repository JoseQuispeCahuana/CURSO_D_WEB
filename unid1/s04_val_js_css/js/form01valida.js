function fnValidar01()
{
    var xTexto = document.getElementById("txtTexto").value;
    if(xTexto =="" || /^\s+$.test(xTexto))
    {
        alert("falta texto....");
        return false;
    }
//caso contrario
    return true;
}