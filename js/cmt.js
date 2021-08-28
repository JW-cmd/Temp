function getCommentList(){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            // 判断是否正常访问到了服务器
            if(res.status !== 200) return alert ("获取评论列表失败！")
            var temp_list = []
            $.each(res.data,function(i,item){
                let str = '<li class = "list-group-item"><span style = "background-color: rgb(121, 181, 204);" class = "badge">发表人：'+item.username+'</span><span style = "background-color: thistle;" class = "badge">'+item.time+'</span>'+item.content+'</li>'
                temp_list.push(str)
            })
            $("#cmt_list").empty().append(temp_list.join(""))
        }
    })
    
}

getCommentList()

// var temp = $("#panel-body").serialize()

// JQuety的语法需要利用$()包含起来。JS语法不用
$(function(){      
    $("#cmt_content").on("submit",function(e){
        e.preventDefault() 
        var temp = $(this).serialize()
        $.ajax({
            method:"POST",
            url:"http://www.liulongbin.top:3006/api/addcmt",
            data:temp,
            success:function(res){
                if(res.status !== 201) return alert("发表评论失败！")
                // 刷新
                getCommentList()
                $("#cmt_content")[0].reset()
                
            }
        })
        console.log(temp)
    })
})