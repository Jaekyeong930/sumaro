import React, { useState , useReducer, useEffect, useCallback} from 'react';
import styled from 'styled-components';

import { getCheckSpace } from '../../../api/user';

// 라우트
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

// css
import './user_congetion.css';

// img
import userlogo_img from '../../../style/img/sumaro_text.png';
import areaA from '../../../style/img/map_areaA.png';
import areaB from '../../../style/img/map_areaB.png';
import areaC from '../../../style/img/map_areaC.png';
import areaD from '../../../style/img/map_areaD.png';



const Background = styled.div`
	text-align: center;
	padding-top: 20px;
	width: 414px;
	height: 736px;
	margin: 0 auto;
	text-align: center;
`;

const User_logo = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 240px;
  height: 40px;
  margin-bottom: 30px;
  background-image: url(${userlogo_img});
  background-size: contain;
  background-repeat: no-repeat;
`;



const UserCongestion = () => {

    const [A , setA] = useState(0);
    const [B , setB] = useState(0);
    const [C , setC] = useState(0);
    const [D , setD] = useState(0);

	// congetion
	const [congetion , setCongetion] = useState([]);

    // 혼잡도데이터 받아오기 (페이지가 로딩되면 실행하는 작업)
    useEffect(() => {
        getCheckSpace(setCongetion);
    }, []);
    // 혼잡도 출력 (congetion 데이터가 바뀌면 실행하는 작업)
    useEffect(() => {
        console.log(congetion);
        setA(congetion[0]);
        setB(congetion[1]);
        setC(congetion[2]);
        setD(congetion[3]);
    } , [congetion]);




    return (
        <>
            <Background>
                <Link to='/'>
                    {' '}
                    <User_logo></User_logo>{' '}
                </Link>
                <span id='space'>今 <span className='allOfSpace_num'>{`${A+B+C+D}`}</span> 台駐車できる </span>

                <div id='area'>
                    <div className='areas'>
                        <div className='text'>
                            <div className='areaName A'>A 区域</div>
                            {
                                `${A}` == 0?
                                <span className='numOfSpace_0'>満車</span> :
                                <div className='numOfSpace'>
                                <span className='numOfSpace_num'>{`${A}`}</span>台駐車できる
                                </div>
                            }
                        </div>
                        <span className='map'>
							<img src={areaA} alt='약도'/>
						</span>
                    </div>
                    <div className='areas'>
                        <div className='text'>
                            <div className='areaName B'>B 区域</div>
                            {
                                `${B}` == 0?
                                <span className='numOfSpace_0'>満車</span> :
                                <div className='numOfSpace'>
                                <span className='numOfSpace_num'>{`${B}`}</span>台駐車できる
                                </div>
                            }
                        </div>
                        <span className='map'>
							<img src={areaB} alt='약도'/>
						</span>
                    </div>
                    <div className='areas'>
                        <div className='text'>
                            <div className='areaName C'>C 区域</div>
                            {
                                `${C}` == 0?
                                <span className='numOfSpace_0'>満車</span> :
                                <div className='numOfSpace'>
                                <span className='numOfSpace_num'>{`${C}`}</span>台駐車できる
                                </div>
                            }
                        </div>
                        <span className='map'>
							<img src={areaC} alt='약도'/>
						</span>
                    </div>
                    <div className='areas'>
                        <div className='text'>
                            <div className='areaName D'>D 区域</div>
                            {
                                `${D}` == 0?
                                <span className='numOfSpace_0'>満車</span> :
                                <div className='numOfSpace'>
                                <span className='numOfSpace_num'>{`${D}`}</span>台駐車できる
                                </div>
                            }
                        </div>
                        <span className='map'>
							<img src={areaD} alt='약도'/>
						</span>
                    </div>
                </div>
            </Background>
        </>
    );
};

export default UserCongestion;
