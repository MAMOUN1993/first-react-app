import videobg from '../files/video/1.mp4';
import imgeone from '../files/image/GetoSuguru.jpg';
import imgTow  from '../files/image/gojo-jjk.jpg'
import imgThr  from '../files/image/etadori.jpg'
import imgfou  from '../files/image/migomy.jpg'
import imgfi  from '../files/image/nobara.jpg'
import imgsi  from '../files/image/jujutsu-kaisen.webp'
import { useRef } from "react";

const Line = () => {
    const animtion =()=>{
        
        if(eleOne.current.offsetTop <= homeLine.current.scrollTop + 600){
            eleOne1.current.attributes.anistart.value="true"
            eleOne2.current.attributes.anistart.value="true"
            eleOne3.current.attributes.anistart.value="true"
            eleOne4.current.attributes.anistart.value="true"
        }
        if(eleTow.current.offsetTop <= homeLine.current.scrollTop + 600){
            eleTow1.current.attributes.anistart.value="true"
            eleTow2.current.attributes.anistart.value="true"
            eleTow3.current.attributes.anistart.value="true"
            eleTow4.current.attributes.anistart.value="true"
        }
        if(elethre.current.offsetTop <= homeLine.current.scrollTop + 600){
            elethre1.current.attributes.anistart.value="true"
            elethre2.current.attributes.anistart.value="true"
            elethre3.current.attributes.anistart.value="true"
            elethre4.current.attributes.anistart.value="true"
        } 
        if(elefour.current.offsetTop <= homeLine.current.scrollTop + 600){
            elefour1.current.attributes.anistart.value="true"
            elefour2.current.attributes.anistart.value="true"
            elefour3.current.attributes.anistart.value="true"
            elefour4.current.attributes.anistart.value="true"
        }
        if(elefive.current.offsetTop <= homeLine.current.scrollTop + 600){
            elefive1.current.attributes.anistart.value="true"
            elefive2.current.attributes.anistart.value="true"
            elefive3.current.attributes.anistart.value="true"
            elefive4.current.attributes.anistart.value="true"
        }
        if(elesix.current.offsetTop <= homeLine.current.scrollTop + 800){
            elesix1.current.attributes.anistart.value="true"
            elesix2.current.attributes.anistart.value="true"
            elesix3.current.attributes.anistart.value="true"
            elesix4.current.attributes.anistart.value="true"
        }
    };
    const homeLine = useRef();
    const eleOne = useRef();
    const eleOne1 = useRef();
    const eleOne2 = useRef();
    const eleOne3 = useRef();
    const eleOne4 = useRef();
    const eleTow = useRef();
    const eleTow1 = useRef();
    const eleTow2 = useRef();
    const eleTow3 = useRef();
    const eleTow4 = useRef();
    const elethre = useRef();
    const elethre1 = useRef();
    const elethre2 = useRef();
    const elethre3 = useRef();
    const elethre4 = useRef();
    const elefour = useRef();
    const elefour1 = useRef();
    const elefour2 = useRef();
    const elefour3 = useRef();
    const elefour4 = useRef();
    const elefive = useRef();
    const elefive1 = useRef();
    const elefive2 = useRef();
    const elefive3 = useRef();
    const elefive4 = useRef();
    const elesix = useRef();
    const elesix1 = useRef();
    const elesix2 = useRef();
    const elesix3 = useRef();
    const elesix4 = useRef();

    
    return ( 
        <div className="home-line" ref={homeLine} onScroll={()=>{
            animtion()
        }}
        >
                <div className="landing">
                    <div className='sssss'>
                    <video className='video-bg' src={videobg} autoPlay muted loop width='100%' type='video/mp4'>
                    </video>
                    </div>
                    <div className='bg-video'></div>
                </div>
                <div className='icon'>
                    <i className="fa-solid fa-angles-down"></i>
                </div>
                <div className='time-zone'>
                    <div className='line'></div>
                    <div className="ani-box" ref={eleOne}>
                        <div className='sec' ></div>
                        <div className={'l-1'}  anistart='flase' ref={eleOne1}></div>
                        <div className='l-i1' anistart='flase' ref={eleOne2}></div>
                        <div className='p-1' anistart='flase' ref={eleOne3}>
                            <img className='jogo' src={imgTow} alt="Logo"/>
                        </div>
                        <p className='pa-1' anistart='flase' ref={eleOne4}> He was first introduced in Akutami's short series Tokyo Metropolitan Curse Technical School as the mentor of the cursed teenager Yuta Okkotsu at Tokyo Prefectural Jujutsu High School. This miniseries became the prequel Jujutsu Kaisen 0 of Jujutsu Kaisen. In Jujutsu Kaisen, Gojo takes the same role but mentors the student Yuji Itadori who suffers a similar Curse, helping him become stronger, while protecting other characters in the series.</p>
                    </div>
                    <div className='line'></div>
                    <div className='ani-box' ref={eleTow}>
                        <div className='sec' ></div>
                        <div className='li-2' anistart='flase' ref={eleTow1}></div>
                        <div className='li-i2' anistart='flase' ref={eleTow2}></div>
                        <div className='p-2' anistart='flase' ref={eleTow3}>
                            <img className='geto' src={imgeone} alt='Logo' />
                        </div>
                        <p className='pa-2' anistart='flase' ref={eleTow4}>Suguru Geto is a powerful sorcerer who was previously friends with the mentor Satoru Gojo, who seeks Curse of the undead Rika Orimoto chasing the protagonist Yuta Okkotsu. Geto also appears in the main series Jujutsu Kaisen series which, through flashbacks, further explores his friendship with Gojo and what caused his transformation into his enemy. </p>
                    </div>
                    <div className='line'></div>
                    <div className='ani-box'ref={elethre} >
                        <div className='sec' ></div>
                        <div className='l-1' anistart='flase' ref={elethre1}></div>
                        <div className='l-i1' anistart='flase'ref={elethre2}></div>
                        <div className='p-1' anistart='flase'ref={elethre3}>
                            <img className='jogo' src={imgThr} alt="Logo"/>
                        </div>
                        <p className='pa-1' anistart='flase' ref={elethre4}>  is a fictional character and the main protagonist of the manga series Jujutsu Kaisen created by Gege Akutami. Yuji is a first-year Jujutsu Sorcerer at Tokyo Jujutsu High who is thrown into the world of sorcery after he ate a Cursed Object: a finger belonging to Ryomen Sukuna , a powerful Cursed Spirit—a being manifested from Cursed Energy from the negative emotions flowing from humans. With his classmates, Yuji exorcises Curses while trying to honor his grandfather's legacy and save others unconditionally so that when he is executed after eating all twenty fingers, he will not be alone in his death.</p>
                    </div>
                    <div className='line'></div>
                    <div className='ani-box'ref={elefour}>
                        <div className='sec' ></div>
                        <div className='li-2' anistart='flase'ref={elefour1}></div>
                        <div className='li-i2' anistart='flase' ref={elefour2}></div>
                        <div className='p-2' anistart='flase'ref={elefour3}>
                            <img className='geto' src={imgfou} alt='Logo' />
                        </div>
                        <p className='pa-2' anistart='flase'ref={elefour4}>Megumi Fushiguro is a fictional character of the manga series Jujutsu Kaisen created by Gege Akutami. He is a first-year student at Tokyo Jujutsu High, an academy to become a Jujutsu Sorcerer and develop Cursed Techniques to fight against Cursed Spirits, beings manifested from Cursed Energy due to negative emotions flowing from humans. He is a descendant to the Zenin family,</p>
                    </div>
                    <div className='line'></div>
                    <div className='ani-box' ref={elefive}>
                        <div className='sec' ></div>
                        <div className='l-1' anistart='flase' ref={elefive1}></div>
                        <div className='l-i1' anistart='flase' ref={elefive2}></div>
                        <div className='p-1' anistart='flase' ref={elefive3}>
                            <img className='jogo' src={imgfi} alt="Logo"/>
                        </div>
                        <p className='pa-1' anistart='flase' ref={elefive4}> Nobara Kugisaki is a fictional character of the manga series Jujutsu Kaisen created by Gege Akutami. A first-year student at Tokyo Jujutsu High, an academy to hone Cursed Techniques to fight against Cursed Spirits arising from negative emotions from humans, she is under the tutelage of Satoru Gojo alongside Yuji Itadori and Megumi Fushiguro. She is a transfer student from Morioka whose hotheadedness and brashness contrasts with the other first-year students' altruism and stoicism.</p>
                    </div>
                    <div className='line'></div>
                    <div className='ani-box' ref={elesix}>
                        <div className='sec' ></div>
                        <div className='li-2' anistart='flase'ref={elesix1} ></div>
                        <div className='li-i2' anistart='flase' ref={elesix2}></div>
                        <div className='p-2' anistart='flase' ref={elesix3}>
                            <img className='geto' src={imgsi} alt='Logo' />
                        </div>
                        <p className='pa-2' anistart='flase' ref={elesix4}>Shoko is a very laid-back and nonchalant person, especially compared to Kiyotaka Ijichi high-strung attitude and the overly playful Satoru. As a student alongside Satoru and Suguru, she would let the two fight and simply remove herself from the situation as it escalated. She enjoyed poking fun at them like when she called them both trash for Utahime Iori or when she took Satoru's sunglasses and wore them after he was punished by Masamichi Yaga.
                        
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Line;