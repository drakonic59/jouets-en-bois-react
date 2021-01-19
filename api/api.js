export function getApiConnection() {
		
	const imageUrl = "http://jouetenbois.mathieu-boucher.fr/api/images/products/";
	const key = "ws_key=3MJFI6WYD6GWDGJ8QECM6TZAZ6V65VUE";
    let url = "http://jouetenbois.mathieu-boucher.fr/api/products/?" + key + "&output_format=JSON&display=[id,name,price,id_default_image]";
	let infos = "[";				

    let listOfProducts = fetch(url)
        .then( function(response) {
			if(response.ok) {
				console.log("ok");
			} else
				console.log("ko");
			return response.json();
		})
		.then( function(data) {
			data.products.forEach(function (product) {
				infos += "{ "
							+ "\"name\": \"" + product.name.shift().value + "\", "
							+ "\"price\": \"" + product.price + "\", "
							+ "\"image\": \"" + imageUrl + product.id + "/" + product.id_default_image + "?" + key + "\" "
						+ "},";		
			});
			infos = infos.substring(0, infos.length - 1) + "]";
			return infos;
		});
	
	console.log(infos);

	return JSON.parse(infos);
 
}

export default getApiConnection;