$(` <center><marquee direction="right" rfdقwidth="99%" id="asim55" onmouseover="this.stop()" onmouseout="لذthis.start()" scrolldelay="0" scrollamount="2" >قوانين الشات ● • في حال ذكر وتبيين اسماء مواقع اخرى تعرضك لحذف العضوية والحظر يرجى من الزوار والمراقبين عدم ذكر اسماء مواقع اخرى ● • وشكرآ لكم</marquee></font><center>
`).insertBefore('label.nosel.ninr.fl.uzr.label.label-primary');

														$(`<img src="https://d.top4top.io/p_1596az4nu1.jpg
" class="fr"
style="width:100%;margin-right: 2px;">
<a href="https:///store/apps/details?id=com.ramyosman.iraqachat" style="border-radius: 3px 12px 11px 11px;width:83px;margin:3px;" class="fl mini  fa fa-star-half-o btn btn-primary"> الإدارة</a> <a href="" style="width:85px;margin:2px; border-radius:20px 0 0" class="fl mini fa fa-heartbeat btn btn-primary"> إلتطبيق</a> <a href="sub.html" style="width:85px;margin:2px; border-radius: 0 0 20px" class="fl mini fa fa-star btn btn-primary"> ميز نفسك</a> <a href=" muhd" style="width:85px;margin:2px; border-radius: 0 20px" class="fl mini fa fa-graduation-cap btn btn-primary"> القوانين</a>
<div style=" width: 100%; border-radius:0 0 20px 20px; background-color:DB5151" class="btn btn-primary btn-sm"type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria- fa-share"></div></></div>`).insertBefore('.nav-tabs');
$(".border.corner").css("border-radius","24px 24px 24px 24px");
$(".border.corner").css("border-radius","15px 3px 15px 15px")
$(`<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=jazeera-light,jazeera">
<link rel="stylesheet" href="https://raw.githack.com/iqr30/my-css-js-html/master/as2.css">
<style>
<style>`).insertBefore('body');
$(` <center><div style=" width: 100%;height: auto!important; "  id="sa" margin: 2px;" class="fa fa-heartbeat btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">&nbsp; ● •( إضغط هنا واستمع للراديو)• ● &nbsp;</div><div class="collapse" id="collapseExample"><center><div class="well"><p lass="bg-primary"></i></p>راديو المحبه</p><audio controls loop="" play=""><source src="https://listen.radioking.com/radio/96766/stream/136030"></audio></div><center>`).insertBefore('label.nosel.ninr.fl.uzr.label.label-primary')
$('.break.light').css({"background-image":"url(sico/1574013805877.jpg)"});
$(`<center><font size="4" color="#C74653"> <marquee direction="right" width="100%" height="20" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="5" style="height: 20px; width: 100%;"> مرحباً بك ضيفنا الكريم في شات عشق فلسطين ، من أجل راحتك، شات المحبه  يجمع بين الجميع، 
 شكراً لك على تعاونك معنا، ونتمنى لك يوماً سعيداً - كل عام وانتم بخير  👋</marquee></font><center>`).insertBefore('#d2');
													}
														catch (e){
															console.log(e)
														}
												</script>
												<script>
													function saveColor(){
														var dfsdfsdf = $('.label-primary, .btn-primary').css('background-color');
														console.log(dfsdfsdf)
														var colorLo = {bgcolor:$('.bgcolor').val(),btcolor:$('.btcolor').val(),bocolor:$('.bocolor').val(),hicolor:$('.hicolor').val()}
														localStorage.setItem('colorLo', JSON.stringify(colorLo));
														getLoColor(JSON.stringify(colorLo))
														$('.divColorLo').slideToggle();
													}
													var hexDigits = new Array
													("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
													function rgb2hex(rgb) {
														rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
														return  hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
													}
													function hex(x) {
														return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
													}
													function getLoColor(c){
														var lo = localStorage.getItem('colorLo')||c;
														if(lo){
															var stLoc = localStorage.getItem('colorSt');
															var loJs = JSON.parse(lo)
															for(var i in loJs){
																$('.'+i).val(loJs[i]);
																switch(i){
																	case 'bgcolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.bg').css('background-color'))
																		break;
																	case 'btcolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.label-primary, .btn-primary').css('background-color'))
																		break;
																	case 'bocolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.border').css('border-color'))
																		break;
																	case 'hicolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.light').css('background-color'))
																		break;
																}
															}
															var aa = '<style class="colorLo">.border{border-color: #'+loJs.bocolor+'!important;} .primaryborder{border-color: #'+loJs.btcolor+'!important;} .label-primary, .btn-primary {background-color: #'+loJs.btcolor+'!important;} .light{background-color: #'+loJs.hicolor+'!important;} .bg{background-color: #'+loJs.bgcolor+';}</style>';
															if(stLoc && !c)aa = stLoc;
															localStorage.setItem('colorSt', aa);
															var loHtml = $('.colorLo')
															if(loHtml.length >0)loHtml.text($(aa).text());
															else $('head').append(aa);
														}else{
															$('.colorLo').remove();
															$('.bgcolor,.btcolor,.hicolor,.bocolor').val('000000');
															$('.bgcolor,.btcolor,.hicolor,.bocolor').css('background-color','#000000');
														}
													}
													getLoColor()
													$('.ssss').click(function(e){
														e.stopPropagation();
														$('.divColorLo').slideToggle();
													})
