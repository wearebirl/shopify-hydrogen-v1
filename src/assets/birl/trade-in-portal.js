Window.tradeInPortal = {
    currentStep: 0,
    steps: ["What are you trading in?", "Item condition", "Your credit ", "Contact details", "Review & Accept"],
    titles: [`Item category`, `Item condition`, `Trade-in value`, `Contact details`, `Review & Accept`],
    data : {
        currentCategory: null,
        currentCondition: null,
        currentValue : null,
        currentDetails: null
    },
    containers: [
        document.querySelector(`.TradeIn-Portal-Container`),
        document.querySelector(`.item-condition-container`),
        document.querySelector(`.trade-in-value-container`),
        document.querySelector(`.contact-entry-container`),
        document.querySelector(`.contact-details-container`),
        document.querySelector(`.trade-confirmation-container`)
    ]
}

localStorage.setItem("widget_activated", "true");


const populateCategories = (sectionID) => {
    sectionID = `shopify-section-${sectionID}`

    let section = document.getElementById(sectionID)
    let categories = []

    // add 30 random categories to the array with trade in values between 10 and 50
    for (let i = 0; i < 12; i++) {
        categories.push({
            img: "https://placehold.co/141x128",
            name: `Category #${i + 1}`,
            tradeInValue: Math.floor(Math.random() * 40) + 10,
            index: i
        })
    }

    Window.tradeInPortal.categories = categories

    let categoryHTML = ``
    categories.forEach(category => {
        categoryHTML += `
        <div class="category" data-index="${category.index}">
            <button onClick="triggerSelect(this)">
                <img  loading="eager" src="${category.img}" alt="${category.name}">
                <p class="trade-price">GET £${category.tradeInValue}</p>
            </button>
            <div class="category-info">
                <h3>${category.name}</h3>
            </div>
        </div>`
    })


    section.querySelector(`.categories`).innerHTML = categoryHTML

}

const triggerSelect = (el) => {

    // remove border from all buttons inside all categories
    let buttons = document.querySelectorAll(`.category button`)
    buttons.forEach(button => {
        button.style.border = "none"
    })

    el.style.border = "2px solid #000"

    Window.tradeInPortal.data.currentCategory = Number(el.parentElement.dataset.index)

    document.querySelector(`.confirm-container`).style.display = "flex"

}

const renderNextStep = () => {
    
    // hide current step
    Window.tradeInPortal.containers[Window.tradeInPortal.currentStep].style.display = "none"

    Window.tradeInPortal.currentStep++;

    // show next step
    Window.tradeInPortal.containers[Window.tradeInPortal.currentStep].style.display = ""

    populateDataIfPossible();
    completeStep();
}

const renderPreviousStep = () => {

    // hide current step
    Window.tradeInPortal.containers[Window.tradeInPortal.currentStep].style.display = "none"

    if(Window.tradeInPortal.currentStep > 0){
        Window.tradeInPortal.currentStep--;
    }

    // show next step
    Window.tradeInPortal.containers[Window.tradeInPortal.currentStep].style.display = ""

    populateDataIfPossible();
    completeStep();

}

const back = () => {
    
    document.querySelector(`[data-block-handle="TradeIn-Portal"]`).querySelector(`.Trade-In-Back-Container`).addEventListener("click", () => {
        console.log(`Clicking Back`)
        renderPreviousStep();
    });

}

const confirmTradeIn = () => {
    let confirmBtn = document.querySelector(`.confirm-trade-in`);
    confirmBtn.addEventListener("click", () => {
        renderNextStep();
    });
}

const confirmCategory = () => {
 
    document.querySelector(`.btn-confirm`).addEventListener("click", () => {
        if(Window.tradeInPortal.data.currentCategory !== null) {
            renderNextStep();
        }
    });
}

