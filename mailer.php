<?php

// quickMailer.php

$message[] = "Name: " . filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$message[] = "Email: " . filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$message[] = wordwrap("Message: " . filter_var($_POST['message'], FILTER_SANITIZE_STRING), 70, "\r\n");

$text = implode("\r\n", $message);

$headers[] = "From: " . $_POST['name'] . "<" . $_POST['email'] . ">";
$headers[] = "Reply-To: " . $_POST['email'];

$headers = implode("\r\n", $headers);

if(mail("elanor.dm@gmail.com", "Contact Received from Elanordesign.com", $text, $headers)) {
		http_response_code(200);
		echo "OK";
} else {
		http_response_code(422);
		echo "ERROR";
}
?>