import $ from "jquery";
import "./header.css";

$("#logo").remove(); // Remove existing logo from previous tasks, if necessary
$("body").prepend('<div id="logo"></div><h1>Holberton Dashboard</h1>');
console.log("Init header");
