<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer-6.3.0/src/Exception.php';
require 'phpmailer-6.3.0/src/PHPMailer.php';
require 'phpmailer-6.3.0/src/SMTP.php';

$to_email_address = "website@nlcmadrid.es";
$email = isset($_POST['email']) ? $_POST['email'] : null;
$subject = isset($_POST['subject']) ? $_POST['subject'] : null;
$message = isset($_POST['message']) ? $_POST['message'] : null;

$finalMsg = '<b>Email: </b> '.$email.PHP_EOL;
$finalMsg .= '<b>Mensaje: </b> '.$message;

if($to_email_address && $email && $subject && $message) {
  $mail = new PHPMailer;
  $mail->Host = "localhost"; 
  $mail->Port = "25";
  $mail->isSMTP();
  $mail->SMTPAuth = false;
  $mail->SMTPAutoTLS = false;
  $mail->setFrom("website@nlcmadrid.es", "Website Business");
  $mail->addAddress("website@nlcmadrid.es");
  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body = $finalMsg;
  $mail->send();

  echo 'Su mensaje ha sido enviado con exito, muchas gracias';
}
else{
  echo 'No estás autorizado para ver este contenido';
}
?>