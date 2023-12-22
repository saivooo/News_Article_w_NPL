function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('userSentence').textContent;
    const formData = new FormData();
    formData.append('txt', formText)

     fetch("https://api.meaningcloud.com/sentiment-2.1", {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify({ formData: formData})
     })
     .then(data => {
        console.log('Response from server: ', data)
     })
     .catch(error => {
        console.error(error)
     })
}
export { handleSubmit };
