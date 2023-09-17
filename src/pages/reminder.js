import { useState , useRef } from "react";
import Reminders from "./rems";
const Reminder = () => {
    const [remn , setremn] = useState([]);
    const Name = useRef();
    const date = useRef();
    const [c , setc] = useState(0)
    const deletrem = (s)=>{
        const anyarr = remn.filter((ele)=>{
            return ele.id !== s ;
        })
        setremn(anyarr);
        
    };
    return ( 
        <div className="container">
            <div className="rem-home">
                <div className="head">
                <p><span>{remn.length}</span>Reminders</p></div>
                <div className="landing">
                    <Reminders data={remn} delet={deletrem}/>
                </div>
                <div className="butt-ent">
                    <div>
                    <input type="text" placeholder="Name" ref={Name}></input>
                    <input type="text" placeholder="MM/DD/YYYY" ref={date}></input>
                    </div>
                    <button onClick={()=>{
                        if(Name.current.value !== ""){
                            setc(c=>c= c+1);
                            setremn(s=>[...s , {name: Name.current.value , old : date.current.value , id : c}]);
                            setTimeout(() => {
                                Name.current.value="";
                                date.current.value="";
                            }, 0);
                        }
                    }}>
                        add Reminder
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Reminder;