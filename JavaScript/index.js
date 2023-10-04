function disappear(){
      const div=document.getElementById('div')
      const child = div.querySelector('#paragraph');
      child.style.display="none";
      const para = document.createElement("h3");
      para.innerText = "This is a heading.";
      div.appendChild(para);
      
    }
