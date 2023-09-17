const Reminders = (inf) => {
    const view = (ele)=>{
        return <li>
        <p>{ele.name}</p>
        <p>{ele.old}</p>
        <button onClick={()=>{
            inf.delet(ele.id)
        }} >Remove</button>
        </li>
    }
    return ( 
        <div>
            <ul>
                {inf.data.map(view)}
            </ul>
        </div>
    );
}
export default Reminders;