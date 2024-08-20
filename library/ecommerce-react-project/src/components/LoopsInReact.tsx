export let LoopsInReact = ()=>{
    let arr = [1,2,3,4,5,6,6]
    return <>
    {arr.map((a)=>{
        return <h1>hello i am loop -- {a}</h1>
    })}
    </>
}