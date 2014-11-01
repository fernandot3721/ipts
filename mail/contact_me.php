<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$wechat = $_POST['wechat'];
$message = $_POST['message'];
$intrestedIn = $_POST['intrestedIn'];
$intrestList = implode (",", $intrestedIn);
// error_log($intrestList);
	
// Create the email and send the message
$to = 'info@ipts.us'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "IPTS visitor's message";
$email_body = "IPTS visitor:$name leave a message as follows:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nWechat: $wechat\n\nintrestedIn: $intrestList\n\nMessage:\n$message";
$headers = "From: info@ipts.us\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>