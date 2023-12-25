function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('userSentence').value;
    const formData = {
        txt: formText,
        lang: 'auto'
    };
    // formData.append('txt', formText)

    fetch('/test', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response)
            return response;
        })
        .then(data => {
            console.log('Response from server: ', data)
        })
        .catch(error => {
            console.error(error)
        })
}
export { handleSubmit };
