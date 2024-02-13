import { createClient } from "contentful"
import { useState } from "react";
import { useEffect } from "react";

const client = createClient({
    space: '1337j0sfqrpw',
    accessToken: 'ax9rGxWUU5018zl3xEACA48BC8Efk1HI4R5HPY6eSfs',
    environment: 'master'
});

export const useData = () => {
    const [isloading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchProjects = async () => {
        try {
            const Response = await client.getEntries({ content_type: 'projects' });
            setData(Response.items);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return { isloading, data }
}


