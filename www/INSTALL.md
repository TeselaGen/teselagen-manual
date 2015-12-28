Teselagen's Manual
==
Teselagen's Manual, based on Gitbook.

Instructions to edit/compile manual within localhost
--
1. Install gitbook: `npm install gitbook-cli -g`
2. Edit files: SUMMARY.md contains left menu. The structure of this file is defined by gitbook. The body of the manual is under 'chp/' (in markdown). 
3. Extra js/css/html is added through a node module installed under node_modules/gitbook-plugin-tesela/
4. Under root folder, execute: `gitbook build . `
5. Book will be created under _book/ folder. Optionally copy it to www/
6. User favorite local web-server to serve '_book/' (or 'www/')


Instructions to push changes to live server (if authorized)
--
1. ssh to www.teselagen.com server 
2. `su teselagen; cd /home/teselagen/teselagen-manual/`
3. `git pull`
