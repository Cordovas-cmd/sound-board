const sounds = ['applause','boo','gasp','tada','victory','wrong']

// for loop to create a button for every sound in the array.

sounds.forEach(sound => {
    // create the buttons and add a class
    const btn = document.createElement('button')
    btn.classList.add('btn')

// set the text inside the button to the name of the sound
    btn.innerText = sound
// appent the button to the container.
    document.getElementById('buttons').appendChild(btn)
}