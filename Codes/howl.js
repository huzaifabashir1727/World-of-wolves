const logo = document.querySelector(".howl");
const audio = document.querySelector(".howl-audio");

logo.addEventListener("click" , () => 
{
    if (audio.paused || audio.currentTime === 0)
    {
        audio.play();
        logo.style.width = "55px";
        logo.style.height = "50px";
        logo.style.marginTop = "-5px";
    } 
    else
    {
        audio.pause();
        audio.currentTime = 0;
        logo.style.width = "50px";
        logo.style.height = "45px";
    }
});