function disappear(){
      const div=document.getElementById('container')
      div.style.display="none";
      
    }
 
function inputData()
{
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    const first = document.createElement('p');
    const second = document.createElement('p');
    const button = document.createElement('button')
    button.innerText="Remove"
    button.setAttribute("onclick", "disappear()")

    first.innerText= title;
    second.innerText=author;
    const div=document.getElementById('container')
    div.appendChild(first);
    div.appendChild(second);
    div.appendChild(button);

}