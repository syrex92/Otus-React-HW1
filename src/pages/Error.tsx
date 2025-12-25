function Error(props: {errorMessage: string}) {
    const { errorMessage } = props
    return (
        <div style={{ background: 'red'}}>
            Ошибка: {errorMessage}
        </div>
    )
}
export default Error