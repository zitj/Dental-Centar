<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $date = $_POST['date'];
  $message = $_POST['message'];

  try{
    $mail->isSMTP();
    $mail->Host = 'mail.motocentarpljevaljcic.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mail@motocentarpljevaljcic.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = 'pwpwpw'; // Gmail address Password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->setFrom('aleksandar@motocentarpljevaljcic.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('1eyedea2eyedeas@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

    $mail->isHTML(true);
    $mail->Subject = 'Message Received (Contact Page)';
    $mail->Body = "<p>Ime : $name <br> Broj telefona: $phone <br> Email adresa: $email <br> Željeni datum: $date <br><br> Poruka : $message</p>";

    $mail->send();
    $alert = '<div class="alert-success">
                 <span>Upit je poslat! Hvala što ste nas kontaktirali.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>Došlo je do greške. Molimo Vas pokušajte ponovo.</span>
              </div>';
  }
}
?>
<!-- .$e->getMessage(). -->
