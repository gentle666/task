var box = document.getElementById('box');
var title = box.getElementsByTagName('h3');
var content = box.getElementsByTagName('div');
var span = box.getElementsByTagName('span');

for (var i=0;i<title.length;i++){
    title[i].index = i;
    title[i].onclick = function(){
        var reaTime = window.getComputedStyle(content[this.index],null).getPropertyValue('height');//获取当前详情框的height值
        if(reaTime == '0px'){//如果height为0就弹开
            content[this.index].style.maxHeight = '550px';//最大550px
            content[this.index].style.transition = '1s'//动画
            title[this.index].style.backgroundColor = '#E6E6E6';//背景色
            span[this.index].innerHTML = '−';//改变符号
        }else{//否者关闭
            content[this.index].style.maxHeight = '0';
            content[this.index].style.transition = '.3s'
            span[this.index].innerHTML = '+';
            title[this.index].style.backgroundColor = '';
        }
    }
    
}

