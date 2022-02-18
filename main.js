const links=document.querySelectorAll('[data-id]');
const titleItem= document.querySelector('.item')
const scroll= document.querySelector('.scroll')
const scrollBar= document.querySelector('.scroll-bar')

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
            style.display='block'
            // scrollIntoView({behavior:'smooth'});
            scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        setTimeout(() => {
            links.forEach((__link)=>{
                const _dataId=__link.getAttribute('data-id')
                if(_dataId!=dataId){
                    const _paragraph=document.querySelector(`#${_dataId}`)
                    // _paragraph.style.visibility='hidden'
                    _paragraph.style.display='none'
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