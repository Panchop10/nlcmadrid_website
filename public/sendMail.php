<?php

$to_email_address = null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$subject = isset($_POST['subject']) ? $_POST['subject'] : null;
$message = isset($_POST['message']) ? $_POST['message'] : null;

$finalMsg = '<b>Email: </b> '.$email.PHP_EOL;
$finalMsg .= '<b>Mensaje: </b> '.$message;


if($to_email_address && $email && $subject && $message) {
  mail($to_email_address,$subject,$finalMsg);

  echo 'Su mensaje ha sido enviado con exito, muchas gracias';
}

echo 'Su mensaje no se ha podido enviar, lo sentimos';

?>