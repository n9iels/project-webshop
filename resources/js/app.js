function PlatformLogo(e){switch(e=e.toUpperCase()){case"PS1":return"<img src='/resources/images/icons/ps1.png' />";case"PS4":return"<img src='/resources/images/icons/ps4.png' />";case"PC":return"<img src='/resources/images/icons/windows.png' />";case"XBOX":return"<img src='/resources/images/icons/xbox.png' />";case"NES":return"<img src='/resources/images/icons/nes.png' />";case"N64":return"<img src='/resources/images/icons/n64.png' />";case"NINTENDO SWITCH":return"<img src='/resources/images/icons/switch.png' />";default:return e;case"NINTENDO":return"<img src='/resources/images/publishers/nintendo.png' />";case"UBISOFT":return"<img src='/resources/images/publishers/ubisoft.png' />";case"ELECTRONIC ARTS":return"<img src='/resources/images/publishers/ea.png' />"}}function BeschikbaarheidKleur(e){return e<=0?"<img src='/resources/images/availability/buttonred.png' />":e>=1?"<img src='/resources/images/availability/buttongreen.png' />":e}function getOffset(e){return e=e.getBoundingClientRect(),{left:e.left+window.scrollX,top:e.top+window.scrollY}}function CookieHelper(){this.getCookie=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0].trim()==e)return i[1]}},this.createCookie=function(e,t){var n=new Date;n.setTime(n.getTime()+864e5);var i="expires="+n.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"},this.deleteCookie=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}function showLoadScreen(){$("#component").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>')}function onLoadPage(){UserHelper.isAdmin()?($(".visible-admin").css("display","inline-block"),$(".visible-customer").css("display","inline-block"),$("#inloggen_text").hide()):UserHelper.isCustomer()?($(".visible-customer").css("display","inline-block"),$("#inloggen_text").hide()):($(".visible-admin").hide(),$(".visible-customer").hide(),$("#inloggen_text").css("display","inline-block"))}function UserHelper(){this.isLogedIn=function(){var e=CookieHelper.getCookie("access_token");return void 0!=e&&""!=e},this.isCustomer=function(){if(UserHelper.isLogedIn()){var e=this.decodeToken().usertype;if("customer"==e||"admin"==e)return!0}return!1},this.isAdmin=function(){if(UserHelper.isLogedIn()){var e=this.decodeToken().usertype;if("admin"==e)return!0}return!1},this.decodeToken=function(){var e=CookieHelper.getCookie("access_token");if(void 0!=e&&""!=e){var t=e.split(".")[1];return JSON.parse(atob(t))}},this.getUserInfo=function(e){$.ajax({url:"https://api.az-games.nl/user",type:"get",dataType:"json",headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(t){e(t)},error:function(e,t,n){Router.route("/login")}})}}function WishlistHelper(){this.addItem=function(e){$.ajax({url:"https://api.az-games.nl/wishlist/"+CookieHelper.getCookie("user_id")+"/"+e,type:"post",dataType:"json",data:JSON.stringify({}),headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){$(this).toggleClass("like--active"),alert("Product succesvol toegevoegd aan Wishlist.")},error:function(e,t,n){alert("Product is al in Wishlist.")}})}}$(document).on("click","span.like",function(e){$(this).toggleClass("like--active")}),$(document).on("click","span.single_like",function(e){$(this).toggleClass("single_like--active")}),$(document).on("click","a.order__navigate",function(e){if(e.preventDefault(),0==$(this).hasClass("disabled")){var t=$(this).data("step");$("ul.order-steps li").removeClass("active"),$("ul.order-steps li."+t).addClass("active"),$("ul.order-steps li."+t+" a").removeClass("disabled"),$(".order__step").removeClass("order__step--active"),$("#"+t).addClass("order__step--active")}}),$(document).on("change","select#shipping_method",function(e){var t=$(this).val();""!=t?$(this).parents(".order__step").find(".btn--next").removeClass("disabled"):$(this).parents(".order__step").find(".btn--next").addClass("disabled"),$(".shipping__fields").hide(),$("."+t+"_fields").show()}),$(document).on("change","select#payment_method",function(e){var t=$(this).val();""!=t?$(this).parents(".order__step").find(".btn--next").removeClass("disabled"):$(this).parents(".order__step").find(".btn--next").addClass("disabled")});var Router=function(){function e(e,r){if(0!=t(e)){var o=n(e);switch(o[0]){case"":case"index.html":case"products":new ProductsController(new ProductsViewHelper,new ProductsModel).main();break;case"product":new ProductController(new ProductViewHelper,new ProductModel(o[1])).main();break;case"register":new RegisterController(new RegisterViewHelper,new RegisterModel).main();break;case"login":new LoginController(new LoginViewHelper,new LoginModel).main();break;case"logout":new LogoutController(new LogoutViewHelper,new LogoutModel).main();break;case"register":new RegisterController(new RegisterViewHelper,new RegisterModel).main();break;case"resetpassword":new ResetPasswordController(new ResetPasswordViewHelper,new ResetPasswordModel).main();break;case"wishlist":new WishlistController(new WishlistViewHelper,new WishlistModel).main();break;case"admin":new AdminController(new AdminViewHelper,new AdminModel).main();break;case"admin_user":new AdminUserController(new AdminUserViewHelper,new AdminUserModel(o[1])).main();break;case"order":new OrderController(new OrderViewHelper,new OrderModel).main();break;default:new ErrorController(new ErrorViewHelper).main()}0!=r&&""!=e&&"string"==typeof e&&(i({},"A-Z Games",e),$("#cart-sidebar").removeClass("sidebar--open"),$(".overlay").removeClass("overlay--visible"),$("body").removeClass("sidebar--open"),showLoadScreen(),window.scrollTo(0,0))}}function t(e){return e.indexOf("http")==-1&&e.indexOf("https")==-1&&e.indexOf("www")==-1||(window.location=e,!1)}function n(e){return 0==e.indexOf("/")&&(e=e.substring(1)),null!=this.baseUrl&&e.indexOf(this.baseUrl)!=-1&&(e=e.substring(e.indexOf(this.baseUrl)+this.baseUrl.length)),e.split(/\/(.+)?/)}function i(e,t,n){window.history.pushState(e,t,n)}return baseUrl="project-webshop/",{route:e}};$(document).ready(function(){function e(e){$(e).toggleClass("sidebar--open"),$(".overlay").toggleClass("overlay--visible"),$("body").toggleClass("sidebar--open")}$(".sidebar-toggle").click(function(t){t.preventDefault();var n=$(this).data("sidebar");e($("#"+n))}),$(".sidebar__close").click(function(t){e($(this).parent().parent())}),$(".overlay").click(function(t){e($(".sidebar"))})}),$(document).on("mouseenter",".hasTooltip",function(e){var t=$(this).data("tooltip"),n=getOffset(this),i=$("<div class='tooltip'>"+t+"</div>");$("body").append(i),n.top=n.top+$(this).outerHeight(),n.left=n.left+$(this).outerWidth()/2-$(".tooltip").outerWidth()/2,i.css("left",n.left),i.css("top",n.top)}),$(document).on("mouseleave",".hasTooltip",function(e){$("body").find(".tooltip").remove()});var Router=new Router,CookieHelper=new CookieHelper,UserHelper=new UserHelper,WishlistHelper=new WishlistHelper;$.fn.serializeObject=function(){var e={},t=this.serializeArray();return $.each(t,function(){void 0!==e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),""!=this.value&&e[this.name].push(this.value)):""!=this.value&&(e[this.name]=this.value||"")}),e};var AdminModel=function(){function e(e){$.ajax({url:"https://api.az-games.nl/admin/users",type:"GET",dataType:"json",headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(t){e(t)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}return{getPage:e}},AdminUserModel=function(e){function t(t){$.ajax({url:"https://api.az-games.nl/admin/users/"+e,type:"GET",dataType:"json",headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){t(e[0])},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function n(e,t){e.date_of_birth=new Date(Date.UTC(e.jaar,e.maand,e.dag)),delete e.jaar,delete e.maand,delete e.dag,$.ajax({url:"https://api.az-games.nl/admin/users/"+e.user_id,type:"PATCH",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify(e),headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){t(e)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function i(e,t){$.ajax({url:"https://api.az-games.nl/admin/users/"+e,type:"DELETE",dataType:"json",headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){t()},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}return{getPage:t,saveUserInfo:n,deleteUser:i}},CartModel=function(){function e(e){var t=CookieHelper.getCookie("cart");void 0!=t&&e(JSON.parse(t))}function t(e,t){$.ajax({url:"https://api.az-games.nl/products/"+e,type:"get",contentType:"json",success:function(e){cart={ean_number:e[0].ean_number,title:e[0].title,price:e[0].price,image:e[0].image},t(cart);var n=CookieHelper.getCookie("cart");void 0==n?CookieHelper.createCookie("cart",JSON.stringify([cart])):(n=JSON.parse(n),n.push(cart),CookieHelper.createCookie("cart",JSON.stringify(n)))},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function n(e){for(cart=JSON.parse(CookieHelper.getCookie("cart")),i=0;i<cart.length;i++)if(cart[i].ean_number==e){cart.splice(i,1);break}CookieHelper.createCookie("cart",JSON.stringify(cart))}return{getCart:e,addProduct:t,removeProduct:n}},LoginModel=function(){function e(e,t,n){$.ajax({url:"https://api.az-games.nl/user/login",type:"GET",dataType:"json",headers:{Authorization:"Basic "+btoa(e+":"+t)},success:function(e){CookieHelper.createCookie("access_token",e.access_token),CookieHelper.createCookie("user_id",e.user_id),onLoadPage(),n(e)},error:function(e,t,n){$("#error_message").show()}})}return{login:e}},LogoutModel=function(){function e(e){function t(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0].trim()==e)return i[1]}}$.ajax({url:"https://api.az-games.nl/user/logout",type:"post",dataType:"json",data:JSON.stringify({user_id:t("user_id")}),success:function(t){CookieHelper.deleteCookie("access_token"),CookieHelper.deleteCookie("user_id"),onLoadPage(),e(t)},error:function(e,t,n){$("#error_message").show()}})}return{logout:e}},OrderModel=function(){function e(e){var t=CookieHelper.getCookie("cart");e(void 0!=t&&""!=t?JSON.parse(t):[])}function t(e,t){e.status="paid",e.btw_percentage=21,e.order_date=new Date,e.delivery_costs=3.95,e.cart=JSON.parse(CookieHelper.getCookie("cart")),$.ajax({url:"https://api.az-games.nl/orders",type:"post",dataType:"json",data:JSON.stringify(e),headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){CookieHelper.deleteCookie("cart"),t()},error:function(e,t,n){console.log("someting went wrong")}})}return{getOrderInformation:e,saveOrder:t}},ProductsModel=function(){function e(e,t){$.ajax({url:"https://api.az-games.nl/products?"+e,type:"get",dataType:"json",success:function(e){t(e)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}return{getPage:e}},RegisterModel=function(){function e(e,t){e.date_of_birth=new Date(Date.UTC(e.jaar,e.maand,e.dag)),delete e.jaar,delete e.maand,delete e.dag,$.ajax({url:"https://api.az-games.nl/user/register",type:"post",dataType:"json",data:JSON.stringify({e_mail:e.e_mailadres,password:e.wachtwoord,first_name:e.voornaam,insertion:e.tussenvoegsel,surname:e.achternaam,gender:e.gender,date_of_birth:e.birth_date,phone_number:e.mobiel_nummer,secret_question:e.security_question,secret_question_answer:e.security_answer,postal_code:e.postcode,number:e.huisnummer,street_name:e.straatnaam,city:e.plaats}),success:function(e){t(e)},error:function(e,t,n){$("#regi_api_error_message").show()}})}return{register:e}},ResetPasswordModel=function(){function e(e,t){console.log(e),$.ajax({url:"https://api.az-games.nl/user/resetpassword",type:"post",dataType:"json",data:JSON.stringify({email:e.e_mailadres,secret_question_answer:e.security_answer,secret_question:e.security_question,new_password:e.wachtwoord,repeat_password:e.wachtwoord2}),success:function(e){t(e)},error:function(e,t,n){$("#reset_password_api_error_message").show()}})}return{resetpassword:e}},ProductModel=function(e){function t(t){$.ajax({url:"https://api.az-games.nl/products/"+e,type:"get",dataType:"json",success:function(e){t(e[0])},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}return{GetProductInfo:t}},UserModel=function(e){function t(t){$.ajax({url:"https://api.az-games.nl/users/"+e,type:"get",dataType:"json",success:function(e){t(e[0])},error:function(e,t,n){$("#component").load("/error.html")}})}return{GetUserInfo:t}},WishlistModel=function(){function e(e){$.ajax({url:"https://api.az-games.nl/wishlist",type:"get",dataType:"json",headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(t){e(t)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function t(e,t){$.ajax({url:"https://api.az-games.nl/wishlist/"+CookieHelper.getCookie("user_id"),type:"post",dataType:"json",data:JSON.stringify({wishlist_id:e.wishlist_id}),headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){t(e)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function n(e,t){$.ajax({url:"https://api.az-games.nl/wishlist/"+CookieHelper.getCookie("user_id")+"/"+String(e),type:"DELETE",dataType:"json",headers:{Authorization:"Bearer "+CookieHelper.getCookie("access_token")},success:function(e){t(e)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}return{getWishlist:e,addToWishlist:t,deleteFromWishlist:n}},AdminController=function(e,t){function n(){s.setActionListener(i)}function i(){o.getPage(r)}function r(e){s.setView(e)}var o=t,s=e;return{main:n}},AdminUserController=function(e,t){function n(){c.setActionListener(i),e.setSaveListener(o),e.setDeleteListener(s)}function i(){a.getPage(r)}function r(e){c.setView(e)}function o(e){e.preventDefault(),e.stopImmediatePropagation();var t=$(this).serializeObject();a.saveUserInfo(t,function(e){alert("Gebruiker succesvol geüpdate.")})}function s(e){a.deleteUser(e,function(){alert("Gebruiker succesvol gedelete."),Router.route("/admin")})}var a=t,c=e;return{main:n}},CartController=function(e,t){function n(){s.getCart(function(e){a.setView(e)})}function i(e){s.addProduct(e,function(e){a.addItem(e)})}function r(e){s.removeProduct(e,function(e){})}function o(){a.setActionListener(n),a.setAddProductListener(i),a.setRemoveListener(r)}var s=t,a=e;return{main:o}},DeleteController=function(e,t){},ErrorController=function(e){function t(){n.setView()}var n=e;return{main:t}},LoginController=function(e,t){function n(e){e.preventDefault(),e.stopImmediatePropagation();var t={};$.each($(this).serializeArray(),function(e,n){t[n.name]=n.value}),r.login(t.email,t.password,function(e){$("#inloggen_text").hide(),$("#uitloggen_text").show(),Router.route("products")})}function i(){o.setView(),o.setActionListener(n)}var r=t,o=e;return{main:i}},LogoutController=function(e,t){function n(e){r.logout(function(e){$("#inloggen_text").show(),$("#uitloggen_text").hide(),o.setView()})}function i(){o.setActionListener(n)}var r=t,o=e;return{main:i}},OrderController=function(e,t){function n(e){o.getOrderInformation(function(e){s.setView(e)})}function i(e){e.preventDefault(),e.stopImmediatePropagation();var t=$(this).serializeObject();o.saveOrder(t,function(){s.finishOrder(),s.clearCart()})}function r(){0==UserHelper.isLogedIn()?Router.route("/login"):(s.setActionListener(n),s.setOrderListener(i))}var o=t,s=e;return{main:r}},ProductsController=function(e,t){function n(){o.getPage("",function(e){s.setView(e)})}function i(e){e.preventDefault();var t=$(this).serialize();o.getPage(t,function(e){s.loadProducts(e)})}function r(){s.setActionListener(n),s.setFilterListener(i)}var o=t,s=e;return{main:r}},RegisterController=function(e,t){function n(){event.preventDefault(),$("#regi_api_error_message").hide(),$("#ww2_error_message").hide();var e={};$.each($(this).serializeArray(),function(t,n){e[n.name]=n.value}),e.birth_date=e.jaar+"-"+e.maand+"-"+e.dag;var t=!1,n=["voornaam","achternaam","postcode","huisnummer","e_mailadres","wachtwoord","wachtwoord2","security_answer"];$.each(n,function(e,t){$("#"+t).removeClass("invalid")}),$.each(n,function(n,i){""==e[i]&&($("#"+i).addClass("invalid"),t=!0)}),t&&(window.scrollTo(0,0),$("#register_error_message").show());var i=!1;return e.wachtwoord!=e.wachtwoord2&&(i=!0,$("#ww2_error_message").show(),$("#wachtwoord").addClass("invalid"),$("#wachtwoord2").addClass("invalid")),!t&&!i&&void r.register(e,function(e){o.setView("/views/register/after_register.html")})}function i(){o.setView("/views/register/register.html"),o.setActionListener(n)}var r=t,o=e;return{main:i}},ResetPasswordController=function(e,t){function n(){console.log("in actionPerformed"),event.preventDefault(),$("#reset_password_api_error_message").hide(),$("#ww2_error_message").hide();var e={};$.each($(this).serializeArray(),function(t,n){e[n.name]=n.value});var t=!1,n=["wachtwoord","wachtwoord2","e_mailadres","security_answer"];$.each(n,function(e,t){$("#"+t).removeClass("invalid")}),$.each(n,function(n,i){""==e[i]&&($("#"+i).addClass("invalid"),t=!0)}),t&&(window.scrollTo(0,0),$("#reset_error_message").show());var i=!1;return e.wachtwoord!=e.wachtwoord2&&(i=!0,$("#ww2_error_message").show(),$("#wachtwoord").addClass("invalid"),$("#wachtwoord2").addClass("invalid")),!t&&!i&&(console.log("continued"),void r.resetpassword(e,function(e){o.setView("views/resetpassword/after_reset.html")}))}function i(){o.setView("views/resetpassword/resetpassword.html"),o.setActionListener(n)}var r=t,o=e;return{main:i}},ProductController=function(e,t){function n(t){e.setView(t)}function i(){t.GetProductInfo(n)}return{main:i,showView:n}},WishlistController=function(e,t){function n(){s.getWishlist(i)}function i(e){a.setView(e)}function r(){a.setActionListener(n),a.setDeleteListener(o)}function o(e,t){s.deleteFromWishlist(e,function(){a.hideItem(t)})}var s=t,a=e;return{main:r}},AdminViewHelper=function(){function e(e){$(document).ready(e)}function t(e){document.title="Admin - AZ Games",$("#component").load("/views/admin/admin.html",function(){$.each(e,function(e,t){var n=$("#single_user").clone();$(n).find(".user__firstname").html(t.first_name),$(n).find(".user__firstname").attr("href","/admin_user/"+t.user_id),$(n).find(".user__insertion").html(t.insertion),$(n).find(".user__lastname").html(t.surname),$(n).find(".user__email").html(t.email),$(n).find(".user__phonenumber").html(t.phone_number),$("#users_body").append(n)}),$("#single_user").first().remove()})}return{setActionListener:e,setView:t}},AdminUserViewHelper=function(){function e(e){$(document).ready(e)}function t(e){$("#component").load("/views/adminuser/adminuser.html",function(){$("#delete_btn").attr("data-id",e.user_id),$("#first_name").val(e.first_name),$("#insertion").val(e.insertion),$("#surname").val(e.surname),$("#user_type").val(e.user_type),$("#email").val(e.email),$("#password").attr("placeholder","Vul hier iets in om het wachtwoord te veranderen"),$("#gender").val(e.gender),$("#date_of_birth").val(e.date_of_birth),$("#phone_number").val(e.phone_number),$("#is_active").val(e.is_active),$("#user_id").val(e.user_id);var t=new Date,n=new Date(e.date_of_birth);for(i=1;i<32;i++)i==n.getDate()?$("#dag").append("<option value='"+i+"' selected='selected'>"+i+"</option>"):$("#dag").append("<option value='"+i+"'>"+i+"</option>");for(i=1900;i<t.getFullYear()+1;i++)i==n.getFullYear()?$("#jaar").append("<option value='"+i+"' selected='selected'>"+i+"</option>"):$("#jaar").append("<option value='"+i+"'>"+i+"</option>");$("#maand").val(n.getMonth())})}function n(e){$(document).on("submit","#userform",e)}function r(e){$("#component").off().on("click","#delete_btn",function(t){t.preventDefault(),e($(this).data("id"))})}return{setActionListener:e,setView:t,setSaveListener:n,setDeleteListener:r}},CartViewHelper=function(){function e(e){""!=e&&e.forEach(function(e,t){n(e)})}function t(e){e=parseFloat(e)+parseFloat($(".cart__total .price").html().substr(1)),$(".cart__total .price").html("€"+parseFloat(e).toFixed(2))}function n(e){var n=$("<div>").html($(".sidebar__content__tmp").html());n.find(".cart__item__title").html(e.title),n.find(".cart__item__price").html("€"+e.price.toFixed(2)),n.find(".cart__item__image img").attr("src",e.image),n.find(".cart__item").attr("data-id",e.ean_number),$(".cart").append(n);var i=$(".cart_button .count").html();$(".cart_button .count").html(parseInt(i)+1),t(e.price)}function i(e){$(document).ready(e)}function r(e){$("body").on("click",".addtocart",function(t){t.preventDefault();var n=$(this).data("id");e(n),$(this).closest("#to_shop_cart").find("#shop_cart").fadeTo(0,100).delay(1e3).fadeTo(600,0)})}function o(e){$("body").on("click",".cart__item__remove",function(n){var i=$(this).parent(),r=$(this).parent().data("id");$(i).addClass("cart__item--removed"),$(i).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).remove()});var o=$(".cart_button .count").html();$(".cart_button .count").html(parseInt(o)-1),e(r),t(-$(i).find(".cart__item__price").html().substr(1))})}return{setView:e,addItem:n,updateTotalPrice:t,setActionListener:i,setAddProductListener:r,setRemoveListener:o}},ErrorViewHelper=function(){function e(){document.title="Oeps - AZ Games",$("#component").load("/views/error/error.html")}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},LoginViewHelper=function(){function e(){document.title="Inloggen - AZ Games",$("#component").load("/views/login/login.html")}function t(e){$("#component").on("submit","#loginform",e)}return{setView:e,setActionListener:t}},LogoutViewHelper=function(){function e(){document.title="Uitloggen - AZ Games",$("#component").load("/views/logout/logout.html")}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},ProductsViewHelper=function(){function e(e){document.title="Producten - AZ Games",$("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>'),$("#filters").load("/views/products/filters.html"),t(e)}function t(e){$("#products").load("/views/products/products.html",function(){$.each(e,function(e,t){var i=$("<div>").append($("#product__list__item").clone());$(i).find(".product__title").html(t.title),$(i).find(".product__subtitle").append(t.genre+" | PEGI "+t.pegi_age+" | "+PlatformLogo(t.platform)),$(i).find(".product__description").html(n(t.description)),$(i).find(".product__price").append("€ "+t.price.toFixed(2)),$(i).find("#buttons__info, .product__image a, .product__title").attr("href","product/"+t.ean_number),$(i).find(".product__image img").attr("src",t.image),$(i).find(".addtocart").attr("data-id",t.ean_number),$("#product__list").append(i)}),$("#product__list__item").first().remove()})}function n(e){var t=50,n=e.split(" ");if(n.length>t){var r="";for(i=0;i<t;i++)r+=n[i]+" ";return r+"..."}return e}function r(e){$(document).ready(e)}function o(e){$("#component").off().on("change","input[type=checkbox]",function(e){$("#product_filter").submit()}),$("#component").on("change keyup","input[name=price-max], input[name=price-min]",function(e){null==$("#pricemin").val()?$("#pricemin").val(0):$("#product_filter").submit()}),$("#component").on("submit","#product_filter",e)}return{setView:e,loadProducts:t,setActionListener:r,setFilterListener:o}},OrderViewHelper=function(){function e(e){document.title="Bestellen - AZ Games",$("#component").load("/views/order/order.html",function(){void 0!=e&&""!=e?($.each(e,function(e,t){var n=$("#product").clone();$(n).find(".product__title").html(t.title),$(n).find(".product__image img").attr("src",t.image),$(n).find(".product__price").append("€ "+t.price.toFixed(2)),$("#product__list").append(n),$("#product__list").append("<hr />")}),$("#order_info .order__navigate").first().removeClass("disabled")):$("#product__list").html("<div class='message message--info'>Je winkelwagen is nog leeg, stop er producten in om deze te kunnen bestellen.</div>"),$("#product").first().remove(),$("#total").appendTo("#product__list"),$(".total__price").html($(".cart__total .price").html());var t=new Date;t.setDate(t.getDate()+1),$(".delivery_date").html(t.getDate()+" "+t.toLocaleString("nl-NL",{month:"long"})),$(".delivery__calendar__month").html(t.toLocaleString("nl-NL",{month:"short"}).toUpperCase()),$(".delivery__calendar__day").html(t.getDate()),UserHelper.getUserInfo(function(e){$(".adres__name").html(e.first_name+" "+e.insertion+" "+e.surname),$(".adres__street").html(e.address.street+" "+e.address.house_number),$(".adres__postalcode").html(e.address.postal_code+" "+e.address.city.toUpperCase())})})}function t(){$("ul.order-steps li").removeClass("active"),$("ul.order-steps li a").addClass("disabled"),$("ul.order-steps li.confirmation").addClass("active"),$(".order__step").removeClass("order__step--active"),$("#confirmation").addClass("order__step--active")}function n(){$(".cart").empty(),$(".cart_button .count").html("0"),$(".cart__total .price").html("€00.00")}function i(e){$(document).ready(e)}function r(e){$(document).on("submit","#orderform",e)}return{setView:e,setActionListener:i,setOrderListener:r,finishOrder:t,clearCart:n}},RegisterViewHelper=function(){function e(e){document.title="Registreren - AZ Games",$("#component").load(e,function(){var e=new Date;for(i=1;i<32;i++)$("#dag").append("<option value='"+i+"'>"+i+"</option>");for(i=1900;i<e.getFullYear()+1;i++)2e3!=i?$("#jaar").append("<option value='"+i+"'>"+i+"</option>"):$("#jaar").append("<option value='"+i+"' selected='selected'>"+i+"</option>")})}function t(e){$("#component").on("submit","#registerform",e)}return{setView:e,setActionListener:t}},ResetPasswordViewHelper=function(){function e(e){document.title="Inloggen - AZ Games",$("#component").load(e)}function t(e){$("#component").on("submit","#resetform",e)}return{setView:e,setActionListener:t}},ProductViewHelper=function(){function e(e){document.title=e.title+" - AZ Games",$("#component").load("/views/single_product/single_product.html",function(){$(".singleproduct__image img").attr("src",e.image),$(".singleproduct__title").html(e.title),$(".singleproduct__price").html("€ "+e.price.toFixed(2)),$(".singleproduct__ean").append(e.ean_number),$(".singleproduct__platform").append(PlatformLogo(e.platform)),$(".singleproduct__publisher").append(PlatformLogo(e.publisher)),$(".singleproduct__pegi").append(e.pegi_age),$(".singleproduct__genre").append(e.genre),$(".singleproduct__descr").html(e.description),$(".addtocart").attr("data-id",e.ean_number),UserHelper.isLogedIn()?$(".addToWishlistButton").attr("onclick","WishlistHelper.addItem("+e.ean_number+");"):$(".addToWishlistButton").hide();var t=new Date(e.release_date),n=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];$(".singleproduct__releasedate").append(t.getDay()+" "+n[t.getMonth()]+" "+t.getFullYear())})}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},WishlistViewHelper=function(){function e(e){document.title="Wishlist - AZ Games",$("#component").html('<div class="col-12"><div class="col-12" id="wishlist"></div></div>'),t(e)}function t(e){$("#wishlist").load("/views/wishlist/wishlist.html",function(){var t=0,n=0;$.each(e,function(e,i){var r=$("<div>").append($("#wish__list__item").clone());t+=1,$(r).find(".wish__list__id").append(t),$(r).find(".wish__list__image img").attr("src",i.image),$(r).find(".wish__list__title").html(i.title),$(r).find(".wish__list__price").append("€ "+i.price),$(r).find(".wish__list__platform").append(PlatformLogo(i.platform)),$(r).find(".wish__list__availability").append(BeschikbaarheidKleur(i.stock)),$(r).find(".wish__list__likebutton").append(),$(r).find("#delete_btn").attr("data-id",i.ean_number),$(r).find("#cart_btn").attr("data-id",i.ean_number),$("#wish__list").append(r),n++}),0==n&&$("#wishlist_error_message").show(),$("#wish__list__item").first().remove()})}function n(e){$(document).ready(e)}function i(e){$("#component").off().on("click","#delete_btn",function(t){t.preventDefault();var n=$(this).data("id"),i=$(this).closest(".row");e(n,i)})}function r(e){e.fadeTo(200,0).slideUp(200)}return{setView:e,loadWishlist:t,setActionListener:n,setDeleteListener:i,hideItem:r}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbm9ydG9vbHMuanMiLCJ0b29sdGlwLmpzIiwiaGVscGVycy9jb29raWUuanMiLCJoZWxwZXJzL2dsb2JhbC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJvcmRlci5qcyIsInJvdXRlci5qcyIsInNpZGViYXIuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImFkbWluX21vZGVsLmpzIiwiYWRtaW51c2VyX21vZGVsLmpzIiwiY2FydF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwidXNlcl9tb2RlbC5qcyIsIndpc2hsaXN0X21vZGVsLmpzIiwiYWRtaW5fY29udHJvbGxlci5qcyIsImFkbWludXNlcl9jb250cm9sbGVyLmpzIiwiY2FydF9jb250cm9sbGVyLmpzIiwiZGVsZXRlX2NvbnRyb2xsZXIuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwibG9naW5fY29udHJvbGxlci5qcyIsImxvZ291dF9jb250cm9sbGVyLmpzIiwib3JkZXJfY29udHJvbGxlci5qcyIsInByb2R1Y3RzX2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsIndpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJhZG1pbi9hZG1pbl92aWV3LmpzIiwiYWRtaW51c2VyL2FkbWludXNlcl92aWV3LmpzIiwiY2FydC9jYXJ0X3ZpZXcuanMiLCJlcnJvci9lcnJvcl92aWV3LmpzIiwibG9naW4vbG9naW5fdmlldy5qcyIsImxvZ291dC9sb2dvdXRfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJvcmRlci9vcmRlcl92aWV3LmpzIiwicmVnaXN0ZXIvcmVnaXN0ZXJfdmlldy5qcyIsInJlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZF92aWV3LmpzIiwic2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3Rfdmlldy5qcyIsIndpc2hsaXN0L3dpc2hsaXN0X3ZpZXcuanMiXSwibmFtZXMiOlsiUGxhdGZvcm1Mb2dvIiwicGxhdGZvcm1uYWFtIiwidG9VcHBlckNhc2UiLCJCZXNjaGlrYmFhcmhlaWRLbGV1ciIsInN0b2NrdmFsdWUiLCJnZXRPZmZzZXQiLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ3aW5kb3ciLCJzY3JvbGxYIiwidG9wIiwic2Nyb2xsWSIsIkNvb2tpZUhlbHBlciIsInRoaXMiLCJnZXRDb29raWUiLCJuYW1lIiwiY29va2llcyIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwidHJpbSIsImNyZWF0ZUNvb2tpZSIsInZhbHVlIiwiZCIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJ0b1VUQ1N0cmluZyIsImRlbGV0ZUNvb2tpZSIsInNob3dMb2FkU2NyZWVuIiwiJCIsImh0bWwiLCJvbkxvYWRQYWdlIiwiVXNlckhlbHBlciIsImlzQWRtaW4iLCJjc3MiLCJoaWRlIiwiaXNDdXN0b21lciIsImlzTG9nZWRJbiIsImFjY2Vzc1Rva2VuIiwidW5kZWZpbmVkIiwidXNlcnR5cGUiLCJkZWNvZGVUb2tlbiIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJhdG9iIiwiZ2V0VXNlckluZm8iLCJjYWxsYmFjayIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJ4aHIiLCJzdGF0dXMiLCJSb3V0ZXIiLCJyb3V0ZSIsIldpc2hsaXN0SGVscGVyIiwiYWRkSXRlbSIsImVhbl9udW1iZXIiLCJzdHJpbmdpZnkiLCJ0b2dnbGVDbGFzcyIsImFsZXJ0Iiwib24iLCJldmVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwic3RlcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ2YWwiLCJwYXJlbnRzIiwiZmluZCIsInNob3ciLCJoaXN0b3J5IiwiaXNJbnRlcm5hbCIsInBhcnRpY2xlcyIsImdldFBhcnRpY2xlcyIsIlByb2R1Y3RzQ29udHJvbGxlciIsIlByb2R1Y3RzVmlld0hlbHBlciIsIlByb2R1Y3RzTW9kZWwiLCJtYWluIiwiUHJvZHVjdENvbnRyb2xsZXIiLCJQcm9kdWN0Vmlld0hlbHBlciIsIlByb2R1Y3RNb2RlbCIsIlJlZ2lzdGVyQ29udHJvbGxlciIsIlJlZ2lzdGVyVmlld0hlbHBlciIsIlJlZ2lzdGVyTW9kZWwiLCJMb2dpbkNvbnRyb2xsZXIiLCJMb2dpblZpZXdIZWxwZXIiLCJMb2dpbk1vZGVsIiwiTG9nb3V0Q29udHJvbGxlciIsIkxvZ291dFZpZXdIZWxwZXIiLCJMb2dvdXRNb2RlbCIsIlJlc2V0UGFzc3dvcmRDb250cm9sbGVyIiwiUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIiLCJSZXNldFBhc3N3b3JkTW9kZWwiLCJXaXNobGlzdENvbnRyb2xsZXIiLCJXaXNobGlzdFZpZXdIZWxwZXIiLCJXaXNobGlzdE1vZGVsIiwiQWRtaW5Db250cm9sbGVyIiwiQWRtaW5WaWV3SGVscGVyIiwiQWRtaW5Nb2RlbCIsIkFkbWluVXNlckNvbnRyb2xsZXIiLCJBZG1pblVzZXJWaWV3SGVscGVyIiwiQWRtaW5Vc2VyTW9kZWwiLCJPcmRlckNvbnRyb2xsZXIiLCJPcmRlclZpZXdIZWxwZXIiLCJPcmRlck1vZGVsIiwiRXJyb3JDb250cm9sbGVyIiwiRXJyb3JWaWV3SGVscGVyIiwid3JpdGVIaXN0b3J5Iiwic2Nyb2xsVG8iLCJpbmRleE9mIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwib2JqZWN0IiwidGl0bGUiLCJwdXNoU3RhdGUiLCJyZWFkeSIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyIiwiY2xpY2siLCJwYXJlbnQiLCJjb250ZW50IiwicG9zaXRpb24iLCJ0b29sdGlwIiwiYXBwZW5kIiwib3V0ZXJIZWlnaHQiLCJvdXRlcldpZHRoIiwicmVtb3ZlIiwiZm4iLCJzZXJpYWxpemVPYmplY3QiLCJvIiwiYSIsInNlcmlhbGl6ZUFycmF5IiwiZWFjaCIsInB1c2giLCJnZXRQYWdlIiwibG9hZCIsImlkIiwic2F2ZVVzZXJJbmZvIiwiZGF0ZV9vZl9iaXJ0aCIsIlVUQyIsImphYXIiLCJtYWFuZCIsImRhZyIsInVzZXJfaWQiLCJjb250ZW50VHlwZSIsImRlbGV0ZVVzZXIiLCJDYXJ0TW9kZWwiLCJnZXRDYXJ0IiwiY2FydCIsImFkZFByb2R1Y3QiLCJwcmljZSIsImltYWdlIiwiY3VycmVudENhcnQiLCJyZW1vdmVQcm9kdWN0Iiwic3BsaWNlIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiYnRvYSIsImFjY2Vzc190b2tlbiIsImxvZ291dCIsImdldE9yZGVySW5mb3JtYXRpb24iLCJzYXZlT3JkZXIiLCJvcmRlckRhdGEiLCJidHdfcGVyY2VudGFnZSIsIm9yZGVyX2RhdGUiLCJkZWxpdmVyeV9jb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJyZWdpc3RlciIsImZvcm1EYXRhIiwiZV9tYWlsIiwiZV9tYWlsYWRyZXMiLCJ3YWNodHdvb3JkIiwiZmlyc3RfbmFtZSIsInZvb3JuYWFtIiwiaW5zZXJ0aW9uIiwidHVzc2Vudm9lZ3NlbCIsInN1cm5hbWUiLCJhY2h0ZXJuYWFtIiwiZ2VuZGVyIiwiYmlydGhfZGF0ZSIsInBob25lX251bWJlciIsIm1vYmllbF9udW1tZXIiLCJzZWNyZXRfcXVlc3Rpb24iLCJzZWN1cml0eV9xdWVzdGlvbiIsInNlY3JldF9xdWVzdGlvbl9hbnN3ZXIiLCJzZWN1cml0eV9hbnN3ZXIiLCJwb3N0YWxfY29kZSIsInBvc3Rjb2RlIiwibnVtYmVyIiwiaHVpc251bW1lciIsInN0cmVldF9uYW1lIiwic3RyYWF0bmFhbSIsImNpdHkiLCJwbGFhdHMiLCJyZXNldHBhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwicmVwZWF0X3Bhc3N3b3JkIiwid2FjaHR3b29yZDIiLCJlYW4iLCJHZXRQcm9kdWN0SW5mbyIsIlVzZXJNb2RlbCIsInVzZXJpZCIsIkdldFVzZXJJbmZvIiwiZ2V0V2lzaGxpc3QiLCJhZGRUb1dpc2hsaXN0Iiwidmlld0RhdGEiLCJ3aXNobGlzdF9pZCIsImRlbGV0ZUZyb21XaXNobGlzdCIsIlN0cmluZyIsInZpZXdIZWxwZXIiLCJtb2RlbCIsIlZpZXdIZWxwZXIiLCJzZXRBY3Rpb25MaXN0ZW5lciIsIk1vZGVsIiwic2V0VmlldyIsInNldFNhdmVMaXN0ZW5lciIsInNldERlbGV0ZUxpc3RlbmVyIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiQ2FydENvbnRyb2xsZXIiLCJzZXRBZGRQcm9kdWN0TGlzdGVuZXIiLCJzZXRSZW1vdmVMaXN0ZW5lciIsIkRlbGV0ZUNvbnRyb2xsZXIiLCJhY3Rpb25QZXJmb3JtZWQiLCJmaWVsZCIsIm9yZGVyIiwiZmluaXNoT3JkZXIiLCJjbGVhckNhcnQiLCJzZXRPcmRlckxpc3RlbmVyIiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJzIiwic2VyaWFsaXplIiwibG9hZFByb2R1Y3RzIiwic2V0RmlsdGVyTGlzdGVuZXIiLCJtYW5kYXRvcnlGaWVsZE1pc3NlcyIsIm1hbmRhdG9yeUZpZWxkcyIsIm1hbkZpZWxkIiwicGFzc3dvcmRzTm90SWRlbnRpY2FsIiwic2hvd1ZpZXciLCJkaXZfdG9faGlkZSIsImhpZGVJdGVtIiwiYWN0aW9uIiwia2V5IiwidXNlciIsImNsb25lIiwiYXR0ciIsImZpcnN0IiwidXNlcl90eXBlIiwiaXNfYWN0aXZlIiwidG9kYXkiLCJkYXRlT2ZCaXJ0aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwib2ZmIiwiQ2FydFZpZXdIZWxwZXIiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwidXBkYXRlVG90YWxQcmljZSIsIm5ld1ByaWNlIiwicGFyc2VGbG9hdCIsInN1YnN0ciIsInRvRml4ZWQiLCJjYXJ0SXRlbSIsImFtb3VudCIsInBhcnNlSW50IiwiYWRkVG9DYXJ0IiwicHJvZHVjdF9pZCIsImNsb3Nlc3QiLCJmYWRlVG8iLCJkZWxheSIsImNhcnRpdGVtIiwiZXZlbnRIYW5kbGVyIiwicHJvZHVjdCIsImdlbnJlIiwicGVnaV9hZ2UiLCJwbGF0Zm9ybSIsIkN1dFN0cmluZyIsImRlc2NyaXB0aW9uIiwidGV4dCIsIlNob3dBbW91bnQiLCJXb3Jkc0FycmF5IiwiU2hvcnRTdHJpbmciLCJzdWJtaXQiLCJhcHBlbmRUbyIsInNldERhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwiYWRkcmVzcyIsInN0cmVldCIsImhvdXNlX251bWJlciIsImVtcHR5Iiwidmlld1RvU2hvdyIsImRhdGUiLCJwdWJsaXNoZXIiLCJyZWxlYXNlX2RhdGUiLCJtb250aHMiLCJnZXREYXkiLCJsb2FkV2lzaGxpc3QiLCJjdXJyZW50IiwiY291bnQiLCJ3aXNoX19saXN0X19pdGVtIiwic3RvY2siLCJzbGlkZVVwIl0sIm1hcHBpbmdzIjoiQUFDQSxRQUFBQSxjQUFBQyxHQUdBLE9BREFBLEVBQUFBLEVBQUFDLGVBSUEsSUFBQSxNQUNBLE1BQUEsK0NBQ0EsS0FBQSxNQUNBLE1BQUEsK0NBQ0EsS0FBQSxLQUNBLE1BQUEsbURBQ0EsS0FBQSxPQUNBLE1BQUEsZ0RBQ0EsS0FBQSxNQUNBLE1BQUEsK0NBQ0EsS0FBQSxNQUNBLE1BQUEsK0NBQ0EsS0FBQSxrQkFDQSxNQUFBLGtEQUNBLFNBQ0EsTUFBQUQsRUFHQSxLQUFBLFdBQ0EsTUFBQSx5REFDQSxLQUFBLFVBQ0EsTUFBQSx3REFDQSxLQUFBLGtCQUNBLE1BQUEscURBSUEsUUFBQUUsc0JBQUFDLEdBRUEsTUFBQUEsSUFBQSxFQUNBLDZEQUNBQSxHQUFBLEVBQ0EsK0RBRUFBLEVDbEJBLFFBQUFDLFdBQUFDLEdBSUEsTUFGQUEsR0FBQUEsRUFBQUMseUJBR0FDLEtBQUFGLEVBQUFFLEtBQUFDLE9BQUFDLFFBQ0FDLElBQUFMLEVBQUFLLElBQUFGLE9BQUFHLFNDMUJBLFFBQUFDLGdCQVNBQyxLQUFBQyxVQUFBLFNBQUFDLEdBSUEsSUFBQSxHQUZBQyxHQUFBQyxTQUFBQyxPQUFBQyxNQUFBLEtBRUFDLEVBQUEsRUFBQUEsRUFBQUosRUFBQUssT0FBQUQsSUFDQSxDQUNBLEdBQUFGLEdBQUFGLEVBQUFJLEdBQUFELE1BQUEsSUFFQSxJQUFBRCxFQUFBLEdBQUFJLFFBQUFQLEVBRUEsTUFBQUcsR0FBQSxLQWFBTCxLQUFBVSxhQUFBLFNBQUFSLEVBQUFTLEdBRUEsR0FBQUMsR0FBQSxHQUFBQyxLQUNBRCxHQUFBRSxRQUFBRixFQUFBRyxVQUFBLE1BQ0EsSUFBQUMsR0FBQSxXQUFBSixFQUFBSyxhQUVBYixVQUFBQyxPQUFBSCxFQUFBLElBQUFTLEVBQUEsSUFBQUssRUFBQSxXQVVBaEIsS0FBQWtCLGFBQUEsU0FBQWhCLEdBRUFFLFNBQUFDLE9BQUFILEVBQUEsNkNDaERBLFFBQUFpQixrQkFFQUMsRUFBQSxjQUFBQyxLQUFBLGlIQUdBLFFBQUFDLGNBRUFDLFdBQUFDLFdBRUFKLEVBQUEsa0JBQUFLLElBQUEsVUFBQSxnQkFDQUwsRUFBQSxxQkFBQUssSUFBQSxVQUFBLGdCQUNBTCxFQUFBLGtCQUFBTSxRQUVBSCxXQUFBSSxjQUVBUCxFQUFBLHFCQUFBSyxJQUFBLFVBQUEsZ0JBQ0FMLEVBQUEsa0JBQUFNLFNBSUFOLEVBQUEsa0JBQUFNLE9BQ0FOLEVBQUEscUJBQUFNLE9BQ0FOLEVBQUEsa0JBQUFLLElBQUEsVUFBQSxpQkN4QkEsUUFBQUYsY0FLQXZCLEtBQUE0QixVQUFBLFdBRUEsR0FBQUMsR0FBQTlCLGFBQUFFLFVBQUEsZUFFQSxPQUFBNkIsU0FBQUQsR0FBQSxJQUFBQSxHQVdBN0IsS0FBQTJCLFdBQUEsV0FFQSxHQUFBSixXQUFBSyxZQUNBLENBQ0EsR0FBQUcsR0FBQS9CLEtBQUFnQyxjQUFBRCxRQUVBLElBQUEsWUFBQUEsR0FBQSxTQUFBQSxFQUVBLE9BQUEsRUFJQSxPQUFBLEdBTUEvQixLQUFBd0IsUUFBQSxXQUVBLEdBQUFELFdBQUFLLFlBQ0EsQ0FDQSxHQUFBRyxHQUFBL0IsS0FBQWdDLGNBQUFELFFBRUEsSUFBQSxTQUFBQSxFQUVBLE9BQUEsRUFJQSxPQUFBLEdBTUEvQixLQUFBZ0MsWUFBQSxXQUVBLEdBQUFILEdBQUE5QixhQUFBRSxVQUFBLGVBRUEsSUFBQTZCLFFBQUFELEdBQUEsSUFBQUEsRUFDQSxDQUNBLEdBQUFJLEdBQUFKLEVBQUF2QixNQUFBLEtBQUEsRUFFQSxPQUFBNEIsTUFBQUMsTUFBQUMsS0FBQUgsTUFPQWpDLEtBQUFxQyxZQUFBLFNBQUFDLEdBRUFsQixFQUFBbUIsTUFDQUMsSUFBQSwrQkFDQUMsS0FBQSxNQUNBQyxTQUFBLE9BQ0FDLFNBQ0FDLGNBQUEsVUFBQTdDLGFBQUFFLFVBQUEsaUJBRUE0QyxRQUFBLFNBQUFDLEdBQ0FSLEVBQUFRLElBRUFDLE1BQUEsU0FBQUMsRUFBQUMsRUFBQUYsR0FDQUcsT0FBQUMsTUFBQSxjQ3BGQSxRQUFBQyxrQkFTQXBELEtBQUFxRCxRQUFBLFNBQUFDLEdBRUFsQyxFQUFBbUIsTUFDQUMsSUFBQSxvQ0FBQXpDLGFBQUFFLFVBQUEsV0FBQSxJQUFBcUQsRUFDQWIsS0FBQSxPQUNBQyxTQUFBLE9BQ0FJLEtBQUFaLEtBQUFxQixjQUNBWixTQUNBQyxjQUFBLFVBQUE3QyxhQUFBRSxVQUFBLGlCQUVBNEMsUUFBQSxTQUFBQyxHQUNBMUIsRUFBQXBCLE1BQUF3RCxZQUFBLGdCQUNBQyxNQUFBLCtDQUVBVixNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0FVLE1BQUEsa0NMbUJBckMsRUFBQWhCLFVBQUFzRCxHQUFBLFFBQUEsWUFBQSxTQUFBQyxHQUNBdkMsRUFBQXBCLE1BQUF3RCxZQUFBLGtCQUlBcEMsRUFBQWhCLFVBQUFzRCxHQUFBLFFBQUEsbUJBQUEsU0FBQUMsR0FDQXZDLEVBQUFwQixNQUFBd0QsWUFBQSx5Qk1wREFwQyxFQUFBaEIsVUFBQXNELEdBQUEsUUFBQSxvQkFBQSxTQUFBRSxHQUdBLEdBRkFBLEVBQUFDLGlCQUVBLEdBQUF6QyxFQUFBcEIsTUFBQThELFNBQUEsWUFDQSxDQUVBLEdBQUFDLEdBQUEzQyxFQUFBcEIsTUFBQThDLEtBQUEsT0FHQTFCLEdBQUEscUJBQUE0QyxZQUFBLFVBQ0E1QyxFQUFBLHFCQUFBMkMsR0FBQUUsU0FBQSxVQUNBN0MsRUFBQSxxQkFBQTJDLEVBQUEsTUFBQUMsWUFBQSxZQUVBNUMsRUFBQSxnQkFBQTRDLFlBQUEsdUJBQ0E1QyxFQUFBLElBQUEyQyxHQUFBRSxTQUFBLDBCQUlBN0MsRUFBQWhCLFVBQUFzRCxHQUFBLFNBQUEseUJBQUEsU0FBQUUsR0FFQSxHQUFBTSxHQUFBOUMsRUFBQXBCLE1BQUFrRSxLQUVBLEtBQUFBLEVBRUE5QyxFQUFBcEIsTUFBQW1FLFFBQUEsZ0JBQUFDLEtBQUEsY0FBQUosWUFBQSxZQUlBNUMsRUFBQXBCLE1BQUFtRSxRQUFBLGdCQUFBQyxLQUFBLGNBQUFILFNBQUEsWUFHQTdDLEVBQUEscUJBQUFNLE9BQ0FOLEVBQUEsSUFBQThDLEVBQUEsV0FBQUcsU0FHQWpELEVBQUFoQixVQUFBc0QsR0FBQSxTQUFBLHdCQUFBLFNBQUFFLEdBRUEsR0FBQU0sR0FBQTlDLEVBQUFwQixNQUFBa0UsS0FFQSxLQUFBQSxFQUVBOUMsRUFBQXBCLE1BQUFtRSxRQUFBLGdCQUFBQyxLQUFBLGNBQUFKLFlBQUEsWUFJQTVDLEVBQUFwQixNQUFBbUUsUUFBQSxnQkFBQUMsS0FBQSxjQUFBSCxTQUFBLGFDN0NBLElBQUFmLFFBQUEsV0FJQSxRQUFBQyxHQUFBWCxFQUFBOEIsR0FFQSxHQUFBLEdBQUFDLEVBQUEvQixHQUFBLENBS0EsR0FBQWdDLEdBQUFDLEVBQUFqQyxFQUVBLFFBQUFnQyxFQUFBLElBRUEsSUFBQSxHQUNBLElBQUEsYUFDQSxJQUFBLFdBQ0EsR0FBQUUsb0JBQUEsR0FBQUMsb0JBQUEsR0FBQUMsZ0JBQUFDLE1BQ0EsTUFDQSxLQUFBLFVBQ0EsR0FBQUMsbUJBQUEsR0FBQUMsbUJBQUEsR0FBQUMsY0FBQVIsRUFBQSxLQUFBSyxNQUNBLE1BQ0EsS0FBQSxXQUNBLEdBQUFJLG9CQUFBLEdBQUFDLG9CQUFBLEdBQUFDLGdCQUFBTixNQUNBLE1BQ0EsS0FBQSxRQUNBLEdBQUFPLGlCQUFBLEdBQUFDLGlCQUFBLEdBQUFDLGFBQUFULE1BQ0EsTUFDQSxLQUFBLFNBQ0EsR0FBQVUsa0JBQUEsR0FBQUMsa0JBQUEsR0FBQUMsY0FBQVosTUFDQSxNQUNBLEtBQUEsV0FDQSxHQUFBSSxvQkFBQSxHQUFBQyxvQkFBQSxHQUFBQyxnQkFBQU4sTUFDQSxNQUNBLEtBQUEsZ0JBQ0EsR0FBQWEseUJBQUEsR0FBQUMseUJBQUEsR0FBQUMscUJBQUFmLE1BQ0EsTUFDQSxLQUFBLFdBQ0EsR0FBQWdCLG9CQUFBLEdBQUFDLG9CQUFBLEdBQUFDLGdCQUFBbEIsTUFDQSxNQUNBLEtBQUEsUUFDQSxHQUFBbUIsaUJBQUEsR0FBQUMsaUJBQUEsR0FBQUMsYUFBQXJCLE1BQ0EsTUFDQSxLQUFBLGFBQ0EsR0FBQXNCLHFCQUFBLEdBQUFDLHFCQUFBLEdBQUFDLGdCQUFBN0IsRUFBQSxLQUFBSyxNQUNBLE1BQ0EsS0FBQSxRQUNBLEdBQUF5QixpQkFBQSxHQUFBQyxpQkFBQSxHQUFBQyxhQUFBM0IsTUFDQSxNQUNBLFNBQ0EsR0FBQTRCLGlCQUFBLEdBQUFDLGtCQUFBN0IsT0FJQSxHQUFBUCxHQUVBLElBQUE5QixHQUFBLGdCQUFBQSxLQUVBbUUsS0FBQSxZQUFBbkUsR0FHQXBCLEVBQUEsaUJBQUE0QyxZQUFBLGlCQUNBNUMsRUFBQSxZQUFBNEMsWUFBQSxvQkFDQTVDLEVBQUEsUUFBQTRDLFlBQUEsaUJBQ0E3QyxpQkFHQXhCLE9BQUFpSCxTQUFBLEVBQUEsS0FLQSxRQUFBckMsR0FBQS9CLEdBRUEsTUFBQUEsR0FBQXFFLFFBQUEsVUFBQSxHQUFBckUsRUFBQXFFLFFBQUEsV0FBQSxHQUFBckUsRUFBQXFFLFFBQUEsU0FBQSxJQUVBbEgsT0FBQW1ILFNBQUF0RSxHQUVBLEdBTUEsUUFBQWlDLEdBQUFqQyxHQWNBLE1BWEEsSUFBQUEsRUFBQXFFLFFBQUEsT0FFQXJFLEVBQUFBLEVBQUF1RSxVQUFBLElBSUEsTUFBQS9HLEtBQUFnSCxTQUFBeEUsRUFBQXFFLFFBQUE3RyxLQUFBZ0gsV0FBQSxJQUVBeEUsRUFBQUEsRUFBQXVFLFVBQUF2RSxFQUFBcUUsUUFBQTdHLEtBQUFnSCxTQUFBaEgsS0FBQWdILFFBQUF4RyxTQUdBZ0MsRUFBQWxDLE1BQUEsV0FHQSxRQUFBcUcsR0FBQU0sRUFBQUMsRUFBQTFFLEdBRUE3QyxPQUFBMkUsUUFBQTZDLFVBQUFGLEVBQUFDLEVBQUExRSxHQUdBLE1BekdBd0UsU0FBQSxvQkEwR0E3RCxNQUFBQSxHQzVHQS9CLEdBQUFoQixVQUFBZ0gsTUFBQSxXQXFCQSxRQUFBQyxHQUFBQyxHQUVBbEcsRUFBQWtHLEdBQUE5RCxZQUFBLGlCQUNBcEMsRUFBQSxZQUFBb0MsWUFBQSxvQkFDQXBDLEVBQUEsUUFBQW9DLFlBQUEsaUJBdkJBcEMsRUFBQSxtQkFBQW1HLE1BQUEsU0FBQTNELEdBR0FBLEVBQUFDLGdCQUdBLElBQUF5RCxHQUFBbEcsRUFBQXBCLE1BQUE4QyxLQUFBLFVBRUF1RSxHQUFBakcsRUFBQSxJQUFBa0csTUFHQWxHLEVBQUEsbUJBQUFtRyxNQUFBLFNBQUEzRCxHQUNBeUQsRUFBQWpHLEVBQUFwQixNQUFBd0gsU0FBQUEsWUFHQXBHLEVBQUEsWUFBQW1HLE1BQUEsU0FBQTNELEdBQ0F5RCxFQUFBakcsRUFBQSxpQlBsQkFBLEVBQUFoQixVQUFBc0QsR0FBQSxhQUFBLGNBQUEsU0FBQUMsR0FHQSxHQUFBOEQsR0FBQXJHLEVBQUFwQixNQUFBOEMsS0FBQSxXQUNBNEUsRUFBQW5JLFVBQUFTLE1BR0EySCxFQUFBdkcsRUFBQSx3QkFBQXFHLEVBQUEsU0FDQXJHLEdBQUEsUUFBQXdHLE9BQUFELEdBR0FELEVBQUE3SCxJQUFBNkgsRUFBQTdILElBQUF1QixFQUFBcEIsTUFBQTZILGNBQ0FILEVBQUFoSSxLQUFBZ0ksRUFBQWhJLEtBQUEwQixFQUFBcEIsTUFBQThILGFBQUEsRUFBQTFHLEVBQUEsWUFBQTBHLGFBQUEsRUFHQUgsRUFBQWxHLElBQUEsT0FBQWlHLEVBQUFoSSxNQUNBaUksRUFBQWxHLElBQUEsTUFBQWlHLEVBQUE3SCxPQUdBdUIsRUFBQWhCLFVBQUFzRCxHQUFBLGFBQUEsY0FBQSxTQUFBQyxHQUNBdkMsRUFBQSxRQUFBZ0QsS0FBQSxZQUFBMkQsVUVwQkEsSUFBQTdFLFFBQUEsR0FBQUEsUUFDQW5ELGFBQUEsR0FBQUEsY0FDQXdCLFdBQUEsR0FBQUEsWUFDQTZCLGVBQUEsR0FBQUEsZU1IQWhDLEdBQUE0RyxHQUFBQyxnQkFBQSxXQUVBLEdBQUFDLE1BQ0FDLEVBQUFuSSxLQUFBb0ksZ0JBaUJBLE9BaEJBaEgsR0FBQWlILEtBQUFGLEVBQUEsV0FDQXJHLFNBQUFvRyxFQUFBbEksS0FBQUUsT0FDQWdJLEVBQUFsSSxLQUFBRSxNQUFBb0ksT0FDQUosRUFBQWxJLEtBQUFFLE9BQUFnSSxFQUFBbEksS0FBQUUsUUFFQSxJQUFBRixLQUFBVyxPQUVBdUgsRUFBQWxJLEtBQUFFLE1BQUFvSSxLQUFBdEksS0FBQVcsUUFHQSxJQUFBWCxLQUFBVyxRQUVBdUgsRUFBQWxJLEtBQUFFLE1BQUFGLEtBQUFXLE9BQUEsTUFJQXVILEVDcEJBLElBQUFoQyxZQUFBLFdBRUEsUUFBQXFDLEdBQUFqRyxHQUVBbEIsRUFBQW1CLE1BQ0FDLElBQUEsc0NBQ0FDLEtBQUEsTUFDQUMsU0FBQSxPQUNBQyxTQUNBQyxjQUFBLFVBQUE3QyxhQUFBRSxVQUFBLGlCQUVBNEMsUUFBQSxTQUFBQyxHQUNBUixFQUFBUSxJQUVBQyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0EzQixFQUFBLGNBQUFvSCxLQUFBLDhCQU1BLE9BQ0FELFFBQUFBLElDdEJBbEMsZUFBQSxTQUFBb0MsR0FFQSxRQUFBRixHQUFBakcsR0FFQWxCLEVBQUFtQixNQUNBQyxJQUFBLHVDQUFBaUcsRUFDQWhHLEtBQUEsTUFDQUMsU0FBQSxPQUNBQyxTQUNBQyxjQUFBLFVBQUE3QyxhQUFBRSxVQUFBLGlCQUVBNEMsUUFBQSxTQUFBQyxHQUNBUixFQUFBUSxFQUFBLEtBRUFDLE1BQUEsU0FBQUMsRUFBQUMsRUFBQUYsR0FDQTNCLEVBQUEsY0FBQW9ILEtBQUEsOEJBS0EsUUFBQUUsR0FBQTVGLEVBQUFSLEdBR0FRLEVBQUE2RixjQUFBLEdBQUE5SCxNQUFBQSxLQUFBK0gsSUFBQTlGLEVBQUErRixLQUFBL0YsRUFBQWdHLE1BQUFoRyxFQUFBaUcsWUFHQWpHLEdBQUErRixXQUNBL0YsR0FBQWdHLFlBQ0FoRyxHQUFBaUcsSUFFQTNILEVBQUFtQixNQUNBQyxJQUFBLHVDQUFBTSxFQUFBa0csUUFDQXZHLEtBQUEsUUFDQUMsU0FBQSxPQUNBdUcsWUFBQSxrQ0FDQW5HLEtBQUFaLEtBQUFxQixVQUFBVCxHQUNBSCxTQUNBQyxjQUFBLFVBQUE3QyxhQUFBRSxVQUFBLGlCQUVBNEMsUUFBQSxTQUFBQyxHQUNBUixFQUFBUSxJQUVBQyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0EzQixFQUFBLGNBQUFvSCxLQUFBLDhCQUtBLFFBQUFVLEdBQUFGLEVBQUExRyxHQUVBbEIsRUFBQW1CLE1BQ0FDLElBQUEsdUNBQUF3RyxFQUNBdkcsS0FBQSxTQUNBQyxTQUFBLE9BQ0FDLFNBQ0FDLGNBQUEsVUFBQTdDLGFBQUFFLFVBQUEsaUJBRUE0QyxRQUFBLFNBQUFDLEdBQ0FSLEtBRUFTLE1BQUEsU0FBQUMsRUFBQUMsRUFBQUYsR0FDQTNCLEVBQUEsY0FBQW9ILEtBQUEsOEJBTUEsT0FDQUQsUUFBQUEsRUFDQUcsYUFBQUEsRUFDQVEsV0FBQUEsSUN0RUFDLFVBQUEsV0FLQSxRQUFBQyxHQUFBOUcsR0FFQSxHQUFBK0csR0FBQXRKLGFBQUFFLFVBQUEsT0FFQTZCLFNBQUF1SCxHQUVBL0csRUFBQUosS0FBQUMsTUFBQWtILElBT0EsUUFBQUMsR0FBQWIsRUFBQW5HLEdBRUFsQixFQUFBbUIsTUFDQUMsSUFBQSxvQ0FBQWlHLEVBQ0FoRyxLQUFBLE1BQ0F3RyxZQUFBLE9BQ0FwRyxRQUFBLFNBQUFDLEdBQ0F1RyxNQUFBL0YsV0FBQVIsRUFBQSxHQUFBUSxXQUFBNEQsTUFBQXBFLEVBQUEsR0FBQW9FLE1BQUFxQyxNQUFBekcsRUFBQSxHQUFBeUcsTUFBQUMsTUFBQTFHLEVBQUEsR0FBQTBHLE9BQ0FsSCxFQUFBK0csS0FHQSxJQUFBSSxHQUFBMUosYUFBQUUsVUFBQSxPQUVBNkIsU0FBQTJILEVBRUExSixhQUFBVyxhQUFBLE9BQUF3QixLQUFBcUIsV0FBQThGLFNBSUFJLEVBQUF2SCxLQUFBQyxNQUFBc0gsR0FDQUEsRUFBQW5CLEtBQUFlLE1BRUF0SixhQUFBVyxhQUFBLE9BQUF3QixLQUFBcUIsVUFBQWtHLE1BR0ExRyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0EzQixFQUFBLGNBQUFvSCxLQUFBLDhCQVVBLFFBQUFrQixHQUFBakIsR0FJQSxJQUZBWSxLQUFBbkgsS0FBQUMsTUFBQXBDLGFBQUFFLFVBQUEsU0FFQU0sRUFBQSxFQUFBQSxFQUFBOEksS0FBQTdJLE9BQUFELElBRUEsR0FBQThJLEtBQUE5SSxHQUFBK0MsWUFBQW1GLEVBQ0EsQ0FDQVksS0FBQU0sT0FBQXBKLEVBQUEsRUFDQSxPQUlBUixhQUFBVyxhQUFBLE9BQUF3QixLQUFBcUIsVUFBQThGLE9BSUEsT0FDQUQsUUFBQUEsRUFDQUUsV0FBQUEsRUFDQUksY0FBQUEsSUMxRUFwRSxXQUFBLFdBRUEsUUFBQXNFLEdBQUFDLEVBQUFDLEVBQUF4SCxHQUVBbEIsRUFBQW1CLE1BQ0FDLElBQUEscUNBQ0FDLEtBQUEsTUFDQUMsU0FBQSxPQUNBQyxTQUNBQyxjQUFBLFNBQUFtSCxLQUFBRixFQUFBLElBQUFDLElBRUFqSCxRQUFBLFNBQUFDLEdBRUEvQyxhQUFBVyxhQUFBLGVBQUFvQyxFQUFBa0gsY0FDQWpLLGFBQUFXLGFBQUEsVUFBQW9DLEVBQUFrRyxTQUdBMUgsYUFHQWdCLEVBQUFRLElBRUFDLE1BQUEsU0FBQUMsRUFBQUMsRUFBQUYsR0FFQTNCLEVBQUEsa0JBQUFpRCxVQVFBLE9BQ0F1RixNQUFBQSxJQ2pDQW5FLFlBQUEsV0FFQSxRQUFBd0UsR0FBQTNILEdBMkJBLFFBQUFyQyxHQUFBQyxHQUlBLElBQUEsR0FGQUMsR0FBQUMsU0FBQUMsT0FBQUMsTUFBQSxLQUVBQyxFQUFBLEVBQUFBLEVBQUFKLEVBQUFLLE9BQUFELElBQ0EsQ0FDQSxHQUFBRixHQUFBRixFQUFBSSxHQUFBRCxNQUFBLElBRUEsSUFBQUQsRUFBQSxHQUFBSSxRQUFBUCxFQUVBLE1BQUFHLEdBQUEsSUFuQ0FlLEVBQUFtQixNQUNBQyxJQUFBLHNDQUNBQyxLQUFBLE9BQ0FDLFNBQUEsT0FDQUksS0FBQVosS0FBQXFCLFdBQ0F5RixRQUFBL0ksRUFBQSxhQUVBNEMsUUFBQSxTQUFBQyxHQUVBL0MsYUFBQW1CLGFBQUEsZ0JBQ0FuQixhQUFBbUIsYUFBQSxXQUdBSSxhQUVBZ0IsRUFBQVEsSUFFQUMsTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUVBM0IsRUFBQSxrQkFBQWlELFVBdUJBLE9BQ0E0RixPQUFBQSxJQy9DQXpELFdBQUEsV0FFQSxRQUFBMEQsR0FBQTVILEdBRUEsR0FBQStHLEdBQUF0SixhQUFBRSxVQUFBLE9BSUFxQyxHQUZBUixRQUFBdUgsR0FBQSxJQUFBQSxFQUVBbkgsS0FBQUMsTUFBQWtILE9BUUEsUUFBQWMsR0FBQUMsRUFBQTlILEdBR0E4SCxFQUFBbkgsT0FBQSxPQUNBbUgsRUFBQUMsZUFBQSxHQUNBRCxFQUFBRSxXQUFBLEdBQUF6SixNQUNBdUosRUFBQUcsZUFBQSxLQUNBSCxFQUFBZixLQUFBbkgsS0FBQUMsTUFBQXBDLGFBQUFFLFVBQUEsU0FFQW1CLEVBQUFtQixNQUNBQyxJQUFBLGlDQUNBQyxLQUFBLE9BQ0FDLFNBQUEsT0FDQUksS0FBQVosS0FBQXFCLFVBQUE2RyxHQUNBekgsU0FDQUMsY0FBQSxVQUFBN0MsYUFBQUUsVUFBQSxpQkFFQTRDLFFBQUEsU0FBQUMsR0FFQS9DLGFBQUFtQixhQUFBLFFBQ0FvQixLQUVBUyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0F5SCxRQUFBQyxJQUFBLDBCQU9BLE9BQ0FQLG9CQUFBQSxFQUNBQyxVQUFBQSxJQ2hEQXZGLGNBQUEsV0FFQSxRQUFBMkQsR0FBQW1DLEVBQUFwSSxHQUVBbEIsRUFBQW1CLE1BQ0FDLElBQUEsb0NBQUFrSSxFQUNBakksS0FBQSxNQUNBQyxTQUFBLE9BQ0FHLFFBQUEsU0FBQUMsR0FDQVIsRUFBQVEsSUFFQUMsTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUNBM0IsRUFBQSxjQUFBb0gsS0FBQSw4QkFNQSxPQUNBRCxRQUFBQSxJQ25CQXBELGNBQUEsV0FFQSxRQUFBd0YsR0FBQUMsRUFBQXRJLEdBR0FzSSxFQUFBakMsY0FBQSxHQUFBOUgsTUFBQUEsS0FBQStILElBQUFnQyxFQUFBL0IsS0FBQStCLEVBQUE5QixNQUFBOEIsRUFBQTdCLFlBR0E2QixHQUFBL0IsV0FDQStCLEdBQUE5QixZQUNBOEIsR0FBQTdCLElBRUEzSCxFQUFBbUIsTUFDQUMsSUFBQSx3Q0FDQUMsS0FBQSxPQUNBQyxTQUFBLE9BQ0FJLEtBQUFaLEtBQUFxQixXQUNBc0gsT0FBQUQsRUFBQUUsWUFDQWhCLFNBQUFjLEVBQUFHLFdBQ0FDLFdBQUFKLEVBQUFLLFNBQ0FDLFVBQUFOLEVBQUFPLGNBQ0FDLFFBQUFSLEVBQUFTLFdBQ0FDLE9BQUFWLEVBQUFVLE9BQ0EzQyxjQUFBaUMsRUFBQVcsV0FDQUMsYUFBQVosRUFBQWEsY0FDQUMsZ0JBQUFkLEVBQUFlLGtCQUNBQyx1QkFBQWhCLEVBQUFpQixnQkFDQUMsWUFBQWxCLEVBQUFtQixTQUNBQyxPQUFBcEIsRUFBQXFCLFdBQ0FDLFlBQUF0QixFQUFBdUIsV0FDQUMsS0FBQXhCLEVBQUF5QixTQUVBeEosUUFBQSxTQUFBQyxHQUNBUixFQUFBUSxJQUVBQyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0EzQixFQUFBLDJCQUFBaUQsVUFNQSxPQUNBc0csU0FBQUEsSUMzQ0EvRSxtQkFBQSxXQUVBLFFBQUEwRyxHQUFBMUIsRUFBQXRJLEdBRUFrSSxRQUFBQyxJQUFBRyxHQUNBeEosRUFBQW1CLE1BQ0FDLElBQUEsNkNBQ0FDLEtBQUEsT0FDQUMsU0FBQSxPQUNBSSxLQUFBWixLQUFBcUIsV0FDQXNHLE1BQUFlLEVBQUFFLFlBQ0FjLHVCQUFBaEIsRUFBQWlCLGdCQUNBSCxnQkFBQWQsRUFBQWUsa0JBQ0FZLGFBQUEzQixFQUFBRyxXQUNBeUIsZ0JBQUE1QixFQUFBNkIsY0FFQTVKLFFBQUEsU0FBQUMsR0FDQVIsRUFBQVEsSUFFQUMsTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUVBM0IsRUFBQSxxQ0FBQWlELFVBTUEsT0FDQWlJLGNBQUFBLElDNUJBdEgsYUFBQSxTQUFBMEgsR0FFQSxRQUFBQyxHQUFBckssR0FFQWxCLEVBQUFtQixNQUNBQyxJQUFBLG9DQUFBa0ssRUFDQWpLLEtBQUEsTUFDQUMsU0FBQSxPQUNBRyxRQUFBLFNBQUFDLEdBRUFSLEVBQUFRLEVBQUEsS0FFQUMsTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUNBM0IsRUFBQSxjQUFBb0gsS0FBQSw4QkFNQSxPQUNBbUUsZUFBQUEsSUNwQkFDLFVBQUEsU0FBQUMsR0FFQSxRQUFBQyxHQUFBeEssR0FFQWxCLEVBQUFtQixNQUNBQyxJQUFBLGlDQUFBcUssRUFDQXBLLEtBQUEsTUFDQUMsU0FBQSxPQUNBRyxRQUFBLFNBQUFDLEdBRUFSLEVBQUFRLEVBQUEsS0FFQUMsTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUNBM0IsRUFBQSxjQUFBb0gsS0FBQSxrQkFNQSxPQUNBc0UsWUFBQUEsSUNwQkEvRyxjQUFBLFdBRUEsUUFBQWdILEdBQUF6SyxHQUVBbEIsRUFBQW1CLE1BQ0FDLElBQUEsbUNBQ0FDLEtBQUEsTUFDQUMsU0FBQSxPQUNBQyxTQUNBQyxjQUFBLFVBQUE3QyxhQUFBRSxVQUFBLGlCQUVBNEMsUUFBQSxTQUFBQyxHQUNBUixFQUFBUSxJQUVBQyxNQUFBLFNBQUFDLEVBQUFDLEVBQUFGLEdBQ0EzQixFQUFBLGNBQUFvSCxLQUFBLDhCQUtBLFFBQUF3RSxHQUFBQyxFQUFBM0ssR0FFQWxCLEVBQUFtQixNQUNBQyxJQUFBLG9DQUFBekMsYUFBQUUsVUFBQSxXQUNBd0MsS0FBQSxPQUNBQyxTQUFBLE9BQ0FJLEtBQUFaLEtBQUFxQixXQUNBMkosWUFBQUQsRUFBQUMsY0FHQXZLLFNBQ0FDLGNBQUEsVUFBQTdDLGFBQUFFLFVBQUEsaUJBRUE0QyxRQUFBLFNBQUFDLEdBQ0FSLEVBQUFRLElBRUFDLE1BQUEsU0FBQUMsRUFBQUMsRUFBQUYsR0FDQTNCLEVBQUEsY0FBQW9ILEtBQUEsOEJBS0EsUUFBQTJFLEdBQUFULEVBQUFwSyxHQUVBbEIsRUFBQW1CLE1BQ0FDLElBQUEsb0NBQUF6QyxhQUFBRSxVQUFBLFdBQUEsSUFBQW1OLE9BQUFWLEdBQ0FqSyxLQUFBLFNBQ0FDLFNBQUEsT0FHQUMsU0FDQUMsY0FBQSxVQUFBN0MsYUFBQUUsVUFBQSxpQkFFQTRDLFFBQUEsU0FBQUMsR0FDQVIsRUFBQVEsSUFFQUMsTUFBQSxTQUFBQyxFQUFBQyxFQUFBRixHQUNBM0IsRUFBQSxjQUFBb0gsS0FBQSw4QkFNQSxPQUNBdUUsWUFBQUEsRUFDQUMsY0FBQUEsRUFDQUcsbUJBQUFBLElDbEVBbkgsZ0JBQUEsU0FBQXFILEVBQUFDLEdBTUEsUUFBQXpJLEtBRUEwSSxFQUFBQyxrQkFBQWpGLEdBR0EsUUFBQUEsS0FFQWtGLEVBQUFsRixRQUFBbUYsR0FFQSxRQUFBQSxHQUFBNUssR0FFQXlLLEVBQUFHLFFBQUE1SyxHQWZBLEdBQUEySyxHQUFBSCxFQUNBQyxFQUFBRixDQW1CQSxRQUNBeEksS0FBQUEsSUN2QkFzQixvQkFBQSxTQUFBa0gsRUFBQUMsR0FNQSxRQUFBekksS0FFQTBJLEVBQUFDLGtCQUFBakYsR0FDQThFLEVBQUFNLGdCQUFBakYsR0FDQTJFLEVBQUFPLGtCQUFBMUUsR0FHQSxRQUFBWCxLQUVBa0YsRUFBQWxGLFFBQUFtRixHQUdBLFFBQUFBLEdBQUE1SyxHQUVBeUssRUFBQUcsUUFBQTVLLEdBR0EsUUFBQTRGLEdBQUEvRSxHQUVBQSxFQUFBRSxpQkFDQUYsRUFBQWtLLDBCQUVBLElBQUFqRCxHQUFBeEosRUFBQXBCLE1BQUFpSSxpQkFFQXdGLEdBQUEvRSxhQUFBa0MsRUFBQSxTQUFBQSxHQUVBbkgsTUFBQSxtQ0FJQSxRQUFBeUYsR0FBQUYsR0FFQXlFLEVBQUF2RSxXQUFBRixFQUFBLFdBRUF2RixNQUFBLGlDQUNBUCxPQUFBQyxNQUFBLFlBdkNBLEdBQUFzSyxHQUFBSCxFQUNBQyxFQUFBRixDQTJDQSxRQUNBeEksS0FBQUEsSUMvQ0FpSixlQUFBLFNBQUFULEVBQUFDLEdBUUEsUUFBQWxFLEtBRUFxRSxFQUFBckUsUUFBQSxTQUFBdEcsR0FBQXlLLEVBQUFHLFFBQUE1SyxLQVFBLFFBQUF3RyxHQUFBYixHQUVBZ0YsRUFBQW5FLFdBQUFiLEVBQUEsU0FBQTNGLEdBQUF5SyxFQUFBbEssUUFBQVAsS0FNQSxRQUFBNEcsR0FBQWpCLEdBRUFnRixFQUFBL0QsY0FBQWpCLEVBQUEsU0FBQTNGLE1BSUEsUUFBQStCLEtBRUEwSSxFQUFBQyxrQkFBQXBFLEdBQ0FtRSxFQUFBUSxzQkFBQXpFLEdBQ0FpRSxFQUFBUyxrQkFBQXRFLEdBbENBLEdBQUErRCxHQUFBSCxFQUNBQyxFQUFBRixDQXFDQSxRQUNBeEksS0FBQUEsSUN6Q0FvSixpQkFBQSxTQUFBWixFQUFBQyxLQ0FBN0csZ0JBQUEsU0FBQTRHLEdBS0EsUUFBQXhJLEtBR0EwSSxFQUFBRyxVQU5BLEdBQUFILEdBQUFGLENBVUEsUUFDQXhJLEtBQUFBLElDYkFPLGdCQUFBLFNBQUFpSSxFQUFBQyxHQU1BLFFBQUFZLEdBQUF2SyxHQUdBQSxFQUFBRSxpQkFDQUYsRUFBQWtLLDBCQUdBLElBQUFqRCxLQUNBeEosR0FBQWlILEtBQUFqSCxFQUFBcEIsTUFBQW9JLGlCQUFBLFNBQUE3SCxFQUFBNE4sR0FDQXZELEVBQUF1RCxFQUFBak8sTUFBQWlPLEVBQUF4TixRQUlBOE0sRUFBQTdELE1BQUFnQixFQUFBZixNQUFBZSxFQUFBZCxTQUFBLFNBQUFoSCxHQUVBMUIsRUFBQSxrQkFBQU0sT0FDQU4sRUFBQSxtQkFBQWlELE9BRUFuQixPQUFBQyxNQUFBLGNBS0EsUUFBQTBCLEtBR0EwSSxFQUFBRyxVQUdBSCxFQUFBQyxrQkFBQVUsR0FqQ0EsR0FBQVQsR0FBQUgsRUFDQUMsRUFBQUYsQ0FvQ0EsUUFDQXhJLEtBQUFBLElDeENBVSxpQkFBQSxTQUFBOEgsRUFBQUMsR0FNQSxRQUFBWSxHQUFBdkssR0FFQThKLEVBQUF4RCxPQUFBLFNBQUFuSCxHQUVBMUIsRUFBQSxrQkFBQWlELE9BQ0FqRCxFQUFBLG1CQUFBTSxPQUdBNkwsRUFBQUcsWUFLQSxRQUFBN0ksS0FHQTBJLEVBQUFDLGtCQUFBVSxHQXBCQSxHQUFBVCxHQUFBSCxFQUNBQyxFQUFBRixDQXVCQSxRQUNBeEksS0FBQUEsSUMzQkF5QixnQkFBQSxTQUFBK0csRUFBQUMsR0FNQSxRQUFBWSxHQUFBdkssR0FFQThKLEVBQUF2RCxvQkFBQSxTQUFBcEgsR0FDQXlLLEVBQUFHLFFBQUE1SyxLQUlBLFFBQUFzTCxHQUFBekssR0FFQUEsRUFBQUUsaUJBQ0FGLEVBQUFrSywwQkFFQSxJQUFBakQsR0FBQXhKLEVBQUFwQixNQUFBaUksaUJBRUF3RixHQUFBdEQsVUFBQVMsRUFBQSxXQUNBMkMsRUFBQWMsY0FDQWQsRUFBQWUsY0FLQSxRQUFBekosS0FFQSxHQUFBdEQsV0FBQUssWUFFQXNCLE9BQUFDLE1BQUEsV0FJQW9LLEVBQUFDLGtCQUFBVSxHQUNBWCxFQUFBZ0IsaUJBQUFILElBbENBLEdBQUFYLEdBQUFILEVBQ0FDLEVBQUFGLENBc0NBLFFBQ0F4SSxLQUFBQSxJQzFDQUgsbUJBQUEsU0FBQTJJLEVBQUFDLEdBTUEsUUFBQS9FLEtBRUFrRixFQUFBbEYsUUFBQSxHQUFBLFNBQUF6RixHQUFBeUssRUFBQUcsUUFBQTVLLEtBR0EsUUFBQTBMLEdBQUE3SyxHQUdBQSxFQUFBRSxnQkFFQSxJQUFBNEssR0FBQXJOLEVBQUFwQixNQUFBME8sV0FDQWpCLEdBQUFsRixRQUFBa0csRUFBQSxTQUFBM0wsR0FBQXlLLEVBQUFvQixhQUFBN0wsS0FJQSxRQUFBK0IsS0FFQTBJLEVBQUFDLGtCQUFBakYsR0FDQWdGLEVBQUFxQixrQkFBQUosR0F0QkEsR0FBQWYsR0FBQUgsRUFDQUMsRUFBQUYsQ0EwQkEsUUFDQXhJLEtBQUFBLElDOUJBSSxtQkFBQSxTQUFBb0ksRUFBQUMsR0FNQSxRQUFBWSxLQUdBdkssTUFBQUUsaUJBR0F6QyxFQUFBLDJCQUFBTSxPQUNBTixFQUFBLHNCQUFBTSxNQUdBLElBQUFrSixLQUVBeEosR0FBQWlILEtBQUFqSCxFQUFBcEIsTUFBQW9JLGlCQUFBLFNBQUE3SCxFQUFBNE4sR0FDQXZELEVBQUF1RCxFQUFBak8sTUFBQWlPLEVBQUF4TixRQUlBaUssRUFBQSxXQUFBQSxFQUFBL0IsS0FBQSxJQUFBK0IsRUFBQTlCLE1BQUEsSUFBQThCLEVBQUE3QixHQUlBLElBQUE4RixJQUFBLEVBQ0FDLEdBQUEsV0FBQSxhQUFBLFdBQUEsYUFBQSxjQUFBLGFBQUEsY0FBQSxrQkFJQTFOLEdBQUFpSCxLQUFBeUcsRUFBQSxTQUFBdk8sRUFBQXdPLEdBQ0EzTixFQUFBLElBQUEyTixHQUFBL0ssWUFBQSxhQUdBNUMsRUFBQWlILEtBQUF5RyxFQUFBLFNBQUF2TyxFQUFBd08sR0FDQSxJQUFBbkUsRUFBQW1FLEtBRUEzTixFQUFBLElBQUEyTixHQUFBOUssU0FBQSxXQUVBNEssR0FBQSxLQU1BQSxJQUdBbFAsT0FBQWlILFNBQUEsRUFBQSxHQUVBeEYsRUFBQSwyQkFBQWlELE9BR0EsSUFBQTJLLElBQUEsQ0FXQSxPQVRBcEUsR0FBQUcsWUFBQUgsRUFBQTZCLGNBRUF1QyxHQUFBLEVBQ0E1TixFQUFBLHNCQUFBaUQsT0FDQWpELEVBQUEsZUFBQTZDLFNBQUEsV0FDQTdDLEVBQUEsZ0JBQUE2QyxTQUFBLGFBSUE0SyxJQUFBRyxPQU1BdkIsR0FBQTlDLFNBQUFDLEVBQUEsU0FBQTlILEdBQ0F5SyxFQUFBRyxRQUFBLHlDQUtBLFFBQUE3SSxLQUdBMEksRUFBQUcsUUFBQSxpQ0FHQUgsRUFBQUMsa0JBQUFVLEdBbEZBLEdBQUFULEdBQUFILEVBQ0FDLEVBQUFGLENBdUZBLFFBQ0F4SSxLQUFBQSxJQzNGQWEsd0JBQUEsU0FBQTJILEVBQUFDLEdBTUEsUUFBQVksS0FFQTFELFFBQUFDLElBQUEsc0JBR0E5RyxNQUFBRSxpQkFHQXpDLEVBQUEscUNBQUFNLE9BQ0FOLEVBQUEsc0JBQUFNLE1BR0EsSUFBQWtKLEtBRUF4SixHQUFBaUgsS0FBQWpILEVBQUFwQixNQUFBb0ksaUJBQUEsU0FBQTdILEVBQUE0TixHQUNBdkQsRUFBQXVELEVBQUFqTyxNQUFBaU8sRUFBQXhOLE9BS0EsSUFBQWtPLElBQUEsRUFDQUMsR0FBQSxhQUFBLGNBQUEsY0FBQSxrQkFJQTFOLEdBQUFpSCxLQUFBeUcsRUFBQSxTQUFBdk8sRUFBQXdPLEdBQ0EzTixFQUFBLElBQUEyTixHQUFBL0ssWUFBQSxhQUdBNUMsRUFBQWlILEtBQUF5RyxFQUFBLFNBQUF2TyxFQUFBd08sR0FDQSxJQUFBbkUsRUFBQW1FLEtBRUEzTixFQUFBLElBQUEyTixHQUFBOUssU0FBQSxXQUVBNEssR0FBQSxLQU1BQSxJQUdBbFAsT0FBQWlILFNBQUEsRUFBQSxHQUVBeEYsRUFBQSx3QkFBQWlELE9BR0EsSUFBQTJLLElBQUEsQ0FXQSxPQVRBcEUsR0FBQUcsWUFBQUgsRUFBQTZCLGNBRUF1QyxHQUFBLEVBQ0E1TixFQUFBLHNCQUFBaUQsT0FDQWpELEVBQUEsZUFBQTZDLFNBQUEsV0FDQTdDLEVBQUEsZ0JBQUE2QyxTQUFBLGFBSUE0SyxJQUFBRyxJQUlBeEUsUUFBQUMsSUFBQSxpQkFFQWdELEdBQUFuQixjQUFBMUIsRUFBQSxTQUFBOUgsR0FDQXlLLEVBQUFHLFFBQUEsMkNBS0EsUUFBQTdJLEtBR0EwSSxFQUFBRyxRQUFBLDBDQUVBSCxFQUFBQyxrQkFBQVUsR0FoRkEsR0FBQVQsR0FBQUgsRUFDQUMsRUFBQUYsQ0FvRkEsUUFDQXhJLEtBQUFBLElDeEZBQyxrQkFBQSxTQUFBdUksRUFBQUMsR0FrQ0EsUUFBQTJCLEdBQUFuTSxHQUVBdUssRUFBQUssUUFBQTVLLEdBSUEsUUFBQStCLEtBVUF5SSxFQUFBWCxlQUFBc0MsR0FZQSxPQUNBcEssS0FBQUEsRUFDQW9LLFNBQUFBLElDaEVBcEosbUJBQUEsU0FBQXdILEVBQUFDLEdBTUEsUUFBQVAsS0FFQVUsRUFBQVYsWUFBQVcsR0FHQSxRQUFBQSxHQUFBNUssR0FFQXlLLEVBQUFHLFFBQUE1SyxHQUdBLFFBQUErQixLQUVBMEksRUFBQUMsa0JBQUFULEdBQ0FRLEVBQUFLLGtCQUFBVCxHQUdBLFFBQUFBLEdBQUFULEVBQUF3QyxHQUVBekIsRUFBQU4sbUJBQUFULEVBQUEsV0FFQWEsRUFBQTRCLFNBQUFELEtBeEJBLEdBQUF6QixHQUFBSCxFQUNBQyxFQUFBRixDQTJCQSxRQUNBeEksS0FBQUEsSUMvQkFvQixnQkFBQSxXQUVBLFFBQUF1SCxHQUFBNEIsR0FFQWhPLEVBQUFoQixVQUFBZ0gsTUFBQWdJLEdBSUEsUUFBQTFCLEdBQUE1SyxHQUVBMUMsU0FBQThHLE1BQUEsbUJBRUE5RixFQUFBLGNBQUFvSCxLQUFBLDBCQUFBLFdBQ0FwSCxFQUFBaUgsS0FBQXZGLEVBQUEsU0FBQXVNLEVBQUExTyxHQUVBLEdBQUEyTyxHQUFBbE8sRUFBQSxnQkFBQW1PLE9BR0FuTyxHQUFBa08sR0FBQWxMLEtBQUEsb0JBQUEvQyxLQUFBVixFQUFBcUssWUFDQTVKLEVBQUFrTyxHQUFBbEwsS0FBQSxvQkFBQW9MLEtBQUEsT0FBQSxlQUFBN08sRUFBQXFJLFNBQ0E1SCxFQUFBa08sR0FBQWxMLEtBQUEsb0JBQUEvQyxLQUFBVixFQUFBdUssV0FDQTlKLEVBQUFrTyxHQUFBbEwsS0FBQSxtQkFBQS9DLEtBQUFWLEVBQUF5SyxTQUNBaEssRUFBQWtPLEdBQUFsTCxLQUFBLGdCQUFBL0MsS0FBQVYsRUFBQWtKLE9BQ0F6SSxFQUFBa08sR0FBQWxMLEtBQUEsc0JBQUEvQyxLQUFBVixFQUFBNkssY0FFQXBLLEVBQUEsZUFBQXdHLE9BQUEwSCxLQUlBbE8sRUFBQSxnQkFBQXFPLFFBQUExSCxXQUlBLE9BQ0F5RixrQkFBQUEsRUFDQUUsUUFBQUEsSUNuQ0F0SCxvQkFBQSxXQUVBLFFBQUFvSCxHQUFBNEIsR0FFQWhPLEVBQUFoQixVQUFBZ0gsTUFBQWdJLEdBR0EsUUFBQTFCLEdBQUEvTSxHQUdBUyxFQUFBLGNBQUFvSCxLQUFBLGtDQUFBLFdBRUFwSCxFQUFBLGVBQUFvTyxLQUFBLFVBQUE3TyxFQUFBcUksU0FDQTVILEVBQUEsZUFBQThDLElBQUF2RCxFQUFBcUssWUFDQTVKLEVBQUEsY0FBQThDLElBQUF2RCxFQUFBdUssV0FDQTlKLEVBQUEsWUFBQThDLElBQUF2RCxFQUFBeUssU0FDQWhLLEVBQUEsY0FBQThDLElBQUF2RCxFQUFBK08sV0FDQXRPLEVBQUEsVUFBQThDLElBQUF2RCxFQUFBa0osT0FDQXpJLEVBQUEsYUFBQW9PLEtBQUEsY0FBQSxvREFDQXBPLEVBQUEsV0FBQThDLElBQUF2RCxFQUFBMkssUUFDQWxLLEVBQUEsa0JBQUE4QyxJQUFBdkQsRUFBQWdJLGVBQ0F2SCxFQUFBLGlCQUFBOEMsSUFBQXZELEVBQUE2SyxjQUNBcEssRUFBQSxjQUFBOEMsSUFBQXZELEVBQUFnUCxXQUNBdk8sRUFBQSxZQUFBOEMsSUFBQXZELEVBQUFxSSxRQUVBLElBQUE0RyxHQUFBLEdBQUEvTyxNQUNBZ1AsRUFBQSxHQUFBaFAsTUFBQUYsRUFBQWdJLGNBRUEsS0FBQXBJLEVBQUEsRUFBQUEsRUFBQSxHQUFBQSxJQUVBQSxHQUFBc1AsRUFBQUMsVUFFQTFPLEVBQUEsUUFBQXdHLE9BQUEsa0JBQUFySCxFQUFBLHlCQUFBQSxFQUFBLGFBR0FhLEVBQUEsUUFBQXdHLE9BQUEsa0JBQUFySCxFQUFBLEtBQUFBLEVBQUEsWUFJQSxLQUFBQSxFQUFBLEtBQUFBLEVBQUFxUCxFQUFBRyxjQUFBLEVBQUF4UCxJQUVBQSxHQUFBc1AsRUFBQUUsY0FFQTNPLEVBQUEsU0FBQXdHLE9BQUEsa0JBQUFySCxFQUFBLHlCQUFBQSxFQUFBLGFBSUFhLEVBQUEsU0FBQXdHLE9BQUEsa0JBQUFySCxFQUFBLEtBQUFBLEVBQUEsWUFJQWEsR0FBQSxVQUFBOEMsSUFBQTJMLEVBQUFHLGNBSUEsUUFBQXJDLEdBQUF5QixHQUVBaE8sRUFBQWhCLFVBQUFzRCxHQUFBLFNBQUEsWUFBQTBMLEdBR0EsUUFBQXhCLEdBQUF3QixHQUVBaE8sRUFBQSxjQUFBNk8sTUFBQXZNLEdBQUEsUUFBQSxjQUFBLFNBQUFFLEdBRUFBLEVBQUFDLGlCQUNBdUwsRUFBQWhPLEVBQUFwQixNQUFBOEMsS0FBQSxTQUlBLE9BQ0EwSyxrQkFBQUEsRUFDQUUsUUFBQUEsRUFDQUMsZ0JBQUFBLEVBQ0FDLGtCQUFBQSxJQ3pFQXNDLGVBQUEsV0FHQSxRQUFBeEMsR0FBQVQsR0FFQSxJQUFBQSxHQUVBQSxFQUFBa0QsUUFBQSxTQUFBQyxFQUFBQyxHQUNBaE4sRUFBQStNLEtBVUEsUUFBQUUsR0FBQUMsR0FFQUEsRUFBQUMsV0FBQUQsR0FBQUMsV0FBQXBQLEVBQUEsdUJBQUFDLE9BQUFvUCxPQUFBLElBQ0FyUCxFQUFBLHVCQUFBQyxLQUFBLElBQUFtUCxXQUFBRCxHQUFBRyxRQUFBLElBUUEsUUFBQXJOLEdBQUErTSxHQUVBLEdBQUFPLEdBQUF2UCxFQUFBLFNBQUFDLEtBQUFELEVBQUEsMEJBQUFDLE9BRUFzUCxHQUFBdk0sS0FBQSxzQkFBQS9DLEtBQUErTyxFQUFBbEosT0FDQXlKLEVBQUF2TSxLQUFBLHNCQUFBL0MsS0FBQSxJQUFBK08sRUFBQTdHLE1BQUFtSCxRQUFBLElBQ0FDLEVBQUF2TSxLQUFBLDBCQUFBb0wsS0FBQSxNQUFBWSxFQUFBNUcsT0FDQW1ILEVBQUF2TSxLQUFBLGVBQUFvTCxLQUFBLFVBQUFZLEVBQUE5TSxZQUVBbEMsRUFBQSxTQUFBd0csT0FBQStJLEVBR0EsSUFBQUMsR0FBQXhQLEVBQUEsdUJBQUFDLE1BQ0FELEdBQUEsdUJBQUFDLEtBQUF3UCxTQUFBRCxHQUFBLEdBR0FOLEVBQUFGLEVBQUE3RyxPQU1BLFFBQUFpRSxHQUFBNEIsR0FFQWhPLEVBQUFoQixVQUFBZ0gsTUFBQWdJLEdBUUEsUUFBQXJCLEdBQUErQyxHQUVBMVAsRUFBQSxRQUFBc0MsR0FBQSxRQUFBLGFBQUEsU0FBQUMsR0FDQUEsRUFBQUUsZ0JBRUEsSUFBQWtOLEdBQUEzUCxFQUFBcEIsTUFBQThDLEtBQUEsS0FDQWdPLEdBQUFDLEdBQ0EzUCxFQUFBcEIsTUFBQWdSLFFBQUEsaUJBQUE1TSxLQUFBLGNBQUE2TSxPQUFBLEVBQUEsS0FBQUMsTUFBQSxLQUFBRCxPQUFBLElBQUEsS0FTQSxRQUFBakQsR0FBQXRFLEdBQ0F0SSxFQUFBLFFBQUFzQyxHQUFBLFFBQUEsc0JBQUEsU0FBQUMsR0FDQSxHQUFBd04sR0FBQS9QLEVBQUFwQixNQUFBd0gsU0FDQXVKLEVBQUEzUCxFQUFBcEIsTUFBQXdILFNBQUExRSxLQUFBLEtBR0ExQixHQUFBK1AsR0FBQWxOLFNBQUEsdUJBQ0E3QyxFQUFBK1AsR0FBQXpOLEdBQUEsK0RBQUEsV0FDQXRDLEVBQUFwQixNQUFBK0gsVUFJQSxJQUFBNkksR0FBQXhQLEVBQUEsdUJBQUFDLE1BQ0FELEdBQUEsdUJBQUFDLEtBQUF3UCxTQUFBRCxHQUFBLEdBRUFsSCxFQUFBcUgsR0FDQVQsR0FBQWxQLEVBQUErUCxHQUFBL00sS0FBQSxzQkFBQS9DLE9BQUFvUCxPQUFBLE1BS0EsT0FDQS9DLFFBQUFBLEVBQ0FySyxRQUFBQSxFQUNBaU4saUJBQUFBLEVBQ0E5QyxrQkFBQUEsRUFDQU8sc0JBQUFBLEVBQ0FDLGtCQUFBQSxJQ3hHQXRILGdCQUFBLFdBR0EsUUFBQWdILEtBRUF0TixTQUFBOEcsTUFBQSxrQkFFQTlGLEVBQUEsY0FBQW9ILEtBQUEsMkJBSUEsUUFBQWdGLEdBQUE0RCxHQUVBaFEsRUFBQWhCLFVBQUFnSCxNQUFBZ0ssR0FJQSxPQUNBMUQsUUFBQUEsRUFDQUYsa0JBQUFBLElDbkJBbkksZ0JBQUEsV0FHQSxRQUFBcUksS0FFQXROLFNBQUE4RyxNQUFBLHNCQUVBOUYsRUFBQSxjQUFBb0gsS0FBQSwyQkFJQSxRQUFBZ0YsR0FBQTRCLEdBTUFoTyxFQUFBLGNBQUFzQyxHQUFBLFNBQUEsYUFBQTBMLEdBSUEsT0FDQTFCLFFBQUFBLEVBQ0FGLGtCQUFBQSxJQ3ZCQWhJLGlCQUFBLFdBR0EsUUFBQWtJLEtBRUF0TixTQUFBOEcsTUFBQSx1QkFFQTlGLEVBQUEsY0FBQW9ILEtBQUEsNkJBSUEsUUFBQWdGLEdBQUE0QixHQUVBaE8sRUFBQWhCLFVBQUFnSCxNQUFBZ0ksR0FJQSxPQUNBMUIsUUFBQUEsRUFDQUYsa0JBQUFBLElDbkJBN0ksbUJBQUEsV0FHQSxRQUFBK0ksR0FBQVQsR0FFQTdNLFNBQUE4RyxNQUFBLHVCQUVBOUYsRUFBQSxjQUFBQyxLQUFBLDJHQUVBRCxFQUFBLFlBQUFvSCxLQUFBLGdDQUdBbUcsRUFBQTFCLEdBR0EsUUFBQTBCLEdBQUExQixHQUVBN0wsRUFBQSxhQUFBb0gsS0FBQSxnQ0FBQSxXQUNBcEgsRUFBQWlILEtBQUE0RSxFQUFBLFNBQUFvQyxFQUFBMU8sR0FFQSxHQUFBMFEsR0FBQWpRLEVBQUEsU0FBQXdHLE9BQUF4RyxFQUFBLHdCQUFBbU8sUUFHQW5PLEdBQUFpUSxHQUFBak4sS0FBQSxtQkFBQS9DLEtBQUFWLEVBQUF1RyxPQUNBOUYsRUFBQWlRLEdBQUFqTixLQUFBLHNCQUFBd0QsT0FBQWpILEVBQUEyUSxNQUFBLFdBQUEzUSxFQUFBNFEsU0FBQSxNQUFBclMsYUFBQXlCLEVBQUE2USxXQUNBcFEsRUFBQWlRLEdBQUFqTixLQUFBLHlCQUFBL0MsS0FBQW9RLEVBQUE5USxFQUFBK1EsY0FDQXRRLEVBQUFpUSxHQUFBak4sS0FBQSxtQkFBQXdELE9BQUEsS0FBQWpILEVBQUE0SSxNQUFBbUgsUUFBQSxJQUNBdFAsRUFBQWlRLEdBQUFqTixLQUFBLHNEQUFBb0wsS0FBQSxPQUFBLFdBQUE3TyxFQUFBMkMsWUFDQWxDLEVBQUFpUSxHQUFBak4sS0FBQSx1QkFBQW9MLEtBQUEsTUFBQTdPLEVBQUE2SSxPQUNBcEksRUFBQWlRLEdBQUFqTixLQUFBLGNBQUFvTCxLQUFBLFVBQUE3TyxFQUFBMkMsWUFFQWxDLEVBQUEsa0JBQUF3RyxPQUFBeUosS0FJQWpRLEVBQUEsd0JBQUFxTyxRQUFBMUgsV0FLQSxRQUFBMEosR0FBQUUsR0FDQSxHQUFBQyxHQUFBLEdBQ0FDLEVBQUFGLEVBQUFyUixNQUFBLElBQ0EsSUFBQXVSLEVBQUFyUixPQUFBb1IsRUFBQSxDQUNBLEdBQUFFLEdBQUEsRUFDQSxLQUFBdlIsRUFBQSxFQUFBQSxFQUFBcVIsRUFBQXJSLElBQ0F1UixHQUFBRCxFQUFBdFIsR0FBQSxHQUVBLE9BQUF1UixHQUFBLE1BRUEsTUFBQUgsR0FLQSxRQUFBbkUsR0FBQTRCLEdBRUFoTyxFQUFBaEIsVUFBQWdILE1BQUFnSSxHQUdBLFFBQUFSLEdBQUFRLEdBR0FoTyxFQUFBLGNBQUE2TyxNQUFBdk0sR0FBQSxTQUFBLHVCQUFBLFNBQUFDLEdBQ0F2QyxFQUFBLG1CQUFBMlEsV0FJQTNRLEVBQUEsY0FBQXNDLEdBQUEsZUFBQSwrQ0FBQSxTQUFBQyxHQUNBLE1BQUF2QyxFQUFBLGFBQUE4QyxNQUNBOUMsRUFBQSxhQUFBOEMsSUFBQSxHQUlBOUMsRUFBQSxtQkFBQTJRLFdBSUEzUSxFQUFBLGNBQUFzQyxHQUFBLFNBQUEsa0JBQUEwTCxHQUdBLE9BQ0ExQixRQUFBQSxFQUNBaUIsYUFBQUEsRUFDQW5CLGtCQUFBQSxFQUNBb0Isa0JBQUFBLElDckZBckksZ0JBQUEsV0FHQSxRQUFBbUgsR0FBQXJFLEdBRUFqSixTQUFBOEcsTUFBQSx1QkFFQTlGLEVBQUEsY0FBQW9ILEtBQUEsMEJBQUEsV0FFQTFHLFFBQUF1SCxHQUFBLElBQUFBLEdBR0FqSSxFQUFBaUgsS0FBQWdCLEVBQUEsU0FBQWdHLEVBQUExTyxHQUNBLEdBQUEwUSxHQUFBalEsRUFBQSxZQUFBbU8sT0FFQW5PLEdBQUFpUSxHQUFBak4sS0FBQSxtQkFBQS9DLEtBQUFWLEVBQUF1RyxPQUNBOUYsRUFBQWlRLEdBQUFqTixLQUFBLHVCQUFBb0wsS0FBQSxNQUFBN08sRUFBQTZJLE9BQ0FwSSxFQUFBaVEsR0FBQWpOLEtBQUEsbUJBQUF3RCxPQUFBLEtBQUFqSCxFQUFBNEksTUFBQW1ILFFBQUEsSUFFQXRQLEVBQUEsa0JBQUF3RyxPQUFBeUosR0FDQWpRLEVBQUEsa0JBQUF3RyxPQUFBLFlBR0F4RyxFQUFBLGdDQUFBcU8sUUFBQXpMLFlBQUEsYUFJQTVDLEVBQUEsa0JBQUFDLEtBQUEsMEhBSUFELEVBQUEsWUFBQXFPLFFBQUExSCxTQUdBM0csRUFBQSxVQUFBNFEsU0FBQSxrQkFDQTVRLEVBQUEsaUJBQUFDLEtBQUFELEVBQUEsdUJBQUFDLE9BR0EsSUFBQXVPLEdBQUEsR0FBQS9PLEtBQ0ErTyxHQUFBcUMsUUFBQXJDLEVBQUFFLFVBQUEsR0FFQTFPLEVBQUEsa0JBQUFDLEtBQUF1TyxFQUFBRSxVQUFBLElBQUFGLEVBQUFzQyxlQUFBLFNBQUFDLE1BQUEsVUFDQS9RLEVBQUEsOEJBQUFDLEtBQUF1TyxFQUFBc0MsZUFBQSxTQUFBQyxNQUFBLFVBQUEvUyxlQUNBZ0MsRUFBQSw0QkFBQUMsS0FBQXVPLEVBQUFFLFdBR0F2TyxXQUFBYyxZQUFBLFNBQUFpTixHQUNBbE8sRUFBQSxnQkFBQUMsS0FBQWlPLEVBQUF0RSxXQUFBLElBQUFzRSxFQUFBcEUsVUFBQSxJQUFBb0UsRUFBQWxFLFNBQ0FoSyxFQUFBLGtCQUFBQyxLQUFBaU8sRUFBQThDLFFBQUFDLE9BQUEsSUFBQS9DLEVBQUE4QyxRQUFBRSxjQUNBbFIsRUFBQSxzQkFBQUMsS0FBQWlPLEVBQUE4QyxRQUFBdEcsWUFBQSxJQUFBd0QsRUFBQThDLFFBQUFoRyxLQUFBaE4sbUJBTUEsUUFBQWlQLEtBRUFqTixFQUFBLHFCQUFBNEMsWUFBQSxVQUNBNUMsRUFBQSx1QkFBQTZDLFNBQUEsWUFDQTdDLEVBQUEsa0NBQUE2QyxTQUFBLFVBRUE3QyxFQUFBLGdCQUFBNEMsWUFBQSx1QkFDQTVDLEVBQUEsaUJBQUE2QyxTQUFBLHVCQUlBLFFBQUFxSyxLQUVBbE4sRUFBQSxTQUFBbVIsUUFDQW5SLEVBQUEsdUJBQUFDLEtBQUEsS0FDQUQsRUFBQSx1QkFBQUMsS0FBQSxVQUlBLFFBQUFtTSxHQUFBNEIsR0FFQWhPLEVBQUFoQixVQUFBZ0gsTUFBQWdJLEdBSUEsUUFBQWIsR0FBQWEsR0FFQWhPLEVBQUFoQixVQUFBc0QsR0FBQSxTQUFBLGFBQUEwTCxHQUlBLE9BQ0ExQixRQUFBQSxFQUNBRixrQkFBQUEsRUFDQWUsaUJBQUFBLEVBQ0FGLFlBQUFBLEVBQ0FDLFVBQUFBLElDM0ZBcEosbUJBQUEsV0FHQSxRQUFBd0ksR0FBQThFLEdBRUFwUyxTQUFBOEcsTUFBQSx5QkFFQTlGLEVBQUEsY0FBQW9ILEtBQUFnSyxFQUFBLFdBRUEsR0FBQUMsR0FBQSxHQUFBNVIsS0FFQSxLQUFBTixFQUFBLEVBQUFBLEVBQUEsR0FBQUEsSUFFQWEsRUFBQSxRQUFBd0csT0FBQSxrQkFBQXJILEVBQUEsS0FBQUEsRUFBQSxZQUdBLEtBQUFBLEVBQUEsS0FBQUEsRUFBQWtTLEVBQUExQyxjQUFBLEVBQUF4UCxJQUVBLEtBQUFBLEVBTUFhLEVBQUEsU0FBQXdHLE9BQUEsa0JBQUFySCxFQUFBLEtBQUFBLEVBQUEsYUFKQWEsRUFBQSxTQUFBd0csT0FBQSxrQkFBQXJILEVBQUEseUJBQUFBLEVBQUEsZUFVQSxRQUFBaU4sR0FBQTRCLEdBTUFoTyxFQUFBLGNBQUFzQyxHQUFBLFNBQUEsZ0JBQUEwTCxHQUlBLE9BQ0ExQixRQUFBQSxFQUNBRixrQkFBQUEsSUMxQ0E3SCx3QkFBQSxXQUdBLFFBQUErSCxHQUFBOEUsR0FFQXBTLFNBQUE4RyxNQUFBLHNCQUVBOUYsRUFBQSxjQUFBb0gsS0FBQWdLLEdBSUEsUUFBQWhGLEdBQUE0RCxHQUdBaFEsRUFBQSxjQUFBc0MsR0FBQSxTQUFBLGFBQUEwTixHQUlBLE9BQ0ExRCxRQUFBQSxFQUNBRixrQkFBQUEsSUNwQkF6SSxrQkFBQSxXQUdBLFFBQUEySSxHQUFBMkQsR0FFQWpSLFNBQUE4RyxNQUFBbUssRUFBQW5LLE1BQUEsY0FFQTlGLEVBQUEsY0FBQW9ILEtBQUEsNENBQUEsV0FDQXBILEVBQUEsNkJBQUFvTyxLQUFBLE1BQUE2QixFQUFBN0gsT0FDQXBJLEVBQUEseUJBQUFDLEtBQUFnUSxFQUFBbkssT0FDQTlGLEVBQUEseUJBQUFDLEtBQUEsS0FBQWdRLEVBQUE5SCxNQUFBbUgsUUFBQSxJQUVBdFAsRUFBQSx1QkFBQXdHLE9BQUF5SixFQUFBL04sWUFDQWxDLEVBQUEsNEJBQUF3RyxPQUFBMUksYUFBQW1TLEVBQUFHLFdBQ0FwUSxFQUFBLDZCQUFBd0csT0FBQTFJLGFBQUFtUyxFQUFBcUIsWUFDQXRSLEVBQUEsd0JBQUF3RyxPQUFBeUosRUFBQUUsVUFDQW5RLEVBQUEseUJBQUF3RyxPQUFBeUosRUFBQUMsT0FDQWxRLEVBQUEseUJBQUFDLEtBQUFnUSxFQUFBSyxhQUNBdFEsRUFBQSxjQUFBb08sS0FBQSxVQUFBNkIsRUFBQS9OLFlBRUEvQixXQUFBSyxZQUVBUixFQUFBLHdCQUFBb08sS0FBQSxVQUFBLDBCQUFBNkIsRUFBQS9OLFdBQUEsTUFJQWxDLEVBQUEsd0JBQUFNLE1BR0EsSUFBQWQsR0FBQSxHQUFBQyxNQUFBd1EsRUFBQXNCLGNBRUFDLEdBQUEsVUFBQSxXQUFBLFFBQUEsUUFBQSxNQUFBLE9BQUEsT0FBQSxXQUFBLFlBQUEsVUFBQSxXQUFBLFdBRUF4UixHQUFBLCtCQUFBd0csT0FBQWhILEVBQUFpUyxTQUFBLElBQUFELEVBQUFoUyxFQUFBb1AsWUFBQSxJQUFBcFAsRUFBQW1QLGlCQUlBLFFBQUF2QyxHQUFBNEIsR0FNQWhPLEVBQUFoQixVQUFBZ0gsTUFBQWdJLEdBSUEsT0FDQTFCLFFBQUFBLEVBQ0FGLGtCQUFBQSxJQ2pEQTFILG1CQUFBLFdBR0EsUUFBQTRILEdBQUFULEdBR0E3TSxTQUFBOEcsTUFBQSxzQkFDQTlGLEVBQUEsY0FBQUMsS0FBQSxzRUFFQXlSLEVBQUE3RixHQUdBLFFBQUE2RixHQUFBN0YsR0FHQTdMLEVBQUEsYUFBQW9ILEtBQUEsZ0NBQUEsV0FHQSxHQUFBdUssR0FBQSxFQUNBQyxFQUFBLENBQ0E1UixHQUFBaUgsS0FBQTRFLEVBQUEsU0FBQW9DLEVBQUExTyxHQUVBLEdBQUFzUyxHQUFBN1IsRUFBQSxTQUFBd0csT0FBQXhHLEVBQUEscUJBQUFtTyxRQUdBd0QsSUFBQSxFQUNBM1IsRUFBQTZSLEdBQUE3TyxLQUFBLG1CQUFBd0QsT0FBQW1MLEdBQ0EzUixFQUFBNlIsR0FBQTdPLEtBQUEsMEJBQUFvTCxLQUFBLE1BQUE3TyxFQUFBNkksT0FDQXBJLEVBQUE2UixHQUFBN08sS0FBQSxzQkFBQS9DLEtBQUFWLEVBQUF1RyxPQUNBOUYsRUFBQTZSLEdBQUE3TyxLQUFBLHNCQUFBd0QsT0FBQSxLQUFBakgsRUFBQTRJLE9BQ0FuSSxFQUFBNlIsR0FBQTdPLEtBQUEseUJBQUF3RCxPQUFBMUksYUFBQXlCLEVBQUE2USxXQUNBcFEsRUFBQTZSLEdBQUE3TyxLQUFBLDZCQUFBd0QsT0FBQXZJLHFCQUFBc0IsRUFBQXVTLFFBQ0E5UixFQUFBNlIsR0FBQTdPLEtBQUEsMkJBQUF3RCxTQUNBeEcsRUFBQTZSLEdBQUE3TyxLQUFBLGVBQUFvTCxLQUFBLFVBQUE3TyxFQUFBMkMsWUFDQWxDLEVBQUE2UixHQUFBN08sS0FBQSxhQUFBb0wsS0FBQSxVQUFBN08sRUFBQTJDLFlBRUFsQyxFQUFBLGVBQUF3RyxPQUFBcUwsR0FDQUQsTUFHQSxHQUFBQSxHQUNBNVIsRUFBQSwyQkFBQWlELE9BSUFqRCxFQUFBLHFCQUFBcU8sUUFBQTFILFdBR0EsUUFBQXlGLEdBQUE0QixHQUVBaE8sRUFBQWhCLFVBQUFnSCxNQUFBZ0ksR0FHQSxRQUFBeEIsR0FBQXdCLEdBRUFoTyxFQUFBLGNBQUE2TyxNQUFBdk0sR0FBQSxRQUFBLGNBQUEsU0FBQUUsR0FFQUEsRUFBQUMsZ0JBQ0EsSUFBQTZJLEdBQUF0TCxFQUFBcEIsTUFBQThDLEtBQUEsTUFDQW9NLEVBQUE5TixFQUFBcEIsTUFBQWdSLFFBQUEsT0FDQTVCLEdBQUExQyxFQUFBd0MsS0FHQSxRQUFBQyxHQUFBRCxHQUVBQSxFQUFBK0IsT0FBQSxJQUFBLEdBQUFrQyxRQUFBLEtBR0EsT0FDQXpGLFFBQUFBLEVBQ0FvRixhQUFBQSxFQUNBdEYsa0JBQUFBLEVBQ0FJLGtCQUFBQSxFQUNBdUIsU0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9QbGF0Zm9ybSBMb2dvJ3NcbmZ1bmN0aW9uIFBsYXRmb3JtTG9nbyhwbGF0Zm9ybW5hYW0pXG57XG4gICAgcGxhdGZvcm1uYWFtID0gcGxhdGZvcm1uYWFtLnRvVXBwZXJDYXNlKCk7XG4gICAgc3dpdGNoIChwbGF0Zm9ybW5hYW0pXG4gICAge1xuICAgICAgICAvL3BsYXRmb3Jtc1xuICAgICAgICBjYXNlIFwiUFMxXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMxLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlBTNFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzNC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJQQ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3dpbmRvd3MucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiWEJPWFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3hib3gucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiTkVTXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmVzLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIk42NFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL242NC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBTV0lUQ0hcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9zd2l0Y2gucG5nJyAvPlwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHBsYXRmb3JtbmFhbTtcblxuICAgICAgICAvL3B1Ymxpc2hlcnNcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9uaW50ZW5kby5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJVQklTT0ZUXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy91Ymlzb2Z0LnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIkVMRUNUUk9OSUMgQVJUU1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvZWEucG5nJyAvPlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gQmVzY2hpa2JhYXJoZWlkS2xldXIoc3RvY2t2YWx1ZSl7XG4gICAgXG4gICAgICAgIGlmIChzdG9ja3ZhbHVlPD0wKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbnJlZC5wbmcnIC8+XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvY2t2YWx1ZT49MSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2F2YWlsYWJpbGl0eS9idXR0b25ncmVlbi5wbmcnIC8+XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvY2t2YWx1ZVxuICAgICAgICB9XG59XG5cbi8vIFZhbiBXaXNobGlzdCBwYWdpbmFcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJzcGFuLmxpa2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBWYW4gU2luZ2xlIFByb2R1Y3QgcGFnaW5hXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwic3Bhbi5zaW5nbGVfbGlrZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwic2luZ2xlX2xpa2UtLWFjdGl2ZVwiKTtcbn0pOyIsIiQoZG9jdW1lbnQpLm9uKFwibW91c2VlbnRlclwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KVxue1xuICAgIC8vIEdldCBjb250ZW50IGFuZCBwb3NpdGlvblxuICAgIHZhciBjb250ZW50ICA9ICQodGhpcykuZGF0YShcInRvb2x0aXBcIik7XG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0T2Zmc2V0KHRoaXMpO1xuXG4gICAgLy8gQ3JlYXRlIHRvb2x0aXBcbiAgICB2YXIgdG9vbHRpcCA9ICQoXCI8ZGl2IGNsYXNzPSd0b29sdGlwJz5cIiArIGNvbnRlbnQgKyBcIjwvZGl2PlwiKTtcbiAgICAkKFwiYm9keVwiKS5hcHBlbmQodG9vbHRpcCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9uc1xuICAgIHBvc2l0aW9uLnRvcCAgPSBwb3NpdGlvbi50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG4gICAgcG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAoJCh0aGlzKS5vdXRlcldpZHRoKCkgLyAyKSAtICgkKFwiLnRvb2x0aXBcIikub3V0ZXJXaWR0aCgpIC8gMik7XG5cbiAgICAvLyBDaGFuZ2UgcG9zaXRpb24gb2YgdG9vbHRpcFxuICAgIHRvb2x0aXAuY3NzKFwibGVmdFwiLCBwb3NpdGlvbi5sZWZ0KTtcbiAgICB0b29sdGlwLmNzcyhcInRvcFwiLCBwb3NpdGlvbi50b3ApO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZVwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJChcImJvZHlcIikuZmluZChcIi50b29sdGlwXCIpLnJlbW92ZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbClcbntcbiAgICBlbCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGVsLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgdG9wOiBlbC50b3AgKyB3aW5kb3cuc2Nyb2xsWVxuICB9XG59IiwiLyoqXG4gKiBIZWxwZXIgZm9yIGZpbmRpbmcsIGNyZWF0aW5nIGFuZCBkZWxldGluZyBjb29raWVzXG4gKi9cbmZ1bmN0aW9uIENvb2tpZUhlbHBlcigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKVxuICAgIHtcbiAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcblxuICAgICAgICAgICAgaWYgKGNvb2tpZVswXS50cmltKCkgPT0gbmFtZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBOYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgIFZhbHVlIG9mIHRoZSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRoaXMuY3JlYXRlQ29va2llID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpXG4gICAge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7IFxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMSoyNCo2MCo2MCoxMDAwKSk7IFxuICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIisgZC50b1VUQ1N0cmluZygpOyBcblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSBjb29raWUgYW5kIGl0J3MgdmFsdWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXG4gICAgICogXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0aGlzLmRlbGV0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcbiAgICB9XG59XG4iLCJ2YXIgUm91dGVyICAgICAgID0gbmV3IFJvdXRlcigpO1xudmFyIENvb2tpZUhlbHBlciA9IG5ldyBDb29raWVIZWxwZXIoKTtcbnZhciBVc2VySGVscGVyICAgICA9IG5ldyBVc2VySGVscGVyKCk7XG52YXIgV2lzaGxpc3RIZWxwZXIgPSBuZXcgV2lzaGxpc3RIZWxwZXIoKTtcblxuZnVuY3Rpb24gc2hvd0xvYWRTY3JlZW4oKVxue1xuICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PGRpdiBjbGFzcz1cImJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlMlwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UzXCI+PC9kaXY+IDwvZGl2PicpO1xufVxuXG5mdW5jdGlvbiBvbkxvYWRQYWdlKClcbntcbiAgICBpZiAoVXNlckhlbHBlci5pc0FkbWluKCkpXG4gICAge1xuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKFVzZXJIZWxwZXIuaXNDdXN0b21lcigpKVxuICAgIHtcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICQoXCIudmlzaWJsZS1hZG1pblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAgIH1cbn0iLCIvKipcbiAqIEhlbHBlciBmb3IgdXNlciByZWxhdGVkIHN0dWZmXG4gKi9cbmZ1bmN0aW9uIFVzZXJIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIGEgZ3Vlc3QgKG5vdCBsb2dnZWQgaW4pXG4gICAgICovXG4gICAgdGhpcy5pc0xvZ2VkSW4gPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9IHVuZGVmaW5lZCAmJiBhY2Nlc3NUb2tlbiAhPSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGEgY3VzdG9tZXJcbiAgICAgKi9cbiAgICB0aGlzLmlzQ3VzdG9tZXIgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHVzZXJ0eXBlID0gdGhpcy5kZWNvZGVUb2tlbigpLnVzZXJ0eXBlO1xuXG4gICAgICAgICAgICBpZiAodXNlcnR5cGUgPT0gXCJjdXN0b21lclwiIHx8IHVzZXJ0eXBlID09IFwiYWRtaW5cIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFkbWluXG4gICAgICovXG4gICAgdGhpcy5pc0FkbWluID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcblxuICAgICAgICAgICAgaWYgKHVzZXJ0eXBlID09IFwiYWRtaW5cIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgdGhlIEpXVCB0b2tlblxuICAgICAqL1xuICAgIHRoaXMuZGVjb2RlVG9rZW4gPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xuXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0gYWNjZXNzVG9rZW4uc3BsaXQoXCIuXCIpWzFdO1xuXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgdXNlclxuICAgICAqL1xuICAgIHRoaXMuZ2V0VXNlckluZm8gPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxufSIsIi8qKlxuICogSGVscGVyIGZvciBjYXJ0IGFjdGlvbnNcbiAqL1xuZnVuY3Rpb24gV2lzaGxpc3RIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgIFByb2RjdXQgSUQgdG8gcmVtb3ZlIGZvbSB0aGUgY2FyXG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIGVhbl9udW1iZXIsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIFdpc2hsaXN0LlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IGlzIGFsIGluIFdpc2hsaXN0LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJhLm9yZGVyX19uYXZpZ2F0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikgPT0gZmFsc2UpXG4gICAge1xuICAgICAgICAvLyBHZXQgdGhlIG9yZGVyIHN0ZXBcbiAgICAgICAgdmFyIHN0ZXAgPSAgJCh0aGlzKS5kYXRhKFwic3RlcFwiKTtcblxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBvcmRlciBzdGVwIGFzIGFjdGl2ZVxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaS5cIiArIHN0ZXApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuXCIgKyBzdGVwICsgXCIgYVwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuXG4gICAgICAgICQoXCIub3JkZXJfX3N0ZXBcIikucmVtb3ZlQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xuICAgICAgICAkKFwiI1wiICsgc3RlcCkuYWRkQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xuICAgIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3NoaXBwaW5nX21ldGhvZFwiLCBmdW5jdGlvbiAoZSlcbntcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcblxuICAgIGlmICh2YWwgIT0gXCJcIilcbiAgICB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAkKFwiLnNoaXBwaW5nX19maWVsZHNcIikuaGlkZSgpO1xuICAgICQoXCIuXCIgKyB2YWwgKyBcIl9maWVsZHNcIikuc2hvdygpO1xufSlcblxuJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCJzZWxlY3QjcGF5bWVudF9tZXRob2RcIiwgZnVuY3Rpb24gKGUpXG57XG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XG5cbiAgICBpZiAodmFsICE9IFwiXCIpXG4gICAge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxufSk7IiwidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgYmFzZVVybCA9IFwicHJvamVjdC13ZWJzaG9wL1wiO1xuXG4gICAgZnVuY3Rpb24gcm91dGUodXJsLCBoaXN0b3J5KVxuICAgIHtcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRpY2xlcyA9IGdldFBhcnRpY2xlcyh1cmwpO1xuXG4gICAgICAgIHN3aXRjaChwYXJ0aWNsZXNbMF0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpbmRleC5odG1sXCI6XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdHNcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVzZXRwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2lzaGxpc3RcIjpcbiAgICAgICAgICAgICAgICBuZXcgV2lzaGxpc3RDb250cm9sbGVyKG5ldyBXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFdpc2hsaXN0TW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkbWluXCI6XG4gICAgICAgICAgICAgICAgbmV3IEFkbWluQ29udHJvbGxlcihuZXcgQWRtaW5WaWV3SGVscGVyKCksIG5ldyBBZG1pbk1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pbl91c2VyXCI6XG4gICAgICAgICAgICAgICAgbmV3IEFkbWluVXNlckNvbnRyb2xsZXIobmV3IEFkbWluVXNlclZpZXdIZWxwZXIoKSwgbmV3IEFkbWluVXNlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBPcmRlckNvbnRyb2xsZXIobmV3IE9yZGVyVmlld0hlbHBlcigpLCBuZXcgT3JkZXJNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG5ldyBFcnJvckNvbnRyb2xsZXIobmV3IEVycm9yVmlld0hlbHBlcigpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHVybCAhPSBcIlwiICYmIHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdyaXRlSGlzdG9yeSh7fSwgXCJBLVogR2FtZXNcIiwgdXJsKTtcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgc2NyZWVuIGFuZCBjbG9zZSBjYXJ0XG4gICAgICAgICAgICAgICAgJChcIiNjYXJ0LXNpZGViYXJcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgICQoXCIub3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIHNob3dMb2FkU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBvZiBwYWdlXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbCh1cmwpXG4gICAge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwiaHR0cHNcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJ3d3dcIikgIT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFydGljbGVzKHVybClcbiAgICB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgL1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJhc2UgdXJsIHNldCwgcmVtb3ZlIHRoZSBiYXNlIHVybFxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsICE9IG51bGwgJiYgdXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSAhPSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICsgdGhpcy5iYXNlVXJsLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KC9cXC8oLispPy8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JpdGVIaXN0b3J5KG9iamVjdCwgdGl0bGUsIHVybClcbiAgICB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShvYmplY3QsIHRpdGxlLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiByb3V0ZVxuICAgIH1cbn0iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJChcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbiAoZSlcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIElkIG9mIHRoZSBzaWRlYmFyIHRvIHRvZ2dsZVxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcykuZGF0YShcInNpZGViYXJcIik7XG5cbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiI1wiICsgc2lkZWJhcikpO1xuICAgIH0pO1xuXG4gICAgJChcIi5zaWRlYmFyX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCQodGhpcykucGFyZW50KCkucGFyZW50KCkpO1xuICAgIH0pXG5cbiAgICAkKFwiLm92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiLnNpZGViYXJcIikpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcihzaWRlYmFyKVxuICAgIHtcbiAgICAgICAgJChzaWRlYmFyKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgICAgICQoXCIub3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcbiAgICB9XG59KTsiLCIkLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgbyA9IHt9O1xuICAgIHZhciBhID0gdGhpcy5zZXJpYWxpemVBcnJheSgpO1xuICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIW9bdGhpcy5uYW1lXS5wdXNoKSB7XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG87XG59OyIsInZhciBBZG1pbk1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzXCIsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcbiAgICB9XG5cbn07IiwidmFyIEFkbWluVXNlck1vZGVsID0gZnVuY3Rpb24oaWQpXG57XG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBpZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVVc2VySW5mbyhkYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vIE1vZGlmeSBkYXRhIGJlZm9yZSBzZW5kaW5nIChhbHNvIGNvbnZlcnQgdG8gVVRDKVxuICAgICAgICBkYXRhLmRhdGVfb2ZfYmlydGggPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRhLmphYXIsIGRhdGEubWFhbmQsIGRhdGEuZGFnKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcbiAgICAgICAgZGVsZXRlIGRhdGEuamFhcjtcbiAgICAgICAgZGVsZXRlIGRhdGEubWFhbmQ7XG4gICAgICAgIGRlbGV0ZSBkYXRhLmRhZztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgZGF0YS51c2VyX2lkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXG4gICAgICAgICAgICB0eXBlOiBcIlBBVENIXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZCwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgdXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlLFxuICAgICAgICBzYXZlVXNlckluZm86IHNhdmVVc2VySW5mbyxcbiAgICAgICAgZGVsZXRlVXNlcjogZGVsZXRlVXNlclxuICAgIH1cbn0iLCJ2YXIgQ2FydE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY2FydCBpdGVtc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENhcnQoY2FsbGJhY2spXG4gICAge1xuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xuXG4gICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShjYXJ0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0IGNvb2tpZSBhbmQgZGF0YWJhc2UgaWYgdGhlIHVzZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGlkLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FydCA9IHtlYW5fbnVtYmVyOmRhdGFbMF0uZWFuX251bWJlciwgdGl0bGU6ZGF0YVswXS50aXRsZSwgcHJpY2U6ZGF0YVswXS5wcmljZSwgaW1hZ2U6ZGF0YVswXS5pbWFnZX07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2FydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNhcnQgaW4gY29va2llc1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KFtjYXJ0XSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UoY3VycmVudENhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydC5wdXNoKGNhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDYXJ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGl0ZW0gZnJvbSB0aGUgY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBQcm9kdWN0IGlkXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcbiAgICB7XG4gICAgICAgIGNhcnQgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcblxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2FydFtpXS5lYW5fbnVtYmVyID09IGlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhcnQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDYXJ0OiBnZXRDYXJ0LFxuICAgICAgICBhZGRQcm9kdWN0OiBhZGRQcm9kdWN0LFxuICAgICAgICByZW1vdmVQcm9kdWN0OiByZW1vdmVQcm9kdWN0XG4gICAgfVxufTsiLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL2xvZ2luXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoZW1haWwgKyBcIjpcIiArIHBhc3N3b3JkKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJhY2Nlc3NfdG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJ1c2VyX2lkXCIsIGRhdGEudXNlcl9pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyAncmVsb2FkJyBwYWdlXG4gICAgICAgICAgICAgICAgb25Mb2FkUGFnZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcblxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBsb2dpblxuICAgIH1cbn07IiwidmFyIExvZ291dE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGxvZ291dChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dvdXRcIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZ2V0Q29va2llKFwidXNlcl9pZFwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuZGVsZXRlQ29va2llKFwidXNlcl9pZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcbiAgICAgICAgICAgICAgICBvbkxvYWRQYWdlKCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcblxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRcbiAgICB9XG59OyIsInZhciBPcmRlck1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldE9yZGVySW5mb3JtYXRpb24oY2FsbGJhY2spXG4gICAge1xuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoJ2NhcnQnKTtcblxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQgJiYgY2FydCAhPSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGNhcnQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVPcmRlcihvcmRlckRhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgLy8gQXBwZW5kIGRhdGEgZm9ybSBvdGhlciBzb3VyY2VzXG4gICAgICAgIG9yZGVyRGF0YS5zdGF0dXMgICAgICAgICA9IFwicGFpZFwiO1xuICAgICAgICBvcmRlckRhdGEuYnR3X3BlcmNlbnRhZ2UgPSAyMTtcbiAgICAgICAgb3JkZXJEYXRhLm9yZGVyX2RhdGUgICAgID0gbmV3IERhdGUoKTtcbiAgICAgICAgb3JkZXJEYXRhLmRlbGl2ZXJ5X2Nvc3RzID0gMy45NTtcbiAgICAgICAgb3JkZXJEYXRhLmNhcnQgICAgICAgICAgID0gSlNPTi5wYXJzZShDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9vcmRlcnNcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG9yZGVyRGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJjYXJ0XCIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRPcmRlckluZm9ybWF0aW9uOiBnZXRPcmRlckluZm9ybWF0aW9uLFxuICAgICAgICBzYXZlT3JkZXI6IHNhdmVPcmRlclxuICAgIH1cbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0UGFnZShmaWx0ZXIsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cz9cIiArIGZpbHRlciwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxuICAgIH1cbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIoZm9ybURhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXG4gICAgICAgIGZvcm1EYXRhLmRhdGVfb2ZfYmlydGggPSBuZXcgRGF0ZShEYXRlLlVUQyhmb3JtRGF0YS5qYWFyLCBmb3JtRGF0YS5tYWFuZCwgZm9ybURhdGEuZGFnKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmphYXI7XG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5tYWFuZDtcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmRhZztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVnaXN0ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlX21haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA6IGZvcm1EYXRhLnZvb3JuYWFtLFxuICAgICAgICAgICAgICAgIGluc2VydGlvbiA6IGZvcm1EYXRhLnR1c3NlbnZvZWdzZWwsXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXG4gICAgICAgICAgICAgICAgZ2VuZGVyIDogZm9ybURhdGEuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGRhdGVfb2ZfYmlydGggOiBmb3JtRGF0YS5iaXJ0aF9kYXRlLFxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSA6IGZvcm1EYXRhLnBvc3Rjb2RlLFxuICAgICAgICAgICAgICAgIG51bWJlciA6IGZvcm1EYXRhLmh1aXNudW1tZXIsXG4gICAgICAgICAgICAgICAgc3RyZWV0X25hbWUgOiBmb3JtRGF0YS5zdHJhYXRuYWFtLFxuICAgICAgICAgICAgICAgIGNpdHkgOiBmb3JtRGF0YS5wbGFhdHNcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXG4gICAgfVxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIHJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcbiAgICB9XG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXG57XG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXG4gICAgfVxufTsiLCJ2YXIgVXNlck1vZGVsID0gZnVuY3Rpb24odXNlcmlkKVxue1xuICAgIGZ1bmN0aW9uIEdldFVzZXJJbmZvKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2Vycy9cIiArIHVzZXJpZCxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIEdldFVzZXJJbmZvOiBHZXRVc2VySW5mb1xuICAgIH1cbn07IiwidmFyIFdpc2hsaXN0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0V2lzaGxpc3QoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0XCIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9XaXNobGlzdCh2aWV3RGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgLyorIFwiL1wiICsgdmlld0RhdGEuZWFuX251bWJlciovLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpc2hsaXN0X2lkIDogdmlld0RhdGEud2lzaGxpc3RfaWQsXG4gICAgICAgICAgICAgICAgLy9lYW5fbnVtYmVyIDogdmlld0RhdGEuZWFuX251bWJlclxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIFN0cmluZyhlYW4pLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIC8vIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIC8vIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpOyAvL21vZXQgZGF0YSBwZXIgc2UgbWVlZ2V2ZW4gYWFuIGNhbGxiYWNrP1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFdpc2hsaXN0OiBnZXRXaXNobGlzdCxcbiAgICAgICAgYWRkVG9XaXNobGlzdDogYWRkVG9XaXNobGlzdCxcbiAgICAgICAgZGVsZXRlRnJvbVdpc2hsaXN0OiBkZWxldGVGcm9tV2lzaGxpc3RcbiAgICB9XG59OyIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpOyAvL1wiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSkgXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBBZG1pblVzZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICB2aWV3SGVscGVyLnNldFNhdmVMaXN0ZW5lcihzYXZlVXNlckluZm8pO1xuICAgICAgICB2aWV3SGVscGVyLnNldERlbGV0ZUxpc3RlbmVyKGRlbGV0ZVVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZXZlbnQpXG4gICAge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZU9iamVjdCgpO1xuXG4gICAgICAgIE1vZGVsLnNhdmVVc2VySW5mbyhmb3JtRGF0YSwgZnVuY3Rpb24oZm9ybURhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZcO8cGRhdGUuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJfaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5kZWxldGVVc2VyKHVzZXJfaWQsIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQoXCJHZWJydWlrZXIgc3VjY2Vzdm9sIGdlZGVsZXRlLlwiKTtcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9hZG1pblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Q2FydCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRDYXJ0KGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaXRlbSB0byB0aGUgY2FydCBhbmQgcGFzcyBpdCB0byB0aGUgdmlld0hlbHBlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCAgSXRlbSBpZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5hZGRQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmFkZEl0ZW0oZGF0YSk7IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxuICAgIHtcbiAgICAgICAgTW9kZWwucmVtb3ZlUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldENhcnQpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRQcm9kdWN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBEZWxldGVDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG5cbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJ2YXIgRXJyb3JDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlcilcbntcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgTG9naW5Db250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xuXG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCJwcm9kdWN0c1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgTG9nb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICBNb2RlbC5sb2dvdXQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIE9yZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRPcmRlckluZm9ybWF0aW9uKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9yZGVyKGV2ZW50KVxuICAgIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcblxuICAgICAgICBNb2RlbC5zYXZlT3JkZXIoZm9ybURhdGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5maW5pc2hPcmRlcigpO1xuICAgICAgICAgICAgVmlld0hlbHBlci5jbGVhckNhcnQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldE9yZGVyTGlzdGVuZXIob3JkZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvZHVjdHMoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm0gKHBhZ2UgcmVsb2FkKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmaWx0ZXJzLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmxvYWRQcm9kdWN0cyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxuXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcbiAgICAgICAgeyBcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVnaXN0ZXIoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJyk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG5cbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBhY3Rpb25QZXJmb3JtZWRcIik7IC8vdGVzdFxuXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG5cbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XG5cbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG5cbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxuICAgICAgICB7IFxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGludWVkXCIpXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVzZXRwYXNzd29yZChmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9hZnRlcl9yZXNldC5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHsgICAgICBcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG5cbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07XG5cblxuXG5cbiIsInZhciBQcm9kdWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG5cblxuXG5cbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcblxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsZXQgdmlldyBzaG93IHZpZXcgd2l0aCBkYXRhIGZyb20gZGF0YWJhc2VcbiAgICBmdW5jdGlvbiBzaG93VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gd2hhdCBoYXBwZW5zOlxuICAgICAgICAvLyAxKSB1c2VyIGNsaWNrcyBvbiBhIHByb2R1Y3QgXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcbiAgICAgICAgLy8gNCkgdmlldyBzaG93cyBpbmZvXG5cbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XG5cblxuXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgLy9WaWV3SGVscGVyLnNldFZpZXcoKTtcblxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgLy9WaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICBzaG93VmlldyA6IHNob3dWaWV3XG4gICAgfVxufTsiLCJ2YXIgV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIHZhciB2aWV3RGF0YSA9IHt9O1xuXG4gICAgZnVuY3Rpb24gZ2V0V2lzaGxpc3QoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0V2lzaGxpc3Qoc2V0Vmlldyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRXaXNobGlzdCk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbVdpc2hsaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tV2lzaGxpc3QoZWFuLCBkaXZfdG9faGlkZSlcbiAgICB7XG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBBZG1pblZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW4vYWRtaW4uaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSAkKCcjc2luZ2xlX3VzZXInKS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZmlyc3RuYW1lXCIpLmh0bWwodmFsdWUuZmlyc3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5hdHRyKCdocmVmJywgJy9hZG1pbl91c2VyLycgKyB2YWx1ZS51c2VyX2lkKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9faW5zZXJ0aW9uXCIpLmh0bWwodmFsdWUuaW5zZXJ0aW9uKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fbGFzdG5hbWVcIikuaHRtbCh2YWx1ZS5zdXJuYW1lKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZW1haWxcIikuaHRtbCh2YWx1ZS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX3Bob25lbnVtYmVyXCIpLmh0bWwodmFsdWUucGhvbmVfbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjdXNlcnNfYm9keVwiKS5hcHBlbmQodXNlcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNzaW5nbGVfdXNlclwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgfVxufVxuXG4gICAgLy9kYXQgaGllcm9uZGVyIHphdCBhYXJkaWcgd2F0IHdlcmsgaW4uLi4gRG9uYWxkIHdpbCBub2cgZmYgaG91ZGVuXG5cbiAgICAvLyBmdW5jdGlvbiBzaG93VXNlcnMoZGF0YSlcbiAgICAvLyB7XG4gICAgLy8gICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcblxuICAgIC8vICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW4vYWRtaW4uaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHZhciB0YWJsZSA9ICQoXCI8dGFibGUgaWQ9J3VzZXJzX3RhYmxlJz48L3RhYmxlPlwiKTtcblxuICAgIC8vICAgICAgICAgLy8gdGFibGUgaGVhZGVyXG4gICAgLy8gICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XG4gICAgLy8gICAgICAgICByb3cuYXBwZW5kKCc8dGQ+Vm9vcm5hYW08L3RkPjx0ZD5UdXNzZW52PC90ZD48dGQ+QWNodGVybmFhbTwvdGQ+PHRkPkdlYnJ1aWtlcnNuYWFtPC90ZD48dGQ+ZW1haWw8L3RkPjx0ZD50eXBlPC90ZD4nKTtcblxuICAgIC8vICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKG51bWJlcnIsIHVzZXIpIFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHZhciByb3cgPSAkKCc8dHI+PC90cj4nKTtcbiAgICAvLyAgICAgICAgICAgICAkLmVhY2godXNlciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpLmh0bWwoU3RyaW5nKHZhbHVlKSkgKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIHRhYmxlLmFwcGVuZChyb3cpO1xuICAgIC8vICAgICAgICAgICAgIC8vIC8vZm9yIGFkZGl0aW9uYWwgdXNlciBpbmZvIGlmIGNsaWNrZWRcbiAgICAvLyAgICAgICAgICAgICAvLyByb3cgPSAkKCc8ZGl2IGNsYXNzPVwidG9iZXRhYmxlXCI+PC9kaXY+Jyk7XG4gICAgLy8gICAgICAgICAgICAgLy8gdGFibGUuYXBwZW5kKHJvdyk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICQoJyN1c2VycycpLmFwcGVuZCh0YWJsZSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIHB1dEluZm9Jbkh0bWwoY2xpY2tlZCwgZGF0YSlcbiAgICAvLyB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdpbiBwdXRJbmZvSW5IdG1sKCknKTtcbiAgICAvLyAgICAgLy8gc2hvdyBpbmZvIG9mIHRoZSByaWdodCB1c2VyIChpZiBub3QgYWxyZWFkeSBzaG93aW5nIGl0KVxuICAgIC8vICAgICAvLyBpbnNlcnQgcm93IGFzIHRhYmxlIGhlYWRlclxuICAgIC8vICAgICB2YXIgaGVhZGVycm93ID0gJCgnPHRyPjwvdHI+JykuYXBwZW5kKCc8dGQ+d3c8L3RkPjx0ZD5nZWJsb2trZWVyZDwvdGQ+PHRkPmlkPC90ZD48dGQ+Z2VuZGVyPC90ZD48dGQ+Z2Vib29ydGVkYXR1bTwvdGQ+PHRkPnZyYWFnPC90ZD48dGQ+YW50d29vcmQ8L3RkPicpO1xuXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgd2l0aCB0ZSB1c2VyaW5mb1xuICAgIC8vICAgICB2YXIgaW5mb3JvdyA9ICQoJzx0cj48L3RyPicpO1xuXG4gICAgLy8gICAgIHZhciBjb3VudCA9IDA7XG4gICAgLy8gICAgICQuZWFjaChkYXRhWzBdLCBmdW5jdGlvbihrZXksIHZhbHVlKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBpZiAoY291bnQgPT0gMSkgeyAvLyBnZWJsb2trZWVyZFxuICAgIC8vICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ25lZSc7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2phJ1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2RiIGZvdXQ/J1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xuICAgIC8vICAgICAgICAgdmFyIHRkID0gJCgnPHRkPjwvdGQ+JykuYXBwZW5kKHZhbHVlKTtcblxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2tleSwgdmFsdWU6ICcgKyBrZXksIHZhbHVlKTtcblxuICAgIC8vICAgICAgICAgaW5mb3Jvdy5hcHBlbmQodGQpO1xuXG4gICAgLy8gICAgICAgICBjb3VudCArPSAxO1xuICAgIC8vICAgICB9KVxuXG4gICAgLy8gICAgIGluZm9yb3cuaW5zZXJ0QWZ0ZXIoICQoY2xpY2tlZCkuY2xvc2VzdCgndHInKSApO1xuICAgIC8vICAgICBoZWFkZXJyb3cuaW5zZXJ0QWZ0ZXIoJChjbGlja2VkKS5jbG9zZXN0KCd0cicpKTtcbiAgICAvLyB9XG5cbiIsInZhciBBZG1pblVzZXJWaWV3SGVscGVyID0gZnVuY3Rpb24gKClcbntcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmFsdWUpXG4gICAge1xuICAgICAgICAvL3ByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbnVzZXIvYWRtaW51c2VyLmh0bWwnLCBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUudXNlcl9pZCkgICBcbiAgICAgICAgICAgICQoXCIjZmlyc3RfbmFtZVwiKS52YWwodmFsdWUuZmlyc3RfbmFtZSk7XG4gICAgICAgICAgICAkKFwiI2luc2VydGlvblwiKS52YWwodmFsdWUuaW5zZXJ0aW9uKTtcbiAgICAgICAgICAgICQoXCIjc3VybmFtZVwiKS52YWwodmFsdWUuc3VybmFtZSk7XG4gICAgICAgICAgICAkKFwiI3VzZXJfdHlwZVwiKS52YWwodmFsdWUudXNlcl90eXBlKTtcbiAgICAgICAgICAgICQoXCIjZW1haWxcIikudmFsKHZhbHVlLmVtYWlsKTtcbiAgICAgICAgICAgICQoXCIjcGFzc3dvcmRcIikuYXR0cigncGxhY2Vob2xkZXInLCAnVnVsIGhpZXIgaWV0cyBpbiBvbSBoZXQgd2FjaHR3b29yZCB0ZSB2ZXJhbmRlcmVuJyk7XG4gICAgICAgICAgICAkKFwiI2dlbmRlclwiKS52YWwodmFsdWUuZ2VuZGVyKTtcbiAgICAgICAgICAgICQoXCIjZGF0ZV9vZl9iaXJ0aFwiKS52YWwodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XG4gICAgICAgICAgICAkKFwiI3Bob25lX251bWJlclwiKS52YWwodmFsdWUucGhvbmVfbnVtYmVyKTtcbiAgICAgICAgICAgICQoXCIjaXNfYWN0aXZlXCIpLnZhbCh2YWx1ZS5pc19hY3RpdmUpO1xuICAgICAgICAgICAgJChcIiN1c2VyX2lkXCIpLnZhbCh2YWx1ZS51c2VyX2lkKTtcblxuICAgICAgICAgICAgdmFyIHRvZGF5ICAgICAgID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXRlT2ZCaXJ0aCA9IG5ldyBEYXRlKHZhbHVlLmRhdGVfb2ZfYmlydGgpO1xuXG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpID09IGRhdGVPZkJpcnRoLmdldERhdGUoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMTkwMDsgaSA8IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAxOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIjbWFhbmRcIikudmFsKGRhdGVPZkJpcnRoLmdldE1vbnRoKCkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNhdmVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgJyN1c2VyZm9ybScsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCAnI2RlbGV0ZV9idG4nLCBmdW5jdGlvbiAoZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWN0aW9uKCQodGhpcykuZGF0YShcImlkXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRTYXZlTGlzdGVuZXI6IHNldFNhdmVMaXN0ZW5lcixcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyXG4gICAgfVxufSIsInZhciBDYXJ0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpZXdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2ludH0gdG90YWxQcmljZSAgVG90YWwgcHJpY2Ugb2YgdGhlIGNhcnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbFByaWNlKG5ld1ByaWNlKVxuICAgIHtcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XG4gICAgICAgICQoXCIuY2FydF9fdG90YWwgLnByaWNlXCIpLmh0bWwoXCLigqxcIiArIHBhcnNlRmxvYXQobmV3UHJpY2UpLnRvRml4ZWQoMikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgbmV3IGNhcnQgaXRlbSB2aXNpYWJsZSBpbiB0aGUgRE9NXG4gICAgICogXG4gICAgICogQHBhcmFtICB7YXJyYXl9ICBpdGVtICBQcm9kdWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxuICAgIHtcbiAgICAgICAgdmFyIGNhcnRJdGVtID0gJCgnPGRpdj4nKS5odG1sKCQoJy5zaWRlYmFyX19jb250ZW50X190bXAnKS5odG1sKCkpO1xuXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fdGl0bGVcIikuaHRtbChpdGVtLnRpdGxlKTtcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX19wcmljZVwiKS5odG1sKFwi4oKsXCIgKyBpdGVtLnByaWNlLnRvRml4ZWQoMikpO1xuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1cIikuYXR0cihcImRhdGEtaWRcIiwgaXRlbS5lYW5fbnVtYmVyKVxuXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xuXG4gICAgICAgIC8vIENoYW5nZSBhbW91bnQgb2YgaXRlbXNcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcbiAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpICsgMSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxuICAgICAgICB1cGRhdGVUb3RhbFByaWNlKGl0ZW0ucHJpY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIGNhcnQgd2hlbiB0aGUgcGFnZSBpcyAgcmVhc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIGZvciB0aGUgQWRkIHRvIGNhcnQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRBZGRQcm9kdWN0TGlzdGVuZXIoYWRkVG9DYXJ0KVxuICAgIHtcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hZGR0b2NhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQodGhpcykuZGF0YShcImlkXCIpO1xuICAgICAgICAgICAgYWRkVG9DYXJ0KHByb2R1Y3RfaWQpO1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciBmb3IgcmVtb3ZlIGEgcHJvZHVjdCBmcm9tIHRoZSBET00gY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbW92ZVByb2R1Y3QgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBwcm9kY3V0IGZyb20gdGhlIG1lbW9yeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jYXJ0X19pdGVtX19yZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgICAgICAgIHZhciBjYXJ0aXRlbSAgID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGZyb20gRE9NIGNhcnRcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLm9uKFwiYW5pbWF0aW9uZW5kIHdlYmtpdEFuaW1hdGlvbkVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRGVjcmVzZSBjb3VudFxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcbiAgICAgICAgICAgICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwocGFyc2VJbnQoYW1vdW50KSAtIDEpO1xuXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXG4gICAgICAgICAgICB1cGRhdGVUb3RhbFByaWNlKC0kKGNhcnRpdGVtKS5maW5kKFwiLmNhcnRfX2l0ZW1fX3ByaWNlXCIpLmh0bWwoKS5zdWJzdHIoMSkpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW0sXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0QWRkUHJvZHVjdExpc3RlbmVyOiBzZXRBZGRQcm9kdWN0TGlzdGVuZXIsXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lcixcbiAgICB9XG59OyIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiT2VwcyAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWwnKTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ2luVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBMb2dvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlVpdGxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJQcm9kdWN0ZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIj48ZGl2IGNsYXNzPVwiY29sLTNcIiBpZD1cImZpbHRlcnNcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLTlcIiBpZD1cInByb2R1Y3RzXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgIC8vIGxvYWQgZmlsdGVyc1xuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xuXG4gICAgICAgIC8vIGxvYWQgcHJvZHVjdHNcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXG4gICAge1xuICAgICAgICAkKFwiI3Byb2R1Y3RzXCIpLmxvYWQoJy92aWV3cy9wcm9kdWN0cy9wcm9kdWN0cy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjcHJvZHVjdF9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgUEVHSSBcIikgKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fZGVzY3JpcHRpb25cIikuaHRtbChDdXRTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiI2J1dHRvbnNfX2luZm8sIC5wcm9kdWN0X19pbWFnZSBhLCAucHJvZHVjdF9fdGl0bGVcIikuYXR0cihcImhyZWZcIiwgXCJwcm9kdWN0L1wiICsgdmFsdWUuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIuYWRkdG9jYXJ0XCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9TaG93IG1vcmUvbGVzc1xuICAgIGZ1bmN0aW9uIEN1dFN0cmluZyh0ZXh0KXtcbiAgICAgICAgdmFyIFNob3dBbW91bnQgPSA1MDtcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYoV29yZHNBcnJheS5sZW5ndGg+U2hvd0Ftb3VudCl7XG4gICAgICAgICAgICB2YXIgU2hvcnRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xuICAgICAgICAgICAgICAgIFNob3J0U3RyaW5nICs9IFdvcmRzQXJyYXlbaV0gKyBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgIC8vIEhpZXIgaGV0IGZvcm11bGllciB2ZXJzdHVyZW4gYWxzIHdlIG9wIGVlbiBjaGVja2JveCBkcnVra2VuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBkZSBwcm9kdWN0ZW5saWpzdCBhbHMgZWVuIHdhYXJkZSBpbiBkZSBzbGlkZXIgdmVyYW5kZXJkKGFsbGUgbWFuaWVyZW4pXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlIGtleXVwXCIsIFwiaW5wdXRbbmFtZT1wcmljZS1tYXhdLCBpbnB1dFtuYW1lPXByaWNlLW1pbl1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCQoXCIjcHJpY2VtaW5cIikudmFsKCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQoXCIjcHJpY2VtaW5cIikudmFsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgbG9hZFByb2R1Y3RzOiBsb2FkUHJvZHVjdHMsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0RmlsdGVyTGlzdGVuZXI6IHNldEZpbHRlckxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgT3JkZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoY2FydClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJCZXN0ZWxsZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9vcmRlci9vcmRlci5odG1sJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGNhcnQgY29udGVudFxuICAgICAgICAgICAgICAgICQuZWFjaChjYXJ0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikgKyB2YWx1ZS5wcmljZS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKFwiPGhyIC8+XCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJChcIiNvcmRlcl9pbmZvIC5vcmRlcl9fbmF2aWdhdGVcIikuZmlyc3QoKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz5KZSB3aW5rZWx3YWdlbiBpcyBub2cgbGVlZywgc3RvcCBlciBwcm9kdWN0ZW4gaW4gb20gZGV6ZSB0ZSBrdW5uZW4gYmVzdGVsbGVuLjwvZGl2PlwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RcIikuZmlyc3QoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XG4gICAgICAgICAgICAkKFwiI3RvdGFsXCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XG4gICAgICAgICAgICAkKFwiLnRvdGFsX19wcmljZVwiKS5odG1sKCQoXCIuY2FydF9fdG90YWwgLnByaWNlXCIpLmh0bWwoKSk7XG5cbiAgICAgICAgICAgIC8vIFNldCBkZWxpdmVyeSBkYXRlICh3ZSBhbHdheXMgZGVsaXZlciBpbiBvbmUgZGF5KVxuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgICAgICAgICAgICQoXCIuZGVsaXZlcnlfZGF0ZVwiKS5odG1sKHRvZGF5LmdldERhdGUoKSArIFwiIFwiICsgdG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkpO1xuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX21vbnRoXCIpLmh0bWwodG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwic2hvcnRcIn0pLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX2RheVwiKS5odG1sKHRvZGF5LmdldERhdGUoKSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB1c2VyIGFkZHJlc3NcbiAgICAgICAgICAgIFVzZXJIZWxwZXIuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX25hbWVcIikuaHRtbCh1c2VyLmZpcnN0X25hbWUgKyBcIiBcIiArIHVzZXIuaW5zZXJ0aW9uICsgXCIgXCIgKyB1c2VyLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3N0cmVldFwiKS5odG1sKHVzZXIuYWRkcmVzcy5zdHJlZXQgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5ob3VzZV9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3Bvc3RhbGNvZGVcIikuaHRtbCh1c2VyLmFkZHJlc3MucG9zdGFsX2NvZGUgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5jaXR5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEdvIHRvIHRoZSBsYXN0IHN0ZXAgb2YgdGhlIG9yZGVyIHByb2Nlc3NcbiAgICBmdW5jdGlvbiBmaW5pc2hPcmRlcigpXG4gICAge1xuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaSBhXCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaS5jb25maXJtYXRpb25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgJChcIi5vcmRlcl9fc3RlcFwiKS5yZW1vdmVDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XG4gICAgICAgICQoXCIjY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgdmlzaWJsZSBjYXJ0XG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KClcbiAgICB7XG4gICAgICAgICQoXCIuY2FydFwiKS5lbXB0eSgpO1xuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKFwiMFwiKTtcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrDAwLjAwXCIpXG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBDb25maXJtIHRoZSBvcmRlciB3aGVuIHNibWl0dGluZyB0aGUgZm9ybVxuICAgIGZ1bmN0aW9uIHNldE9yZGVyTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oXCJzdWJtaXRcIiwgXCIjb3JkZXJmb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldE9yZGVyTGlzdGVuZXI6IHNldE9yZGVyTGlzdGVuZXIsXG4gICAgICAgIGZpbmlzaE9yZGVyOiBmaW5pc2hPcmRlcixcbiAgICAgICAgY2xlYXJDYXJ0OiBjbGVhckNhcnRcbiAgICB9XG59OyIsInZhciBSZWdpc3RlclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcbiAgICAgICAgXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdywgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpID09IDIwMDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZWdpc3RlcmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9TaG93KTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07XG5cbi8qXG52YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59O1xuKi8iLCJ2YXIgUHJvZHVjdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyhwcm9kdWN0KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBwcm9kdWN0LnRpdGxlICsgXCIgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvc2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3QuaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fdGl0bGVcIikuaHRtbChwcm9kdWN0LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikpO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19lYW5cIikuYXBwZW5kKHByb2R1Y3QuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucGxhdGZvcm0pKTsgLy8gZnVuY3RpZSB2b29yIGxvZ29cbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucHVibGlzaGVyKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wZWdpXCIpLmFwcGVuZChwcm9kdWN0LnBlZ2lfYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2dlbnJlXCIpLmFwcGVuZChwcm9kdWN0LmdlbnJlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAkKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCBwcm9kdWN0LmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmFkZFRvV2lzaGxpc3RCdXR0b25cIikuYXR0cihcIm9uY2xpY2tcIiwgXCJXaXNobGlzdEhlbHBlci5hZGRJdGVtKFwiICsgcHJvZHVjdC5lYW5fbnVtYmVyICsgXCIpO1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcblxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXkoKSArIFwiIFwiICsgbW9udGhzW2QuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGQuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgV2lzaGxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIHNldFZpZXdcIik7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJXaXNobGlzdCAtIEFaIEdhbWVzXCI7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIj48ZGl2IGNsYXNzPVwiY29sLTEyXCIgaWQ9XCJ3aXNobGlzdFwiPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgIGxvYWRXaXNobGlzdCh2aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFdpc2hsaXN0KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBsb2FkV2lzaExpc3RcIik7XG4gICAgICAgICQoXCIjd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3dpc2hsaXN0L3dpc2hsaXN0Lmh0bWwnLCBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBhZGQgYWxsIHdpc2hsaXN0IGl0ZW1zIHRvIGh0bWxcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIHdpc2hfX2xpc3RfX2l0ZW0gPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjd2lzaF9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsxXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2F2YWlsYWJpbGl0eVwiKS5hcHBlbmQoQmVzY2hpa2JhYXJoZWlkS2xldXIodmFsdWUuc3RvY2spKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fbGlrZWJ1dHRvblwiKS5hcHBlbmQoKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RcIikuYXBwZW5kKHdpc2hfX2xpc3RfX2l0ZW0pO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hsaXN0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZUxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2xpY2tcIiwgXCIjZGVsZXRlX2J0blwiLCBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xuICAgICAgICAgICAgYWN0aW9uKGVhbiwgZGl2X3RvX2hpZGUpO1xuICAgICAgICB9ICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgZGl2X3RvX2hpZGUuZmFkZVRvKDIwMCwgMCkuc2xpZGVVcCgyMDApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRXaXNobGlzdDogbG9hZFdpc2hsaXN0LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lcixcbiAgICAgICAgaGlkZUl0ZW06IGhpZGVJdGVtXG4gICAgfVxufSJdfQ==

        //publishers
        case "NINTENDO":
            return "<img src='/resources/images/publishers/nintendo.png' />";
        case "UBISOFT":
            return "<img src='/resources/images/publishers/ubisoft.png' />";
        case "ELECTRONIC ARTS":
            return "<img src='/resources/images/publishers/ea.png' />";
        case "SONY":
            return "<img src='/resources/images/publishers/sony.png' />";
        case "ROCKSTAR":
            return "<img src='/resources/images/publishers/rockstar.png' />";
        case "SEGA":
            return "<img src='/resources/images/publishers/sega.png' />";
    }
}

