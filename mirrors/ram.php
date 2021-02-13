<?php
	$RAM=shell_exec('free');
	$oldchar=array("\t","\n","\r");
    $newchar=array("","","");
    $RAM=str_replace($oldchar,$newchar,$RAM);
    $RAM=trim($RAM);
	$RAM=explode("        ",$RAM);
	$RAM=explode("      ",$RAM[3]);
	$RAMS=$RAM[1]/$RAM[0]."%";
	$RAMS=$RAMS*100;
	$RAMS=ceil($RAMS);
	echo $RAMS;
?>