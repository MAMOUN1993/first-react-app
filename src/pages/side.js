import { Outlet , Link } from "react-router-dom";
import { useState , useRef } from "react";
const Side = () => {
    let arrt = ["act","nact","nact","nact","nact"];
    const [arryAct , setact] =useState(arrt)
    const handilClick = (num)=>{
        for(let i = 0 ; i < arrt.length ; i++){
            if(i===num){
                arrt[i]="act";
            }else{
                arrt[i]="nact";
            };
        };
        setact(arrt);
        ele0.current.className=arryAct[0];
        ele1.current.className=arryAct[1];
        ele2.current.className=arryAct[2];
        ele3.current.className=arryAct[3];
        ele4.current.className=arryAct[4];
    };
    const ele0 = useRef();
    const ele1 = useRef();
    const ele2 = useRef();
    const ele3 = useRef();
    const ele4 = useRef();
    return ( 
        <>
        <div className="sidebar">
            <h3 className="logo">
                elzero
            </h3>
            <div className="sidelist">
                <li className={"act"} ref={ele0}
                onClick={
                    ()=>{
                        handilClick(0);
                    }
                }
                ><Link  to='/'>
                <i className="fa-solid fa-bars $"></i>
                <p>Login&out</p></Link></li>
                <li className={"nact"} ref={ele1}
                onClick={
                    ()=>{
                        handilClick(1);
                    }
                }
                ><Link  to='/calc'>
                <i className="fa-solid fa-gear"></i>
                <p>Calculator</p></Link></li>
                <li className={"nact"} ref={ele2}
                onClick={
                    ()=>{
                        handilClick(2);
                    }
                }
                ><Link  to='/reminder'>
                <i className="fa-solid fa-user"></i>
                <p>Reminder</p></Link></li>
                <li className={"nact"} ref={ele3}
                onClick={
                    ()=>{
                        handilClick(3);
                    }
                }
                ><Link to='/line'>
                <i className="fa-solid fa-share-nodes"></i>
                <p>Time line</p></Link></li>
                <li className={"nact"} ref={ele4} 
                onClick={
                    ()=>{
                        handilClick(4);
                    }
                } 
                ><Link to='/posts'>
                <i className="fa-sharp fa-solid fa-user"></i>
                <p>posts</p></Link></li>
            </div>
            </div>
        <Outlet/>
        </>
    );
}

export default Side;