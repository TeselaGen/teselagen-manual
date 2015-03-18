Teselagen's Manual
==
Teselagen's Manual, based on Gitbook.

Instructions to edit/compile manual within localhost
--
1. Install the gitbook cli tool: `npm install gitbook-cli -g` (https://github.com/GitbookIO/gitbook)
(NOTE: you may need to npm uninstall gitbook first: `npm uninstall gitbook -g` because there is a memory bug 
in the old version of gitbook [1.5] that throws an `EMFILE, too many open files` error when you try to build the website)
2. Edit files: SUMMARY.md contains left menu. The structure of this file is defined by gitbook. The body of the manual is under 'chp/' (in markdown). 
3. Extra js/css/html is added through a node module installed under node_modules/gitbook-plugin-tesela/
4. Under root teselagen-manual folder, execute: `gitbook build . --output=./www`
5. To serve the site locally using gitbook itself simply run `gitbook serve` from the main teselagen-manual directory 
and it should start the server on `http://localhost:4000`. Alternatively you can use another web-server to serve 'www/' 
(e.g. `python -m SimpleHTTPServer 8000` from within the www directory)



Instructions to push changes to live server (if authorized)
--
1. ssh to www.teselagen.com server 
2. `su teselagen; cd /home/teselagen/teselagen-manual/`
3. `git pull`
