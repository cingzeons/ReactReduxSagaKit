import React, {Component} from 'react';
import styless from "./Styles.module.scss"

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            list: [
                { id: "1", message: "定位成功后调整地图视野你的金灿灿时间内测试科目萨克来参加撒1"},
                { id: "2", message: "定位成功后u空间和沟通可交换官方突破口吧v色如同立刻就会以哦iu以后广泛的认同调整地图视野2"},
                { id: "3", message: "定位111111111111成功后调整地图视野3"},
                { id: "4", message: "定位成功1333333333333后调整地图视野3"},
                { id: "5", message: "定位成功355555555555后调整地图视野3"},
                { id: "6", message: "定位成功333333333后调整地图视野3"},
            ],
            type:1,  //1向上，2向左
            speed:20,
            marqueeHeight:40,   //滚动区域高度
            time: null,
            delay : 2000
        }
    }


    componentDidMount() {
        this.msg2.innerHTML = this.msg1.innerHTML
        if(this.state.type === 1){
            this.scrollUp(this.msgBox);
        }else{
            this.scrollLeft(this.msgBox, this.msg1, this.msg2);
        }
    }

    scrollUp=(msgBox)=>{
        msgBox.scrollTop = 0;
        msgBox.innerHTML +=msgBox.innerHTML
        let startScroll=()=>{
            this.state.time = setInterval(scrollUp,this.state.speed)
            msgBox.scrollTop++;
        }
        let scrollUp=()=>{
            if(msgBox.scrollTop % this.state.marqueeHeight === 0){
                clearInterval(this.state.time)
                setTimeout(startScroll,this.state.delay)
            }else{
                msgBox.scrollTop++;
                if(msgBox.scrollTop >= msgBox.scrollHeight/2){
                    msgBox.scrollTop = 0;
                }
            }
        }
        setTimeout(startScroll,this.state.delay)
    }
    scrollLeft=(msgBox, msg1,msg2)=>{
        let marqueeLeft=()=>{
            if(msg2.offsetWidth - msgBox.scrollLeft <= 0)   //offsetWidth 是对象的可见宽度
                msgBox.scrollLeft -= msg1.offsetWidth;      //scrollWidth 是对象的实际内容的宽，不包边线宽度
            else {
                msgBox.scrollLeft++;
            }
        };
        let myMar = setInterval(marqueeLeft,this.state.speed);
        msgBox.onmouseover = function(){ clearInterval(myMar)};
        msgBox.onmouseout = function(){ myMar = setInterval(marqueeLeft,this.state.speed)}
    }

    render () {
        return <div className={styless.cosultationWrap}>
            <div className="marquee">
                <div className={ this.state.type === 1 ? 'scrollUp'  : 'scrollLeft' } ref={msg => this.msgBox = msg}>
                <span className='scrollBox1' ref={textmsg => this.msg1 = textmsg}>
                {
                    this.state.list.map((val,k)=>{
                        return(
                            <a key={k}>{val.message}</a>
                        )
                    })
                }
                </span>
                    <span className='scrollBox2' ref={textmsg =>{this.msg2 = textmsg}} />
                </div>
            </div>
        </div>;
    }
}

export default Index;