function fnValidar06()
{
		var xTurno = document.getElementById("lstTurno").value;
    if(xTurno=="")
    {
        alert("Seleccione Genero...");
        return false;
    }

    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult==0)
    {
        alert("Revice... Resultado");
        return false;
    }

    /// caso contrario ///
    return true;
}

function verConteo(turnoElegido, mtzAlumnos)
{
    contadorTurno=0;
    if(mtzAlumnos.length > 0){
        for(var i=0; i<mtzAlumnos.length;i++){
            turnoMtz=mtzAlumnos[i][4];          
            if(turnoMtz == turnoElegido){
                contadorTurno++;  
            }
        }
    }        
    
    document.getElementById("Resultado").value = contadorTurno;
}
