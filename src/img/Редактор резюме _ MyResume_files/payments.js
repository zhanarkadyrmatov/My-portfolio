$(document).ready(function(){ 
	$('.s-pay-all a').click(function(e){ e.preventDefault();
		createPayment();
	});

	$('.s-pay .s-pay-more-item').click(function(e){ e.preventDefault();
		var paymentMethod = $(this).attr('data-type');
		if(paymentMethod == "" || paymentMethod == undefined) { return false; }
		createPayment(paymentMethod);
	});

});

function createPayment(paymentMethod){ 
	var json = {
		'action':'createPayment',
		'type':'redirect',
		'id':$('#payment-form').attr('data-id'),
		'return_url':window.location.href
	};
	if(paymentMethod !== undefined) { json.paymentMethod = paymentMethod; }
	console.log(json);
	$.post('/include/yandex-kassa/ya-ajax.php',json,function(data){ console.log(data);
	    if(isJson(data)===false) { return false; }
	    data = JSON.parse(data);
	    console.log(data);
	    if(data.status == 'pending') { window.location.href = data.confirmation_url; }
	});
}

function renderForm(id,save) {
	let region = document.body.getAttribute('data-region')
	console.log(region);
	if(region === '1' ) {
		// let obj = window.Robokassa;
		// if(typeof obj !== 'object') { setTimeout(function(){ renderForm(id,save); },200); return; }
		if(typeof window.YandexCheckout !== 'function') { setTimeout(function(){ renderForm(id,save); },200); return; }
		renderYooKassa(id,save);
	// } else if(region === '0' ) {

	} else {
		save = 0;
		// renderCloudPayments(id, save);
		if(typeof window.Robokassa !== 'object') { setTimeout(function(){ renderForm(id,save); },200); return; }
		renderRobokassa(id, save);
		// if(typeof window.YandexCheckout !== 'function') { setTimeout(function(){ renderForm(id,save); },200); return; }
		// renderYooKassa(id,save);
		// setTimeout(function(){ renderForm(id,save); },200); return;
	}
	document.getElementById('payment-form').classList.add('loaded')
}

function renderRobokassa(id, save) { 
	console.log({'id':id,'save':save});
	$.post('/include/robokassa/create/',
		{'id':id,'save':save},
		function (data) {
			console.log(data);
			if (!data || !data.Shp_userId ) {return false;}
			// console.log(data);
			window.Robokassa.StartPayment(data);
			// Robokassa.StartPayment({
			// 	MerchantLogin: 'myresume',
			// 	OutSum: data.sum,
			// 	OutSumCurrency: data.OutSumCurrency,
			// 	Description: data.name,
			// 	InvId: data.InvId,
			// 	Email: data.email,
			// 	Culture: 'ru',
			// 	Encoding: 'utf-8',
			// 	IsTest: 1,
			// 	SignatureValue: data.sign
			// })
			spinner('#paymentWindowColon .buyButton',false);
		});
}

