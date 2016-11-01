var LoginModel=function(){function e(e,t,n){$.ajax({url:"http://84.84.245.29:243/user/login",type:"post",dataType:"json",data:JSON.stringify({email:e,password:t}),success:function(e){document.cookie="access_token="+e.access_token,n(e)},error:function(e,t,n){$("#error_message").show()}})}return{login:e}},PageModel=function(){function e(e){$.ajax({url:"http://84.84.245.29:243/user",type:"get",dataType:"json",headers:{Authorization:"Bearer "+t("access_token")},success:function(t){e(t)},error:function(e,t,n){$("#component").load("error.html")}})}function t(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}}return{getPage:e}},ProductsModel=function(){function e(e){$.ajax({url:"http://84.84.245.29:243/products",type:"get",dataType:"json",success:function(t){e(t)},error:function(e,t,n){$("#component").load("error.html")}})}return{getPage:e}},RegisterModel=function(){function e(e,t,n){$.ajax({url:"http://84.84.245.29:243/user/login",type:"post",dataType:"json",data:JSON.stringify({email:e,password:t}),success:function(e){n(e),console.log(e)},error:function(e,t,n){$("#error_message").show()}})}return{register:e}},LoginController=function(e,t){function n(e){e.preventDefault();var t={};$.each($(this).serializeArray(),function(e,n){t[n.name]=n.value}),i.login(t.email,t.password,function(e){$("#inloggen_text").hide(),$("#uitloggen_text").show(),new PageController(new PageViewHelper,new PageModel).main()})}function o(){r.setView(),r.setActionListener(n)}var i=t,r=e;return{main:o}},PageController=function(e,t){function n(e){i.getPage(function(e){r.setView(e)})}function o(){r.setActionListener(n)}var i=t,r=e;return{main:o}},ProductsController=function(e,t){function n(){i.getPage(function(e){r.setView(e)})}function o(){r.setActionListener(n)}var i=t,r=e;return{main:o}},RegisterController=function(e,t){function n(){var e=$("#e-mailadres").val(),t=$("#wachtwoord").val(),n=$("#voornaam").val(),o=$("#achternaam").val(),r=$("#gender_select option:selected").text(),c=new Date($("#jaar_select option:selected").val(),$("#maand_select option:selected").val(),$("#dag_select option:selected").val()),s=$("#mobiel nummer (optioneel)").val();i.register(e,t,n,o,r,c,s,function(e){})}function o(){r.setView(),r.setActionListener(n)}var i=t,r=e;return{main:o}},LoginViewHelper=function(){function e(){$("#component").load("views/login/login.html")}function t(e){$("#component").on("submit","#loginform",e)}return{setView:e,setActionListener:t}},PageViewHelper=function(){function e(e){$("#component").load("views/page/page.html",function(){"customer"==e[0].user_type&&$("#user-block").append("<h1>Je lees dit alleen als je een customer bent"),"admin"==e[0].user_type&&$("#user-block").append("<h1>Je lees dit alleen als je een administrator bent")})}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},ProductsViewHelper=function(){function e(e){$("#component").load("views/products/products.html",function(){$.each(e,function(e,t){var n=$("<div>").append($("#product__list__item").clone());$(n).find(".product__title").html(t.ean_number),$(n).find(".product__price").html(t.price),$(n).find(".product__image img").attr("src",t.image),e%4==0&&0==e?$("#product__list").append("<div class='row'>"+n.html()):e%4==0?$("#product__list").append("</div><div class='row'>"+n.html()):$("#product__list div.row").last().append(n.html())}),$("</div>").appendTo("#product__list"),$("#product__list__item").first().remove()})}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},RegisterViewHelper=function(){function e(e){$("#component").load(e)}function t(e){$("#component").on("click","#registerbutton",e)}return{setView:e,setActionListener:t}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luX21vZGVsLmpzIiwicGFnZV9tb2RlbC5qcyIsInByb2R1Y3RzX21vZGVsLmpzIiwicmVnaXN0ZXJfbW9kZWwuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwicGFnZV9jb250cm9sbGVyLmpzIiwicHJvZHVjdHNfY29udHJvbGxlci5qcyIsInJlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwicGFnZS9wYWdlX3ZpZXcuanMiLCJwcm9kdWN0cy9wcm9kdWN0c192aWV3LmpzIiwicmVnaXN0ZXIvcmVnaXN0ZXJfdmlldy5qcyJdLCJuYW1lcyI6WyJMb2dpbk1vZGVsIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29va2llIiwiYWNjZXNzX3Rva2VuIiwiZXJyb3IiLCJ4aHIiLCJzdGF0dXMiLCJzaG93IiwiUGFnZU1vZGVsIiwiZ2V0UGFnZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q29va2llIiwibG9hZCIsIm5hbWUiLCJjb29raWVzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiUHJvZHVjdHNNb2RlbCIsIlJlZ2lzdGVyTW9kZWwiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJMb2dpbkNvbnRyb2xsZXIiLCJ2aWV3SGVscGVyIiwibW9kZWwiLCJhY3Rpb25QZXJmb3JtZWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJlYWNoIiwidGhpcyIsInNlcmlhbGl6ZUFycmF5IiwiZmllbGQiLCJ2YWx1ZSIsIk1vZGVsIiwiaGlkZSIsIlBhZ2VDb250cm9sbGVyIiwiUGFnZVZpZXdIZWxwZXIiLCJtYWluIiwiVmlld0hlbHBlciIsInNldFZpZXciLCJzZXRBY3Rpb25MaXN0ZW5lciIsIlZpZXciLCJQcm9kdWN0c0NvbnRyb2xsZXIiLCJSZWdpc3RlckNvbnRyb2xsZXIiLCJ2YWwiLCJmaXJzdF9uYW1lIiwic3VybmFtZSIsImdlbmRlciIsInRleHQiLCJkYXRlX29mX2JpcnRoIiwiRGF0ZSIsInBob25lX251bWJlciIsIkxvZ2luVmlld0hlbHBlciIsImFjdGlvbiIsIm9uIiwidmlld0RhdGEiLCJ1c2VyX3R5cGUiLCJhcHBlbmQiLCJldmVudEhhbmRsZXIiLCJyZWFkeSIsIlByb2R1Y3RzVmlld0hlbHBlciIsImtleSIsInByb2R1Y3QiLCJjbG9uZSIsImZpbmQiLCJodG1sIiwiZWFuX251bWJlciIsInByaWNlIiwiYXR0ciIsImltYWdlIiwibGFzdCIsImFwcGVuZFRvIiwiZmlyc3QiLCJyZW1vdmUiLCJSZWdpc3RlclZpZXdIZWxwZXIiLCJ2aWV3VG9Mb2FkIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxZQUFBLFdBRUEsUUFBQUMsR0FBQUMsRUFBQUMsRUFBQUMsR0FFQUMsRUFBQUMsTUFDQUMsSUFBQSxxQ0FDQUMsS0FBQSxPQUNBQyxTQUFBLE9BQ0FDLEtBQUFDLEtBQUFDLFdBQ0FWLE1BQUFBLEVBQ0FDLFNBQUFBLElBRUFVLFFBQUEsU0FBQUgsR0FFQUksU0FBQUMsT0FBQSxnQkFBQUwsRUFBQU0sYUFHQVosRUFBQU0sSUFFQU8sTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUVBWixFQUFBLGtCQUFBZSxVQVFBLE9BQ0FuQixNQUFBQSxJQzlCQW9CLFVBQUEsV0FFQSxRQUFBQyxHQUFBbEIsR0FFQUMsRUFBQUMsTUFDQUMsSUFBQSwrQkFDQUMsS0FBQSxNQUNBQyxTQUFBLE9BQ0FjLFNBQ0FDLGNBQUEsVUFBQUMsRUFBQSxpQkFFQVosUUFBQSxTQUFBSCxHQUNBTixFQUFBTSxJQUVBTyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0FaLEVBQUEsY0FBQXFCLEtBQUEsaUJBS0EsUUFBQUQsR0FBQUUsR0FJQSxJQUFBLEdBRkFDLEdBQUFkLFNBQUFDLE9BQUFjLE1BQUEsS0FFQUMsRUFBQSxFQUFB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Y0FBQWlFLEdBQUEsUUFBQSxrQkFBQUQsR0FJQSxPQUNBZCxRQUFBQSxFQUNBQyxrQkFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIExvZ2luTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly84NC44NC4yNDUuMjk6MjQzL3VzZXIvbG9naW5cIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHB1dCB0b2tlbiBpbiBjb29raWVcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0nYWNjZXNzX3Rva2VuPScgKyBkYXRhLmFjY2Vzc190b2tlblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9naW46IGxvZ2luXHJcbiAgICB9XHJcbn07IiwidmFyIFBhZ2VNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMvdXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBnZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcImVycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29va2llID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29va2llWzBdID09IG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c01vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My9wcm9kdWN0c1wiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcImVycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly84NC44NC4yNDUuMjk6MjQzL3VzZXIvbG9naW5cIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAvL3Rlc3RcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdub3QgZ29vZCBlbWFpbCBvciBwYXNzd29yZCB0byB1c2VyJ1xyXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmh0bWwoXCJlcnJvciBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZ2lzdGVyOiByZWdpc3RlclxyXG4gICAgfVxyXG59OyIsInZhciBMb2dpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcclxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xyXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBQYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3ICA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFZpZXcuc2V0VmlldyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFZpZXcuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBlbWFpbCA9ICQoXCIjZS1tYWlsYWRyZXNcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gJChcIiN3YWNodHdvb3JkXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBmaXJzdF9uYW1lID0gJChcIiN2b29ybmFhbVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgc3VybmFtZSA9ICQoXCIjYWNodGVybmFhbVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgZ2VuZGVyID0gJChcIiNnZW5kZXJfc2VsZWN0IG9wdGlvbjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgICAgdmFyIGRhdGVfb2ZfYmlydGggPSBuZXcgRGF0ZSgkKFwiI2phYXJfc2VsZWN0IG9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFhbmRfc2VsZWN0IG9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGFnX3NlbGVjdCBvcHRpb246c2VsZWN0ZWRcIikudmFsKCkpO1xyXG4gICAgICAgIHZhciBwaG9uZV9udW1iZXIgPSAkKFwiI21vYmllbCBudW1tZXIgKG9wdGlvbmVlbClcIikudmFsKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLnJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgZmlyc3RfbmFtZSwgc3VybmFtZSwgZ2VuZGVyLCBkYXRlX29mX2JpcnRoLCBwaG9uZV9udW1iZXIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgYWxzIHJlZ2lzdHJhdGllIHByb2NlcyBjb3JyZWN0IHVpdGdldm9lcmRcclxuICAgICAgICAgICAgLy9WaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3JlZ2lzdGVyL2FmdGVyX3JlZ2lzdGVyLmh0bWwnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdlbGlqayBpbmxvZ2dlbiBhbHMgbmlldXdlIHVzZXIgemljaCBnZXJlZ2lzdHJlZXJkIGhlZWZ0P1xyXG4gICAgICAgICAgICAvLyQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL01vZGVsLmdldFBhZ2UoZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuXHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuXHJcbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dpblZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgndmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAnbG9naW4nXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNsb2dpbmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQYWdlVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3BhZ2UvcGFnZS5odG1sJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0udXNlcl90eXBlID09IFwiY3VzdG9tZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBjdXN0b21lciBiZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGF0YVswXS51c2VyX3R5cGUgPT0gXCJhZG1pblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXItYmxvY2tcIikuYXBwZW5kKFwiPGgxPkplIGxlZXMgZGl0IGFsbGVlbiBhbHMgamUgZWVuIGFkbWluaXN0cmF0b3IgYmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cclxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNwcm9kdWN0X19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmh0bWwodmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW4gd2hhdCB3ZSBoYXZlIHRvIGRvIHdpdGggdGhlIHJvd3NcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgJSA0ID09IDAgJiYga2V5ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxkaXYgY2xhc3M9J3Jvdyc+XCIgKyBwcm9kdWN0Lmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkgJSA0ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjwvZGl2PjxkaXYgY2xhc3M9J3Jvdyc+XCIgKyBwcm9kdWN0Lmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0IGRpdi5yb3dcIikubGFzdCgpLmFwcGVuZChwcm9kdWN0Lmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGxhc3Qgcm93XHJcbiAgICAgICAgICAgICQoXCI8L2Rpdj5cIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb0xvYWQpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9Mb2FkKTsgLy9leGFtcGxlIG9mIHZpZXdUb0xvYWQ6ICd2aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJ1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIjcmVnaXN0ZXJidXR0b25cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyJdfQ==
