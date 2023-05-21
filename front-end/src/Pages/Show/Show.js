import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function Show() {
    const [flower, setFlower] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`${API}/flowers/${id}`)
            .then(response => setFlower(response.data))
            .catch(e => console.error("warn", e ))
    }, [id])

    return (
        <div>
            <p>{flower.id}</p>
            <p>{flower.name}</p>
            <p>{flower.cost}</p>
            <p>{flower.color}</p>
            <p>{flower.is_favorite}</p>
        </div>
    )
}