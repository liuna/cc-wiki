<?php
session_start();
include '../conf.php';
$_SESSION['action']="invite";
$mw=$_COOKIE['ccwikiUserName'];
if(!isset($_COOKIE['ccwikiUserID']))
header("Location:http://".$ccHost.":".$ccPort."/".$ccSite."/index.php/Special:UserLogin");
else{
$userurl="http://".$ccHost.":".$ccPort."/".$ccWiki."/includes/renrenValid.php?mw=".$mw;
$ch = curl_init($userurl);//打开
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
$response  = curl_exec($ch);
curl_close($ch);//关闭
echo $response;
if(empty($response))
header("Location:http://".$ccHost.":".$ccPort."/".$ccWiki."/includes/login/renren1.htm");
else
header("Location:http://".$ccHost.":".$ccPort."/".$ccWiki."/includes/renrenLogin.php?action=invite"."&access_token=".$response);
}
?>
