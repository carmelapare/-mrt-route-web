/**
 * Async function to get shortest path
 */
 export const getShortestPath = (source, destination, schedule) =>  {
    const result = fetch(`http://localhost:3002/api/stations/getShortestPath/${source}/${destination}/${schedule}`)
    console.log(result)
    return result
    ?.then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error("Error fetching data...");
        }
    })
    .catch((error) => {
        throw new Error(error);
    })
}
    