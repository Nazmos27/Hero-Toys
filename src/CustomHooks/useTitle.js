import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Hero Toys`
    },[title])

}
export default useTitle;