function BeschikbaarheidKleur(stockvalue){
    
        if (stockvalue<=0) {
            return "<img src='/resources/images/availability/buttonred.png' />";
        } else if (stockvalue>=1) {
            return "<img src='/resources/images/availability/buttongreen.png' />";
        } else {
            return stockvalue
        }
}

// Van Wishlist pagina
$(document).on("click", "span.like", function (event) {
    $(this).toggleClass("like--active");
});

// Van Single Product pagina
$(document).on("click", "span.single_like", function (event) {
    $(this).toggleClass("single_like--active");
});
$(document).on("click", "a.order__navigate", function (e) {
    e.preventDefault();

    if ($(this).hasClass("disabled") == false)
    {
        // Get the order step
        var step =  $(this).data("step");

        // Set the new order step as active
        $("ul.order-steps li").removeClass("active");
        $("ul.order-steps li." + step).addClass("active");

        $(".order__step").removeClass("order__step--active");
        $("#" + step).addClass("order__step--active");
    }
})

$(document).on("change", "select#shipping_method", function (e)
{
    var val = $(this).val();

    if (val != "")
    {
        $(this).parents(".order__step").find(".btn--next").removeClass("disabled");
    }
    else
    {
        $(this).parents(".order__step").find(".btn--next").addClass("disabled");
    }

    $(".shipping__fields").hide();
    $("." + val + "_fields").show();
})

