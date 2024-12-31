const Score = document.querySelector("span");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");

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

let repeation = [false,false,false,false,false,false,false,false,false,false];

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
            if(!repeation[0])
                {
                    score += 10;
                    repeation[0] = true;
                };
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
            if(!repeation[1])
                {
                    score += 10;
                    repeation[1] = true;
                };
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
            if(!repeation[2])
                {
                    score += 10;
                    repeation[2] = true;
                };
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
            if(!repeation[3])
                {
                    score += 10;
                    repeation[3] = true;
                };
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
            if(!repeation[4])
                {
                    score += 10;
                    repeation[4] = true;
                };
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
            if(!repeation[5])
                {
                    score += 10;
                    repeation[5] = true;
                };
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
            if(!repeation[6])
                {
                    score += 10;
                    repeation[6] = true;
                };
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
            if(!repeation[7])
                {
                    score += 10;
                    repeation[7] = true;
                };
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
            if(!repeation[8])
                {
                    score += 10;
                    repeation[8] = true;
                };
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
            if(!repeation[9])
            {
                score += 10;
                repeation[9] = true;
            };
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
        result.style.display = "block";
        scrollTo(0,340);
    }
});