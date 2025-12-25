import { useState } from 'react'
import CatFactsList from './CatFactsList'
import Error from '../../pages/Error'
import { Button } from 'react-bootstrap'

type CatFact = {
    fact: string
    length: number
}

function CatFactsComponent() {
    const [facts, setFacts] = useState<string[]>([])
    const [error, setError] = useState<string>("")

    async function loadFacts() {
        setFacts([])

        try {
            const res = await fetch('https://catfact.ninja/facts')
            if (!res.ok) {
                setError(`HTTP ${res.status} ${res.statusText}`)
                return
            }
            const json = await res.json() as { data?: CatFact[] }
            const data = json.data ?? []
            setFacts(data.map(d => d.fact))
            setError("")
        } catch (e: any) {
            setError(e?.message ?? 'Неизвестная ошибка')
        }
    }

    return (
        <div>
            <Button onClick={loadFacts}>
                Показать факты о кошках
            </Button>
            {error.length > 0 ? <Error errorMessage={error} /> : null}
            {error.length == 0 && facts.length > 0 ? <CatFactsList facts={facts} /> : null}
        </div>
    )
}
export default CatFactsComponent