export function getApiConnection() {

    let apiKey = '3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE';

    /*let requestOptions = {
        method: 'GET',
        withCredentials: true,
        mode: 'no-cors',
        headers: {
            "Cookie": "PrestaShop-9e5f2b711488cc1814878857d8049247=def50200ad17e1919ecc34879302b0642d1d5394fd78df6278b4168a7568e93d483ee634e5caf533928f8b84ead852084583c88fc06aa9eb3af644bd89ef533cb45cb5d950e55b0416fbd63b3509cecb0754b6bb2f1b7a8c03878f76ce450b36c876b3ede02f7ab6a94329cbb677b47ec5cdc4d34ef809c5bfdb1228bbbd59c082dd05615a740e631c3ca96534e2bbdf6b3670610a0df99deb399280048a4871c3de99bc79a0a4b7c2fee200ffe0fdfe92f645ff564234bfb06161c02c2074e3592a07c5341e140ec57868a2fd1e6de2c3daf2c08a99f0a67e",
            "Output-Format": "JSON"
        },
        redirect: 'follow'
    };*/

    fetch(`https://jouetenbois.mathieu-boucher.fr/api/?ws_key=${apiKey}&output_format=JSON`)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}