$(document).on("change", "select#payment_method", function (e)
{
    var val = $(this).val();

    if (val != "")
    {
        $(this).parents(".order__step").find(".btn--next").removeClass("disabled");
        $(this).parents(".order__step").find(".btn--next").attr("disabled", false);
    }
    else
    {
        $(this).parents(".order__step").find(".btn--next").addClass("disabled");
        $(this).parents(".order__step").find(".btn--next").attr("disabled", true);
        
    }
});
var Router = function ()
{
    baseUrl = "project-webshop/";

    function route(url, history)
    {
        if (isInternal(url) == false)
        {
            return;
        }

        var particles = getParticles(url);

        switch(particles[0])
        {
            case "":
            case "index.html":
            case "products":
                new ProductsController(new ProductsViewHelper(), new ProductsModel()).main();
                break;
            case "product":
                new ProductController(new ProductViewHelper(), new ProductModel(particles[1])).main();
                break;
            case "register":
                new RegisterController(new RegisterViewHelper(), new RegisterModel()).main();
                break;
            case "login":
                new LoginController(new LoginViewHelper(), new LoginModel()).main();
                break;
            case "logout":
                new LogoutController(new LogoutViewHelper(), new LogoutModel()).main();
                break;
            case "register":
                new RegisterController(new RegisterViewHelper(), new RegisterModel()).main();
                break;
            case "resetpassword":
                new ResetPasswordController(new ResetPasswordViewHelper(), new ResetPasswordModel()).main();
                break;
            case "wishlist":
                new WishlistController(new WishlistViewHelper(), new WishlistModel()).main();
                break;
            case "admin":
                new AdminController(new AdminViewHelper(), new AdminModel()).main();
                break;
            case "admin_user":
                new AdminUserController(new AdminUserViewHelper(), new AdminUserModel(particles[1])).main();
                break;
            case "public_wishlist":
                new PublicWishlistController(new PublicWishlistViewHelper(), new PublicWishlistModel(particles[1])).main();
                break;
            default:
                new ErrorController(new ErrorViewHelper()).main();
                break;
        }

        if (history != false)
        {
            if (url != "" && typeof url === 'string')
            {
                writeHistory({}, "A-Z Games", url);

                 // Load screen
                showLoadScreen();
                
                // Scroll to top of page
                window.scrollTo(0, 0);
            }
        }
    }

    function isInternal(url)
    {
        if (url.indexOf("http") != -1 || url.indexOf("https") != -1 || url.indexOf("www") != -1)
        {
            window.location = url;
            
            return false;
        }

        return true;
    }

    function getParticles(url)
    {
        // Remove the first /
        if (url.indexOf("/") == 0)
        {
            url = url.substring(1);
        }

        // If there is a base url set, remove the base url
        if (this.baseUrl != null && url.indexOf(this.baseUrl) != -1)
        {
            url = url.substring(url.indexOf(this.baseUrl) + this.baseUrl.length);
        }

        return url.split(/\/(.+)?/)
    }

    function writeHistory(object, title, url)
    {
        window.history.pushState(object, title, url);
    }

    return {
        route: route
    }
}
$(document).ready(function()
{
    $(".sidebar-toggle").click(function (e)
    {
        // Prevent default click action
        e.preventDefault();

        // Id of the sidebar to toggle
        var sidebar = $(this).data("sidebar");

        toggleSidebar($("#" + sidebar));
    });

    $(".sidebar__close").click(function (e) {
        toggleSidebar($(this).parent().parent());
    })

    $(".overlay").click(function (e) {
        toggleSidebar($(".sidebar"));
    });

    function toggleSidebar(sidebar)
    {
        $(sidebar).toggleClass("sidebar--open");
        $(".overlay").toggleClass("overlay--visible");
        $("body").toggleClass("sidebar--open");
    }
});
$(document).on("mouseenter", ".hasTooltip", function(event)
{
    // Get content and position
    var content  = $(this).data("tooltip");
    var position = getOffset(this);

    // Create tooltip
    var tooltip = $("<div class='tooltip'>" + content + "</div>");
    $("body").append(tooltip);

    // Calculate new positions
    position.top  = position.top + $(this).outerHeight();
    position.left = position.left + ($(this).outerWidth() / 2) - ($(".tooltip").outerWidth() / 2);

    // Change position of tooltip
    tooltip.css("left", position.left);
    tooltip.css("top", position.top);
});

