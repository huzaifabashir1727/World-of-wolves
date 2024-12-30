const Score = document.querySelector("span");
const submit = document.querySelector(".submit");

const selected1 = document.querySelector(".options-1");
const selected2 = document.querySelector(".options-2");
const selected3 = document.querySelector(".options-3");
const selected4 = document.querySelector(".options-4");
const selected5 = document.querySelector(".options-5");
const selected6 = document.querySelector(".options-6");
const selected7 = document.querySelector(".options-7");
const selected8 = document.querySelector(".options-8");
const selected9 = document.querySelector(".options-9");
const selected10 = document.querySelector(".options-10");

let score = 0;

selected1.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected1.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected1.dataset.answered)
            {
                score += 10;
                selected1.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected2.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected2.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected2.dataset.answered)
            {
                score += 10;
                selected2.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected3.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected3.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected3.dataset.answered)
            {
                score += 10;
                selected3.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected4.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected4.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected4.dataset.answered)
            {
                score += 10;
                selected4.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected5.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected5.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected5.dataset.answered)
            {
                score += 10;
                selected5.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected6.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected6.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected6.dataset.answered)
            {
                score += 10;
                selected6.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected7.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected7.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected7.dataset.answered)
            {
                score += 10;
                selected7.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected8.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected8.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected8.dataset.answered)
            {
                score += 10;
                selected8.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected9.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected9.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected9.dataset.answered)
            {
                score += 10;
                selected9.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
    }
);
selected10.addEventListener("click" , (data) =>
    {
        const target = data.target;
        target.classList.contains(("option-a") || 
        target.classList.contains("option-b") || 
        target.classList.contains("option-c") || 
        target.classList.contains("option-d"))
        {
            const option = selected10.children;
            for (let i = 0; i < option.length; i++)
            {
                const element = option[i];
                element.style.backgroundColor ="";
                element.style.color = "";
            }
        }

        if (target.classList.contains("option-a"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-b"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        else if (target.classList.contains("option-c"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
            if (!selected10.dataset.answered)
            {
                score += 10;
                selected10.dataset.answered = "true";
            }
        }
        else if (target.classList.contains("option-d"))
        {
            target.style.backgroundColor = "white";
            target.style.color = "black";
        }
        console.log(score);
    }
);

submit.addEventListener("click" , () =>
{
    if (Score)
    {
        Score.textContent = `${score}`;
        scrollTo(0,340);
    }
});