function fnValidar04()
{
	var xTurno = document.getElementById('lstTurno').value;
	if (xTurno=="") 
	{
		alert("Seleccione TURNO....");
		return false;
	}

	var xResult = document.getElementById("txtResult").value;
	if(xResult=="" || xResult==0)
	{
		alert("Revice...Resultado ")
	}
}



function verConteo(turno, mtzAlumnos)
{
	contadorTurno = 0;
	if (mtzAlumnos.length > 0) {
		  mtzAlumnos.forEach(element => {
		  			if (element[3]==turno) {
		  				contadorTurno++;
		  			}
		  });
		  //Por que es equivalente
		/*  for (var i=0; < mtzAlumnos.length; i++){
		  	mtzTurno = mtzAlumnos[i][3]; //Turno
		  	if (mtzTurno == turno) {
		  		contadorTurno++;
		  	}
		  }
	}												*/
	document.getElementById("txtResult").value = contadorTurno;
}