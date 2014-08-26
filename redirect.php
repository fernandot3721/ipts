<?php
if ($_POST["pass"]=="ipts123") {
	header("Location: ipts.html");
	die();
}
else {
	header("Location: index.html");
	die();
}
?>