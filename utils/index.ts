
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'abfeb58b70msh8f7e5eabec098a0p124315jsn57b3c88b3514',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        {
            headers: headers
        });

    return await response.json();
}