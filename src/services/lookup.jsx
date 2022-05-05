/**
 * Async function to get station lookup
 */
export const getStationsLookup = () =>  {
const result = fetch('http://localhost:3002/api/stations')
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
