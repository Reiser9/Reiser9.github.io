<?php 

require_once('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// Почта, от кого будет уходить письмо и пароль

$mailto = 'mk.t.v@inbox.ru';
$mailtopas = "Nhjqrf_VFR";

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = $mailto; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = $mailtopas; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom($mailto); // от кого будет уходить письмо?
$mail->addAddress($mailto);     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$name = $_POST['name'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$address = $_POST['address'];

$mail->Subject = 'Заявка с сайта markat';
$mail->Body    = "Пользователь оставил заявку на сайте Pc Day.<br> Имя: " . $name . "<br> Город: " . $city . "<br> Адрес: " . $address . "<br> Номер телефона: " . $phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
	
}

?>