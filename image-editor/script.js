class img_edit {
    constructor(){
            this.brightness ='' 
            this.contrast =''
            this.grayscale =''
            this.invert =''
            this.opacity =''
            this.saturate =''
            this.drop_shadow=''
            this.editValue = ''
        }




      AdjustDisplay(choice){
         let adjust = document.querySelector('.adjust')
         adjust.innerHTML = `
           -100% <input type="range" min='0' max='10' step='0.1' class='ranger'> +100%
         `

         let ranger = document.querySelector('.ranger')
         ranger.addEventListener('input', (e) =>{
            let property = choice.querySelector('.choice').textContent
            let choiceValue = e.target.value
            
            if(property == 'brightness'){
                this.brightness = property + '(' + choiceValue + ')'
            }else if(property == 'contrast'){
                this.contrast = property + '(' + choiceValue + ')'
            }
            else if(property == 'grayscale'){
                this.grayscale = property + '(' + choiceValue + ')'
            }
            else if(property == 'invert'){
                this.invert = property + '(' + choiceValue + ')'
            }
            else if(property == 'opacity'){
                this.opacity = property + '(' + choiceValue + ')'
            }
            else if(property == 'saturate'){
                this.saturate = property + '(' + choiceValue + ')'
            }
            else if(property == 'drop-shadow'){
                this.drop_shadow = property + '(' + choiceValue + ')'
            }
          

            this.edit()
          })
          
      }

       edit(){
        let edited = document.querySelector('#edited-image')

        edited.style.filter = `${this.brightness} ${this.contrast} ${this.grayscale} ${this.invert}
        ${this.opacity} ${this.saturate} ${this.drop_shadow}`
       
       
       }
        save(){

        }

} 

let input = document.getElementById('image-input')
let image = document.getElementById('edited-image')
let add = document.querySelector('.inn')
let choosebtn = document.querySelector('.choose-img')
let savebtn = document.querySelector('.save')


choosebtn.addEventListener('click', () =>{
    input.click()
})

input.addEventListener('change', () => {
        let reader = new FileReader();

        reader.onload = function (e) {
            image.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
});

let choices = document.querySelectorAll('.choice-box')
let choiceProperty


choices.forEach((choice) =>{
    choice.addEventListener('click', () =>{
       let edit = new img_edit()
       edit.AdjustDisplay(choice)
    })
})

// Assuming you have an "Edit" button in your HTML


savebtn.addEventListener('click', () => {
    // Create a canvas element to draw the edited image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const editedImage = document.getElementById('edited-image');
    
    // Set canvas dimensions to match the image
    canvas.width = editedImage.width;
    canvas.height = editedImage.height;
    
    // Draw the edited image on the canvas
    ctx.drawImage(editedImage, 0, 0);
    
    // Convert the canvas to a data URL (PNG by default)
    const dataURL = canvas.toDataURL('image/png'); // You can specify 'image/jpeg' for JPEG format
    
    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'edited-image.png'; // You can specify a different filename
    
    // Trigger a click event to initiate the download
    downloadLink.click();
});
