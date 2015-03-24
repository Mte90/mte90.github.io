#FirefoxOS Boilerplate App

Slide realizzate per per il Firefox OS Workshop Bari di febbraio 2014.  

Demo: <http://mte90.github.io/Presentazione-FFOS-Boilerplate/>

###Compilazione
La presentazione è scritta in markdown e compilata in html+reveal.js con Pandoc.  
Il comando per la compilazione è:  
`pandoc --section-divs -t html5 -s --template template.revealjs -o index.htm ./index.md`