$(document).on("mouseleave", ".hasTooltip", function(event) {
    $("body").find(".tooltip").remove();
});

function getOffset(el)
{
    el = el.getBoundingClientRect();
    
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
  }
}
/**
 * Helper for finding, creating and deleting cookies
 */
function CookieHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} name  Name of the cookie
     * 
     * @return {string}
     */
    this.getCookie = function(name)
    {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i].split("=");

            if (cookie[0].trim() == name)
            {
                return cookie[1];
            }
        }
    }

    /**
     * Create a cookie
     * 
     * @param {string} name   Name of the cookie
     * @param {string} value  Value of the cookie
     * 
     * @return {void}
     */
    this.createCookie = function(name, value)
    {
        var d = new Date(); 
        d.setTime(d.getTime() + (1*24*60*60*1000)); 
        var expires = "expires="+ d.toUTCString(); 

        document.cookie = name + '=' + value + ';' + expires + ';path=/'; 
    }

    /**
     * Delete a cookie and it's value
     * 
     * @param {string} name  Name of the cookie
     * 
     * @return {void}
     */
    this.deleteCookie = function(name)
    {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

var Router       = new Router();
var CookieHelper = new CookieHelper();
var UserHelper     = new UserHelper();
var WishlistHelper = new WishlistHelper();

function showLoadScreen()
{
    $("#component").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>');
}

function onLoadPage()
{
    if (UserHelper.isAdmin())
    {
        $(".visible-admin").css("display", "inline-block");
        $(".visible-customer").css("display", "inline-block");
        $("#inloggen_text").hide();
    }
    else if (UserHelper.isCustomer())
    {
        $(".visible-customer").css("display", "inline-block");
        $("#inloggen_text").hide();
    }
    else
    {
        $(".visible-admin").hide();
        $(".visible-customer").hide();
        $("#inloggen_text").css("display", "inline-block");
    }
}
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            if (this.value != "")
            {
                o[this.name].push(this.value);
            }
        } else {
            if (this.value != "")
            {
                o[this.name] = this.value || '';
            }
        }
    });
    return o;
};
/**
 * Helper for user related stuff
 */
