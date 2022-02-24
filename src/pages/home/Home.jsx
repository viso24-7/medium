import {useState,useRef} from 'react'
import Navbar from '../../components/navbar/Navbar';
import MedTrends from '../../components/trends/MedTrends';
import {BookmarkAddOutlined} from '@mui/icons-material';
import './home.css';

const Home = () => {
  return (
    <div className="home">
       <Navbar/>
        <div className="ay"></div>
        <div className="start-writing">
           <div className="write-y">
               <div className="write-y-a">
                  <div className='write-y-ad'>
                      <h1 className='write-y-ad-h1'>Medium is place to writ, read,and connect</h1>
                  </div>
                  <div className='write-y-ad2'>
                      <h2 className='write-y-ad-h2'>It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
                  </div>
                  <div className='write-y-but'>
                      <button className='write-y-button'>Start Writing</button>
                  </div>
               </div>
               <div className="write-y-b"></div>
           </div>
        </div>  
        <div className="ay"></div>
        <MedTrends />
        <div className="ay"></div>
        <div className="med-cont">
           <div className="more-cont">
                <div className="more-publ">
                    <div className="publi-item">
                        <div className="publi-item-inf">
                            <div className="item-pub-h">
                                <div className='iten-publ-img' style={{background:"#c2bdbd"}}><img src="https://miro.medium.com/fit/c/40/40/1*4C8qpSEEu7Q1p9wWImUgMw.jpeg" alt="" className='img-of-pub'/></div>
                                <div className='iten-publ-auth'><h2 className='author'>Jerine Nicole in Index</h2></div>
                            </div>
                            <div className="pub-title">
                                <div className="tit-name"><h3 className="name-of-publ">Qutting Your Job Isn't the Goal.Finding Meaningful Work Is</h3></div>
                                <div className="tit-name-p"><span>The motivation behind the great resignation</span></div>
                            </div>
                            <div className="pub-bottom">
                                <div className='pub-bott-l'>
                                    <div>Feb 17 <span className='ic-nd'>-</span>5 min read <span className='ic-nd'>-</span><span className='type-of-publ'>Work</span></div>
                                </div>
                                <div className='pub-bott-r'>
                                    <div><BookmarkAddOutlined style={{color:"#494747",fontSize:"20px"}}/></div>
                                    <div className='three-points'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="publi-item-img">
                            <img src="https://miro.medium.com/fit/c/300/201/0*fWI8J15ERDVZwl3f" alt="" className='publi-item-photo'/>
                        </div>
                    </div>

                    <div className="publi-item">
                        <div className="publi-item-inf">
                            <div className="item-pub-h">
                                <div className='iten-publ-img' style={{background:"#c2bdbd"}}><img src="https://miro.medium.com/fit/c/40/40/1*ydIA6jXs7WEZk0cOd-3BSA.png" alt="" className='img-of-pub'/></div>
                                <div className='iten-publ-auth'><h2 className='author'>Scott Galloway in Marker</h2></div>
                            </div>
                            <div className="pub-title">
                                <div className="tit-name"><h3 className="name-of-publ">Virtual Your Real Estate Will Be the Next Speculative Frenzy</h3></div>
                                <div className="tit-name-p"><span>The american dream of homeownership has become a hallucination -- in the metaverse</span></div>
                            </div>
                            <div className="pub-bottom">
                                <div className='pub-bott-l'>
                                    <div>Feb 14 <span className='ic-nd'>-</span>8 min read <span className='ic-nd'>-</span><span className='type-of-publ'>Bussinnes</span></div>
                                </div>
                                <div className='pub-bott-r'>
                                    <div><BookmarkAddOutlined style={{color:"#494747",fontSize:"20px"}}/></div>
                                    <div className='three-points'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="publi-item-img">
                           <img src="https://miro.medium.com/fit/c/300/201/0*VuwBDGkKHHdPv8o_.png" alt="" className='publi-item-photo'/>
                        </div>
                    </div>

                    <div className="publi-item">
                        <div className="publi-item-inf">
                            <div className="item-pub-h">
                                <div className='iten-publ-img' style={{background:"#c2bdbd"}}><img src="https://miro.medium.com/fit/c/40/40/1*VqH0bOrfjeUkznphIC7KBg.png" alt="" className='img-of-pub'/></div>
                                <div className='iten-publ-auth'><h2 className='author'>Dylan Hudson in CodeX</h2></div>
                            </div>
                            <div className="pub-title">
                                <div className="tit-name"><h3 className="name-of-publ">What Makes a Password Strong:Why What You've Been Told Is Wrong</h3></div>
                                <div className="tit-name-p"><span>and it's actually making your passwords weaker</span></div>
                            </div>
                            <div className="pub-bottom">
                                <div className='pub-bott-l'>
                                    <div>Jan 21 <span className='ic-nd'>-</span>9 min read <span className='ic-nd'>-</span><span className='type-of-publ'>Cybersecurity</span></div>
                                </div>
                                <div className='pub-bott-r'>
                                    <div><BookmarkAddOutlined style={{color:"#494747",fontSize:"20px"}}/></div>
                                    <div className='three-points'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="publi-item-img">
                           <img src="https://miro.medium.com/fit/c/300/201/1*PY9nByRuVnhXsCvYeiZ9LQ.jpeg" alt="" className='publi-item-photo'/>
                        </div>
                    </div>

                    <div className="publi-item">
                        <div className="publi-item-inf">
                            <div className="item-pub-h">
                                <div className='iten-publ-img' style={{background:"#c2bdbd"}}><img src="https://miro.medium.com/fit/c/40/40/1*RTes9BdUwqHhyfpWzIHZLQ.png" alt="" className='img-of-pub'/></div>
                                <div className='iten-publ-auth'><h2 className='author'>Duke University Opinion and Analysis</h2></div>
                            </div>
                            <div className="pub-title">
                                <div className="tit-name"><h3 className="name-of-publ">When James Joyce's Lingua Francs is a Family Affair</h3></div>
                                <div className="tit-name-p"><span>By Helen Solterer</span></div>
                            </div>
                            <div className="pub-bottom">
                                <div className='pub-bott-l'>
                                    <div>Feb 15 <span className='ic-nd'>-</span>4 min read <span className='ic-nd'>-</span><span className='type-of-publ'>James Joyce</span></div>
                                </div>
                                <div className='pub-bott-r'>
                                    <div><BookmarkAddOutlined style={{color:"#494747",fontSize:"20px"}}/></div>
                                    <div className='three-points'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="publi-item-img">
                           <img src="https://miro.medium.com/fit/c/300/201/1*rBiwSkgvITGhB2lZJvwFUA.png" alt="" className='publi-item-photo'/>
                        </div>
                    </div>

                    <div className="publi-item">
                        <div className="publi-item-inf">
                            <div className="item-pub-h">
                                <div className='iten-publ-img' style={{background:"#c2bdbd"}}><img src="https://miro.medium.com/fit/c/40/40/1*53-lvCPnPV4sTOmvcITDxw.png" alt="" className='img-of-pub'/></div>
                                <div className='iten-publ-auth'><h2 className='author'>John Rofrano in Nerd For Tech</h2></div>
                            </div>
                            <div className="pub-title">
                                <div className="tit-name"><h3 className="name-of-publ">DevOps Engineer is the new SysAdmin</h3></div>
                                <div className="tit-name-p"><span>If you're not doing dev... you're just doing ops</span></div>
                            </div>
                            <div className="pub-bottom">
                                <div className='pub-bott-l'>
                                    <div>Aug 9,2021 <span className='ic-nd'>-</span>4 min read <span className='ic-nd'>-</span><span className='type-of-publ'>Bussinnes</span></div>
                                </div>
                                <div className='pub-bott-r'>
                                    <div><BookmarkAddOutlined style={{color:"#494747",fontSize:"20px"}}/></div>
                                    <div className='three-points'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="publi-item-img">
                          <img src="https://miro.medium.com/fit/c/300/201/1*oCbQw9EiT724t629yGLCpA.jpeg" alt="" className='publi-item-photo'/>
                        </div>
                    </div>

                </div>
                <div className="disc-more">
                    <div className="more-of-contents">
                       <div className='conts-h'><h1 className='import-ty'>DISCOVER MORE OF WHAT MATTERS TO YOU</h1></div>  
                       <div className="type-of-topic">
                           <div className="topic-el">
                               <a href="" className='topic-link'>Self</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Relationship</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Data Science</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Programming</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Productivity</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Javascript</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Machine Learning</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Politics</a>
                           </div>
                           <div className="topic-el">
                               <a href="" className='topic-link'>Health</a>
                           </div>
                       </div>
                       <div className="mhr"></div>
                       <div className="links-to">
                           <div className='link-d'><a href="" className='go-toL'>Help</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Status</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Writers</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Blog</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Careers</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Privacy</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Terms</a></div>
                           <div className='link-d'><a href="" className='go-toL'>About</a></div>
                           <div className='link-d'><a href="" className='go-toL'>Knowable</a></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home