var Router=function(){function e(e,r){if(0!=n(e)){var i=t(e);switch(i[0]){case"":case"index.html":case"products":new ProductsController(new ProductsViewHelper,new ProductsModel).main();break;case"product":new ProductController(new ProductViewHelper,new ProductModel(i[1])).main();break;case"login":new LoginController(new LoginViewHelper,new LoginModel).main();break;default:new ErrorController(new ErrorViewHelper).main()}0!=r&&(""==e&&(e="index.html"),o({},"A-Z Games",e))}}function n(e){return e.indexOf("http")==-1&&e.indexOf("https")==-1&&e.indexOf("www")==-1||(window.location=e,!1)}function t(e){return 0==e.indexOf("/")&&(e=e.substring(1)),null!=this.baseUrl&&e.indexOf(this.baseUrl)!=-1&&(e=e.substring(e.indexOf(this.baseUrl)+this.baseUrl.length)),e.split(/\/(.+)?/)}function o(e,n,t){window.history.pushState(e,n,t)}return baseUrl="project-webshop/",{route:e}},LoginModel=function(){function e(e,n,t){$.ajax({url:"http://84.84.245.29:243/user/login",type:"post",dataType:"json",data:JSON.stringify({email:e,password:n}),success:function(e){document.cookie="access_token="+e.access_token,t(e)},error:function(e,n,t){$("#error_message").show()}})}return{login:e}},PageModel=function(){function e(e){$.ajax({url:"http://84.84.245.29:243/user",type:"get",dataType:"json",headers:{Authorization:"Bearer "+n("access_token")},success:function(n){e(n)},error:function(e,n,t){$("#component").load("error.html")}})}function n(e){for(var n=document.cookie.split(";"),t=0;t<n.length;t++){var o=n[t].split("=");if(o[0]==e)return o[1]}}return{getPage:e}},ProductsModel=function(){function e(e){$.ajax({url:"http://84.84.245.29:243/products",type:"get",dataType:"json",success:function(n){e(n)},error:function(e,n,t){$("#component").load("error.html")}})}return{getPage:e}},RegisterModel=function(){function e(e,n,t){$.ajax({url:"http://84.84.245.29:243/user/login",type:"post",dataType:"json",data:JSON.stringify({email:e,password:n}),success:function(e){t(e),console.log(e)},error:function(e,n,t){$("#error_message").show()}})}return{register:e}},ErrorController=function(e){function n(){t.setView()}var t=e;return{main:n}},LoginController=function(e,n){function t(e){e.preventDefault();var n={};$.each($(this).serializeArray(),function(e,t){n[t.name]=t.value}),r.login(n.email,n.password,function(e){$("#inloggen_text").hide(),$("#uitloggen_text").show(),new PageController(new PageViewHelper,new PageModel).main()})}function o(){i.setView(),i.setActionListener(t)}var r=n,i=e;return{main:o}},PageController=function(e,n){function t(e){r.getPage(function(e){i.setView(e)})}function o(){i.setActionListener(t)}var r=n,i=e;return{main:o}},ProductsController=function(e,n){function t(){r.getPage(function(e){i.setView(e)})}function o(){i.setActionListener(t)}var r=n,i=e;return{main:o}},RegisterController=function(e,n){function t(){var e=$("#e-mailadres").val(),n=$("#wachtwoord").val(),t=$("#voornaam").val(),o=$("#achternaam").val(),i=$("#gender_select option:selected").text(),s=new Date($("#jaar_select option:selected").val(),$("#maand_select option:selected").val(),$("#dag_select option:selected").val()),c=$("#mobiel nummer (optioneel)").val();r.register(e,n,t,o,i,s,c,function(e){})}function o(){i.setView(),i.setActionListener(t)}var r=n,i=e;return{main:o}},ErrorViewHelper=function(){function e(){$("#component").load("views/error/error.html")}function n(e){$(document).ready(e)}return{setView:e,setActionListener:n}},LoginViewHelper=function(){function e(){$("#component").load("views/login/login.html")}function n(e){$("#component").on("submit","#loginform",e)}return{setView:e,setActionListener:n}},PageViewHelper=function(){function e(e){$("#component").load("views/page/page.html",function(){"customer"==e[0].user_type&&$("#user-block").append("<h1>Je lees dit alleen als je een customer bent"),"admin"==e[0].user_type&&$("#user-block").append("<h1>Je lees dit alleen als je een administrator bent")})}function n(e){$(document).ready(e)}return{setView:e,setActionListener:n}},ProductsViewHelper=function(){function e(e){$("#component").load("views/products/products.html",function(){$.each(e,function(e,n){var t=$("<div>").append($("#product__list__item").clone());$(t).find(".product__title").html(n.ean_number),$(t).find(".product__price").html(n.price),$(t).find(".product__image img").attr("src",n.image),e%4==0&&0==e?$("#product__list").append("<div class='row'>"+t.html()):e%4==0?$("#product__list").append("</div><div class='row'>"+t.html()):$("#product__list div.row").last().append(t.html())}),$("</div>").appendTo("#product__list"),$("#product__list__item").first().remove()})}function n(e){$(document).ready(e)}return{setView:e,setActionListener:n}},RegisterViewHelper=function(){function e(e){$("#component").load(e)}function n(e){$("#component").on("click","#registerbutton",e)}return{setView:e,setActionListener:n}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyIsImxvZ2luX21vZGVsLmpzIiwicGFnZV9tb2RlbC5qcyIsInByb2R1Y3RzX21vZGVsLmpzIiwicmVnaXN0ZXJfbW9kZWwuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwibG9naW5fY29udHJvbGxlci5qcyIsInBhZ2VfY29udHJvbGxlci5qcyIsInByb2R1Y3RzX2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwiZXJyb3IvZXJyb3Jfdmlldy5qcyIsImxvZ2luL2xvZ2luX3ZpZXcuanMiLCJwYWdlL3BhZ2Vfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsInJvdXRlIiwidXJsIiwiaGlzdG9yeSIsImlzSW50ZXJuYWwiLCJwYXJ0aWNsZXMiLCJnZXRQYXJ0aWNsZXMiLCJQcm9kdWN0c0NvbnRyb2xsZXIiLCJQcm9kdWN0c1ZpZXdIZWxwZXIiLCJQcm9kdWN0c01vZGVsIiwibWFpbiIsIlByb2R1Y3RDb250cm9sbGVyIiwiUHJvZHVjdFZpZXdIZWxwZXIiLCJQcm9kdWN0TW9kZWwiLCJMb2dpbkNvbnRyb2xsZXIiLCJMb2dpblZpZXdIZWxwZXIiLCJMb2dpbk1vZGVsIiwiRXJyb3JDb250cm9sbGVyIiwiRXJyb3JWaWV3SGVscGVyIiwid3JpdGVIaXN0b3J5IiwiaW5kZXhPZiIsIndpbmRvdyIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwidGhpcyIsImJhc2VVcmwiLCJsZW5ndGgiLCJzcGxpdCIsIm9iamVjdCIsInRpdGxlIiwicHVzaFN0YXRlIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInR5cGUiLCJkYXRhVHlwZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29va2llIiwiYWNjZXNzX3Rva2VuIiwiZXJyb3IiLCJ4aHIiLCJzdGF0dXMiLCJzaG93IiwiUGFnZU1vZGVsIiwiZ2V0UGFnZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwibG9hZCIsIm5hbWUiLCJjb29raWVzIiwiaSIsIlJlZ2lzdGVyTW9kZWwiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJ2aWV3SGVscGVyIiwiVmlld0hlbHBlciIsInNldFZpZXciLCJtb2RlbCIsImFjdGlvblBlcmZvcm1lZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsImVhY2giLCJzZXJpYWxpemVBcnJheSIsImZpZWxkIiwidmFsdWUiLCJNb2RlbCIsImhpZGUiLCJQYWdlQ29udHJvbGxlciIsIlBhZ2VWaWV3SGVscGVyIiwic2V0QWN0aW9uTGlzdGVuZXIiLCJWaWV3IiwiUmVnaXN0ZXJDb250cm9sbGVyIiwidmFsIiwiZmlyc3RfbmFtZSIsInN1cm5hbWUiLCJnZW5kZXIiLCJ0ZXh0IiwiZGF0ZV9vZl9iaXJ0aCIsIkRhdGUiLCJwaG9uZV9udW1iZXIiLCJldmVudEhhbmRsZXIiLCJyZWFkeSIsImFjdGlvbiIsIm9uIiwidmlld0RhdGEiLCJ1c2VyX3R5cGUiLCJhcHBlbmQiLCJrZXkiLCJwcm9kdWN0IiwiY2xvbmUiLCJmaW5kIiwiaHRtbCIsImVhbl9udW1iZXIiLCJwcmljZSIsImF0dHIiLCJpbWFnZSIsImxhc3QiLCJhcHBlbmRUbyIsImZpcnN0IiwicmVtb3ZlIiwiUmVnaXN0ZXJWaWV3SGVscGVyIiwidmlld1RvTG9hZCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQUEsUUFBQSxXQUlBLFFBQUFDLEdBQUFDLEVBQUFDLEdBRUEsR0FBQSxHQUFBQyxFQUFBRixHQUFBLENBS0EsR0FBQUcsR0FBQUMsRUFBQUosRUFFQSxRQUFBRyxFQUFBLElBRUEsSUFBQSxHQUNBLElBQUEsYUFDQSxJQUFBLFdBQ0EsR0FBQUUsb0JBQUEsR0FBQUMsb0JBQUEsR0FBQUMsZ0JBQUFDLE1BQ0EsTUFDQSxLQUFBLFVBQ0EsR0FBQUMsbUJB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bUJBQUFDLEtBQUEzQixFQUFBNkIsT0FDQXBFLEVBQUErRCxHQUFBRSxLQUFBLHVCQUFBSSxLQUFBLE1BQUE5QixFQUFBK0IsT0FHQVIsRUFBQSxHQUFBLEdBQUEsR0FBQUEsRUFFQTlELEVBQUEsa0JBQUE2RCxPQUFBLG9CQUFBRSxFQUFBRyxRQUVBSixFQUFBLEdBQUEsRUFFQTlELEVBQUEsa0JBQUE2RCxPQUFBLDBCQUFBRSxFQUFBRyxRQUlBbEUsRUFBQSwwQkFBQXVFLE9BQUFWLE9BQUFFLEVBQUFHLFVBS0FsRSxFQUFBLFVBQUF3RSxTQUFBLGtCQUdBeEUsRUFBQSx3QkFBQXlFLFFBQUFDLFdBS0EsUUFBQTlCLEdBQUFhLEdBRUF6RCxFQUFBUSxVQUFBZ0QsTUFBQUMsR0FNQSxPQUNBM0IsUUFBQUEsRUFDQWMsa0JBQUFBLElDakRBK0IsbUJBQUEsV0FHQSxRQUFBN0MsR0FBQThDLEdBRUE1RSxFQUFBLGNBQUFvQixLQUFBd0QsR0FJQSxRQUFBaEMsR0FBQWEsR0FNQXpELEVBQUEsY0FBQTBELEdBQUEsUUFBQSxrQkFBQUQsR0FJQSxPQUNBM0IsUUFBQUEsRUFDQWMsa0JBQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICBiYXNlVXJsID0gXCJwcm9qZWN0LXdlYnNob3AvXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gcm91dGUodXJsLCBoaXN0b3J5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc0ludGVybmFsKHVybCkgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGFydGljbGVzID0gZ2V0UGFydGljbGVzKHVybCk7XHJcblxyXG4gICAgICAgIHN3aXRjaChwYXJ0aWNsZXNbMF0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwiXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmRleC5odG1sXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0c1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RzQ29udHJvbGxlcihuZXcgUHJvZHVjdHNWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0c01vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RDb250cm9sbGVyKG5ldyBQcm9kdWN0Vmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG5ldyBFcnJvckNvbnRyb2xsZXIobmV3IEVycm9yVmlld0hlbHBlcigpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaXN0b3J5ICE9IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBcImluZGV4Lmh0bWxcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd3JpdGVIaXN0b3J5KHt9LCBcIkEtWiBHYW1lc1wiLCB1cmwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJodHRwc1wiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcInd3d1wiKSAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhcnRpY2xlcyh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCAvXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiL1wiKSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYmFzZSB1cmwgc2V0LCByZW1vdmUgdGhlIGJhc2UgdXJsXHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCAhPSBudWxsICYmIHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgKyB0aGlzLmJhc2VVcmwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoL1xcLyguKyk/LylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUhpc3Rvcnkob2JqZWN0LCB0aXRsZSwgdXJsKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShvYmplY3QsIHRpdGxlLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcm91dGU6IHJvdXRlXHJcbiAgICB9XHJcbn0iLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMvdXNlci9sb2dpblwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llPSdhY2Nlc3NfdG9rZW49JyArIGRhdGEuYWNjZXNzX3Rva2VuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcclxuICAgICAgICAgICAgICAgICQoXCIjZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbjogbG9naW5cclxuICAgIH1cclxufTsiLCJ2YXIgUGFnZU1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My91c2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWVbMF0gPT0gbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly84NC44NC4yNDUuMjk6MjQzL3Byb2R1Y3RzXCIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIoZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMvdXNlci9sb2dpblwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7IC8vdGVzdFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXHJcbiAgICB9XHJcbn07IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXHJcbntcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXHJcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFBhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXcgID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgVmlldy5zZXRWaWV3KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgVmlldy5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdHNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gJChcIiNlLW1haWxhZHJlc1wiKS52YWwoKTtcclxuICAgICAgICB2YXIgcGFzc3dvcmQgPSAkKFwiI3dhY2h0d29vcmRcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIGZpcnN0X25hbWUgPSAkKFwiI3Zvb3JuYWFtXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBzdXJuYW1lID0gJChcIiNhY2h0ZXJuYWFtXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBnZW5kZXIgPSAkKFwiI2dlbmRlcl9zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgICB2YXIgZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKCQoXCIjamFhcl9zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWFuZF9zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdfc2VsZWN0IG9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKSk7XHJcbiAgICAgICAgdmFyIHBob25lX251bWJlciA9ICQoXCIjbW9iaWVsIG51bW1lciAob3B0aW9uZWVsKVwiKS52YWwoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCB1c2VyIGluZm8gdG8gQVBJXHJcbiAgICAgICAgTW9kZWwucmVnaXN0ZXIoZW1haWwsIHBhc3N3b3JkLCBmaXJzdF9uYW1lLCBzdXJuYW1lLCBnZW5kZXIsIGRhdGVfb2ZfYmlydGgsIHBob25lX251bWJlciwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyBXZWVyZ2VlZiBlZW4gYW5kZXJlIHBhZ2luYSBhbHMgcmVnaXN0cmF0aWUgcHJvY2VzIGNvcnJlY3QgdWl0Z2V2b2VyZFxyXG4gICAgICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVnaXN0ZXIvYWZ0ZXJfcmVnaXN0ZXIuaHRtbCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2VsaWprIGlubG9nZ2VuIGFscyBuaWV1d2UgdXNlciB6aWNoIGdlcmVnaXN0cmVlcmQgaGVlZnQ/XHJcbiAgICAgICAgICAgIC8vJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8kKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vTW9kZWwuZ2V0UGFnZShmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGluZm87IGNsaWNrcyAncmVnaXN0ZXInOiB2aWV3IG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG5cclxuICAgICAgICAvLyBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHNlbmQgdG8gQVBJOyBBUEkgY2hlY2tzIGlmIGVtYWlsIGFscmVhZHkgZXhpc3RzIChhbmQgd2hldGhlciBwYXNzd29yZCBpcyBjb3JyZWN0PykgXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEVycm9yVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9lcnJvci9lcnJvci5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL2xvZ2luL2xvZ2luLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGxvZ2luIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ2xvZ2luJywgcGVyZm9ybSBhY3Rpb24gKG1ha2UgY29udHJvbGxlciBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUEkpXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUGFnZVZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9wYWdlL3BhZ2UuaHRtbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLnVzZXJfdHlwZSA9PSBcImN1c3RvbWVyXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjdXNlci1ibG9ja1wiKS5hcHBlbmQoXCI8aDE+SmUgbGVlcyBkaXQgYWxsZWVuIGFscyBqZSBlZW4gY3VzdG9tZXIgYmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0udXNlcl90eXBlID09IFwiYWRtaW5cIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBhZG1pbmlzdHJhdG9yIGJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9wcm9kdWN0cy9wcm9kdWN0cy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXHJcbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjcHJvZHVjdF9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvZHVjdCBpbmZvXHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5odG1sKHZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIERldGVybWluIHdoYXQgd2UgaGF2ZSB0byBkbyB3aXRoIHRoZSByb3dzXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICUgNCA9PSAwICYmIGtleSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdyb3cnPlwiICsgcHJvZHVjdC5odG1sKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5ICUgNCA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8L2Rpdj48ZGl2IGNsYXNzPSdyb3cnPlwiICsgcHJvZHVjdC5odG1sKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdCBkaXYucm93XCIpLmxhc3QoKS5hcHBlbmQocHJvZHVjdC5odG1sKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBsYXN0IHJvd1xyXG4gICAgICAgICAgICAkKFwiPC9kaXY+XCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBSZWdpc3RlclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9Mb2FkKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvTG9hZCk7IC8vZXhhbXBsZSBvZiB2aWV3VG9Mb2FkOiAndmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCdcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNsaWNrXCIsIFwiI3JlZ2lzdGVyYnV0dG9uXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiXX0=
