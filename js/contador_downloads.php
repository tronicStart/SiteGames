<?php
function CountDownloads($Direccion){
  
  $url_descarga=$Direccion;
  
  if (is_writeable("contador.txt"))
  {
  	$arrayfichero=file("contador.txt");
  	$arrayfichero[0]++;
  	$fichero=fopen("contador.txt","w");
  	$grabar=fwrite($fichero,$arrayfichero[0]);
  	$cerrar=fclose($fichero);
  }
  header("location:$url_descarga");
  
}

CountDownloads("./games_apps/concidencias_v1.0.apk");
?>
