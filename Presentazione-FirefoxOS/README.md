#FirefoxOS per Utenti e Sviluppatori

Demo: <http://mte90.github.io/Presentazione-FirefoxOS/>

###Compilazione
La presentazione è scritta in markdown e compilata in html+reveal.js con Pandoc.  
Il comando per la compilazione è:  
`pandoc --section-divs -t html5 -s --template template.revealjs -o index.htm ./index.md`
