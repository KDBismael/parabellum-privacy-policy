const links=document.querySelectorAll('[data-id]');
const stickys=document.querySelectorAll('[sticky-data]');
const titleItem= document.querySelector('.item')
const scroll= document.querySelector('.scroll')
const scrollBar= document.querySelector('.scroll-bar')
const paragraphContainer= document.querySelector('.paragraph-container');

links.forEach(link => {
    link.addEventListener('click',(e)=>{
        const _link=e.target;
        const dataId=_link.getAttribute('data-id')
        
        //reset fontweight
        links.forEach((__link)=>{
            __link.style.fontWeight='normal'
        })
        //set new fontweight
        _link.style.fontWeight='bold';

        //set scrollintoview
        const _paragraph=document.querySelector(`#${dataId}`)
        with(_paragraph){
            // style.display='block'
            scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        setTimeout(() => {
            links.forEach((__link)=>{
                const _dataId=__link.getAttribute('data-id')
                if(_dataId!=dataId){
                    const _paragraph=document.querySelector(`#${_dataId}`)
                }
            })
        }, 500);
    })

});
titleItem.addEventListener('scroll',function(e){
    let titleItemScrollHeight=titleItem.scrollHeight
    let titleItemScrollTop=titleItem.scrollTop
    let titleItemHeight=titleItem.clientHeight
    let titleItemScrollEnd=titleItemScrollHeight-titleItemHeight;
    if((titleItemScrollTop<titleItemScrollEnd)&&(titleItemScrollTop<(titleItemHeight-63))){
        scrollBar.style.top=`${titleItemScrollTop}px`
    }
})
paragraphContainer.addEventListener('scroll',(e)=>{
    const _top=paragraphContainer.getBoundingClientRect().top;

    const _elData=links[2].getAttribute('data-id')
    const _getEl=document.querySelector(`#${_elData}`)
    if((_getEl.getBoundingClientRect().bottom+50)<_top){
        stickys[2].style.opacity="0"
    }
    else if((_getEl.getBoundingClientRect().bottom+50)>_top){
        stickys[2].style.opacity="1"
    }

    const _elData1=links[3].getAttribute('data-id')
    const _getEl1=document.querySelector(`#${_elData1}`)
    if((_getEl1.getBoundingClientRect().bottom+10)<_top){
        stickys[3].style.opacity="0"
    }
    else if((_getEl1.getBoundingClientRect().bottom+10)>_top){
        stickys[3].style.opacity="1"
    }

    const _elData2=links[4].getAttribute('data-id')
    const _getEl2=document.querySelector(`#${_elData2}`)
    if((_getEl2.getBoundingClientRect().bottom+50)<_top){
        stickys[4].style.opacity="0"
    }
    else if((_getEl2.getBoundingClientRect().bottom+50)>_top){
        stickys[4].style.opacity="1"
    }

    const _elData3=links[6].getAttribute('data-id')
    const _getEl3=document.querySelector(`#${_elData3}`)
    if((_getEl3.getBoundingClientRect().bottom+50)<_top){
        stickys[6].style.opacity="0"
    }
    else if((_getEl3.getBoundingClientRect().bottom+50)>_top){
        stickys[6].style.opacity="1"
    }

    const _elData4=links[9].getAttribute('data-id')
    const _getEl4=document.querySelector(`#${_elData4}`)
    if((_getEl4.getBoundingClientRect().bottom+50)<_top){
        stickys[9].style.opacity="0"
    }
    else if((_getEl4.getBoundingClientRect().bottom+50)>_top){
        stickys[9].style.opacity="1"
    }
})
