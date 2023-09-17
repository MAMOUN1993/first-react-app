import { useRef } from "react"

const SignIn = () => {
    const pageWb = useRef()
    const pageCa = useRef()
    const pageHf = useRef()
    const pageSi = useRef()
    const bgPink = useRef()
    const goRight = ()=>{
        pageCa.current.className="page-ca  ca-right";
        pageWb.current.className="page-wb  wb-right";
        pageHf.current.className="page-hf  hf-right";
        pageSi.current.className="page-si  si-right";
        bgPink.current.className="bg-pink  pink-right";
        
    }
    const goLeft = ()=>{
        pageCa.current.className="page-ca  ca-left";
        pageWb.current.className="page-wb  wb-left";
        pageHf.current.className="page-hf  hf-left";
        pageSi.current.className="page-si  si-left";
        bgPink.current.className="bg-pink  pink-left";
        
    }
    return ( 
        <div className="container">
            <div className="home_log">
                <div className="page-wb  wb-left" ref={pageWb}>
                    <h2>welcome back!</h2>
                    <p>To keep connected with us please login with your personal info</p>
                    <button onClick={()=>{
                        goRight();
                    }}>Sign In</button>
                </div>
                <div className="page-ca  ca-left" ref={pageCa}>
                    <h2>creat account</h2>
                    <div>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <p>Or use your email for registration</p>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Password"></input>
                    <button>sign up</button>
                </div>
                <div className="page-hf  hf-left" ref={pageHf}>
                    <h2>
                        hello,friends!
                    </h2>
                    <p>inter your personal details and start journey with us</p>
                    <button onClick={()=>{
                        goLeft();
                    }}>sing up</button>
                </div>
                <div className="page-si  si-left" ref={pageSi}>
                    <h2>sign in</h2>
                    <div>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <p>or use your account</p>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="password"></input>
                    <p>froget your password ?</p>
                    <button >sign in</button>
                </div>
                <div className="bg-pink pink-left" ref={bgPink}></div>
            </div>
        </div>
     );
}
 
export default SignIn;