const tradeInValue = () => {

    let tradeInBtns = document.querySelectorAll(`.trade-in-selection`);
    
    for(let i = 0; i < tradeInBtns.length; i++) {
        let btn = tradeInBtns[i];
        btn.addEventListener("click", () => {
            unselectAllTradeInValues();

            btn.style.backgroundColor = "#96D6100F";
            btn.style.border = "1px solid #2EA141";
            let input = btn.querySelector(`input`);
            input.checked = true; // Check the input for the clicked button
            Window.tradeInPortal.data.currentValue = input.value;
            Window.tradeInPortal.containers[Window.tradeInPortal.currentStep].querySelector(`.item-credit-amount`).innerText = `£${input.value} Dawn Store Credit`;
            if(document.querySelector(`.accept-credit`).disabled) {
                document.querySelector(`.accept-credit`).disabled = false;
            }
            console.log(i);
            document.querySelectorAll(`.standard-card`)[i].style.transform = "scale(1.1)";

        });
    }

    document.querySelector(`.accept-credit`).addEventListener("click", () => {
        renderNextStep();
    });

}

const conditionConfirm = () => {
    let conditionBtns = document.querySelectorAll(`.condition-type`);
    let confirmBtn = document.querySelector(`.confirm-condition`);

    conditionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            unselectAllConditions();
            btn.style.backgroundColor = "#96D6100F";
            btn.style.border = "1px solid #2EA141";
            let input = btn.querySelector(`input`);
            input.checked = true; // Check the input for the clicked button
            Window.tradeInPortal.data.currentCondition = input.value;
            Window.tradeInPortal.containers[Window.tradeInPortal.currentStep].querySelector(`.item-condition`).innerText = input.value;
            if(confirmBtn.disabled) {
                confirmBtn.disabled = false;
            }
        });
    });

   
    confirmBtn.addEventListener("click", () => {
        renderNextStep();
    });
}

const contactDetails = () => {

    let inputs = document.querySelector(`.contact-entry-left-container`).querySelectorAll(`input`);
    for(let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        input.addEventListener("change", () => {
            let filled = checkIfAllInputsAreFilled(`.contact-entry-left-container`);
            let checkboxes = document.querySelectorAll(`.checkboxes input[type="checkbox"]`)

            if(filled && checkboxes[0].checked == true && checkboxes[1].checked) {

                let btn = document.querySelector(`.confirm-details`);
                btn.removeAttribute("disabled");

            }else{
                let btn = document.querySelector(`.confirm-details`);
                btn.setAttribute("disabled", true);
            }
        });

        input.addEventListener("input", event => {
            let filled = checkIfAllInputsAreFilled(`.contact-entry-left-container`);
            let checkboxes = document.querySelectorAll(`.checkboxes input[type="checkbox"]`)

            if(filled && checkboxes[0].checked == true && checkboxes[1].checked) {
                let btn = document.querySelector(`.confirm-details`);
                btn.removeAttribute("disabled");
            }else{
                let btn = document.querySelector(`.confirm-details`);
                btn.setAttribute("disabled", true);
            }
        })
    }

    document.querySelector(`.confirm-details`).addEventListener("click", () => {
        
        let details = {
            fullName: document.querySelector(`#contact-entry-name`).value,
            phoneNumber: document.querySelector(`#contact-entry-phone`).value,
            email: document.querySelector(`#contact-entry-email`).value,
            address: document.querySelector(`#contact-entry-address`).value,
            city: document.querySelector(`#contact-entry-city`).value,
            postcode: document.querySelector(`#contact-entry-postcode`).value,
            county: document.querySelector(`#contact-entry-county`).value
        }

        Window.tradeInPortal.data.currentDetails = details;

        renderNextStep();

        document.querySelector(`.contact-details-information`).innerHTML = `
            <p>${details.fullName}</p>
            <p>${details.email}</p>
            <p>+44 (0) ${details.phoneNumber}</p>
            <p>${details.address}</p>
            <p>${details.city}, ${details.postcode}</p>
        `
    });
}

const checkIfAllInputsAreFilled = (container) => {
    let fullyFilled = true;
    let inputs = document.querySelector(container).querySelectorAll(`input`);

    for(let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if(input.value == "") {
            fullyFilled = false;
            break;
        }else{
            if(input.hasAttribute("pattern")) {
                let pattern = input.getAttribute("pattern");
                let regex = new RegExp(pattern);
                if(!regex.test(input.value)) {
                    fullyFilled = false;
                    break;
                }
            }
        }
    }

    return fullyFilled;
}



