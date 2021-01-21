export function getResource(resource, options = '') {

    let apiKey = '3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE';

    if (typeof resource === 'string') {
        var resourceList = fetch(`https://jouetenbois.mathieu-boucher.fr/api/${resource}/?ws_key=${apiKey}&output_format=JSON&${options}`)
            .then(response => response.json())
            .catch(error => console.log('Error : ', error));
    } else {
        console.log("La ressource doit être de type string.");
    }

    return resourceList;
}