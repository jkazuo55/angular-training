
================ project =================

================ commands =================
ng new store 

ng g c components/component

ng g m pages/products -m=app --route products

ng g c pages/products/product --skipTests

 ng g s pages/products/services/products --skipTests
 
================ utilities ================
npm i -g json-server
"serverAPI": "json-server --watch server/db.json --port 6000"
npm run serverAPI


============== library ===================
ng add @angular/material

