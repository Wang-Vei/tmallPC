$(function(){
    //顶部导航栏
    function down(item){
        item.mouseenter(function(){
            $(this).css('backgroundColor','#fff')
            $(this).find('.menu-bd').css('display','block')
            $(this).find('.wline').css('display','block')
            $(this).find('b').css('transform','rotate(180deg)')
        })
        item.mouseleave(function(){
            $(this).css('backgroundColor','#F2F2F2')
            // $(this).find('.menu-hd').css('borderBottomColor','#E5E5E5')
            $(this).find('.menu-bd').css('display','none')
            $(this).find('.wline').css('display','none')
            // $(this).find('.menu-bd').css('borderTopColor','#E5E5E5')
            $(this).find('b').css('transform','rotate(360deg)')
        })
    }
    let tb=$('.mytaobao')
    let scj=$('.favorite')
    let phone=$('.mobile')
    let zc=$('.seller')
    let wzdh=$('.sitemap')
    down(tb),down(scj),down(zc),down(wzdh)
    phone.mouseenter(function(){
        $(this).find('.sn-qrcode').css('display','block')
    })
    phone.mouseleave(function(){
        $(this).find('.sn-qrcode').css('display','none')
    })
    //轮播图侧选项卡移入效果
    let color=['#E74B7F','#588CF1','#6347ED','#E54077','#6347ED','#427DEF','#FA6666','#F8AE40','#F8AE40','#DD2727','#DD2727','#F7AB38','#3BC7B0','#DD2727','#3BC7B0','#3BC7B0']
    $('.wrap .item').mouseenter(function(){
        $(this).css("background","#fff")
        let index=$(this).index()
        $('.wrap .item .content').eq(index).css("display","block")
        $('.wrap .item').eq(index).find(".items1").css("color",color[index])
    })
    $('.wrap .item').mouseleave(function(){
        $(this).css("background-color","rgba(0,0,0,0)")
        let index=$(this).index()
        $('.wrap .item .content').eq(index).css("display","none")
        $('.wrap .item .items1').css("color","#fff")
    })
    //轮播图
    let t=setInterval(move,2500);
    let color2=['#EA0A02','#E8E8E8','#E9CDC1','#E8E8E8','#3E21D5','#0A78C5'];
    let ban=$('.right .shops')
    let line=$('.right .line li')
    let index=0
    function move(){
        index++
        if(index==ban.length){
            index=0;
        }
        $('.category-con').css('background',color2[index])
        line.css('background','#000')
        line.eq(index).css('background','#fff')
        ban.css("opacity","0")
        ban.eq(index).css("opacity","1")
    }
    line.mouseenter(function(){
        let index1=$(this).index();
        $('.category-con').css('background',color2[index1]);
        line.css('background','#000');
        line.eq(index1).css('background','#fff');
        ban.css("opacity","0");
        ban.eq(index1).css("opacity","1");
        index=index1;
    })
    $('.right').mouseenter(function(){
        clearInterval(t);
    })
    $('.right').mouseleave(function(){
        t=setInterval(move,2500);
    })
    //天猫超市轮播图
    let btn=$('.floor-tab-head li')
    let tmcs=$('.floor-tab-content')
    console.log(btn,tmcs)
    let tt=setInterval(keep,3000)
    let ind=0
    function keep(){
        ind++
        if(ind==btn.length){
            ind=0
        }
        btn.css('background','#F1F1F1')
        .eq(ind).css('background','#00B262')
        tmcs.css('display','none')
        .eq(ind).css('display','block')
    }
    btn.mouseenter(function(){
        let index=$(this).index()
        btn.css('background','#F1F1F1')
        .eq(index).css('background','#00B262')
        tmcs.css('display','none')
        .eq(index).css('display','block')
        ind=index;
        clearInterval(tt)
    })
    btn.mouseleave(function(){
        tt=setInterval(keep,3000)
    })
    //侧导航
    let vip=$('.mui-mbar-tab-prof')
    let money=$('.mui-mbar-tab-asset')
    let shouc=$('.mui-mbar-tab-favor')
    let isee=$('.mui-mbar-tab-foot')
    let cz=$('.mui-mbar-tab-charge')
    let top=$('.mui-mbar-tab-top')
    let fk=$('.mui-mbar-tab-ue')
    let mask=$(".mui-mbar-tabs-mask")
    let car=$(".mui-mbar-tab-cart")
    
    // $(document).mousedown(function () {
        $(document).mousemove(function () { 
            let width=window.innerWidth
            console.log(width); 
            if(width<=1260){
                mask.css("width",0)
                car.mouseenter(function () {
                    mask.css("width",35)
                    })
                
                car.mouseleave(function () {
                    mask.css("width",0)
                    })
                }
            
            else{
                mask.css("width",35)
            }
            
        })
        
        
    
    

    
    function aside(item){
        item.mouseenter(function(){
            item.find('.logo').css({
                background: '#ff0036',
            })
            // item.find('.bgg').css({
            //     display: 'block'
            // })
            item.find('.tips').css({
                right: '35px',
                // display: 'block',
                transition: 'all .6s',
                opacity: 1,
            })
        })
        item.mouseleave(function(){
            item.find('.tips').css({
                right: '70px',
                // display: 'block',
                opacity: 0,
            })
            item.find('.logo').css({
                background: '#000',
            })
        })
    }
    aside(vip),aside(money),aside(shouc),aside(isee),aside(cz),aside(top),aside(fk)
    //楼层跳转
    let arrHeight=$('.floor-con').map(function(){
        return $(this).offset().top;
    })
    let floorcon=$('.floor-con').offset().top;
    let flag=true;
    let sidebg=$('.fpLift .lc')
    let color3=['#64C333','#FF0036','#EA5F8D','#0AA6E8','#64C333','#EA5F8D','#19C8A9','#FF0036']
    // console.log(sidebg)
    arrHeight=arrHeight.toArray()
    arrHeight.push(floorcon)
    // console.log(arrHeight)
    $(window).scroll(function(){
        if(!flag){
            return
        }
        let top=$(this).scrollTop()
        // if(top>=300){
        //     $(".mui-lift").slideDown()
        // }else{
        //     $(".mui-lift").slideUp()
        // }
        $(this).scrollTop() >=400 ? $(".mui-lift").slideDown():$(".mui-lift").slideUp()
        $(this).scrollTop() >=930 ? $(".middle-search").css('top','0'):$(".middle-search").css('top','-50px')
        let index=arrHeight.findIndex((item)=>item>top-250)
        if(index>=0){
            sidebg.css('background','rgba(0, 0, 0, 0.6)')
            .eq(index)
            .css('background',color3[index])
        }
    })

    sidebg.click(function(){
        let index=$(this).index()
        $("html").animate({scrollTop:arrHeight[index]-50},1000,function(){
            flag=true
        })
        sidebg.css('background','rgba(0, 0, 0, 0.6)')
        .eq(index)
        .css('background',color3[index])

    })
    $(".backTop").click(function(){
        $("html").animate({scrollTop:0},200)
    })
    $('.combobox-input').focus(function () {
        $(this).attr('placeholder').css('color','yellow')
    })
    // $('.s-combobox').blur(function () {
    //     $(this).val("")
    // })
    $('.combobox-input').blur(function () {
        $(this).val("")
    })

})