function UserHelper()
{
    /**
     * Check if the user is a guest (not logged in)
     */
    this.isLogedIn = function()
    {
        var accessToken = CookieHelper.getCookie("access_token");
        
        if (accessToken != undefined && accessToken != "")
        {
            return true;
        }

        return false;
    }

    /**
     * Check if the current user is a customer
     */
    this.isCustomer = function()
    {
        if (UserHelper.isLogedIn())
        {
            var usertype = this.decodeToken().usertype;

            if (usertype == "customer" || usertype == "admin")
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if the current user is admin
     */
    this.isAdmin = function()
    {
        if (UserHelper.isLogedIn())
        {
            var usertype = this.decodeToken().usertype;

            if (usertype == "admin")
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Decode the JWT token
     */
    this.decodeToken = function()
    {
        var accessToken = CookieHelper.getCookie("access_token");

        if (accessToken != undefined && accessToken  != "")
        {
            var payload = accessToken.split(".")[1];

            return JSON.parse(atob(payload));
        }
    }

    /**
     * Get the information of the current user
     */
    this.getUserInfo = function(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                Router.route("/login");
            }
        });

    }
}
/**
 * Helper for cart actions
 */
function WishlistHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} id  Prodcut ID to remove fom the car
     * 
     * @return {string}
     */
    this.addItem = function(ean_number)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + ean_number,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Product succesvol toegevoegd aan Wishlist.");
            },
            error: function(xhr, status, error) {
                alert("Product is al in Wishlist.");
            }
        });
    }
}
var AdminUserModel = function(id)
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + id, //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function saveUserInfo(data, callback)
    {
        // Modify data before sending (also convert to UTC)
        data.date_of_birth = new Date(Date.UTC(data.jaar, data.maand, data.dag));

        // Remove year, month and day
        delete data.jaar;
        delete data.maand;
        delete data.dag;

        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + data.user_id, //"https://api.az-games.nl/
            type: "PATCH",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteUser(user_id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + user_id, //"https://api.az-games.nl/
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback();
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage,
        saveUserInfo: saveUserInfo,
        deleteUser: deleteUser
    }
}
var AdminModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users", //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }

};
var CartModel = function()
{
    /**
     * Get all cart items
     */
    function getCart(callback)
    {
        var cart = CookieHelper.getCookie("cart");

        if (cart != undefined)
        {
            callback(JSON.parse(cart));
        }
    }

    /**
     * Add a product to the cart cookie and database if the user is registered
     */
    function addProduct(id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + id,
            type: "get",
            contentType: "json",
            success: function (data) {
                cart = {ean_number:data[0].ean_number, title:data[0].title, price:data[0].price, image:data[0].image};
                callback(cart);

                // Save cart in cookies
                var currentCart = CookieHelper.getCookie("cart");

                if (currentCart == undefined)
                {
                    CookieHelper.createCookie("cart", JSON.stringify([cart]));
                }
                else
                {
                    currentCart = JSON.parse(currentCart);
                    currentCart.push(cart);

                    CookieHelper.createCookie("cart", JSON.stringify(currentCart))
                }
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    /**
     * Remove a item from the cart
     * 
     * @param {int} id Product id
     */
    function removeProduct(id)
    {
        cart = JSON.parse(CookieHelper.getCookie("cart"));

        for(i = 0; i < cart.length; i++)
        {
            if (cart[i].ean_number == id)
            {
                cart.splice(i, 1);
                break;
            }
        }
        
        CookieHelper.createCookie("cart", JSON.stringify(cart));
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getCart: getCart,
        addProduct: addProduct,
        removeProduct: removeProduct
    }
};

var LoginModel = function()
{
    function login(email, password, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/login",
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa(email + ":" + password)
            },
            success: function (data) {
                // put token in cookie
                CookieHelper.createCookie("access_token", data.access_token);
                CookieHelper.createCookie("user_id", data.user_id);

                // 'reload' page
                onLoadPage();

                // let controller resume with stuff
                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'not good email or password to user'
                $("#error_message").show();

                //$("#component").html("error function");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        login: login
    }
};
var LogoutModel = function()
{
    function logout(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/logout", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                user_id: getCookie("user_id")
            }),
            success: function (data) {
                // let controller resume with stuff
                CookieHelper.deleteCookie("access_token");
                CookieHelper.deleteCookie("user_id");

                // 'reload' page
                onLoadPage();

                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'not good email or password to user'
                $("#error_message").show();

                //$("#component").html("error function");
            }
        });

        function getCookie(name)
        {
            var cookies = document.cookie.split(';');

            for (var i = 0; i < cookies.length; i++)
            {
                var cookie = cookies[i].split("=");

                if (cookie[0].trim() == name)
                {
                    return cookie[1];
                }
            }
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        logout: logout
    }
};
var OrderModel = function()
{
    function getOrderInformation(callback)
    {
        var cart = CookieHelper.getCookie('cart');

        if (cart != undefined && cart != "")
        {
            callback(JSON.parse(cart));
        }
        else
        {
            callback([]);
        }
    }

    function saveOrder(orderData, callback)
    {
        // Append data form other sources
        orderData.status         = "paid";
        orderData.btw_percentage = 21;
        orderData.order_date     = new Date();
        orderData.delivery_costs = 3.95;
        orderData.cart           = JSON.parse(CookieHelper.getCookie("cart"));

        $.ajax({
            url: "https://api.az-games.nl/orders",
            type: "post",
            dataType: 'json',
            data: JSON.stringify(orderData),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data)
            {
                CookieHelper.deleteCookie("cart");
                callback();
            },
            error: function (xhr, status, error) {
                console.log("someting went wrong");
            }
        });

    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrderInformation: getOrderInformation,
        saveOrder: saveOrder
    }
};
var ProductsModel = function()
{
    function getPage(filter, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products?" + filter, //? http://84.84.245.29:243 = API-locatie?
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};
var PublicWishlistModel = function(user_id)
{
    this.getPublicWishlist = function(callback)
    {
        $.ajax({
            url: "http://localhost:8081/public_wishlist/" + user_id,
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }
};
var RegisterModel = function()
{
    function register(formData, callback)
    {
        // Modify data before sending (also convert to UTC)
        formData.date_of_birth = new Date(Date.UTC(formData.jaar, formData.maand, formData.dag));

        // Remove year, month and day
        delete formData.jaar;
        delete formData.maand;
        delete formData.dag;

        $.ajax({
            url: "https://api.az-games.nl/user/register",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                e_mail : formData.e_mailadres,
                password : formData.wachtwoord,
                first_name : formData.voornaam,
                insertion : formData.tussenvoegsel,
                surname : formData.achternaam,
                gender : formData.gender,
                date_of_birth : formData.birth_date,
                phone_number : formData.mobiel_nummer,
                secret_question : formData.security_question,
                secret_question_answer : formData.security_answer,
                postal_code : formData.postcode,
                number : formData.huisnummer,
                street_name : formData.straatnaam,
                city : formData.plaats
            }),
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#regi_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        register: register
    }
};
var ResetPasswordModel = function()
{
    function resetpassword(formData, callback)
    {
        console.log(formData);
        $.ajax({
            url: "https://api.az-games.nl/user/resetpassword",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                email : formData.e_mailadres,
                secret_question_answer : formData.security_answer,
                secret_question : formData.security_question,
                new_password : formData.wachtwoord,
                repeat_password : formData.wachtwoord2
            }),
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                //$("#component").load("views/error/error.html");
                $("#reset_password_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        resetpassword: resetpassword
    }
};
var ProductModel = function(ean)
{
    function GetProductInfo(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + ean,
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetProductInfo: GetProductInfo
    }
};
var UserModel = function(userid)
{
    function GetUserInfo(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/users/" + userid,
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetUserInfo: GetUserInfo
    }
};
var WishlistModel = function()
{
    function getWishlist(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function addToWishlist(viewData, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") /*+ "/" + viewData.ean_number*/,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                wishlist_id : viewData.wishlist_id,
                //ean_number : viewData.ean_number
            }),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function(xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteFromWishlist(ean, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + String(ean),
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function switchPublicState(newStatus, callback)
    {
        var go = false;

        var newDBStatus = "0";
        if (newStatus == "public"){
            newDBStatus = "1";
            go = true;
        } else if (newStatus == "private"){
            go = true;
        } else {
            console.log("newStatus has unexpected value. newStatus = " + newStatus);
        }

        if (go)
        {
            $.ajax({
                url: "http://localhost:8081/wishlist/switch_public",
                type: "patch",
                dataType: 'json',
                data: JSON.stringify({"newDBStatus":newDBStatus}),
                headers: {
                    "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
                },
                success: function (data) {
                    callback(data);
                },
                error: function (xhr, status, error) {
                    $("#component").load("/views/error/error.html");
                }
            });
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getWishlist: getWishlist,
        addToWishlist: addToWishlist,
        deleteFromWishlist: deleteFromWishlist,
        switchPublicState: switchPublicState
    }
};
var AdminUserController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
        viewHelper.setSaveListener(saveUserInfo);
        viewHelper.setDeleteListener(deleteUser);
    }

    function getPage()
    {
        Model.getPage(setView);
    }
    
    function setView(data) 
    {
        ViewHelper.setView(data);
    }

    function saveUserInfo(event)
    {
        event.preventDefault();
        event.stopImmediatePropagation();

        var formData = $(this).serializeObject();

        Model.saveUserInfo(formData, function(formData)
        {
            alert("Gebruiker succesvol geüpdate.");
        });
    }

    function deleteUser(user_id)
    {
        Model.deleteUser(user_id, function()
        {
            alert("Gebruiker succesvol gedelete.");
            Router.route("/admin");
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var AdminController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
    }

    function getPage()
    {
        Model.getPage(setView); //"", function (data) { ViewHelper.setView(data); });
    }
    function setView(data) 
    {
        ViewHelper.setView(data);
    }


    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var CartController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    /**
     * Get all cart items and pass the items to the ViewHelper
     */
    function getCart()
    {
        Model.getCart(function (data) { ViewHelper.setView(data); });
    }

    /**
     * Add a item to the cart and pass it to the viewHelper
     * 
     * @param {int} id  Item id
     */
    function addProduct(id)
    {
        Model.addProduct(id, function (data) { ViewHelper.addItem(data); });
    }

    /**
     * Remove a product and call the viewHelper
     */
    function removeProduct(id)
    {
        Model.removeProduct(id, function (data) { });
    }

    // Main function, also the start startpoint for a page
    function main()
    {                        
        ViewHelper.setActionListener(getCart);
        ViewHelper.setAddProductListener(addProduct);
        ViewHelper.setRemoveListener(removeProduct);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var DeleteController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function main()
    {
        
    }
}
var ErrorController = function(viewHelper)
{
    var ViewHelper = viewHelper;

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var LoginController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        // Prevent sending the form
        event.preventDefault();
        event.stopImmediatePropagation();

        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // let model send email and password to API
        Model.login(formData.email, formData.password, function onSuccess(data) {
            // show uitloggen button
            $("#inloggen_text").hide();
            $("#uitloggen_text").show();

            Router.route("products");
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var LogoutController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.logout(function (data) {
            // show uitloggen button
            $("#inloggen_text").show();
            $("#uitloggen_text").hide();

            // set view to login form
            ViewHelper.setView();
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var OrderController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.getOrderInformation(function (data) {
            ViewHelper.setView(data);
        });
    }

    function order(event)
    {
        event.preventDefault();
        event.stopImmediatePropagation();

        var formData = $(this).serializeObject();

        Model.saveOrder(formData, function() {
            ViewHelper.finishOrder();
            ViewHelper.clearCart();
        })
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        if (UserHelper.isLogedIn() == false)
        {
            Router.route("/login");
        }
        else
        {
            ViewHelper.setActionListener(actionPerformed);
            ViewHelper.setOrderListener(order)
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var ProductsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function getPage()
    {
        Model.getPage("", function (data) { ViewHelper.setView(data); });
    }

    function filterProducts(event)
    {
        // Prevent sending the form (page reload)
        event.preventDefault();

        var filters = $(this).serialize();
        Model.getPage(filters, function (data) { ViewHelper.loadProducts(data); });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
        ViewHelper.setFilterListener(filterProducts);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var PublicWishlistController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function main()
    {
        console.log("in main");
        ViewHelper.setActionListener(getPublicWishlist);
        //ViewHelper.getPage(getPublicWishlist);
    }

    function getPublicWishlist()
    {
        Model.getPublicWishlist(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    return {
        main: main
    }
};
var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#regi_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // fix date of birth (API expects certain format)
        formData["birth_date"] = formData.jaar + "-" + formData.maand + "-" + formData.dag;

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["voornaam", "achternaam", "postcode", "huisnummer", "e_mailadres", "wachtwoord", "wachtwoord2", "security_answer"]; //dropdowns (like gender) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#register_error_message").show();
        };

        var passwordsNotIdentical = false;

        if (formData.wachtwoord != formData.wachtwoord2) 
        {
            passwordsNotIdentical = true;
            $("#ww2_error_message").show();
            $("#wachtwoord").addClass("invalid");
            $("#wachtwoord2").addClass("invalid");
        }

        // abort function if mandatory field misses or passwords not identical
        if (mandatoryFieldMisses || passwordsNotIdentical)
        {
            return false;
        }

        // let model send user info to API
        Model.register(formData, function (data) {
            ViewHelper.setView('/views/register/after_register.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to register form
        ViewHelper.setView('/views/register/register.html');

        // user fills in register info; clicks 'register': view notices this and reacts
        ViewHelper.setActionListener(actionPerformed);

        // email and password are send to API; API checks if email already exists (and whether password is correct?) 
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var ResetPasswordController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
     // Function that is executed on a action listener
    function actionPerformed()
    {
        console.log("in actionPerformed"); //test

        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#reset_password_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["wachtwoord", "wachtwoord2", "e_mailadres","security_answer"]; //dropdowns (like security_question_answer) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#reset_error_message").show();
        };

        var passwordsNotIdentical = false;

        if (formData.wachtwoord != formData.wachtwoord2) 
        {
            passwordsNotIdentical = true;
            $("#ww2_error_message").show();
            $("#wachtwoord").addClass("invalid");
            $("#wachtwoord2").addClass("invalid");
        }

        // abort function if mandatory field misses or passwords not identical
        if (mandatoryFieldMisses || passwordsNotIdentical)
        {
            return false;
        }
        console.log("continued")
        // let model send user info to API
        Model.resetpassword(formData, function (data) {
            ViewHelper.setView('views/resetpassword/after_reset.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {      
        // set view to reset password form
        ViewHelper.setView('views/resetpassword/resetpassword.html');

        ViewHelper.setActionListener(actionPerformed);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};





var ProductController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        // Prevent sending the form
        event.preventDefault();






        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // let model send email and password to API
        Model.login(formData.email, formData.password, function (data) {
            // show uitloggen button
            $("#inloggen_text").hide();
            $("#uitloggen_text").show();

            // Weergeef een andere pagina gebasseerd op 'admin' of 'registered user'
            new PageController(new PageViewHelper(), new PageModel()).main();
        });
    }

    // let view show view with data from database
    function showView(data)
    {
        viewHelper.setView(data);
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // what happens:
        // 1) user clicks on a product 
        // 2) model gets info of the product
        // 3) system puts info in html
        // 4) view shows info

        // 2) model gets info of the product
        // 3) system puts info in html
        model.GetProductInfo(showView);



        // set view to login form
        //ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        //ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main,
        showView : showView
    }
};

var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;

    function main()
    {
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setDeleteListener(deleteFromWishlist);
        ViewHelper.setPublicListener(switchPublicState);
    }

    function getWishlist()
    {
        Model.getWishlist(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function deleteFromWishlist(ean, div_to_hide)
    {
        Model.deleteFromWishlist(ean, function()
        {
            ViewHelper.hideItem(div_to_hide);
        });
    }

    function switchPublicState(newStatus)
    {
        Model.switchPublicState(newStatus, function()
        {
            
        });
    }

    return {
        main: main
    }
};
var AdminUserViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setView(value)
    {
        //preventDefault();
        $("#component").load('/views/adminuser/adminuser.html', function ()
        {
            $("#delete_btn").attr("data-id", value.user_id)   
            $("#first_name").val(value.first_name);
            $("#insertion").val(value.insertion);
            $("#surname").val(value.surname);
            $("#user_type").val(value.user_type);
            $("#email").val(value.email);
            $("#password").attr('placeholder', 'Vul hier iets in om het wachtwoord te veranderen');
            $("#gender").val(value.gender);
            $("#date_of_birth").val(value.date_of_birth);
            $("#phone_number").val(value.phone_number);
            $("#is_active").val(value.is_active);
            $("#user_id").val(value.user_id);

            var today       = new Date();
            var dateOfBirth = new Date(value.date_of_birth);

            for(i = 1; i < 32; i++)
            {
                if (i == dateOfBirth.getDate())
                {
                    $("#dag").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                } else
                {
                    $("#dag").append("<option value='" + i + "'>" + i + "</option>");
                }
            }

            for (i = 1900; i < today.getFullYear() + 1; i++)
            {
                if (i == dateOfBirth.getFullYear())
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                }
                else
                {
                    $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
                }
            }
            
            $("#maand").val(dateOfBirth.getMonth());
        })
    }

    function setSaveListener(action)
    {
        $(document).on('submit', '#userform', action);
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", '#delete_btn', function (e)
        {
            e.preventDefault();
            action($(this).data("id"));
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
        setSaveListener: setSaveListener,
        setDeleteListener: setDeleteListener
    }
}
var AdminViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
     function setView(data)
    {
        document.title ="Admin - AZ Games";

        $("#component").load('/views/admin/admin.html', function () { // waar id = 'component' doe .load......
            $.each(data, function(key, value) {
                // Clone product
                var user = $('#single_user').clone();
                
                // Add product info
                $(user).find(".user__firstname").html(value.first_name);
                $(user).find(".user__firstname").attr('href', '/admin_user/' + value.user_id);
                $(user).find(".user__insertion").html(value.insertion);
                $(user).find(".user__lastname").html(value.surname);
                $(user).find(".user__email").html(value.email);
                $(user).find(".user__phonenumber").html(value.phone_number);

                $("#users_body").append(user);
            });

            // Remove the first list item, because this item is always empty
            $("#single_user").first().remove();
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
    }
}

    //dat hieronder zat aardig wat werk in... Donald wil nog ff houden

    // function showUsers(data)
    // {
    //     document.title ="Admin - AZ Games";

    //     $("#component").load('/views/admin/admin.html', function () {
    //         var table = $("<table id='users_table'></table>");

    //         // table header
    //         var row = $('<tr></tr>');
    //         row.append('<td>Voornaam</td><td>Tussenv</td><td>Achternaam</td><td>Gebruikersnaam</td><td>email</td><td>type</td>');

    //         $.each(data, function(numberr, user) 
    //         {
    //             var row = $('<tr></tr>');
    //             $.each(user, function(key, value)
    //             {
    //                 if (value != undefined)
    //                 {
    //                     row.append( $("<td class='td_user'></td>").html(String(value)) );
    //                 } else {
    //                     row.append( $("<td class='td_user'></td>") );
    //                 }
    //             })
    //             table.append(row);
    //             // //for additional user info if clicked
    //             // row = $('<div class="tobetable"></div>');
    //             // table.append(row);
    //         });
    //         $('#users').append(table);
    //     });
    // }

    // function putInfoInHtml(clicked, data)
    // {
    //     console.log('in putInfoInHtml()');
    //     // show info of the right user (if not already showing it)
    //     // insert row as table header
    //     var headerrow = $('<tr></tr>').append('<td>ww</td><td>geblokkeerd</td><td>id</td><td>gender</td><td>geboortedatum</td><td>vraag</td><td>antwoord</td>');

    //     // insert row with te userinfo
    //     var inforow = $('<tr></tr>');

    //     var count = 0;
    //     $.each(data[0], function(key, value)
    //     {
    //         if (count == 1) { // geblokkeerd
    //             if (value == 1) {
    //                 value = 'nee';
    //             } else if (value == 0) {
    //                 value = 'ja'
    //             } else {
    //                 value = 'db fout?'
    //             }
    //         }

    //         console.log(count);
    //         var td = $('<td></td>').append(value);

    //         console.log('key, value: ' + key, value);

    //         inforow.append(td);

    //         count += 1;
    //     })

    //     inforow.insertAfter( $(clicked).closest('tr') );
    //     headerrow.insertAfter($(clicked).closest('tr'));
    // }


var ErrorViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Oeps - AZ Games";

        $("#component").load('/views/error/error.html');
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        $(document).ready(eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var CartViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        if (viewData != "")
        {
            viewData.forEach(function (item, index) {
                addItem(item);
            });
        }
    }

    /**
     * Update the total price  of the cart
     * 
     * @param {int} totalPrice  Total price of the cart
     */
    function updateTotalPrice(newPrice)
    {
        newPrice = parseFloat(newPrice) + parseFloat($(".cart__total .price").html().substr(1));
        $(".cart__total .price").html("€" + parseFloat(newPrice).toFixed(2));
    }

    /**
     * Make new cart item visiable in the DOM
     * 
     * @param  {array}  item  Product
     */
    function addItem(item)
    {
        var cartItem = $('<div>').html($('.sidebar__content__tmp').html());

        cartItem.find(".cart__item__title").html(item.title);
        cartItem.find(".cart__item__price").html("€" + item.price.toFixed(2));
        cartItem.find(".cart__item__image img").attr("src", item.image);
        cartItem.find(".cart__item").attr("data-id", item.ean_number)

        $(".cart").append(cartItem);

        // Change amount of items
        var amount = $(".cart_button .count").html();
        $(".cart_button .count").html(parseInt(amount) + 1);

        // Update the total price
        updateTotalPrice(item.price);
    }

    /**
     * Load the cart when the page is  rease
     */
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    /**
     * Listener for the Add to cart button
     * 
     * @param  {function} addtoCart  Model callback
     */
    function setAddProductListener(addToCart)
    {
        $("body").on("click", ".addtocart", function (event) {
            event.preventDefault();

            var product_id = $(this).data("id");
            addToCart(product_id);
            $(this).closest("#to_shop_cart").find("#shop_cart").fadeTo(0, 100).delay(1000).fadeTo(600, 0);
        })
    }

    /**
     * Listener for remove a product from the DOM cart
     * 
     * @param {function} removeProduct Callback function to remove the prodcut from the memory
     */
    function setRemoveListener(removeProduct) {
        $("body").on("click", ".cart__item__remove", function (event){
            var cartitem   = $(this).parent();
            var product_id = $(this).parent().data("id");

            // Remove product from DOM cart
            $(cartitem).addClass("cart__item--removed");
            $(cartitem).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).remove();
            });

            // Decrese count
            var amount = $(".cart_button .count").html();
            $(".cart_button .count").html(parseInt(amount) - 1);

            removeProduct(product_id)
            updateTotalPrice(-$(cartitem).find(".cart__item__price").html().substr(1))
        });
    }
    
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        addItem: addItem,
        updateTotalPrice: updateTotalPrice,
        setActionListener: setActionListener,
        setAddProductListener: setAddProductListener,
        setRemoveListener: setRemoveListener,
    }
};
var LoginViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title ="Inloggen - AZ Games";

        $("#component").load('/views/login/login.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in login form
        // user presses 'login'

        // if user presses 'login', perform action (make controller send email and password to API)
        $("#component").on("submit", "#loginform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var LogoutViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Uitloggen - AZ Games";

        $("#component").load('/views/logout/logout.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var OrderViewHelper = function()
{
    // Change the view of the page
    function setView(cart)
    {
        document.title = "Bestellen - AZ Games";

        $("#component").load('/views/order/order.html', function() {

            if (cart != undefined && cart != "")
            {
                // Add cart content
                $.each(cart, function(key, value) {
                    var product = $("#product").clone();

                    $(product).find(".product__title").html(value.title);
                    $(product).find(".product__image img").attr("src", value.image);
                    $(product).find(".product__price").append(("€ ") + value.price.toFixed(2));

                    $("#product__list").append(product);
                    $("#product__list").append("<hr />");
                });

                $("#order_info .order__navigate").first().removeClass("disabled");
            }
            else
            {
                $("#product__list").html("<div class='message message--info'>Je winkelwagen is nog leeg, stop er producten in om deze te kunnen bestellen.</div>")
            }

            // Remove the first list item, because this item is always empty
            $("#product").first().remove();

            // Set and move total price to end of list
            $("#total").appendTo("#product__list");
            $(".total__price").html($(".cart__total .price").html());

            // Set delivery date (we always deliver in one day)
            var today = new Date();
            today.setDate(today.getDate() + 1);

            $(".delivery_date").html(today.getDate() + " " + today.toLocaleString("nl-NL", {month: "long"}));
            $(".delivery__calendar__month").html(today.toLocaleString("nl-NL", {month: "short"}).toUpperCase());
            $(".delivery__calendar__day").html(today.getDate());

            // Set user address
            UserHelper.getUserInfo(function(user) {
                $(".adres__name").html(user.first_name + " " + user.insertion + " " + user.surname);
                $(".adres__street").html(user.address.street + " " + user.address.house_number);
                $(".adres__postalcode").html(user.address.postal_code + " " + user.address.city.toUpperCase());
            });
        });
    }

    // Go to the last step of the order process
    function finishOrder()
    {
        $("ul.order-steps li").removeClass("active");
        $("ul.order-steps li a").addClass("disabled");
        $("ul.order-steps li.confirmation").addClass("active");

        $(".order__step").removeClass("order__step--active");
        $("#confirmation").addClass("order__step--active");
    }

    // Clear the visible cart
    function clearCart()
    {
        $(".cart").empty();
        $(".cart_button .count").html("0");
        $(".cart__total .price").html("€00.00")
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Confirm the order when sbmitting the form
    function setOrderListener(action)
    {
        $(document).on("submit", "#orderform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener,
        setOrderListener: setOrderListener,
        finishOrder: finishOrder,
        clearCart: clearCart
    }
};
var ProductsViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        document.title = "Producten - AZ Games";

        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');
        // load filters
        $("#filters").load('/views/products/filters.html');

        // load products
        loadProducts(viewData);
    }

    function loadProducts(viewData)
    {
        $("#products").load('/views/products/products.html', function () { // waar id = 'component' doe .load......
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.title);
                $(product).find(".product__subtitle").append(value.genre +(" | PEGI ") + value.pegi_age +(" | ")+ PlatformLogo(value.platform));
                $(product).find(".product__description").html(CutString(value.description));
                $(product).find(".product__price").append(("€ ")+value.price.toFixed(2));
                $(product).find("#buttons__info, .product__image a, .product__title").attr("href", "product/" + value.ean_number);
                $(product).find(".product__image img").attr("src", value.image);
                $(product).find(".addtocart").attr("data-id", value.ean_number);

                $("#product__list").append(product);
            });

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();
        });
    }

    //Show more/less
    function CutString(text){
        var ShowAmount = 50;
        var WordsArray = text.split(" ");
        if(WordsArray.length>ShowAmount){
            var ShortString = "";
            for(i=0; i<ShowAmount; i++){
                ShortString += WordsArray[i] + " ";
            }
            return ShortString+"...";
        }else{
            return text;
        }
    };

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setFilterListener(action)
    {
         // Hier het formulier versturen als we op een checkbox drukken
        $("#component").off().on("change", "input[type=checkbox]", function(event) {
            $("#product_filter").submit();
        });

        // Update de productenlijst als een waarde in de slider veranderd(alle manieren)
        $("#component").on("change keyup", "input[name=price-max], input[name=price-min]", function(event) {
            if($("#pricemin").val() == null) {
                $("#pricemin").val(0);
            }
            else
            {
                $("#product_filter").submit();
            }
        });

        $("#component").on("submit", "#product_filter", action);
    }
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        loadProducts: loadProducts,
        setActionListener: setActionListener,
        setFilterListener: setFilterListener
    }
};
var PublicWishlistViewHelper = function()
{
    function setActionListener(action) // heb de $ erbij gezet. internet had het daarover (zie onderstaande comment ook)
    {
        $(document).ready(action);
    }

    //change view of page
    function setView(viewData)
    {
        console.log(viewData)
        if (viewData.length == 0)
        {
            document.title = "Error - AZ Games"
            $("#component").load("/views/error/error.html");
        }
        else if (viewData.length > 0)
        {
            if (viewData[0].is_public == 1){
                loadPublicWishlist(viewData);
            }
            else if (viewData[0].is_public == 0)
            {
                document.title = "Error - AZ Games"
                $("#component").load("/views/error/error.html");
            }
            else{
                console.log("viewData[0].is_public heeft onverwachte waarde. viewData[0].is_public = " + viewData[0].is_public);
            }



        }
        else
        {
            console.log("viewData[0].length heeft onverwachte waarde. viewData.length = " + viewData.length);
        }
    }

    function loadPublicWishlist(data)
    {
        document.title = "Verlanglijst " + data[0].first_name + " - AZ Games";

        $("#component").html('<div class="col-12" id="public_wishlist"></div>');

        $("#public_wishlist").load('/views/public_wishlist/public_wishlist.html', function ()
        {
            $("#public__wishlist__header").html("Verlanglijst van " + data[0].first_name);


            var current = 0;
            $.each(data, function(key, value)
            {                
                var wishlist_item = $('<div>').append( $('#wish__list__item').clone() );

                current++;
                $(wishlist_item).find(".wish__list__id").append(current);
                $(wishlist_item).find(".wish__list__image img").attr("src", value.image);
                $(wishlist_item).find(".wish__list__title").html(value.title);
                $(wishlist_item).find(".wish__list__price").append(("€ ")+value.price);
                $(wishlist_item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                $(wishlist_item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                $(wishlist_item).find(".wish__list__likebutton").append();
                $(wishlist_item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wishlist_item).find("#cart_btn").attr("data-id", value.ean_number);

                wishlist_item.appendTo($("#wish__list"));
            })

            $("#wish__list__item").first().remove();
        });
    }

    return {
        setView: setView,
        loadPublicWishlist: loadPublicWishlist,
        setActionListener: setActionListener
    }


}
var RegisterViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Registreren - AZ Games";
        
        $("#component").load(viewToShow, function()
        {
            var date = new Date();

            for(i = 1; i < 32; i++)
            {
                $("#dag").append("<option value='" + i + "'>" + i + "</option>");
            }

            for (i = 1900; i < date.getFullYear() + 1; i++)
            {
                if (i == 2000)
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                    continue;
                }

                $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
            }
        });
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $("#component").on("submit", "#registerform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var ResetPasswordViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Inloggen - AZ Games";

        $("#component").load(viewToShow);
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        //$(document).ready(eventHandler);
        $("#component").on("submit", "#resetform", eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};

/*
var ResetPasswordViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").load('views/resetpassword/resetpassword.html');
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        //$(document).ready(eventHandler);
        $("#component").on("submit", "#resetform", eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
*/
var ProductViewHelper = function()
{
    // Change the view of the page
    function setView(product)
    {
        document.title = product.title + " - AZ Games";

         $("#component").load('/views/single_product/single_product.html', function () {
                $(".singleproduct__image img").attr("src", product.image);
                $(".singleproduct__title").html(product.title);
                $(".singleproduct__price").html("€ " + product.price.toFixed(2));

                $(".singleproduct__ean").append(product.ean_number);
                $(".singleproduct__platform").append(PlatformLogo(product.platform)); // functie voor logo
                $(".singleproduct__publisher").append(PlatformLogo(product.publisher)); // functie voor logo
                $(".singleproduct__pegi").append(product.pegi_age);
                $(".singleproduct__genre").append(product.genre);
                $(".singleproduct__descr").html(product.description)
                $(".addtocart").attr("data-id", product.ean_number);

                if (UserHelper.isLogedIn())
                {
                    $(".addToWishlistButton").attr("onclick", "WishlistHelper.addItem(" + product.ean_number + ");");
                }
                else
                {
                    $(".addToWishlistButton").hide();
                }

                var d = new Date(product.release_date);

                var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

                $(".singleproduct__releasedate").append(d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear());
        });
    }

    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};

var WishlistViewHelper = function()
{
    //change view of page
    function setView(viewData)
    {
        //console.log("WL VIEW: Inside setView");
        document.title = "Wishlist - AZ Games";
        $("#component").html('<div class="col-12"><div class="col-12" id="wishlist"></div></div>');

        loadWishlist(viewData);
    }

    function loadWishlist(viewData)
    {
        //console.log("WL VIEW: Inside loadWishList");
        $("#wishlist").load('/views/wishlist/wishlist.html', function ()
        {
            // add all wishlist items to html
            var current = 0;
            var count = 0;
            $.each(viewData, function(key, value) {
                // Clone product
                var wish__list__item = $('<div>').append($('#wish__list__item').clone());

                // Add product info
                current = current +1
                $(wish__list__item).find(".wish__list__id").append(current);
                $(wish__list__item).find(".wish__list__image img").attr("src", value.image);
                $(wish__list__item).find(".wish__list__title").html(value.title);
                $(wish__list__item).find(".wish__list__price").append(("€ ")+value.price);
                $(wish__list__item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                $(wish__list__item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                $(wish__list__item).find(".wish__list__likebutton").append();
                $(wish__list__item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wish__list__item).find("#cart_btn").attr("data-id", value.ean_number);
                $("#example__btn").attr("href", "/public_wishlist/" + value.user_id)

                $("#wish__list").append(wish__list__item);

                if (count == 0) {
                    if (value.is_public == 0) {
                        $("#publicator").val("private");
                        $("#example__btn").hide();
                    } else if (value.is_public == 1) {
                        $("#publicator").val("public");
                        $("#example__btn").show();
                    } else {
                        console.log("value has unexpected value. value = " + value);
                    }
                }

                count++;
            });

            // Als er geen items in wishlist staan, dan hide de volgende divs.
            if (count == 0) {
                $("#wishlist_error_message").show();
                $("#public__related").hide();
                $("#wish__list").hide();
            }

            // Remove the first list item, because this item is always empty
            $("#wish__list__item").first().remove();
        });
    }

    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"       
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", "#delete_btn", function(e)
        {
            e.preventDefault();
            var ean = $(this).data("id");
            var div_to_hide = $(this).closest(".row");
            action(ean, div_to_hide);
        } );
    }

    function setPublicListener(action)
    {
        $("#component").on("change", "#publicator", function()
        {
            console.log(this.value);
            action(this.value);
        });
    }

    function hideItem(div_to_hide)
    {
        div_to_hide.fadeTo(200, 0).slideUp(200);
    }

    return {
        setView: setView,
        loadWishlist: loadWishlist,
        setActionListener: setActionListener,
        setDeleteListener: setDeleteListener,
        setPublicListener: setPublicListener,
        hideItem: hideItem
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbm9ydG9vbHMuanMiLCJvcmRlci5qcyIsInJvdXRlci5qcyIsInNpZGViYXIuanMiLCJ0b29sdGlwLmpzIiwiaGVscGVycy9jb29raWUuanMiLCJoZWxwZXJzL2dsb2JhbC5qcyIsImhlbHBlcnMvc2VyaWFsaXplb2JqZWN0LmpzIiwiaGVscGVycy91c2VyLmpzIiwiaGVscGVycy93aXNobGlzdC5qcyIsImFkbWludXNlcl9tb2RlbC5qcyIsImFkbWluX21vZGVsLmpzIiwiY2FydF9tb2RlbC5qcyIsImRlbGV0ZV9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInB1YmxpY193aXNobGlzdF9tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwidXNlcl9tb2RlbC5qcyIsIndpc2hsaXN0X21vZGVsLmpzIiwiYWRtaW51c2VyX2NvbnRyb2xsZXIuanMiLCJhZG1pbl9jb250cm9sbGVyLmpzIiwiY2FydF9jb250cm9sbGVyLmpzIiwiZGVsZXRlX2NvbnRyb2xsZXIuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwibG9naW5fY29udHJvbGxlci5qcyIsImxvZ291dF9jb250cm9sbGVyLmpzIiwib3JkZXJfY29udHJvbGxlci5qcyIsInByb2R1Y3RzX2NvbnRyb2xsZXIuanMiLCJwdWJsaWNfd2lzaGxpc3RfY29udHJvbGxlci5qcyIsInJlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJyZXNldHBhc3N3b3JkX2NvbnRyb2xsZXIuanMiLCJzaW5nbGVfcHJvZHVjdF9jb250cm9sbGVyLmpzIiwidXNlcl9jb250cm9sbGVyLmpzIiwid2lzaGxpc3RfY29udHJvbGxlci5qcyIsImFkbWludXNlci9hZG1pbnVzZXJfdmlldy5qcyIsImFkbWluL2FkbWluX3ZpZXcuanMiLCJlcnJvci9lcnJvcl92aWV3LmpzIiwiY2FydC9jYXJ0X3ZpZXcuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwibG9nb3V0L2xvZ291dF92aWV3LmpzIiwib3JkZXIvb3JkZXJfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwidXNlci91c2VyX3ZpZXcuanMiLCJ3aXNobGlzdC93aXNobGlzdF92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1BsYXRmb3JtIExvZ28nc1xyXG5mdW5jdGlvbiBQbGF0Zm9ybUxvZ28ocGxhdGZvcm1uYWFtKVxyXG57XHJcbiAgICBwbGF0Zm9ybW5hYW0gPSBwbGF0Zm9ybW5hYW0udG9VcHBlckNhc2UoKTtcclxuICAgIHN3aXRjaCAocGxhdGZvcm1uYWFtKVxyXG4gICAge1xyXG4gICAgICAgIC8vcGxhdGZvcm1zXHJcbiAgICAgICAgY2FzZSBcIlBTMVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMxLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiUFMzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczMucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQUzJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMi5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTNFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHM0LnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiUENcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3dpbmRvd3MucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJYQk9YXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy94Ym94LnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiTkVTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uZXMucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJONjRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL242NC5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIFNXSVRDSFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvc3dpdGNoLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiTkdDXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uZ2MucG5nJyAvPlwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybW5hYW07XHJcblxyXG4gICAgICAgIC8vcHVibGlzaGVyc1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9uaW50ZW5kby5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlVCSVNPRlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvdWJpc29mdC5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIkVMRUNUUk9OSUMgQVJUU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9lYS5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlNPTllcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc29ueS5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlJPQ0tTVEFSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3JvY2tzdGFyLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiU0VHQVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9zZWdhLnBuZycgLz5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQmVzY2hpa2JhYXJoZWlkS2xldXIoc3RvY2t2YWx1ZSl7XHJcbiAgICBcclxuICAgICAgICBpZiAoc3RvY2t2YWx1ZTw9MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbnJlZC5wbmcnIC8+XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdG9ja3ZhbHVlPj0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9hdmFpbGFiaWxpdHkvYnV0dG9uZ3JlZW4ucG5nJyAvPlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9ja3ZhbHVlXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4vLyBWYW4gV2lzaGxpc3QgcGFnaW5hXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJzcGFuLmxpa2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbi8vIFZhbiBTaW5nbGUgUHJvZHVjdCBwYWdpbmFcclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcInNwYW4uc2luZ2xlX2xpa2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwic2luZ2xlX2xpa2UtLWFjdGl2ZVwiKTtcclxufSk7IiwiJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImEub3JkZXJfX25hdmlnYXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSA9PSBmYWxzZSlcclxuICAgIHtcclxuICAgICAgICAvLyBHZXQgdGhlIG9yZGVyIHN0ZXBcclxuICAgICAgICB2YXIgc3RlcCA9ICAkKHRoaXMpLmRhdGEoXCJzdGVwXCIpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBvcmRlciBzdGVwIGFzIGFjdGl2ZVxyXG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuXCIgKyBzdGVwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi5vcmRlcl9fc3RlcFwiKS5yZW1vdmVDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNcIiArIHN0ZXApLmFkZENsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgIH1cclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3NoaXBwaW5nX21ldGhvZFwiLCBmdW5jdGlvbiAoZSlcclxue1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIuc2hpcHBpbmdfX2ZpZWxkc1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLlwiICsgdmFsICsgXCJfZmllbGRzXCIpLnNob3coKTtcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3BheW1lbnRfbWV0aG9kXCIsIGZ1bmN0aW9uIChlKVxyXG57XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICBpZiAodmFsICE9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSk7IiwidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGJhc2VVcmwgPSBcInByb2plY3Qtd2Vic2hvcC9cIjtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZSh1cmwsIGhpc3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSBnZXRQYXJ0aWNsZXModXJsKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHBhcnRpY2xlc1swXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICAgICAgY2FzZSBcImluZGV4Lmh0bWxcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlc2V0cGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpc2hsaXN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgV2lzaGxpc3RDb250cm9sbGVyKG5ldyBXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFdpc2hsaXN0TW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pblwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IEFkbWluQ29udHJvbGxlcihuZXcgQWRtaW5WaWV3SGVscGVyKCksIG5ldyBBZG1pbk1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5fdXNlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IEFkbWluVXNlckNvbnRyb2xsZXIobmV3IEFkbWluVXNlclZpZXdIZWxwZXIoKSwgbmV3IEFkbWluVXNlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHVibGljX3dpc2hsaXN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHVibGljV2lzaGxpc3RDb250cm9sbGVyKG5ldyBQdWJsaWNXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFB1YmxpY1dpc2hsaXN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3JDb250cm9sbGVyKG5ldyBFcnJvclZpZXdIZWxwZXIoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT0gXCJcIiAmJiB0eXBlb2YgdXJsID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVIaXN0b3J5KHt9LCBcIkEtWiBHYW1lc1wiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAvLyBMb2FkIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWRTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBvZiBwYWdlXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbCh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcImh0dHBzXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwid3d3XCIpICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFydGljbGVzKHVybClcclxuICAgIHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IC9cclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBiYXNlIHVybCBzZXQsIHJlbW92ZSB0aGUgYmFzZSB1cmxcclxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsICE9IG51bGwgJiYgdXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSArIHRoaXMuYmFzZVVybC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgvXFwvKC4rKT8vKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlSGlzdG9yeShvYmplY3QsIHRpdGxlLCB1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG9iamVjdCwgdGl0bGUsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByb3V0ZTogcm91dGVcclxuICAgIH1cclxufSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcclxue1xyXG4gICAgJChcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbiAoZSlcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgY2xpY2sgYWN0aW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBJZCBvZiB0aGUgc2lkZWJhciB0byB0b2dnbGVcclxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcykuZGF0YShcInNpZGViYXJcIik7XHJcblxyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIiNcIiArIHNpZGViYXIpKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2lkZWJhcl9fY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCQodGhpcykucGFyZW50KCkucGFyZW50KCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiLm92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCQoXCIuc2lkZWJhclwiKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKHNpZGViYXIpXHJcbiAgICB7XHJcbiAgICAgICAgJChzaWRlYmFyKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XHJcbiAgICAgICAgJChcIi5vdmVybGF5XCIpLnRvZ2dsZUNsYXNzKFwib3ZlcmxheS0tdmlzaWJsZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XHJcbiAgICB9XHJcbn0pOyIsIiQoZG9jdW1lbnQpLm9uKFwibW91c2VlbnRlclwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KVxyXG57XHJcbiAgICAvLyBHZXQgY29udGVudCBhbmQgcG9zaXRpb25cclxuICAgIHZhciBjb250ZW50ICA9ICQodGhpcykuZGF0YShcInRvb2x0aXBcIik7XHJcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRPZmZzZXQodGhpcyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRvb2x0aXBcclxuICAgIHZhciB0b29sdGlwID0gJChcIjxkaXYgY2xhc3M9J3Rvb2x0aXAnPlwiICsgY29udGVudCArIFwiPC9kaXY+XCIpO1xyXG4gICAgJChcImJvZHlcIikuYXBwZW5kKHRvb2x0aXApO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25zXHJcbiAgICBwb3NpdGlvbi50b3AgID0gcG9zaXRpb24udG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgcG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAoJCh0aGlzKS5vdXRlcldpZHRoKCkgLyAyKSAtICgkKFwiLnRvb2x0aXBcIikub3V0ZXJXaWR0aCgpIC8gMik7XHJcblxyXG4gICAgLy8gQ2hhbmdlIHBvc2l0aW9uIG9mIHRvb2x0aXBcclxuICAgIHRvb2x0aXAuY3NzKFwibGVmdFwiLCBwb3NpdGlvbi5sZWZ0KTtcclxuICAgIHRvb2x0aXAuY3NzKFwidG9wXCIsIHBvc2l0aW9uLnRvcCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJtb3VzZWxlYXZlXCIsIFwiLmhhc1Rvb2x0aXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoXCJib2R5XCIpLmZpbmQoXCIudG9vbHRpcFwiKS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpXHJcbntcclxuICAgIGVsID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogZWwubGVmdCArIHdpbmRvdy5zY3JvbGxYLFxyXG4gICAgICAgIHRvcDogZWwudG9wICsgd2luZG93LnNjcm9sbFlcclxuICB9XHJcbn0iLCIvKipcclxuICogSGVscGVyIGZvciBmaW5kaW5nLCBjcmVhdGluZyBhbmQgZGVsZXRpbmcgY29va2llc1xyXG4gKi9cclxuZnVuY3Rpb24gQ29va2llSGVscGVyKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvb2tpZVswXS50cmltKCkgPT0gbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE5hbWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICBWYWx1ZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY3JlYXRlQ29va2llID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpOyBcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMSoyNCo2MCo2MCoxMDAwKSk7IFxyXG4gICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiKyBkLnRvVVRDU3RyaW5nKCk7IFxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nOyBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhIGNvb2tpZSBhbmQgaXQncyB2YWx1ZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVsZXRlQ29va2llID0gZnVuY3Rpb24obmFtZSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgUm91dGVyICAgICAgID0gbmV3IFJvdXRlcigpO1xyXG52YXIgQ29va2llSGVscGVyID0gbmV3IENvb2tpZUhlbHBlcigpO1xyXG52YXIgVXNlckhlbHBlciAgICAgPSBuZXcgVXNlckhlbHBlcigpO1xyXG52YXIgV2lzaGxpc3RIZWxwZXIgPSBuZXcgV2lzaGxpc3RIZWxwZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkU2NyZWVuKClcclxue1xyXG4gICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj4gPC9kaXY+Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTG9hZFBhZ2UoKVxyXG57XHJcbiAgICBpZiAoVXNlckhlbHBlci5pc0FkbWluKCkpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XHJcbiAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFVzZXJIZWxwZXIuaXNDdXN0b21lcigpKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xyXG4gICAgfVxyXG59IiwiJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHZhciBvID0ge307XHJcbiAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob1t0aGlzLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbztcclxufTsiLCIvKipcclxuICogSGVscGVyIGZvciB1c2VyIHJlbGF0ZWQgc3R1ZmZcclxuICovXHJcbmZ1bmN0aW9uIFVzZXJIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIGEgZ3Vlc3QgKG5vdCBsb2dnZWQgaW4pXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNMb2dlZEluID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9IHVuZGVmaW5lZCAmJiBhY2Nlc3NUb2tlbiAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGEgY3VzdG9tZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5pc0N1c3RvbWVyID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJ0eXBlID0gdGhpcy5kZWNvZGVUb2tlbigpLnVzZXJ0eXBlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJ0eXBlID09IFwiY3VzdG9tZXJcIiB8fCB1c2VydHlwZSA9PSBcImFkbWluXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFkbWluXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNBZG1pbiA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VydHlwZSA9PSBcImFkbWluXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgdGhlIEpXVCB0b2tlblxyXG4gICAgICovXHJcbiAgICB0aGlzLmRlY29kZVRva2VuID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGFjY2Vzc1Rva2VuLnNwbGl0KFwiLlwiKVsxXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGF0b2IocGF5bG9hZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgdXNlclxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldFVzZXJJbmZvID0gZnVuY3Rpb24oY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogSGVscGVyIGZvciBjYXJ0IGFjdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIFdpc2hsaXN0SGVscGVyKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgUHJvZGN1dCBJRCB0byByZW1vdmUgZm9tIHRoZSBjYXJcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmFkZEl0ZW0gPSBmdW5jdGlvbihlYW5fbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpICsgXCIvXCIgKyBlYW5fbnVtYmVyLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBXaXNobGlzdC5cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBpcyBhbCBpbiBXaXNobGlzdC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsInZhciBBZG1pblVzZXJNb2RlbCA9IGZ1bmN0aW9uKGlkKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vycy9cIiArIGlkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVVzZXJJbmZvKGRhdGEsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIE1vZGlmeSBkYXRhIGJlZm9yZSBzZW5kaW5nIChhbHNvIGNvbnZlcnQgdG8gVVRDKVxyXG4gICAgICAgIGRhdGEuZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGEuamFhciwgZGF0YS5tYWFuZCwgZGF0YS5kYWcpKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgICAgICBkZWxldGUgZGF0YS5qYWFyO1xyXG4gICAgICAgIGRlbGV0ZSBkYXRhLm1hYW5kO1xyXG4gICAgICAgIGRlbGV0ZSBkYXRhLmRhZztcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgZGF0YS51c2VyX2lkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJfaWQsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vycy9cIiArIHVzZXJfaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2UsXHJcbiAgICAgICAgc2F2ZVVzZXJJbmZvOiBzYXZlVXNlckluZm8sXHJcbiAgICAgICAgZGVsZXRlVXNlcjogZGVsZXRlVXNlclxyXG4gICAgfVxyXG59IiwidmFyIEFkbWluTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzXCIsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcblxyXG59OyIsInZhciBDYXJ0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBjYXJ0IGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldENhcnQoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGNhcnQgPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShjYXJ0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byB0aGUgY2FydCBjb29raWUgYW5kIGRhdGFiYXNlIGlmIHRoZSB1c2VyIGlzIHJlZ2lzdGVyZWRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdChpZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhcnQgPSB7ZWFuX251bWJlcjpkYXRhWzBdLmVhbl9udW1iZXIsIHRpdGxlOmRhdGFbMF0udGl0bGUsIHByaWNlOmRhdGFbMF0ucHJpY2UsIGltYWdlOmRhdGFbMF0uaW1hZ2V9O1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2FydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjYXJ0IGluIGNvb2tpZXNcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2FydCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoW2NhcnRdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcnQgPSBKU09OLnBhcnNlKGN1cnJlbnRDYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydC5wdXNoKGNhcnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q2FydCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGl0ZW0gZnJvbSB0aGUgY2FydFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gaWQgUHJvZHVjdCBpZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxyXG4gICAge1xyXG4gICAgICAgIGNhcnQgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjYXJ0W2ldLmVhbl9udW1iZXIgPT0gaWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcnQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldENhcnQ6IGdldENhcnQsXHJcbiAgICAgICAgYWRkUHJvZHVjdDogYWRkUHJvZHVjdCxcclxuICAgICAgICByZW1vdmVQcm9kdWN0OiByZW1vdmVQcm9kdWN0XHJcbiAgICB9XHJcbn07IiwiIiwidmFyIExvZ2luTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvbG9naW5cIixcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgXCIgKyBidG9hKGVtYWlsICsgXCI6XCIgKyBwYXNzd29yZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHB1dCB0b2tlbiBpbiBjb29raWVcclxuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJhY2Nlc3NfdG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcInVzZXJfaWRcIiwgZGF0YS51c2VyX2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAncmVsb2FkJyBwYWdlXHJcbiAgICAgICAgICAgICAgICBvbkxvYWRQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcclxuICAgICAgICAgICAgICAgICQoXCIjZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbjogbG9naW5cclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGxvZ291dChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dvdXRcIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBnZXRDb29raWUoXCJ1c2VyX2lkXCIpXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuZGVsZXRlQ29va2llKFwidXNlcl9pZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAncmVsb2FkJyBwYWdlXHJcbiAgICAgICAgICAgICAgICBvbkxvYWRQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdub3QgZ29vZCBlbWFpbCBvciBwYXNzd29yZCB0byB1c2VyJ1xyXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmh0bWwoXCJlcnJvciBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29va2llWzBdLnRyaW0oKSA9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRcclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXJJbmZvcm1hdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoJ2NhcnQnKTtcclxuXHJcbiAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkICYmIGNhcnQgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoY2FydCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVPcmRlcihvcmRlckRhdGEsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIEFwcGVuZCBkYXRhIGZvcm0gb3RoZXIgc291cmNlc1xyXG4gICAgICAgIG9yZGVyRGF0YS5zdGF0dXMgICAgICAgICA9IFwicGFpZFwiO1xyXG4gICAgICAgIG9yZGVyRGF0YS5idHdfcGVyY2VudGFnZSA9IDIxO1xyXG4gICAgICAgIG9yZGVyRGF0YS5vcmRlcl9kYXRlICAgICA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgb3JkZXJEYXRhLmRlbGl2ZXJ5X2Nvc3RzID0gMy45NTtcclxuICAgICAgICBvcmRlckRhdGEuY2FydCAgICAgICAgICAgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3JkZXJEYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImNhcnRcIik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE9yZGVySW5mb3JtYXRpb246IGdldE9yZGVySW5mb3JtYXRpb24sXHJcbiAgICAgICAgc2F2ZU9yZGVyOiBzYXZlT3JkZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdHNNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShmaWx0ZXIsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cz9cIiArIGZpbHRlciwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RNb2RlbCA9IGZ1bmN0aW9uKHVzZXJfaWQpXHJcbntcclxuICAgIHRoaXMuZ2V0UHVibGljV2lzaGxpc3QgPSBmdW5jdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3B1YmxpY193aXNobGlzdC9cIiArIHVzZXJfaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyIsInZhciBSZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZWdpc3Rlcihmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXHJcbiAgICAgICAgZm9ybURhdGEuZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKERhdGUuVVRDKGZvcm1EYXRhLmphYXIsIGZvcm1EYXRhLm1hYW5kLCBmb3JtRGF0YS5kYWcpKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEuamFhcjtcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEubWFhbmQ7XHJcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmRhZztcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVfbWFpbCA6IGZvcm1EYXRhLmVfbWFpbGFkcmVzLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA6IGZvcm1EYXRhLnZvb3JuYWFtLFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uIDogZm9ybURhdGEudHVzc2Vudm9lZ3NlbCxcclxuICAgICAgICAgICAgICAgIHN1cm5hbWUgOiBmb3JtRGF0YS5hY2h0ZXJuYWFtLFxyXG4gICAgICAgICAgICAgICAgZ2VuZGVyIDogZm9ybURhdGEuZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgZGF0ZV9vZl9iaXJ0aCA6IGZvcm1EYXRhLmJpcnRoX2RhdGUsXHJcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBmb3JtRGF0YS5tb2JpZWxfbnVtbWVyLFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUgOiBmb3JtRGF0YS5wb3N0Y29kZSxcclxuICAgICAgICAgICAgICAgIG51bWJlciA6IGZvcm1EYXRhLmh1aXNudW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzdHJlZXRfbmFtZSA6IGZvcm1EYXRhLnN0cmFhdG5hYW0sXHJcbiAgICAgICAgICAgICAgICBjaXR5IDogZm9ybURhdGEucGxhYXRzXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gcmVzZXRwYXNzd29yZChmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL3Jlc2V0cGFzc3dvcmRcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZDJcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikubG9hZChcInZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdE1vZGVsID0gZnVuY3Rpb24oZWFuKVxyXG57XHJcbiAgICBmdW5jdGlvbiBHZXRQcm9kdWN0SW5mbyhjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHMvXCIgKyBlYW4sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBHZXRQcm9kdWN0SW5mbzogR2V0UHJvZHVjdEluZm9cclxuICAgIH1cclxufTsiLCJ2YXIgVXNlck1vZGVsID0gZnVuY3Rpb24odXNlcmlkKVxyXG57XHJcbiAgICBmdW5jdGlvbiBHZXRVc2VySW5mbyhjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlcnMvXCIgKyB1c2VyaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBHZXRVc2VySW5mbzogR2V0VXNlckluZm9cclxuICAgIH1cclxufTsiLCJ2YXIgV2lzaGxpc3RNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0V2lzaGxpc3QoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9XaXNobGlzdCh2aWV3RGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgLyorIFwiL1wiICsgdmlld0RhdGEuZWFuX251bWJlciovLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgd2lzaGxpc3RfaWQgOiB2aWV3RGF0YS53aXNobGlzdF9pZCxcclxuICAgICAgICAgICAgICAgIC8vZWFuX251bWJlciA6IHZpZXdEYXRhLmVhbl9udW1iZXJcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tV2lzaGxpc3QoZWFuLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSArIFwiL1wiICsgU3RyaW5nKGVhbiksXHJcbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgZ28gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG5ld0RCU3RhdHVzID0gXCIwXCI7XHJcbiAgICAgICAgaWYgKG5ld1N0YXR1cyA9PSBcInB1YmxpY1wiKXtcclxuICAgICAgICAgICAgbmV3REJTdGF0dXMgPSBcIjFcIjtcclxuICAgICAgICAgICAgZ28gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdHVzID09IFwicHJpdmF0ZVwiKXtcclxuICAgICAgICAgICAgZ28gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3U3RhdHVzIGhhcyB1bmV4cGVjdGVkIHZhbHVlLiBuZXdTdGF0dXMgPSBcIiArIG5ld1N0YXR1cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ28pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS93aXNobGlzdC9zd2l0Y2hfcHVibGljXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBhdGNoXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1wibmV3REJTdGF0dXNcIjpuZXdEQlN0YXR1c30pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0V2lzaGxpc3Q6IGdldFdpc2hsaXN0LFxyXG4gICAgICAgIGFkZFRvV2lzaGxpc3Q6IGFkZFRvV2lzaGxpc3QsXHJcbiAgICAgICAgZGVsZXRlRnJvbVdpc2hsaXN0OiBkZWxldGVGcm9tV2lzaGxpc3QsXHJcbiAgICAgICAgc3dpdGNoUHVibGljU3RhdGU6IHN3aXRjaFB1YmxpY1N0YXRlXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgICAgIHZpZXdIZWxwZXIuc2V0U2F2ZUxpc3RlbmVyKHNhdmVVc2VySW5mbyk7XHJcbiAgICAgICAgdmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVVc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpIFxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcclxuXHJcbiAgICAgICAgTW9kZWwuc2F2ZVVzZXJJbmZvKGZvcm1EYXRhLCBmdW5jdGlvbihmb3JtRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZcO8cGRhdGUuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5kZWxldGVVc2VyKHVzZXJfaWQsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZWRlbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9hZG1pblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTsgLy9cIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldENhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldENhcnQoZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGl0ZW0gdG8gdGhlIGNhcnQgYW5kIHBhc3MgaXQgdG8gdGhlIHZpZXdIZWxwZXJcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGlkICBJdGVtIGlkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuYWRkUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5hZGRJdGVtKGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5yZW1vdmVQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0Q2FydCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBZGRQcm9kdWN0TGlzdGVuZXIoYWRkUHJvZHVjdCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIERlbGV0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsInZhciBFcnJvckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyKVxyXG57XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcclxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIG9uU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcInByb2R1Y3RzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5sb2dvdXQoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIE9yZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJJbmZvcm1hdGlvbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3JkZXIoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcclxuXHJcbiAgICAgICAgTW9kZWwuc2F2ZU9yZGVyKGZvcm1EYXRhLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5maW5pc2hPcmRlcigpO1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLmNsZWFyQ2FydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldE9yZGVyTGlzdGVuZXIob3JkZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdHNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0cyhldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm0gKHBhZ2UgcmVsb2FkKVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKGZpbHRlcnMsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIubG9hZFByb2R1Y3RzKGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRGaWx0ZXJMaXN0ZW5lcihmaWx0ZXJQcm9kdWN0cyk7XHJcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gbWFpblwiKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFB1YmxpY1dpc2hsaXN0KTtcclxuICAgICAgICAvL1ZpZXdIZWxwZXIuZ2V0UGFnZShnZXRQdWJsaWNXaXNobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHVibGljV2lzaGxpc3QoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFB1YmxpY1dpc2hsaXN0KHNldFZpZXcpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcclxuICAgICAgICBmb3JtRGF0YVtcImJpcnRoX2RhdGVcIl0gPSBmb3JtRGF0YS5qYWFyICsgXCItXCIgKyBmb3JtRGF0YS5tYWFuZCArIFwiLVwiICsgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxyXG5cclxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXHJcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLnJlZ2lzdGVyKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGluZm87IGNsaWNrcyAncmVnaXN0ZXInOiB2aWV3IG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG5cclxuICAgICAgICAvLyBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHNlbmQgdG8gQVBJOyBBUEkgY2hlY2tzIGlmIGVtYWlsIGFscmVhZHkgZXhpc3RzIChhbmQgd2hldGhlciBwYXNzd29yZCBpcyBjb3JyZWN0PykgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBSZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGFjdGlvblBlcmZvcm1lZFwiKTsgLy90ZXN0XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXHJcbiAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcclxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1wid2FjaHR3b29yZFwiLCBcIndhY2h0d29vcmQyXCIsIFwiZV9tYWlsYWRyZXNcIixcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2Ugc2VjdXJpdHlfcXVlc3Rpb25fYW5zd2VyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxyXG5cclxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXHJcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgJChcIiNyZXNldF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRpbnVlZFwiKVxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvYWZ0ZXJfcmVzZXQuaHRtbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcclxuXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcclxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xyXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCB2aWV3IHNob3cgdmlldyB3aXRoIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG4gICAgZnVuY3Rpb24gc2hvd1ZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB3aGF0IGhhcHBlbnM6XHJcbiAgICAgICAgLy8gMSkgdXNlciBjbGlja3Mgb24gYSBwcm9kdWN0IFxyXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxyXG4gICAgICAgIC8vIDQpIHZpZXcgc2hvd3MgaW5mb1xyXG5cclxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcclxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW4sXHJcbiAgICAgICAgc2hvd1ZpZXcgOiBzaG93Vmlld1xyXG4gICAgfVxyXG59OyIsIiIsInZhciBXaXNobGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRXaXNobGlzdCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVGcm9tV2lzaGxpc3QpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0UHVibGljTGlzdGVuZXIoc3dpdGNoUHVibGljU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpc2hsaXN0KClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRXaXNobGlzdChzZXRWaWV3KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgZGl2X3RvX2hpZGUpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLnN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cywgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluVXNlclZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIC8vcHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW51c2VyL2FkbWludXNlci5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS51c2VyX2lkKSAgIFxyXG4gICAgICAgICAgICAkKFwiI2ZpcnN0X25hbWVcIikudmFsKHZhbHVlLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAkKFwiI2luc2VydGlvblwiKS52YWwodmFsdWUuaW5zZXJ0aW9uKTtcclxuICAgICAgICAgICAgJChcIiNzdXJuYW1lXCIpLnZhbCh2YWx1ZS5zdXJuYW1lKTtcclxuICAgICAgICAgICAgJChcIiN1c2VyX3R5cGVcIikudmFsKHZhbHVlLnVzZXJfdHlwZSk7XHJcbiAgICAgICAgICAgICQoXCIjZW1haWxcIikudmFsKHZhbHVlLmVtYWlsKTtcclxuICAgICAgICAgICAgJChcIiNwYXNzd29yZFwiKS5hdHRyKCdwbGFjZWhvbGRlcicsICdWdWwgaGllciBpZXRzIGluIG9tIGhldCB3YWNodHdvb3JkIHRlIHZlcmFuZGVyZW4nKTtcclxuICAgICAgICAgICAgJChcIiNnZW5kZXJcIikudmFsKHZhbHVlLmdlbmRlcik7XHJcbiAgICAgICAgICAgICQoXCIjZGF0ZV9vZl9iaXJ0aFwiKS52YWwodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XHJcbiAgICAgICAgICAgICQoXCIjcGhvbmVfbnVtYmVyXCIpLnZhbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xyXG4gICAgICAgICAgICAkKFwiI2lzX2FjdGl2ZVwiKS52YWwodmFsdWUuaXNfYWN0aXZlKTtcclxuICAgICAgICAgICAgJChcIiN1c2VyX2lkXCIpLnZhbCh2YWx1ZS51c2VyX2lkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0b2RheSAgICAgICA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlT2ZCaXJ0aCA9IG5ldyBEYXRlKHZhbHVlLmRhdGVfb2ZfYmlydGgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgMzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgdG9kYXkuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNtYWFuZFwiKS52YWwoZGF0ZU9mQmlydGguZ2V0TW9udGgoKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTYXZlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnI3VzZXJmb3JtJywgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCAnI2RlbGV0ZV9idG4nLCBmdW5jdGlvbiAoZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWN0aW9uKCQodGhpcykuZGF0YShcImlkXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldFNhdmVMaXN0ZW5lcjogc2V0U2F2ZUxpc3RlbmVyLFxyXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lclxyXG4gICAgfVxyXG59IiwidmFyIEFkbWluVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJBZG1pbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9ICQoJyNzaW5nbGVfdXNlcicpLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19maXJzdG5hbWVcIikuaHRtbCh2YWx1ZS5maXJzdF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19maXJzdG5hbWVcIikuYXR0cignaHJlZicsICcvYWRtaW5fdXNlci8nICsgdmFsdWUudXNlcl9pZCk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9faW5zZXJ0aW9uXCIpLmh0bWwodmFsdWUuaW5zZXJ0aW9uKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19sYXN0bmFtZVwiKS5odG1sKHZhbHVlLnN1cm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2VtYWlsXCIpLmh0bWwodmFsdWUuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX3Bob25lbnVtYmVyXCIpLmh0bWwodmFsdWUucGhvbmVfbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXJzX2JvZHlcIikuYXBwZW5kKHVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNzaW5nbGVfdXNlclwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvL2RhdCBoaWVyb25kZXIgemF0IGFhcmRpZyB3YXQgd2VyayBpbi4uLiBEb25hbGQgd2lsIG5vZyBmZiBob3VkZW5cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaG93VXNlcnMoZGF0YSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBkb2N1bWVudC50aXRsZSA9XCJBZG1pbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgLy8gICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICB2YXIgdGFibGUgPSAkKFwiPHRhYmxlIGlkPSd1c2Vyc190YWJsZSc+PC90YWJsZT5cIik7XHJcblxyXG4gICAgLy8gICAgICAgICAvLyB0YWJsZSBoZWFkZXJcclxuICAgIC8vICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj48L3RyPicpO1xyXG4gICAgLy8gICAgICAgICByb3cuYXBwZW5kKCc8dGQ+Vm9vcm5hYW08L3RkPjx0ZD5UdXNzZW52PC90ZD48dGQ+QWNodGVybmFhbTwvdGQ+PHRkPkdlYnJ1aWtlcnNuYWFtPC90ZD48dGQ+ZW1haWw8L3RkPjx0ZD50eXBlPC90ZD4nKTtcclxuXHJcbiAgICAvLyAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihudW1iZXJyLCB1c2VyKSBcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj48L3RyPicpO1xyXG4gICAgLy8gICAgICAgICAgICAgJC5lYWNoKHVzZXIsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZClcclxuICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpLmh0bWwoU3RyaW5nKHZhbHVlKSkgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kKCAkKFwiPHRkIGNsYXNzPSd0ZF91c2VyJz48L3RkPlwiKSApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICB0YWJsZS5hcHBlbmQocm93KTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIC8vZm9yIGFkZGl0aW9uYWwgdXNlciBpbmZvIGlmIGNsaWNrZWRcclxuICAgIC8vICAgICAgICAgICAgIC8vIHJvdyA9ICQoJzxkaXYgY2xhc3M9XCJ0b2JldGFibGVcIj48L2Rpdj4nKTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRhYmxlLmFwcGVuZChyb3cpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgJCgnI3VzZXJzJykuYXBwZW5kKHRhYmxlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBwdXRJbmZvSW5IdG1sKGNsaWNrZWQsIGRhdGEpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2luIHB1dEluZm9Jbkh0bWwoKScpO1xyXG4gICAgLy8gICAgIC8vIHNob3cgaW5mbyBvZiB0aGUgcmlnaHQgdXNlciAoaWYgbm90IGFscmVhZHkgc2hvd2luZyBpdClcclxuICAgIC8vICAgICAvLyBpbnNlcnQgcm93IGFzIHRhYmxlIGhlYWRlclxyXG4gICAgLy8gICAgIHZhciBoZWFkZXJyb3cgPSAkKCc8dHI+PC90cj4nKS5hcHBlbmQoJzx0ZD53dzwvdGQ+PHRkPmdlYmxva2tlZXJkPC90ZD48dGQ+aWQ8L3RkPjx0ZD5nZW5kZXI8L3RkPjx0ZD5nZWJvb3J0ZWRhdHVtPC90ZD48dGQ+dnJhYWc8L3RkPjx0ZD5hbnR3b29yZDwvdGQ+Jyk7XHJcblxyXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgd2l0aCB0ZSB1c2VyaW5mb1xyXG4gICAgLy8gICAgIHZhciBpbmZvcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcblxyXG4gICAgLy8gICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAvLyAgICAgJC5lYWNoKGRhdGFbMF0sIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpZiAoY291bnQgPT0gMSkgeyAvLyBnZWJsb2trZWVyZFxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9ICduZWUnO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnamEnXHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2RiIGZvdXQ/J1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAvLyAgICAgICAgIHZhciB0ZCA9ICQoJzx0ZD48L3RkPicpLmFwcGVuZCh2YWx1ZSk7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygna2V5LCB2YWx1ZTogJyArIGtleSwgdmFsdWUpO1xyXG5cclxuICAgIC8vICAgICAgICAgaW5mb3Jvdy5hcHBlbmQodGQpO1xyXG5cclxuICAgIC8vICAgICAgICAgY291bnQgKz0gMTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vICAgICBpbmZvcm93Lmluc2VydEFmdGVyKCAkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykgKTtcclxuICAgIC8vICAgICBoZWFkZXJyb3cuaW5zZXJ0QWZ0ZXIoJChjbGlja2VkKS5jbG9zZXN0KCd0cicpKTtcclxuICAgIC8vIH1cclxuXHJcbiIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvdGFsUHJpY2UgIFRvdGFsIHByaWNlIG9mIHRoZSBjYXJ0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XHJcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIG5ldyBjYXJ0IGl0ZW0gdmlzaWFibGUgaW4gdGhlIERPTVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0SXRlbSA9ICQoJzxkaXY+JykuaHRtbCgkKCcuc2lkZWJhcl9fY29udGVudF9fdG1wJykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbChcIuKCrFwiICsgaXRlbS5wcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXHJcblxyXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgYW1vdW50IG9mIGl0ZW1zXHJcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBjYXJ0IHdoZW4gdGhlIHBhZ2UgaXMgIHJlYXNlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFRvQ2FydClcclxuICAgIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0X2lkKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHJlbW92ZSBhIHByb2R1Y3QgZnJvbSB0aGUgRE9NIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgY2FydGl0ZW0gICA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBmcm9tIERPTSBjYXJ0XHJcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY3Jlc2UgY291bnRcclxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldEFkZFByb2R1Y3RMaXN0ZW5lcjogc2V0QWRkUHJvZHVjdExpc3RlbmVyLFxyXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lcixcclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ2luL2xvZ2luLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGxvZ2luIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ2xvZ2luJywgcGVyZm9ybSBhY3Rpb24gKG1ha2UgY29udHJvbGxlciBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUEkpXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoY2FydClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQmVzdGVsbGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVyL29yZGVyLmh0bWwnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXJ0IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICQuZWFjaChjYXJ0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKFwiI3Byb2R1Y3RcIikuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxociAvPlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJfaW5mbyAub3JkZXJfX25hdmlnYXRlXCIpLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz5KZSB3aW5rZWx3YWdlbiBpcyBub2cgbGVlZywgc3RvcCBlciBwcm9kdWN0ZW4gaW4gb20gZGV6ZSB0ZSBrdW5uZW4gYmVzdGVsbGVuLjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdFwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XHJcbiAgICAgICAgICAgICQoXCIjdG90YWxcIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcclxuICAgICAgICAgICAgJChcIi50b3RhbF9fcHJpY2VcIikuaHRtbCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGRlbGl2ZXJ5IGRhdGUgKHdlIGFsd2F5cyBkZWxpdmVyIGluIG9uZSBkYXkpXHJcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X2RhdGVcIikuaHRtbCh0b2RheS5nZXREYXRlKCkgKyBcIiBcIiArIHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pKTtcclxuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX21vbnRoXCIpLmh0bWwodG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwic2hvcnRcIn0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X19jYWxlbmRhcl9fZGF5XCIpLmh0bWwodG9kYXkuZ2V0RGF0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB1c2VyIGFkZHJlc3NcclxuICAgICAgICAgICAgVXNlckhlbHBlci5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19uYW1lXCIpLmh0bWwodXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyLmluc2VydGlvbiArIFwiIFwiICsgdXNlci5zdXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3N0cmVldFwiKS5odG1sKHVzZXIuYWRkcmVzcy5zdHJlZXQgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5ob3VzZV9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fcG9zdGFsY29kZVwiKS5odG1sKHVzZXIuYWRkcmVzcy5wb3N0YWxfY29kZSArIFwiIFwiICsgdXNlci5hZGRyZXNzLmNpdHkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdvIHRvIHRoZSBsYXN0IHN0ZXAgb2YgdGhlIG9yZGVyIHByb2Nlc3NcclxuICAgIGZ1bmN0aW9uIGZpbmlzaE9yZGVyKClcclxuICAgIHtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpIGFcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI2NvbmZpcm1hdGlvblwiKS5hZGRDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHZpc2libGUgY2FydFxyXG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KClcclxuICAgIHtcclxuICAgICAgICAkKFwiLmNhcnRcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKFwiMFwiKTtcclxuICAgICAgICAkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKFwi4oKsMDAuMDBcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpcm0gdGhlIG9yZGVyIHdoZW4gc2JtaXR0aW5nIHRoZSBmb3JtXHJcbiAgICBmdW5jdGlvbiBzZXRPcmRlckxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLCBcIiNvcmRlcmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRPcmRlckxpc3RlbmVyOiBzZXRPcmRlckxpc3RlbmVyLFxyXG4gICAgICAgIGZpbmlzaE9yZGVyOiBmaW5pc2hPcmRlcixcclxuICAgICAgICBjbGVhckNhcnQ6IGNsZWFyQ2FydFxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcclxuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXHJcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgUEVHSSBcIikgKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiI2J1dHRvbnNfX2luZm8sIC5wcm9kdWN0X19pbWFnZSBhLCAucHJvZHVjdF9fdGl0bGVcIikuYXR0cihcImhyZWZcIiwgXCJwcm9kdWN0L1wiICsgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IG1vcmUvbGVzc1xyXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xyXG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XHJcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcclxuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGRlIHByb2R1Y3RlbmxpanN0IGFscyBlZW4gd2FhcmRlIGluIGRlIHNsaWRlciB2ZXJhbmRlcmQoYWxsZSBtYW5pZXJlbilcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJpY2VtaW5cIikudmFsKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcmljZW1pblwiKS52YWwoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pIC8vIGhlYiBkZSAkIGVyYmlqIGdlemV0LiBpbnRlcm5ldCBoYWQgaGV0IGRhYXJvdmVyICh6aWUgb25kZXJzdGFhbmRlIGNvbW1lbnQgb29rKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdEYXRhKVxyXG4gICAgICAgIGlmICh2aWV3RGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcclxuICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2aWV3RGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdCh2aWV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodmlld0RhdGFbMF0uaXNfcHVibGljID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWV3RGF0YVswXS5pc19wdWJsaWMgaGVlZnQgb252ZXJ3YWNodGUgd2FhcmRlLiB2aWV3RGF0YVswXS5pc19wdWJsaWMgPSBcIiArIHZpZXdEYXRhWzBdLmlzX3B1YmxpYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWV3RGF0YVswXS5sZW5ndGggaGVlZnQgb252ZXJ3YWNodGUgd2FhcmRlLiB2aWV3RGF0YS5sZW5ndGggPSBcIiArIHZpZXdEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQdWJsaWNXaXNobGlzdChkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJWZXJsYW5nbGlqc3QgXCIgKyBkYXRhWzBdLmZpcnN0X25hbWUgKyBcIiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cInB1YmxpY193aXNobGlzdFwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAkKFwiI3B1YmxpY193aXNobGlzdFwiKS5sb2FkKCcvdmlld3MvcHVibGljX3dpc2hsaXN0L3B1YmxpY193aXNobGlzdC5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoXCIjcHVibGljX193aXNobGlzdF9faGVhZGVyXCIpLmh0bWwoXCJWZXJsYW5nbGlqc3QgdmFuIFwiICsgZGF0YVswXS5maXJzdF9uYW1lKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHdpc2hsaXN0X2l0ZW0gPSAkKCc8ZGl2PicpLmFwcGVuZCggJCgnI3dpc2hfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fbGlrZWJ1dHRvblwiKS5hcHBlbmQoKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpc2hsaXN0X2l0ZW0uYXBwZW5kVG8oJChcIiN3aXNoX19saXN0XCIpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBsb2FkUHVibGljV2lzaGxpc3Q6IGxvYWRQdWJsaWNXaXNobGlzdCxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxuXHJcblxyXG59IiwidmFyIFJlZ2lzdGVyVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcclxuICAgICAgICBcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3csIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMTkwMDsgaSA8IGRhdGUuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMjAwMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3JlZ2lzdGVyZm9ybVwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbnZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59O1xyXG4qLyIsInZhciBQcm9kdWN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHByb2R1Y3QpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBwcm9kdWN0LnRpdGxlICsgXCIgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3NpbmdsZV9wcm9kdWN0L3NpbmdsZV9wcm9kdWN0Lmh0bWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X190aXRsZVwiKS5odG1sKHByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2VhblwiKS5hcHBlbmQocHJvZHVjdC5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyhwcm9kdWN0LnBsYXRmb3JtKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucHVibGlzaGVyKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3BlZ2lcIikuYXBwZW5kKHByb2R1Y3QucGVnaV9hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICAgICQoXCIuYWRkdG9jYXJ0XCIpLmF0dHIoXCJkYXRhLWlkXCIsIHByb2R1Y3QuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmF0dHIoXCJvbmNsaWNrXCIsIFwiV2lzaGxpc3RIZWxwZXIuYWRkSXRlbShcIiArIHByb2R1Y3QuZWFuX251bWJlciArIFwiKTtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhzID0gW1wiamFudWFyaVwiLCBcImZlYnJ1YXJpXCIsIFwibWFhcnRcIiwgXCJhcHJpbFwiLCBcIm1laVwiLCBcImp1bmlcIiwgXCJqdWxpXCIsIFwiYXVndXN0dXNcIiwgXCJzZXB0ZW1iZXJcIiwgXCJva3RvYmVyXCIsIFwibm92ZW1iZXJcIiwgXCJkZWNlbWJlclwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3JlbGVhc2VkYXRlXCIpLmFwcGVuZChkLmdldERhdGUoKSArIFwiIFwiICsgbW9udGhzW2QuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGQuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCIiLCJ2YXIgV2lzaGxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBzZXRWaWV3XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJXaXNobGlzdCAtIEFaIEdhbWVzXCI7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cIndpc2hsaXN0XCI+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIGxvYWRXaXNobGlzdCh2aWV3RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFdpc2hsaXN0KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgbG9hZFdpc2hMaXN0XCIpO1xyXG4gICAgICAgICQoXCIjd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3dpc2hsaXN0L3dpc2hsaXN0Lmh0bWwnLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYWRkIGFsbCB3aXNobGlzdCBpdGVtcyB0byBodG1sXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lzaF9fbGlzdF9faXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKzFcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2xpa2VidXR0b25cIikuYXBwZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwiL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmFwcGVuZCh3aXNoX19saXN0X19pdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc19wdWJsaWMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0b3JcIikudmFsKFwicHJpdmF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNfcHVibGljID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdG9yXCIpLnZhbChcInB1YmxpY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgaGFzIHVuZXhwZWN0ZWQgdmFsdWUuIHZhbHVlID0gXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWxzIGVyIGdlZW4gaXRlbXMgaW4gd2lzaGxpc3Qgc3RhYW4sIGRhbiBoaWRlIGRlIHZvbGdlbmRlIGRpdnMuXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hsaXN0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfX3JlbGF0ZWRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCIgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2xpY2tcIiwgXCIjZGVsZXRlX2J0blwiLCBmdW5jdGlvbihlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgIHZhciBkaXZfdG9faGlkZSA9ICQodGhpcykuY2xvc2VzdChcIi5yb3dcIik7XHJcbiAgICAgICAgICAgIGFjdGlvbihlYW4sIGRpdl90b19oaWRlKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UHVibGljTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiI3B1YmxpY2F0b3JcIiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlSXRlbShkaXZfdG9faGlkZSlcclxuICAgIHtcclxuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRXaXNobGlzdDogbG9hZFdpc2hsaXN0LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0UHVibGljTGlzdGVuZXI6IHNldFB1YmxpY0xpc3RlbmVyLFxyXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbVxyXG4gICAgfVxyXG59Il19