function renderCloudPayments(id, save) {
	let rf = $('#payment-form'), ssb = $('#serviceSubscriptionButton'), pt = $('#paymentTarif');
	if(rf.hasClass('loading')) { setTimeout(function(){ renderForm(id,save); },200); return; }
	ssb.attr('disabled','disabled');
	pt.attr('disabled','disabled');
	rf.removeClass('loading').addClass('loading');
	rf.html('');
	if(rf.attr('data-id')) { id1 = Number(rf.attr('data-id')); if(id1 !== NaN && id1 > 1) { id = id1; } }
	updateServiceSubscriptionButton(save);
	$.post('/include/cloud-payments/create/',
		{'id':id,'save':save},
		function (data) {
			console.log(data);
			if (isJson(data) === false) {return false;}
			data = JSON.parse(data);
			console.log(data);

			var widget = new window.cp.CloudPayments();
			let payData = {
				publicId: 'pk_9ddb5e95b16b6ba1a37281dfc1c06',
				description: data.name,
				amount: parseInt(data.sum),
				currency: 'KZT',
				accountId: data.userId,
				invoiceId: data.paymentId,
				email: data.email,
			}
			if(save) {
				let receipt1 = {
					Items: [//товарные позиции
						{
							label: data.name, //наименование товара
							price: parseInt(data.sum), //цена
							quantity: 1.00, //количество
							amount: parseInt(data.sum), //сумма
							vat: 0, //ставка НДС
							method: 0, // тег-1214 признак способа расчета - признак способа расчета
							object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
						}
					],
					email: data.email, //e-mail покупателя, если нужно отправить письмо с чеком
					isBso: false, //чек является бланком строгой отчетности
					amounts:
						{
							electronic: parseInt(data.sum), // Сумма оплаты электронными деньгами
							advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
							credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после запятой)
							provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
						}
					},
					receipt2 = {
						Items: [//товарные позиции
							{
								label: data.nameRecurrent, //наименование товара
								price: parseInt(data.sumRecurrent), //цена
								quantity: 1.00, //количество
								amount: parseInt(data.sumRecurrent), //сумма
								vat: 0, //ставка НДС
								method: 0, // тег-1214 признак способа расчета - признак способа расчета
								object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
							}
						],
						email: data.email, //e-mail покупателя, если нужно отправить письмо с чеком
						isBso: false, //чек является бланком строгой отчетности
						amounts:
							{
								electronic: parseInt(data.sumRecurrent), // Сумма оплаты электронными деньгами
								advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
								credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после запятой)
								provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
							}
					}

				let recurrentData = {};
				recurrentData.CloudPayments = {
					// CustomerReceipt: receipt1, //чек для первого платежа
					recurrent: {
						interval: 'Month',
						period: 1,
						amount: parseInt(data.sumRecurrent)
						// startDate: '2022-04-22 12:45',	// for test
						//customerReceipt: receipt2 //чек для регулярных платежей
					}
				}; //создание ежемесячной подписки

				payData.data = recurrentData
			}
			widget.pay('charge', payData,
				{
					onSuccess: function (options) {
						// let data = 'Спасибо за покупку!'
						// $('#paymentSucceeded .content span > b > span').html(data);
						// openModal('#paymentSucceeded');
						// goal('buy');
						// initButtonRefresh();
						// console.log('success');
						window.location.reload();
					},
					onFail: function (reason, options) { /* fail*/
						spinner('#paymentWindowColon .buyButton',false);
						console.log('fail',reason);
						},
					onComplete: function (paymentResult, options) {
						spinner('#paymentWindowColon .buyButton',false);
						/*Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.*/
						console.log('complete',paymentResult);
					}
				}
			)

			let source = document.querySelector("div[id^=cp-scrollable-]"),
				iframe = source.getElementsByTagName('iframe')[0]
			// 	form = document.getElementById("payment-form")
			source.style.zIndex = '999995';

			iframe.onload = function() {
				rf.removeClass('loading');
				ssb.removeAttr('disabled');
				pt.removeAttr('disabled');
			}
		});
}

function renderYooKassa(id,save){
	let rf = $('#payment-form'), ssb = $('#serviceSubscriptionButton'), pt = $('#paymentTarif');
	if(rf.hasClass('loading')) { setTimeout(function(){ renderForm(id,save); },200); return; }
	ssb.attr('disabled','disabled');
	pt.attr('disabled','disabled');
	rf.removeClass('loading').addClass('loading');


	if(rf.attr('data-id')) { id1 = Number(rf.attr('data-id')); if(id1 !== NaN && id1 > 1) { id = id1; } }
	updateServiceSubscriptionButton(save);
	$.post('/include/yandex-kassa/ya-ajax.php',
		{'action':'createPayment','id':id,'save':save,'return_url':window.location.href},
		function (data) {
			// console.log(data);
			if (isJson(data) === false) {return false;}
			data = JSON.parse(data);
			// console.log(data);
			const checkout = new window.YandexCheckout({
				confirmation_token: data.confirmation_token, //Токен, который перед проведением оплаты нужно получить от Кассы
				return_url: window.location.origin + window.location.pathname, //Ссылка на страницу завершения оплаты
				error_callback: function error_callback(error) {
					//Обработка ошибок инициализации
					console.log(error);
				}
			});
			rf.html('');
			checkout.render('payment-form');
			$('#payment-form iframe').css('width',0);
			$('#payment-form iframe').load(function(){
				// $('#payment-form .loader').css('display','none');
				$('#payment-form iframe').css('width','100%');
				rf.removeClass('loading');
				ssb.removeAttr('disabled');
				pt.removeAttr('disabled');
			});
		});
}

function updateServiceSubscriptionButton(save) {
	if(save == 1) { $('#serviceSubscriptionButton').prop('checked',true); }
	else { $('#serviceSubscriptionButton').prop('checked',false); }
	
}

function isJson(str) { try { JSON.parse(str); } catch (e) { return false; } return true; }