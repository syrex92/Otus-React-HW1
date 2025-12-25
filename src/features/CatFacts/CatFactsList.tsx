function CatFactsList(props: { facts: string[] }) {
    const { facts } = props
    return (
        <div>
            {facts.map((f, index) => (
                <div key={index}>{f}</div>
            ))}
        </div>
    )
}
export default CatFactsList