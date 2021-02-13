<?php
    $load=sys_getloadavg();
    $cpu_num=shell_exec('cat /proc/cpuinfo| grep "cpu cores"| uniq');
    $arrays=explode(" ",$cpu_num);
    $load=$load[0]/$arrays[2];
    echo floor($load*100);
?>