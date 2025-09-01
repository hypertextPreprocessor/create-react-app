import React,{useRef, useState} from 'react';
import { useParams,useNavigate,useHref } from "react-router";
import {RatingStar,PopOver,AppBar} from "@com";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import * as styles from "@/views/css/view.module.css";
import icon from "@img/icons";
import image from "@img";
import 'react-photo-view/dist/react-photo-view.css';
export default function CommentTemplate(){
    const [inputCommentVal,setInputCommentVal] = useState('');
    const [showCommentInput,setShowCommentInput] = useState(false);
    let params = useParams();
    let navigate = useNavigate();
    let href = useHref("183748573849382/20349448339484959");
    const effectiveCommentRef = useRef(null);
    function IntoThisComment(){
        navigate(href)
    }
    function putComment(event){
        if(showCommentInput){
            setShowCommentInput(false);
        }else{
            setShowCommentInput(true);
        }
        
    }
    function reply(){
        setShowCommentInput(false);
    }
    return <>
                {params.commentId?<AppBar title="返回"/>:null}
                <div ref={effectiveCommentRef}>
                    <div className={styles["commentContentList"]}>
                        <div className={styles["commentContentHeadPart"]}>
                            <div>
                                <p><img src={icon['logo']} alt=""/></p>
                                <p>用户昵称</p>
                                <p>该店铺购买2次</p>
                            </div>
                        </div>
                        <div className={styles["commentRating"]}>
                            <p>超赞</p>
                            <div><RatingStar size={16} value={5}/></div>
                            <hr/>
                            <p>2024-12-27 灰色 豪华顶配-六一儿童节 送礼佳品</p>
                        </div>
                        <div className={styles["cce-content"]}>
                            <p onClick={IntoThisComment}>机器狗的外观萌趣可爱，材质结实耐摔。智能互动很丰富，能讲故事、做游戏，孩子的欢乐源泉，真心不错！</p>
                            <div>
                                <PhotoProvider>
                                    <PhotoView src={image['example']}>
                                        <p><img src={image['example']} alt=""/></p>
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                        <div className={styles["commentFeedback"]}>
                            <p>
                                <PopOver position="bottom" content={<div>
                                    <p style={{cursor:'pointer'}}>举报</p>
                                </div>}>
                                    <svg style={{verticalAlign:'middle'}} fill="none" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M12 12H12.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    <path d="M8 12H8.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    <path d="M16 12H16.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                                </PopOver>
                            </p>
                            <p onClick={putComment}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20.76799 15.178269"
                                    version="1.1"
                                    id="svg1"
                                >
                                    <defs id="defs1" />
                                    <g id="layer1" transform="translate(-4.6622975,-7.2795904)">
                                        <g id="g3" transform="translate(-89.91539,-133.8324)">
                                            <path d="m 103.94264,141.36199 h 10.1919 c 0,0 0.80946,0.0736 0.84626,0.66229 0.0368,0.5887 0.11038,7.46915 0.11038,7.46915 0,0 0.11038,0.91985 -0.73588,1.2142 -0.84626,0.29435 -2.02366,0.0368 -2.02366,0.0368 l 0.18397,2.13405 -2.90672,-2.31802 -5.11434,-0.0368 c 0,0 -1.10382,0.0368 -1.25099,-0.73588 -0.14718,-0.77267 -0.14718,-6.88045 -0.14718,-6.88045 0,0 -0.11038,-1.28778 0.84626,-1.54534 z" id="path1" />
                                            <path d="m 101.88218,144.2687 h -5.666248 c 0,0 -0.993437,-0.0736 -1.250993,1.06703 -0.257556,1.14061 -0.07359,6.77007 -0.07359,6.77007 0,0 0.357886,1.08894 1.145211,1.205 0.66017,0.0973 1.871885,-0.0276 1.871885,-0.0276 l -0.110381,2.46519 3.017096,-2.4284 4.89359,0.14718 c 0,0 1.50854,-0.55191 1.39816,-1.91328" id="path2" />
                                            <path d="m 106.02003,144.49944 h 6.062" id="path3" strokeWidth={0.5}/>
                                            <path d="m 106.08072,145.93972 h 6.062" id="path3-9" strokeWidth={0.5} />
                                            <path d="m 106.08072,147.39713 h 6.062" id="path3-9-1" strokeWidth={0.5} />
                                        </g>
                                    </g>
                                </svg>
                                <span>2</span>
                            </p>
                            <p>
                                <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" width="20" height="20">
                                    <g>
                                        <g id="Icon-Like" transform="translate(78.000000, 528.000000)">
                                            <path d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5     c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/>
                                            <path d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>有用</span>
                            </p>
                        </div>
                        {showCommentInput?(
                            <div className={styles['commentInputArea']}>
                                <input placeholder="添加回复" type="text" onChange={(v)=>{setInputCommentVal(v.target.value)}} value={inputCommentVal}/><button onClick={reply}>回复</button>
                            </div>
                        ):null}
                        <SubComment/>
                    </div>
                </div>
    </>
}

