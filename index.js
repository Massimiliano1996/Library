Library=[
   new book ('I Promessi Sposi','Manzoni','1827',true),
   new book ('Harry Potter','Rowling','1997',true),
   new book ('La tua seconda vita comincia quando capisci di averne una sola','Raphaell Giordano','2015', false),
    new book ('La vita è come una medusa non puoi prenderla a badilate','Guy Browning','2004',false),
    new book('La Divina Commedia','Dante Alighieri','1472',true)
    
    

];




function book(
    title,
    autor,
    year,
    read
    
){
    this.title=title,
    this.autor=autor,
    this.year=year,
    this.read=read
    
        
    
}




function createTable(){
    
    for(book of Library){
    document.getElementById('tableBody').innerHTML +=
    `<tr>
        <td>${book.title}</td>
        <td>${book.autor}</td>
        <td>${book.year}</td>
        <td>${book.read}</td>
    
    
    
    
    </tr> 
    
    `


    }

}
createTable();


function addBook(){
    let title=document.getElementById('inputTitolo').value;
    let autor=document.getElementById('inputAutore').value;
    let year=document.getElementById('inputAnno').value;
    let read=document.getElementById('inputLetto').value;    
    Library.push(new book(title,autor,year,read));
    
    createTable();

}


