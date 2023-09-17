import { useState } from "react";
const Calc = () => {
    let delArry = [];
    const [ opOne , setopone] = useState("")
    const [lastop , setop] = useState(0);
    const [ numMemoTow , setnumTow]= useState("");
    const [ view , setview] = useState("");
    const [resu , setres] = useState("");
    const handlnum = (num)=>{
        if(lastop >=1){
            setres(`${num}`);
        }else{
            if(num === 0){
                if(resu === "0"){
                    setres('0');
                }else{
                    setres(`${resu}${num}`)
                }
            }else{
                if(resu === "0"){
                    setres(`${num}`)
                }else{
                    setres(`${resu}${num}`)
                }
            }
        }
        setop(0);
    }
    const handopar = (op)=>{
        if(resu === "" && view === ""){
        }else{
            if(lastop>=1){
            }else{
                setop(1);
                setview(`${view}${resu}${op}`)
                prossing(op)
                }
            }
        }
    const allclear =()=>{
        setview("");
        setres("")
        setop(0)
        setnumTow("")
        setopone("")
    }
    const clear = ()=>{
        setres("")
    }
    const delHandl = ()=>{
        for(let i = 0;i < resu.length-1 ; i++){
            delArry[i]=resu[i];
        }
        setres(delArry.join(''))
    }
    const prossing = (op)=>{
                if(numMemoTow === ""){
                    setres(`${resu}`)
                    setnumTow(`${resu}`);
                    setopone(op);
                    }else{
                        if(opOne==="+"){
                            setres(`${+numMemoTow + +resu}`)
                            setnumTow(`${+numMemoTow + +resu}`);
                        }
                        if(opOne==="-"){
                            setres(`${+numMemoTow - +resu}`)
                            setnumTow(`${+numMemoTow - +resu}`);
                        }
                        if(opOne==="/"){
                            setres(`${+numMemoTow / +resu}`)
                            setnumTow(`${+numMemoTow / +resu}`);
                        }
                        if(opOne==="*"){
                            setres(`${numMemoTow * +resu}`)
                            setnumTow(`${+numMemoTow * +resu}`);
                        }
                        setopone(op);
                    }
    }
    return ( 
        <div className='container'>
        <div className="home">
        <div className='screen'>
            <div className='holder'>{view}</div>
            <div className='result'>{resu}</div>
            </div>
        <div className='form'>
            <button onClick={()=>{
                setres(`${+resu / 100}`)
            }}><i className="fa-solid fa-percent"></i></button>
            <button onClick={()=>{
                setres(`${((+resu) ** 0.5).toFixed(3)}`)
            }}><i className="fa-solid fa-square-root-variable"></i></button>
            <button onClick={()=>{
                setres(`${+resu * +resu}`)
            }}>x*2</button>
            <button onClick={()=>{
                setres(`${(1 / +resu).toFixed(3)}`)
            }}>1/x</button>
            <button onClick={()=>{
                clear()
            }}>CE</button>
            <button onClick={()=>{
                allclear()
            }}>C</button>
            <button onClick={()=>{
                delHandl()
            }}><i className="fa-solid fa-delete-left"></i></button>
            <button onClick={()=>{
                handopar("/");
            }}><i className="fa-solid fa-divide"></i></button>
            <button onClick={()=>{
                handlnum(7);
            }}>7</button>
            <button onClick={()=>{
                handlnum(8);
            }}>8</button>
            <button onClick={()=>{
                handlnum(9);
            }}>9</button>
            <button onClick={()=>{
                handopar("*");
            }}><i className="fa-solid fa-x"></i></button>
            <button onClick={()=>{
                handlnum(4);
            }}>4</button>
            <button onClick={()=>{
                handlnum(5)
            }}>5</button>
            <button onClick={()=>{
                handlnum(6)
            }}>6</button>
            <button onClick={()=>{
                handopar("-");
            }}><i className="fa-solid fa-minus"></i></button>
            <button onClick={()=>{
                handlnum(1)
            }}>1</button>
            <button onClick={()=>{
                handlnum(2)
            }}>2</button>
            <button onClick={()=>{
                handlnum(3)
            }}>3</button>
            <button onClick={()=>{
                handopar("+");
            }}><i class="fa-solid fa-plus"></i></button>
            <button onClick={()=>{
                setres(`${-resu}`)
            }}><i className="fa-solid fa-plus-minus"></i></button>
            <button onClick={()=>{
                handlnum(0)
            }}>0</button>
            <button onClick={()=>{
                handlnum(".")
            }}>,</button>
            <button onClick={()=>{
                setview(``)
                prossing(opOne)
            }}><i className="fa-solid fa-equals"></i></button>
        </div>
        </div>
        </div>
    );
}
export default Calc;