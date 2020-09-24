import React,{useEffect} from 'react';
import  './App.css'
function App() {
 
  const $=document.querySelector.bind(document)
  const html={
    links:$('.tab-links'),
    contents:$('.tab-content')
  }
  
  function TabNavigation(){
    const $=document.querySelector.bind(document)
    const html={
      links:[...$('.tab-links').children],
      contents:[...$('.tab-content').children],
      openTab:$('[data-open]')
    }
    
 function hideAlltab(){
   html.contents.forEach((val,ind,arr)=>{
     html.contents[ind].style.display='none'
   })
 }
 function RemoveAllActiveClass(){
  html.links.forEach(tab=>{
    tab.className=tab.className.replace(" active","")
  })
 }
 function showCurrentTab(id){
   const tabcontent=$('#'+id)
   tabcontent.style.display='block'
 }
 function selectTab(event){
   hideAlltab()
   RemoveAllActiveClass()
   const target=event.currentTarget;
   showCurrentTab(target.dataset.id)
   target.className += " active"
 }
 function listenForChanges(){
  html.links.forEach((elem,ind,arr)=>{
    elem.addEventListener('click',selectTab)
    //console.log(elem)
  })
 }
 function init(){
   hideAlltab()
   listenForChanges()
   html.openTab.click()
 }
 return{
   init
 }
}
 useEffect(()=>{
  const tabNavigation=TabNavigation()
  tabNavigation.init()
 },[])


  

  return (
    <div className="App">
      <header>Learning TabControl</header>
      <main>
     <div className="tab-links"  >
    <button data-id="Prepare" data-open>Prepare</button>
    <button data-id="Produce" >Produce</button>
    <button data-id="Delivery" >Delivery</button>
     </div>
     <div className="tab-content">
       <section id="Prepare">
        <h2>How to prepare content</h2>
        <p>Nedd a lot of research and organizing ideas</p>
       </section>
       <section id="Produce">
       <h2>How to produce</h2>
       <p>develop your idea and record it</p>
        <p>to record you will need: sound, camera, light and computer</p>
       </section>
       <section id="Delivery">
       <h2>How to Delivery content</h2>
        <p>you can choose any digital media link:youtube,twiter,Instagram</p>
       </section>
     </div>
     </main>
    </div>
  );
}

export default App;
