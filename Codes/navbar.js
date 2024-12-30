const navbar = document.querySelector(".navbar");

navbar.addEventListener("click" , (data) =>
{
    const target = data.target;
    if(target.classList.contains("logo"))
    {
        window.location.href = "description.html";
    }
    else if(target.classList.contains("behaviour"))
    {
        window.location.href = "behaviour.html";
    }
    else if(target.classList.contains("breeds"))
    {
        window.location.href = "breeds.html";
    }
    else if(target.classList.contains("evolution"))
    {
        window.location.href = "evolution.html";
    }
    else if(target.classList.contains("intelligence"))
    {
        window.location.href = "intelligence.html";
    }
    else if(target.classList.contains("lifespan"))
    {
        window.location.href = "lifespan.html";
    }
    else if(target.classList.contains("quiz"))
    {
        window.location.href = "quiz.html";
    }
}
);