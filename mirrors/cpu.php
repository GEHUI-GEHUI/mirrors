<?php
	exec('top -n 1 b i 2>err.txt',$r, $r2);
	$cpu=explode(",",$r[2]);
	$cpu=str_replace(" id","",$cpu[3]);
	$cpu=ceil($cpu);
	echo $cpu; 
?>