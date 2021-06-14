import { useEffect } from "react";



export const GetRequest = () =>{
    useEffect( () =>{

        async function fetchData(){
            await axios.get(getUrl)
            .then(response => {
                console.log(JSON.stringify(response));
                setRecord(response.data.data);
                
            })
            .catch(error => {
                console.log(error);
            });

            console.log("Record!!!!");
            console.log(record);
        }
        fetchData();
    });
}