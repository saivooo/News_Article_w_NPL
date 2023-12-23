function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('userSentence').value;
    console.log("FOROJSOJIF "+formText)
    const formData = {
        txt: formText,
        lang: 'auto'
    };
    // formData.append('txt', formText)

    fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(data => {
            console.log('Response from server: ', data)
        })
        .catch(error => {
            console.error(error)
        })
}
export { handleSubmit };
