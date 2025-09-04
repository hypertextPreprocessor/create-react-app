import React,{useRef, useState} from 'react';
import { useParams,useNavigate,useHref } from "react-router";
import {RatingStar,PopOver,AppBar} from "@com";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import * as styles from "@/views/css/view.module.css";
import icon from "@img/icons";
import image from "@img";
import 'react-photo-view/dist/react-photo-view.css';
import SvgIcon from '../../assets/image/icons/SvgIcon';
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
                                    <SvgIcon icon="show_more" style={{verticalAlign:'middle'}} width="24" height="24" strokeWidth="2" />
                                </PopOver>
                            </p>
                            <p onClick={putComment}>
                                <SvgIcon icon="comment" strokeWidth={0.5} width="20" height="20" />
                                <span>21</span>
                            </p>
                            <p>
                                <SvgIcon icon="thumb_up" width="20" height={20}/>
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
                <SvgIcon icon="show_more" style={{verticalAlign:'middle'}} width="24" height="24" strokeWidth="2" />
            </PopOver>
        </p>
        <p onClick={putComment}>
            <SvgIcon icon="comment" strokeWidth={0.5} width="20" height="20" />
            <span>0</span>
        </p>
        <p>
           <SvgIcon icon="thumb_up" width="20" height={20}/>
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