console.log('extensionssssssssssssssssssssssssssssssssss')


//adding center all button: ###########################################################################################################################
const valueAttributeOptions = {
    smallCase: {
        vertical: 'Center vertically',
        horizontal: 'Center horizontally'
    },
    capitalCase: {
        vertical: 'Center Vertically',
        horizontal: 'Center Horizontally'
    }
}

const runSmallCase   = 0;
const runCapitalCase = 1;

function createCenterAllButtons(optionSelected) {
    console.log('createCenterAllButtons is called $$$$$$$$$$$$$$$$$$$')
    let attributeOfHorButton;
    let attributeOfVerButton;

    if(optionSelected == runSmallCase) {
        attributeOfHorButton = valueAttributeOptions.smallCase.horizontal
        attributeOfVerButton = valueAttributeOptions.smallCase.vertical
    }
    else if(optionSelected == runCapitalCase) {
        attributeOfHorButton = valueAttributeOptions.capitalCase.horizontal
        attributeOfVerButton = valueAttributeOptions.capitalCase.vertical
    }

    let centerHorAllButtons = document.querySelectorAll(`[value="${attributeOfHorButton}"]`);
    if(centerHorAllButtons.length <= 0) { return }

    centerHorAllButtons.forEach(centerHorButton => {
        let parentContainer = centerHorButton.parentElement;
        let centerVerButton = parentContainer.querySelector(`[value="${attributeOfVerButton}"]`)

        let centerAllButton = document.createElement('div');
        centerAllButton.innerText = 'Center All'
        centerAllButton.style.backgroundColor = '#ff6666';
        centerAllButton.style.color = 'white';
        centerAllButton.style.marginButtom = '20px';
        centerAllButton.style.padding = '10px';
        centerAllButton.style.fontSize = '40px';
        centerAllButton.style.textAlign = 'center';
        centerAllButton.style.borderRadius = '10px';
        centerAllButton.style.cursor = 'pointer';

        let marginTopValue;
        if(optionSelected == runSmallCase) { marginTopValue = '20px'}
        if(optionSelected == runCapitalCase) { marginTopValue = '100px'}
        centerAllButton.style.marginTop = marginTopValue;

        parentContainer.appendChild(centerAllButton);

        centerAllButton.addEventListener('click' , () => {
            centerHorButton.click();
            centerVerButton.click();
        });

    })
}

createCenterAllButtons(runSmallCase);
createCenterAllButtons(runCapitalCase);





// Tags counter: ###########################################################################################################################

let tagsTextArea = document.getElementById('work_tag_field_en');
if(tagsTextArea) {
    const tagsTextArea_parent = tagsTextArea.parentElement;

    let count = getNumberOfTags(tagsTextArea.value);
    let tagsCounter = document.createElement('div');
    tagsCounter.innerText = 'Total Number of Tags : ' + count;
    tagsCounter.style.backgroundColor = '#ff6666';
    tagsCounter.style.color = 'white';
    tagsCounter.style.margin = '20px';
    tagsCounter.style.padding = '10px';
    tagsCounter.style.fontSize = '20px';
    tagsCounter.style.width = '55%';
    tagsCounter.style.textAlign = 'center';
    tagsCounter.style.borderRadius = '11px';
    tagsTextArea_parent.appendChild(tagsCounter);

    tagsTextArea.addEventListener('change', (event) => {
        let tags = event.target.value;
        let numOfTags = getNumberOfTags(tags);
        tagsCounter.innerText = 'Total Number of Tags : ' + numOfTags;
    });


    function getNumberOfTags(tagsString) {
        if(tagsString.length === 0) { return 0 }
        let arrayOfTags = tagsString.split(',');
        let finalNumberOfTags = arrayOfTags.length;
        if(tagsString.trim()[tagsString.length-1] === ',') { finalNumberOfTags =  arrayOfTags.length - 1 }
        return finalNumberOfTags;
    }
}


