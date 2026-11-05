// ==UserScript==
// @name         TMN TDS Auto v17.66
// @namespace    http://tampermonkey.net/
// @version      17.66
// @description  v17.66 — OC item auto-buy: each step (go to store, buy, return) now waits a random 3-10s
// @author       You
// @match        *://www.tmn2010.net/login.aspx*
// @match        *://www.tmn2010.net/authenticated/*
// @match        *://www.tmn2010.net/Login.aspx*
// @match        *://www.tmn2010.net/Authenticated/*
// @match        *://www.tmn2010.net/Default.aspx*
// @match        *://www.tmn2010.net/default.aspx*
// @match        *://www.tmn2010.net/Authenticated/Default.aspx*
// @match        *https://www.tmn2010.net/authenticated/
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      api.telegram.org
// @updateURL    https://raw.githubusercontent.com/Fyre007/TMN/refs/heads/main/V17/header/Helper.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fyre007/TMN/refs/heads/main/V17/header/Helper.user.js
// ==/UserScript==

