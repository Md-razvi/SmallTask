


let images=['../AllFiles/Assets/Images/place0.jpg','../AllFiles/Assets/Images/place1.jpg',"../AllFiles/Assets/Images/place2.jpg","../AllFiles/Assets/Images/place3.jpg","../AllFiles/Assets/Images/place4.jpg","../AllFiles/Assets/Images/place5.jpg","../AllFiles/Assets/Images/place6.jpg","../AllFiles/Assets/Images/place7.jpg","../AllFiles/Assets/Images/place8.jpg","../AllFiles/Assets/Images/place9.jpg"];
// let image='../A' 
let img1="../AllFiles/Assets/Images/personalImage.jpg";
let a=document.getElementsByClassName("image-list")[0]
function AddImages(images,a)
{
    for(let i=0;i<images.length;i++)
    {
        let img=document.createElement("img");
        img.setAttribute("src",images[i]);
        img.setAttribute("class","image-item")
        a.appendChild(img)
    }
}
function AddImg(Num)
{
    let a=document.querySelector(".photos .Shaikhs")
    for(let i=0;i<Num;i++){
        let div=document.createElement("div");
        // div.style.position="relative";
        let img=document.createElement("img");
        img.setAttribute("src",img1);
        let j=document.createElement('i');
        let p=document.createElement("p");
        p.textContent=`speaker ${i+1}`;
        j.setAttribute("class","ri-heart-fill")
        div.append(img,j,p);
        a.appendChild(div);
    }
}
{/* <i class="ri-heart-line"></i> */}
AddImg(5)
AddImages(images,a)
// window.addEventListener("load",initSlider)