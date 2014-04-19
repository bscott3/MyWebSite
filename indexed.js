var databox, db;
function intiate(){
databox = document.getElementById('databox');
var button = document.getElementById('save');
button.addEventListener('click', addobject);
 var request = indexedDB.open('mydatabase');
 request.addEventListener('error', showerror);
 request.addEventListener('success', start);
 request.addEventListener('upgradeneeded', createdb);
 }
 
 function showerror(e){
 alert('Error: ' + e.code + ' ' + e.message);
 }
 
 function start(e){
 db = e.target.result;
 show();
 }
 
 function createdb(e){
	var database = e.target.result;
	var mystore = database.createObjectStore('movies',{keyPath:'id'});
	mystore.createIndex('SearchCharacter', 'character', {unique :false});
	mystore.createIndex('SearchTitle', 'name', {unique :false});
}

function addobject(){
  var keyword = document.getElementById('keyword').value;
  var m_title = document.getElementById('m_title').value;
  var main_char = document.getElementById('main_char').value;
  var transaction = db.transaction(['movies'],'readwrite');
  var mystore = transaction.objectStore('movies');
  var request = mystore.add({id:keyword, character:main_char, name:m_title});
  request.addEventListener('success', show);
  document.getElementById('keyword').value = '';
  document.getElementById('m_title').value = '';
  document.getElementById('main_char').value = '';
 }
 
 function DeleteDB(){
	indexedDB.deleteDatabase('mydatabase');
 }
 
 function show(keyword){
 databox.innerHTML = '';
 var mytransaction = db.transaction(['movies']);
 var mystore = mytransaction.objectStore('movies');
 var newcursor = mystore.openCursor();
 newcursor.addEventListener('success' , showlist);
 }
 
 function showlist(e){
	var cursor = e.target.result;
	if(cursor){
		databox.innerHTML += '<div>' + cursor.value.id + ' - ' + cursor.value.name + '</div>';
		cursor.continue();
	}
}
  
  
addEventListener('load', intiate);
	