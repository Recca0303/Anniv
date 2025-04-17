function openEnvelope()
{
   let top=document.getElementById('top');
   top.style.transform='rotateX(180deg)'
   top.style.zIndex='1'
   let letter=document.getElementById('letter')
   setTimeout(()=>{
       letter.style.transform='translate(-50%,-30%)'
   },1000)
}

function closeEnvelope()
{
   let letter=document.getElementById('letter')
   letter.style.transform='translate(-50%,5%)'
   let top=document.getElementById('top');
   setTimeout(()=>{
     top.style.transform='rotateX(0deg)'
     top.style.zIndex='3'
   },500)
}
document.addEventListener('DOMContentLoaded',()=>{
   let letter=document.getElementById('letter')
   let envelope=document.getElementById('envelope')
   letter.addEventListener('wheel',(e)=>{
          let s=letter.style.transform
          let start=s.indexOf(' ')+1
          let end=s.lastIndexOf('%')
          let yVal=parseInt(s.substring(start,end))
          let letterBottom=letter.getBoundingClientRect().bottom
          let envelopeTop = envelope.getBoundingClientRect().top
          let envelopeBottom = envelope.getBoundingClientRect().bottom
          
     if(e.deltaY>0) 
     {
       if(letterBottom-40>envelopeTop)
       {
         let y=yVal-1
         letter.style.transform=`translate(-50%,${y}%)`
       }
     }
     else
     {
       if(letterBottom+40<envelopeBottom)
       {
          let y=yVal+1
          letter.style.transform=`translate(-50%,${y}%)`
       }
     }
})
})
