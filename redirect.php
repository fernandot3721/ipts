<?php
if ($_POST["pass"]=="ipts123PPC") {
	header("Location: iptsback.html");
	die();
}
else {
	header("Location: index.html");
	die();
}
?>