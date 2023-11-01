const initSlider=()=>{
    const ImageList=document.querySelector(".slider-wrapper .image-list")
    const slideButtons=document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft=ImageList.scrollWidth-ImageList.clientWidth;
    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            // console.log(ImageList)
            const direction=button.id=="prev-slide"? -1:1;
            const ScrollAmt=ImageList.clientWidth*direction;
            ImageList.scrollBy({left:ScrollAmt,behavior:"smooth"})
            console.log(button)
        })
    })
    const handleSlideButtons=()=>{
        slideButtons[0].style.display=ImageList.scrollLeft<=0?"none":"block";
        slideButtons[1].style.display=ImageList.scrollLeft>=maxScrollLeft?"none":"block";
    } 
    const upDateScrollThumbPosition=()=>{
        const ScrollPositions=imageList.scrollLeft;
        // const thumbPosition
    }
    ImageList.addEventListener("scroll",()=>{
        handleSlideButtons();
        upDateScrollThumbPosition();
    })
}
window.addEventListener("load",initSlider)