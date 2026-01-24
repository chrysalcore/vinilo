import { useEffect } from "react"
import useStatus from "./useStatus"
import load from "../helpers/load"

function useConnect(baseUrl) {
    const [{data, loading, error}, dispatch] = useStatus()

    useEffect(() => {
        let ignore = false

        setTimeout(() => {
            load(baseUrl)
            .then(action => {
                if(!ignore) {
                    dispatch(action)
                }
            })
        }, 3000)

        return () => {
            ignore = true
        }
    }, [baseUrl])

    return [
        data,
        loading,
        error
    ]
}

export default useConnect