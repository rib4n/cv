import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=News+Cycle');

  body {
    font-family: 'News Cycle', sans-serif;
    font-size: 24px;
    background-color: #DDFEFE;
  }

h1 {
   font-size: 42px;
   font-size: 4vw;
   color: white;
   margin-bottom: 0.2;
   background-color: #2AAEAE;
 }

 /* Add a black background color to the top navigation */
 .topnav {

     overflow: hidden;
 }

 /* Style the links inside the navigation bar */
 .topnav a {
     float: left;
     color: black;
     text-align: center;
     font-family: 'News Cycle', sans-serif;
     padding: 14px 16px;
     text-decoration: none;
     font-size: 23px;
 }

 /* Change the color of links on hover */
 .topnav a:hover {
     background-color: #2AAEAE;
     color: white;
     cursor: pointer;
     transition: color 0.3s ease-in-out;
 }

 /* Add a color to the active/current link */
 .topnav a.active {
 }


`
