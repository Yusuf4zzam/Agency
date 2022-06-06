let landingPage=document.querySelector(".landing-page"),imagesArr=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"],backgroundStatus=!0,randomImages;function randomBackgroundImg(){!0===backgroundStatus?randomImages=setInterval(()=>{var e=Math.floor(Math.random()*imagesArr.length);landingPage.style.backgroundImage=`url("/images/${imagesArr[e]}")`,localStorage.setItem("lastImg",'url("/images/'+imagesArr[e])},5e3):clearInterval(randomImages)}randomBackgroundImg();let settingsIcon=document.querySelector(".settings .icon"),settingsBox=document.querySelector(".settings");settingsIcon.addEventListener("click",()=>{settingsBox.classList.toggle("active")});let colorList=document.querySelectorAll(".settings ul.page-colors li");colorList.forEach(e=>{localStorage.getItem("main-color")&&colorList.forEach(e=>{e.classList.remove("active")}),localStorage.getItem("main-color")&&document.querySelector(`[data-color = "${localStorage.getItem("main-color")}"]`).classList.add("active"),e.addEventListener("click",e=>{colorList.forEach(e=>{e.classList.remove("active")}),e.currentTarget.classList.add("active"),document.documentElement.style.setProperty("--main-color",e.currentTarget.dataset.color),localStorage.setItem("main-color",e.currentTarget.dataset.color)})}),localStorage.getItem("main-color")&&document.documentElement.style.setProperty("--main-color",localStorage.getItem("main-color"));let imagesButtons=document.querySelectorAll(".change-images li");imagesButtons.forEach(e=>{e.addEventListener("click",e=>{imagesButtons.forEach(e=>{e.classList.remove("active")}),console.log(),e.currentTarget.classList.add("active"),landingPage.style.backgroundImage=`url("/images/${imagesArr[e.currentTarget.textContent-1]}")`,localStorage.setItem("lastImg",imagesArr[e.currentTarget.textContent-1]),localStorage.setItem("currImgEle",e.currentTarget.textContent-1)})}),localStorage.getItem("currImgEle")&&(imagesButtons.forEach(e=>{e.classList.remove("active")}),imagesButtons[localStorage.getItem("currImgEle")].classList.add("active")),localStorage.getItem("lastImg")&&(landingPage.style.backgroundImage=`url("/images/${localStorage.getItem("lastImg")}")`);let backgroundCheck=document.querySelector("#background-check");function randomImagesCheck(){backgroundCheck.checked?(clearInterval(randomImages),backgroundStatus=!1):(backgroundStatus=!0,randomBackgroundImg()),localStorage.setItem("backgroundStatus",backgroundStatus)}backgroundCheck.addEventListener("click",()=>randomImagesCheck()),localStorage.getItem("backgroundStatus")&&(backgroundStatus=localStorage.getItem("backgroundStatus"),"false"==backgroundStatus&&backgroundCheck.click(),landingPage.style.backgroundImage=localStorage.getItem("lastImg"));let headerToggleButton=document.querySelector(".toggle-button"),HeaderUL=document.querySelector("header .ul-list");headerToggleButton.addEventListener("click",()=>{HeaderUL.classList.toggle("active"),headerToggleButton.classList.toggle("active")});let skillsBox=document.querySelector(".skills"),skillsProgress=document.querySelectorAll(".skill-progress span");window.addEventListener("scroll",()=>{skillsBox.offsetTop-200<=window.scrollY&&(skillsBox.classList.add("active"),skillsProgress.forEach(e=>{e.style.width=e.dataset.progress,e.classList.add("active")}))});let galleryData=[{img:"images/gallery-001.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-002.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-003.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-004.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-005.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-006.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-007.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"},{img:"images/gallery-008.jpg",title:"Title",paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",dataLink:"#"}];galleryData.forEach(e=>{let t=document.createElement("div");t.className="box",t.setAttribute("data-link",e.dataLink);let a=document.createElement("div");a.className="img-box";let i=document.createElement("img");i.src=e.img,i.setAttribute("alt","Gallery Image"),a.appendChild(i);let r=document.createElement("div");r.className="text";let o=document.createElement("h3");o.textContent=e.title,r.appendChild(o);let l=document.createElement("p");l.textContent=e.paragraph,r.appendChild(l),t.appendChild(a),t.appendChild(r),document.querySelector(".gallery .content").appendChild(t)});let galleryBoxes=document.querySelectorAll(".gallery .box");galleryBoxes.forEach(g=>{g.addEventListener("click",()=>{document.querySelector(".popup-box")&&document.querySelector(".popup-box").remove();let e=document.createElement("div");e.className="popup-box";let t=document.createElement("div");t.className="content";let a=document.createElement("div");a.className="img-box";let i=document.createElement("img");i.src=g.querySelector("img").src,i.setAttribute("alt","Gallery Image"),a.appendChild(i),t.appendChild(a);let r=document.createElement("div");r.className="text-box";let o=document.createElement("h3");o.textContent=g.querySelector("h3").textContent,r.appendChild(o);let l=document.createElement("p");l.textContent=g.querySelector("p").textContent,r.appendChild(l);let c=document.createElement("div");c.className="preview";let s=document.createElement("a");s.href=g.dataset.link,s.textContent="Preview",c.appendChild(s),t.appendChild(r),t.appendChild(c),e.appendChild(t);let n=document.createElement("i");n.className="far fa-times-circle",e.appendChild(n),document.body.appendChild(e);let m=document.querySelector(".popup-box i");m.addEventListener("click",e=>{m.parentElement.remove(),d.classList.remove("active")});let d=document.querySelector(".overlay-box");d.classList.add("active"),d.addEventListener("click",()=>{e.remove(),d.classList.remove("active")})})});let ulBullets=document.querySelectorAll(".timeline ul li"),timelineBox=document.querySelectorAll(".timeline .box"),currentTimelineIndex=0;function timelineActiveClass(){ulBullets.forEach(e=>{e.classList.remove("active")})}function timelineBoxFunc(){timelineBox.forEach(e=>e.classList.remove("active")),timelineBox[currentTimelineIndex].classList.add("active")}ulBullets.forEach(e=>{e.addEventListener("click",e=>{timelineActiveClass(),e.currentTarget.classList.add("active"),currentTimelineIndex=e.currentTarget.dataset.index,timelineBoxFunc()})}),timelineBoxFunc();