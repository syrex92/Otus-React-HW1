function CatFactsList(props: { facts: string[] }) {
    const { facts } = props
    return (
        <div>
            {facts.map((f) => (
                <div>{f}</div>
            ))}
        </div>
    )
}
export default CatFactsList