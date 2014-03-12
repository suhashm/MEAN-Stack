app.value('mvToastr', toastr);

app.factory('mvNotifier', function(mvToastr){
    return{
        notify: function(msg,type){
            if(type=="success")
                mvToastr.success(msg);
            else
                mvToastr.error(msg);
            console.log(msg);
        }
    }
});