const unselectAllConditions = () => {

    let conditionBtns = document.querySelectorAll(`.condition-type`);

    // get all inputs inside condition buttons and check if they are checked if so uncheck them
    conditionBtns.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.border = "";
        let input = btn.querySelector(`input`);
        if(input.checked) {
            input.checked = false;
        }
    });



}

const unselectAllTradeInValues = () => {

    let tradeInBtns = document.querySelectorAll(`.trade-in-selection`);

    // get all inputs inside trade in buttons and check if they are checked if so uncheck them
    tradeInBtns.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.border = "";
        let input = btn.querySelector(`input`);
        if(input.checked) {
            input.checked = false;
        }
    });

    document.querySelectorAll(`.standard-card`).forEach(card => {
        card.style.transform = "";
    });


}

const populateDataIfPossible = () => {
    let currentContainer = Window.tradeInPortal.containers[Window.tradeInPortal.currentStep]

    if(currentContainer.querySelector(`.item-condition`) && Window.tradeInPortal.data.currentCondition) {
        currentContainer.querySelector(`.item-condition`).innerText = Window.tradeInPortal.data.currentCondition;
    }

    if(currentContainer.querySelector(`.item-credit-amount`) && Window.tradeInPortal.data.currentValue) {
        currentContainer.querySelector(`.item-credit-amount`).innerText = `£${Window.tradeInPortal.data.currentValue} Dawn Store Credit`;
    }

    if(currentContainer.querySelector(`.item-category`) && Window.tradeInPortal.data.currentCategory) {
        currentContainer.querySelector(`.item-category`).innerText = Window.tradeInPortal.categories[Window.tradeInPortal.data.currentCategory].name;
    }

}

const completeStep = () => {
    let currentStep = Window.tradeInPortal.currentStep;
    let timelines = document.querySelectorAll(`.timeline-status`);

    for(let i = 0; i < currentStep; i++) {
        let timeline = timelines[i].querySelector(`.indicator`);
        timeline.classList.remove("inactive")
        timeline.classList.remove("indicator-disabled")
    }

    // add inactive and indicator-disabled class to all indicators after current step

    for(let i = currentStep; i < timelines.length; i++) {
        let timeline = timelines[i].querySelector(`.indicator`);
        timeline.classList.add("inactive")
        timeline.classList.add("indicator-disabled")
    }

    timelines[currentStep].querySelector(`.indicator`).classList.remove("indicator-disabled")
    document.querySelector(`.timeline-title`).innerText = Window.tradeInPortal.steps[currentStep];
    let progress = document.querySelector('.birl-timeline-container').querySelectorAll('.indicator')[currentStep].offsetLeft - (window.innerWidth < 900 ? 30 : 70)
    document.querySelector(`.solid-line`).style.width = `${progress}px`;
    let title = Window.tradeInPortal.titles[currentStep - 1] == undefined ? "" : `to ${Window.tradeInPortal.titles[currentStep - 1]}`;
    document.querySelector(`[data-block-handle="TradeIn-Portal"]`).querySelector(`.Trade-In-Back-Container`).querySelector(`p`).innerHTML = `Back <span>${title}</span>`
}


// ((375px / 5) + 15px) * 1 == Mobile 
// ((575px / 5) + 30px) * 1 == Desktop

document.addEventListener('DOMContentLoaded', () => {
    back();
    confirmCategory();
    conditionConfirm();
    tradeInValue();
    confirmTradeIn();
    contactDetails();
});

let resizeTimeout;

window.addEventListener('resize', () => {
    // Clear any existing timeout
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }

    // Start a new timeout
    resizeTimeout = setTimeout(() => {
        let currentStep = Window.tradeInPortal.currentStep;
        let progress = document.querySelector('.birl-timeline-container').querySelectorAll('.indicator')[currentStep].offsetLeft - (window.innerWidth < 900 ? 30 : 70);
        document.querySelector(`.solid-line`).style.width = `${progress}px`;
    }, 500);  // Wait 500ms after last resize event to run the code
});
