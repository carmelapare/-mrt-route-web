/**
 * Async function to get industries for selected master
 */
 export const getStationsLookup = () =>  {
  
  const [loading, setLoading] = useState(false);
  const [stations, setStations] = useState([]);

  const response = await callAPI('crm_get_master_industries', undefined, { requireAuthorization: false})
  
  useEffect(() => {
      const loadStations = async () => {
        setLoading(true);

        const response = await callAPI(
        "https://jsonplaceholder.typicode.com/posts/");

        if (response.status === 'SUCCESS') {
            const industries =  response.data.map((r) => ({
                industryId: r.id,
                industryName: r.name,
            }))
        }

        // After fetching data stored it in posts state.
        setPosts(response.data);

        // Closed the loading page
        setLoading(false);
      }

      // Call the function
      loadPost();
  }, [])
 }