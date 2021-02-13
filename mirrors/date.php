<?php
	$startdate=date("Y-m-d H:i:s");
	$enddate="2021-2-1 00:00:00";
	$stdate=strtotime($startdate);
	$endate=strtotime($enddate);
	$day=floor(($stdate/86400)-($endate/86400));
	echo $day."天";
?>