function SubComment(){
    const [inputCommentVal,setInputCommentVal] = useState('');
    const [showCommentInput,setShowCommentInput] = useState(false);
    function putComment(){
        if(showCommentInput){
            setShowCommentInput(false);
        }else{
            setShowCommentInput(true);
        }
    }
    function reply(){
        setShowCommentInput(false);
    }
    return  <div style={{borderTop:'1px solid #dedede'}}>
        <div className={styles["commentContentHeadPart"]}>
            <div>
                <p><img src={icon['logo']} alt=""/></p>
                <p>用户昵称</p>
            </div>
        </div>
        <div className={styles["cce-content"]}>
            <p>这是一条评论消息</p>
        </div>
        <div className={styles["commentFeedback"]}>
        <p>
            <PopOver position="bottom" content={<div>
                <p style={{cursor:'pointer'}}>举报</p>
            </div>}>
                <svg style={{verticalAlign:'middle'}} fill="none" height="24" viewBox="0 0 24 24" width="24">
                <path d="M12 12H12.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <path d="M8 12H8.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <path d="M16 12H16.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            </PopOver>
        </p>
        <p onClick={putComment}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20.76799 15.178269"
                version="1.1"
                id="svg1"
            >
                <defs id="defs1" />
                <g id="layer1" transform="translate(-4.6622975,-7.2795904)">
                    <g id="g3" transform="translate(-89.91539,-133.8324)">
                        <path d="m 103.94264,141.36199 h 10.1919 c 0,0 0.80946,0.0736 0.84626,0.66229 0.0368,0.5887 0.11038,7.46915 0.11038,7.46915 0,0 0.11038,0.91985 -0.73588,1.2142 -0.84626,0.29435 -2.02366,0.0368 -2.02366,0.0368 l 0.18397,2.13405 -2.90672,-2.31802 -5.11434,-0.0368 c 0,0 -1.10382,0.0368 -1.25099,-0.73588 -0.14718,-0.77267 -0.14718,-6.88045 -0.14718,-6.88045 0,0 -0.11038,-1.28778 0.84626,-1.54534 z" id="path1" />
                        <path d="m 101.88218,144.2687 h -5.666248 c 0,0 -0.993437,-0.0736 -1.250993,1.06703 -0.257556,1.14061 -0.07359,6.77007 -0.07359,6.77007 0,0 0.357886,1.08894 1.145211,1.205 0.66017,0.0973 1.871885,-0.0276 1.871885,-0.0276 l -0.110381,2.46519 3.017096,-2.4284 4.89359,0.14718 c 0,0 1.50854,-0.55191 1.39816,-1.91328" id="path2" />
                        <path d="m 106.02003,144.49944 h 6.062" id="path3" strokeWidth={0.5}/>
                        <path d="m 106.08072,145.93972 h 6.062" id="path3-9" strokeWidth={0.5} />
                        <path d="m 106.08072,147.39713 h 6.062" id="path3-9-1" strokeWidth={0.5} />
                    </g>
                </g>
            </svg>
            <span>0</span>
        </p>
        <p>
            <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" width="20" height="20">
                <g>
                    <g id="Icon-Like" transform="translate(78.000000, 528.000000)">
                        <path d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5     c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/>
                        <path d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/>
                    </g>
                </g>
            </svg>
            <span>有用</span>
        </p>
    </div>
    {showCommentInput?(
    <div className={styles['commentInputArea']}>
        <input placeholder="添加回复" type="text" onChange={(v)=>{setInputCommentVal(v.target.value)}} value={inputCommentVal}/><button onClick={reply}>回复</button>
    </div>
):null}
</div>
}