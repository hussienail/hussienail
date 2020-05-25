														$(`<img src="#" class="fr" style="width:100%;margin-right: 1px;">
<div><marquee direction="right" width="99%" id="asim7" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="2">    اهلاوسهلاا بكم في شات المحبه للجوال: وكل عام ونتم بخير وعيدكم مبارك  ●·  </marquee></div>
<div id="asim10"><a id="asim21" href="contact.html" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">اتصل بنا</a>
<a id="asim21" href="mobile.html" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">التطبيق</a>
<a id="asim21" href="" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">وظائف شاغره</a>
<a id="asim21" href="Shortcut.html" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">اختصارات</a><a id="asim22" href="sub.html" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">اشتراكات</a>
<a id="asim22" href="style1.html" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">زخرفة</a>
<a id="asim22" href="ruless.html" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">ق.السوبر</a>
<a id="asim22" href="" target="_blank" type="button" style=" width: 24%; margin: 2px;" class="btn-as">الأبراج</a>
`).insertBefore(".nav-tabs"),$(".nav-tabs").addClass("fl").css("width","100%"),$(".tc span[class=\"fa fl\"]").addClass("fa-check");var nopm=!0,nonot=!0;$(".hand.nosel.fl.uzr.border").css({margin:"1px 0",borderRadius:"0px"}),
$(".fa-gear").text(" الضبط").css("width",""); 
$(`<link rel="stylesheet" href="https://raw.githack.com/hussienail/hussienail/master/https:/alahappa.com/3.css"></style>`).insertBefore("body");
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
												</script>
</body>
</html>
