import React from 'react';
import {AppBar} from "@com";
import CommentTemplate from "@/views/CommentTemplate";
export default function CommentMobileTemplate(){
    return <section>
        <AppBar title="评论"/>
        <div className="padding-sm bg-white">
            <CommentTemplate/>
        </div>
    </section>
}