<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="">
	<title>CREACIÓN DE UN CONTADOR DE VISITAS</title>
</head>
<body>
	<?PHP 
	$CUENTA="VISITAS.TXT"
	function contador($CUENTA){
		$fp=fopen($CUENTA, r);
		$num=fgets($fp,5);
		$num+1;
		print"Numero de visitas: ";
		echo  $num;
		excec("rm-rf $cuenta");
		excec("echo $num >$cuenta");
}
if (!file_exists($cuenta)) {
	excec("echo 1>$cuenta");
}
contador($cuenta);



</body>
</html>
<if> (isset($_cooke["contador"])){
	setcookie("contador", $_cookie["contador"]+1, time()+360*24*60*60);
	echo "Número de visitas: ".$_cooke["contador"];
	}
	else{	
	setcookie("contador", 1, time()+365*24*60*60);
	echo "Bienvenido por primera vez a nuestra página"
}

<html long="es">
