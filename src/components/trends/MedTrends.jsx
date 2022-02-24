import React from 'react'
import {TrendingUp} from '@mui/icons-material';
import {images} from '../../utils/getImgAndSvg'
import './trends.css'

const MedTrends = () => {
  return (<div className='med-trending'>
            <div className="med-trend-div">
                <div className="med-trend-h">
                    <div className='med-trends'>
                        <div className='trend-ic'>
                        <TrendingUp style={{color:"rgb(75 66 66 / 60%)",fontSize:"20px"}}/>
                        </div>
                    <h1 className='trend-txt'>TRENDING ON MEDIUM</h1>
                    </div>
                </div>
                <div className="med-trend-b">
                    <div className="med-trend-b-el">
                        <div className="trend-child">
                        <div className='child-num'><span>01</span></div>
                        <div className='child-cont'>
                            <div className="child-cont-h">
                                <div className='child-imgD'><img src={images["girl.jpeg"]} alt="" className='authImg'/></div>
                                <div><h2 className='authName'>Sienna Mae Gomez</h2></div>
                            </div>
                            <div className="child-cont-publication">
                                <div><h3 className='publicTitle'>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h3></div>
                            </div>
                            <div className="child-cont-time">22 Jan <span>-</span>15min read</div>
                        </div>
                        </div>
                        <div className="trend-child">
                            <div className='child-num'><span>04</span></div>
                            <div className='child-cont'>
                                <div className="child-cont-h">
                                    <div className='child-imgD'><img src={images["girl.jpeg"]} alt="" className='authImg'/></div>
                                    <div><h2 className='authName'>Sienna Mae Gomez</h2></div>
                                </div>
                                <div className="child-cont-publication">
                                    <div><h3 className='publicTitle'>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h3></div>
                                </div>
                                <div className="child-cont-time">22 Jan <span>-</span>15min read</div>
                            </div>
                        </div>
                    </div>
                    <div className="med-trend-b-el">
                    <div className="trend-child">
                        <div className='child-num'><span>02</span></div>
                        <div className='child-cont'>
                            <div className="child-cont-h">
                                <div className='child-imgD'><img src={images["girl.jpeg"]} alt="" className='authImg'/></div>
                                <div><h2 className='authName'>Sienna Mae Gomez</h2></div>
                            </div>
                            <div className="child-cont-publication">
                                <div><h3 className='publicTitle'>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h3></div>
                            </div>
                            <div className="child-cont-time">22 Jan <span>-</span>15min read</div>
                        </div>
                    </div>
                    <div className="trend-child">
                        <div className='child-num'><span>05</span></div>
                        <div className='child-cont'>
                            <div className="child-cont-h">
                                <div className='child-imgD'><img src={images["girl.jpeg"]} alt="" className='authImg'/></div>
                                <div><h2 className='authName'>Sienna Mae Gomez</h2></div>
                            </div>
                            <div className="child-cont-publication">
                                <div><h3 className='publicTitle'>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h3></div>
                            </div>
                            <div className="child-cont-time">22 Jan <span>-</span>15min read</div>
                        </div>
                    </div>
                    </div>
                    <div className="med-trend-b-el">
                        <div className="trend-child">
                        <div className='child-num'><span>03</span></div>
                        <div className='child-cont'>
                            <div className="child-cont-h">
                                <div className='child-imgD'><img src={images["girl.jpeg"]} alt="" className='authImg'/></div>
                                <div><h2 className='authName'>Sienna Mae Gomez</h2></div>
                            </div>
                            <div className="child-cont-publication">
                                <div><h3 className='publicTitle'>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h3></div>
                            </div>
                            <div className="child-cont-time">22 Jan <span>-</span>15min read</div>
                        </div>
                        </div>
                        <div className="trend-child">
                        <div className='child-num'><span>06</span></div>
                        <div className='child-cont'>
                            <div className="child-cont-h">
                                <div className='child-imgD'><img src={images["girl.jpeg"]} alt="" className='authImg'/></div>
                                <div><h2 className='authName'>Sienna Mae Gomez</h2></div>
                            </div>
                            <div className="child-cont-publication">
                                <div><h3 className='publicTitle'>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h3></div>
                            </div>
                            <div className="child-cont-time">22 Jan <span>-</span>15min read</div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default MedTrends