<?php require "header.php"; ?>

	<section class="main">
		<div class="container">
			<div class="main__inner">
				<div class="main__map">
					<iframe class="map__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A59adf8328785d1f91b5a3f7ffb2383adf4265a80ab2cab629d1eaf3407a40522&amp;source=constructor" width="100%" height="0" frameborder="0"></iframe>

					<div class="map__off--inner">
						<div class="map__off--img--inner">
							<img src="img/compas-icon.png" alt="компас" class="map__off--img">
						</div>

						<div class="map__off--text--inner">
							<div class="map__off--text--title">
								Карта
							</div>

							<a href="#" class="map__off--text--text">
								развернуть
							</a>
						</div>
					</div>
				</div>

				<div class="accardeon__inner">
					<a href="#" class="accardeon__item card__top active">Описание объекта</a>
					<a href="#" class="accardeon__item card__top">Фотографии</a>
					<a href="#" class="accardeon__item card__razm">Категории номеров</a>
					<a href="#" class="accardeon__item">Отзывы(0)</a>
					<a href="#" class="accardeon__item">Запомнить</a>
				</div>

				
				<div class="card__item--contain">
					<div class="card__item--inner">
						<div id="card__point"></div>
						<div class="card__slider--inner">
							<div class="card__slider--big cg1">
								<div class="card__slider--big--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
								</div>

								<div class="card__slider--big--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
								</div>

								<div class="card__slider--big--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
								</div>

								<div class="card__slider--big--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
								</div>
							</div>

							<div class="card__slider--title">
								Фотогалерея
							</div>

							<div class="card__slider--min cm1">
								<div class="card__slider--min--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
								</div>

								<div class="card__slider--min--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
								</div>

								<div class="card__slider--min--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
								</div>

								<div class="card__slider--min--item">
									<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
								</div>
							</div>

						</div>

						<div class="card__info--inner">
							<div class="card__info--title--inner">
								<div class="card__info--title--box">
									<div class="card__info--title">
										Венеция
									</div>

									<div class="card__info--subtitle">
										База отдыха
									</div>
								</div>
							</div>

							<div class="card__info--adress--inner">
								<img src="img/map-card.png" alt="дом" class="card__info--address--img--inner">

								<div class="card__info--address--value">
									<span class="bold">Место:</span> Волчанец
								</div>
							</div>

							<div class="card__info--adress--inner">
								<img src="img/address.png" alt="дом" class="card__info--address--img--inner">

								<div class="card__info--address--value">
									<span class="bold">Адрес:</span> Волчанец, Приморский край, пос. Волчанец
								</div>
							</div>

							<div class="card__info--adress--inner">
								<img src="img/phone-card.png" alt="дом" class="card__info--address--img--inner">

								<div class="card__info--address--value">
									<span class="bold">Телефон:</span> +7 (999)0874044
								</div>
							</div>

							<div class="card__info--adress--inner">
								<img src="img/viber-card.png" alt="дом" class="card__info--address--img--inner">

								<div class="card__info--address--value">
									<span class="bold">WhatsApp:</span> +7 (999) 0874044
								</div>
							</div>

							<div class="card__info--adress--inner">
								<img src="img/mail-card.png" alt="дом" class="card__info--address--img--inner">

								<div class="card__info--address--value">
									<span class="bold">Email для заказов:</span> nadiojnostru@mail.ru
								</div>
							</div>

							<div class="card__info--rate--inner mt5">
								<div class="card__info--sale--inner">
									<img src="img/sale.png" alt="скидка" class="card__info--sale--img">
								</div>

								<div class="card__info--rate--box">
									<img src="img/star.png" alt="звезда" class="card__info-rate--img">
									<img src="img/star.png" alt="звезда" class="card__info-rate--img">
									<img src="img/star.png" alt="звезда" class="card__info-rate--img">
									<img src="img/staropacity.png" alt="звезда" class="card__info-rate--img">
								</div>

								<div class="card__info--reviews--text">
									Отзывы
								</div>

								<div class="card__info--favorite--inner">
									<img src="img/favorite.png" alt="избранное" class="card__info--favorite--img">

									<div class="card__info--favorite--value">
										64
									</div>
								</div>
							</div>

							<button class="button card__info--favorite mt1">
								В избранное
							</button>

							<div class="card__info--desc--inner">
								<div class="card__info--desc--title">
									Описание объекта:
								</div>

								<div class="card__info--desc--text">
									Для проживания предоставляются комфортабельные домики с полным комплексом удобств. На территории базы действует тихий час с 23.00 до 09.00 утра. Вся территория под видеонаблюдением, безопасность и порядок на базе обеспечивает служба безопасности
								</div>
							</div>

							<div class="card__info--button--inner">
								<button class="button card__info--full">
									Полное описание
								</button>

								<button class="button card__info--rule">
									Правила пользования
								</button>
							</div>
						</div>
					</div>

					<div class="card__option--item">
						<div id="desc"></div>
						<div class="card__item--title title">
							Полное описание
						</div>

						<div class="card__item--text">
							Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное ОписаниеПолное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание Полное описание
						</div>
						
						<div id="rule"></div>
						<div class="card__item--title title mt2">
							Правила пользования
						</div>

						<div class="card__item--text">
							Правила пользования Правила пользования Правила пользованияПравила пользования Правила пользованияПравилаПравила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования Правила пользования
						</div>
					</div>

				</div>


				<div class="card__uslugi--inner">
					<div class="card__uslugi--first">
						<div class="title card__uslugi--first--title">
							Условия проживания
						</div>

						<div class="card__info--adress--inner">
							<img src="img/clock.png" alt="иконка" class="card__info--address--img--inner">

							<div class="card__info--address--value">
								<span class="bold">Расчетный час</span> Выезд - <span class="bold">12:00</span>, заезд - <span class="bold">
									15:00
								</span> 
							</div>
						</div>

						<div class="card__info--adress--inner">
							<img src="img/car.png" alt="дом" class="card__info--address--img--inner">

							<div class="card__info--address--value">
								<span class="bold">Автостоянка</span> Круглосуточно до <span class="bold">25</span> машин 
							</div>
						</div>

						<div class="card__info--adress--inner">
							<img src="img/food.png" alt="дом" class="card__info--address--img--inner">

							<div class="card__info--address--value">
								<span class="bold">Питание</span> Завтраки
							</div>
						</div>

						<div class="card__info--adress--inner">
							<img src="img/way.png" alt="дом" class="card__info--address--img--inner">

							<div class="card__info--address--value">
								<span class="bold">Расстояние до моря</span> метров
							</div>
						</div>
					</div>

					<div class="card__uslugi--second">
						<div class="title card__uslugi--second--title">
							Услуги
						</div>

						<div class="card__uslugi--second--inner">
							<div class="card__uslugi--second--item">
								<div class="card__uslugi--second--box">
									<div class="subtitle">
										Бронирование
									</div>

									<input type="checkbox" class="card__check" id="us1">

									<label for="us1" class="card__label">
										Онлайн - бронирование
									</label>
								</div>

								<div class="card__uslugi--second--box mt1">
									<div class="subtitle">
										Душ и туалет
									</div>

									<input type="checkbox" class="card__check" id="us2">

									<label for="us2" class="card__label">
										В домике, номере, коттедже
									</label>
								</div>

								<div class="card__uslugi--second--box mt1">
									<div class="subtitle">
										Удобства
									</div>

									<input type="checkbox" class="card__check" id="us3">

									<label for="us3" class="card__label">
										Кондиционер
									</label>

									<input type="checkbox" class="card__check" id="us4">

									<label for="us4" class="card__label">
										Телевизор
									</label>

									<input type="checkbox" class="card__check" id="us5">

									<label for="us5" class="card__label">
										Холодильник
									</label>
								</div>


							</div>

							<div class="card__uslugi--second--item">
								<div class="card__uslugi--second--box">
									<div class="subtitle">
										Тип питания
									</div>

									<input type="checkbox" class="card__check" id="us6">

									<label for="us6" class="card__label">
										Завтрак
									</label>

									<input type="checkbox" class="card__check" id="us7">

									<label for="us7" class="card__label">
										Столовая, кафе
									</label>

									<input type="checkbox" class="card__check" id="us8">

									<label for="us8" class="card__label">
										Ресторан
									</label>
								</div>

								<div class="card__uslugi--second--box mt4">
									<div class="subtitle">
										Тип размещения
									</div>

									<input type="checkbox" class="card__check" id="us9">

									<label for="us9" class="card__label">
										Номер
									</label>

									<input type="checkbox" class="card__check" id="us10">

									<label for="us10" class="card__label">
										Место под палатку
									</label>
								</div>
							</div>

							<div class="card__uslugi--second--item">
								<div class="card__uslugi--second--box">
									<div class="subtitle">
										Услуги
									</div>

									<input type="checkbox" class="card__check" id="us11">

									<label for="us11" class="card__label">
										Беседка
									</label>

									<input type="checkbox" class="card__check" id="us12">

									<label for="us12" class="card__label">
										Коптильня
									</label>

									<input type="checkbox" class="card__check" id="us13">

									<label for="us13" class="card__label">
										Лечебные процедуры
									</label>

									<input type="checkbox" class="card__check" id="us14">

									<label for="us14" class="card__label">
										Экскурсии
									</label>

									<input type="checkbox" class="card__check" id="us15">

									<label for="us15" class="card__label">
										Парковка
									</label>

									<input type="checkbox" class="card__check" id="us16">

									<label for="us16" class="card__label">
										Скидки на детейние
									</label>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div class="card__item--inner bb">
					<div id="razm"></div>
					<div class="card__slider--inner">
						<div class="card__slider--big cg2">
							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>

							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>

							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>

							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>
						</div>

						<div class="card__slider--title">
							Фотогалерея
						</div>

						<div class="card__slider--min cm2">
							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>

							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>

							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>

							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>
						</div>

						<div class="card__info--desc--inner">
							<div class="card__info--desc--title">
								Примечание:
							</div>

							<div class="card__info--desc--text">
								Одна 2-х спальная и две односпальные кровати, телевизор с цифровым телевиденьем 42 дюйма + SMART TV, комод, кондиционер с функцией "климат контроль". Постельное белье предоставляется.
							</div>
						</div>

					</div>

					<div class="card__info--inner">
						<div class="card__info--title--inner">
							<div class="card__info--title--box">
								<div class="card__info--suptitle">
									Места размещения
								</div>

								<div class="card__info--text">
									Место #2. дом
								</div>

								<div class="card__info--subtext">
									4-местный домик
								</div>
							</div>

							<button class="button card__info--bron--button">
								Забронировать
							</button>
						</div>

						<div class="title mt1">
							Стоимость
						</div>

						<div class="card__suptext">
							Стоимость указана на человека за ночь, в рублях
						</div>

						<div class="card__table--inner">
							<div class="card__table--item">
								<div class="card__table--item--top brstl">
									Май
								</div>

								<div class="card__table--item--bottom brsbl">
									1200 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Июнь
								</div>

								<div class="card__table--item--bottom">
									3000 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Июль
								</div>

								<div class="card__table--item--bottom">
									3100 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Август
								</div>

								<div class="card__table--item--bottom">
									3000 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Сентябрь
								</div>

								<div class="card__table--item--bottom">
									1200 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top brstr">
									Межсезонье
								</div>

								<div class="card__table--item--bottom brsbr">
									0 руб
								</div>
							</div>
						</div>

						<div class="card__point--inner">
							<div class="card__point--item">
								<div class="card__point--item--text">
									Спальных мест
								</div>

								<div class="card__point--item--value">
									4
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Комнат
								</div>

								<div class="card__point--item--value">
									1
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Этаж
								</div>

								<div class="card__point--item--value">
									1
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Площадь
								</div>

								<div class="card__point--item--value">
									18
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Кухня
								</div>

								<div class="card__point--item--value">
									на территории
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Мебель
								</div>

								<div class="card__point--item--value">
									присутствует
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Санузел
								</div>

								<div class="card__point--item--value">
									в домике
								</div>
							</div>

						</div>

						<div class="card__uslug--cont">
							<div class="card__uslug--cont--title">
								Удобства
							</div>

							<div class="card__uslug--box">
								<div class="card__uslug--item">
									<div class="subtitle">
										Тип размещения
									</div>

									<input type="checkbox" class="card__check" id="ud11">

									<label for="ud11" class="card__label">
										Номер
									</label>

									<input type="checkbox" class="card__check" id="ud12">

									<label for="ud12" class="card__label">
										Домик
									</label>

									<input type="checkbox" class="card__check" id="ud13">

									<label for="ud13" class="card__label">
										Место под палатку
									</label>

									<input type="checkbox" class="card__check" id="ud14">

									<label for="ud14" class="card__label">
										Палатка
									</label>

								</div>

								<div class="card__uslug--item">
									<div class="subtitle">
										Удобства
									</div>

									<input type="checkbox" class="card__check" id="ud15">

									<label for="ud15" class="card__label">
										Кондиционер
									</label>

									<input type="checkbox" class="card__check" id="ud16">

									<label for="ud16" class="card__label">
										Телевизор
									</label>

									<input type="checkbox" class="card__check" id="ud17">

									<label for="ud17" class="card__label">
										Холодильник
									</label>

									<input type="checkbox" class="card__check" id="ud18">

									<label for="ud18" class="card__label">
										Кухня, кухонная зона
									</label>

								</div>

								<div class="card__uslug--item">
									<div class="subtitle">
										Душ и туалет
									</div>

									<input type="checkbox" class="card__check" id="ud19">

									<label for="ud19" class="card__label">
										В домике, номере, коттедже
									</label>

									<input type="checkbox" class="card__check" id="ud20">

									<label for="ud20" class="card__label">
										На территории
									</label>

								</div>
							</div>
						</div>

						<div class="bron__contain">
							<div class="title">
								Бронирование
							</div>

							<div class="bron__contain--subtext">
								Забронировать номер
							</div>

							<div class="bron__contain--subtext">
								Отправляя Ваши данные для бронирования, письмо попадает непосредственно в сам объект бронирования - Океан и в ближайшее время администрация Океан свяжется с Вами для уточнения необходимой информации. Выше указаны контактные данные объекта бронирования Океан, при необходимости по которым можно связаться и изменить или отменить бронь
							</div>

							
							<div class="calendar__inner">
								<div class="calendar__content">
									<div class="calendar__title">
										Май <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>

								<div class="calendar__content">
									<div class="calendar__title">
										Июнь <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>
							</div>

							<div class="calendar__inner">
								<div class="calendar__content">
									<div class="calendar__title">
										Июль <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>

								<div class="calendar__content">
									<div class="calendar__title">
										Август <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>
							</div>

							<div class="calendar__inner">
								<div class="calendar__content">
									<div class="calendar__title">
										Сентябрь <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>
							</div>



							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Количество взрослых:
								</div>

								<select id="nv" name="#">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Количество детей до 12 лет:
								</div>

								<select id="nd12" name="#">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Количество детей до 3 лет:
								</div>

								<select id="nd3" name="#">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									ФИО:
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Email:
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Телефон:
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Ваши комментарии:
								</div>

								<textarea type="text" class="input bron__contain--input">
								</textarea>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Капча =
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="agree mt1">
								При нажатии кнопки «Забронировать» я даю согласие на обработку персональных данных, соглашаюсь с <a href="#" class="blue">правилами</a> проживания и ознакомлен с политикой конфиденциальности.
							</div>

							<button class="button bron__contain--button mt2">
								Забронировать
							</button>
						</div>
					</div>
				</div>

				<div class="card__item--inner bb">
					<div class="card__slider--inner">
						<div class="card__slider--big cg4">
							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>

							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>

							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>

							<div class="card__slider--big--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--big--img">
							</div>
						</div>

						<div class="card__slider--title">
							Фотогалерея
						</div>

						<div class="card__slider--min cm4">
							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>

							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>

							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>

							<div class="card__slider--min--item">
								<img src="img/slider1.png" alt="слайдер" class="card__slider--min--item--img">
							</div>
						</div>

						<div class="card__info--desc--inner">
							<div class="card__info--desc--title">
								Примечание:
							</div>

							<div class="card__info--desc--text">
								Одна 2-х спальная и две односпальные кровати, телевизор с цифровым телевиденьем 42 дюйма + SMART TV, комод, кондиционер с функцией "климат контроль". Постельное белье предоставляется.
							</div>
						</div>

					</div>

					<div class="card__info--inner">
						<div class="card__info--title--inner">
							<div class="card__info--title--box">
								<div class="card__info--suptitle">
									Места размещения
								</div>

								<div class="card__info--text">
									Место #2. дом
								</div>

								<div class="card__info--subtext">
									4-местный домик
								</div>
							</div>

							<button class="button card__info--bron--button">
								Забронировать
							</button>
						</div>

						<div class="title mt1">
							Стоимость
						</div>

						<div class="card__suptext">
							Стоимость указана на человека за ночь, в рублях
						</div>

						<div class="card__table--inner">
							<div class="card__table--item">
								<div class="card__table--item--top brstl">
									Май
								</div>

								<div class="card__table--item--bottom brsbl">
									1200 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Июнь
								</div>

								<div class="card__table--item--bottom">
									3000 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Июль
								</div>

								<div class="card__table--item--bottom">
									3100 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Август
								</div>

								<div class="card__table--item--bottom">
									3000 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top">
									Сентябрь
								</div>

								<div class="card__table--item--bottom">
									1200 руб
								</div>
							</div>

							<div class="card__table--item">
								<div class="card__table--item--top brstr">
									Межсезонье
								</div>

								<div class="card__table--item--bottom brsbr">
									0 руб
								</div>
							</div>
						</div>

						<div class="card__point--inner">
							<div class="card__point--item">
								<div class="card__point--item--text">
									Спальных мест
								</div>

								<div class="card__point--item--value">
									4
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Комнат
								</div>

								<div class="card__point--item--value">
									1
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Этаж
								</div>

								<div class="card__point--item--value">
									1
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Площадь
								</div>

								<div class="card__point--item--value">
									18
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Кухня
								</div>

								<div class="card__point--item--value">
									на территории
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Мебель
								</div>

								<div class="card__point--item--value">
									присутствует
								</div>
							</div>

							<div class="card__point--item">
								<div class="card__point--item--text">
									Санузел
								</div>

								<div class="card__point--item--value">
									в домике
								</div>
							</div>

						</div>

						<div class="card__uslug--cont">
							<div class="card__uslug--cont--title">
								Удобства
							</div>

							<div class="card__uslug--box">
								<div class="card__uslug--item">
									<div class="subtitle">
										Тип размещения
									</div>

									<input type="checkbox" class="card__check" id="ud1">

									<label for="ud1" class="card__label">
										Номер
									</label>

									<input type="checkbox" class="card__check" id="ud2">

									<label for="ud2" class="card__label">
										Домик
									</label>

									<input type="checkbox" class="card__check" id="ud3">

									<label for="ud3" class="card__label">
										Место под палатку
									</label>

									<input type="checkbox" class="card__check" id="ud4">

									<label for="ud4" class="card__label">
										Палатка
									</label>

								</div>

								<div class="card__uslug--item">
									<div class="subtitle">
										Удобства
									</div>

									<input type="checkbox" class="card__check" id="ud5">

									<label for="ud5" class="card__label">
										Кондиционер
									</label>

									<input type="checkbox" class="card__check" id="ud6">

									<label for="ud6" class="card__label">
										Телевизор
									</label>

									<input type="checkbox" class="card__check" id="ud7">

									<label for="ud7" class="card__label">
										Холодильник
									</label>

									<input type="checkbox" class="card__check" id="ud8">

									<label for="ud8" class="card__label">
										Кухня, кухонная зона
									</label>

								</div>

								<div class="card__uslug--item">
									<div class="subtitle">
										Душ и туалет
									</div>

									<input type="checkbox" class="card__check" id="ud9">

									<label for="ud9" class="card__label">
										В домике, номере, коттедже
									</label>

									<input type="checkbox" class="card__check" id="ud10">

									<label for="ud10" class="card__label">
										На территории
									</label>

								</div>
							</div>

						</div>


						<div class="bron__contain">
							<div class="title">
								Бронирование
							</div>

							<div class="bron__contain--subtext">
								Забронировать номер
							</div>

							<div class="bron__contain--subtext">
								Отправляя Ваши данные для бронирования, письмо попадает непосредственно в сам объект бронирования - Океан и в ближайшее время администрация Океан свяжется с Вами для уточнения необходимой информации. Выше указаны контактные данные объекта бронирования Океан, при необходимости по которым можно связаться и изменить или отменить бронь
							</div>

							
							<div class="calendar__inner">
								<div class="calendar__content">
									<div class="calendar__title">
										Май <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>

								<div class="calendar__content">
									<div class="calendar__title">
										Июнь <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>
							</div>

							<div class="calendar__inner">
								<div class="calendar__content">
									<div class="calendar__title">
										Июль <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>

								<div class="calendar__content">
									<div class="calendar__title">
										Август <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>
							</div>

							<div class="calendar__inner">
								<div class="calendar__content">
									<div class="calendar__title">
										Сентябрь <span class="bold">2020</span>
									</div>

									<table cellpadding="0" cellspacing="0" class="b-calendar__tb"><tbody><tr class="b-calendar__row"><th class="b-calendar__head"><div class="b-calendar__number">Пн</div></th><th class="b-calendar__head"><div class="b-calendar__number">Вт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Ср</div></th><th class="b-calendar__head"><div class="b-calendar__number">Чт</div></th><th class="b-calendar__head"><div class="b-calendar__number">Пт</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Сб</div></th><th class="b-calendar__head b-calendar__weekend"><div class="b-calendar__number">Вс</div></th></tr><tr class="b-calendar__row"><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__np"></td><td class="b-calendar__day selbilet" "=""><div class="b-calendar__number" title="">1</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-01</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">2</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-02</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">3</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-03</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">4</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-04</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">5</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-05</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">6</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-06</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">7</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-07</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">8</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-08</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">9</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-09</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">10</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-10</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">11</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-11</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">12</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-12</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">13</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-13</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">14</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-14</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">15</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-15</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">16</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-16</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">17</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-17</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">18</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-18</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">19</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-19</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">20</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-20</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">21</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-21</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">22</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-22</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">23</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-23</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">24</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-24</div></td></tr><tr class="b-calendar__row"><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">25</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-25</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">26</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-26</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">27</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-27</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">28</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-28</div></td><td class="b-calendar__day selbilet " "=""><div class="b-calendar__number" title="">29</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-29</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">30</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-30</div></td><td class="b-calendar__day selbilet " b-calendar__weekend"=""><div class="b-calendar__number" title="">31</div><div class="selnomer" style="display:none;" id="selbilet">2020-05-31</div></td></tr><tr><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td><td class="b-calendar__np"> </td></tr></tbody></table>
								</div>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Количество взрослых:
								</div>

								<select id="nv" name="#">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Количество детей до 12 лет:
								</div>

								<select id="nd12" name="#">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Количество детей до 3 лет:
								</div>

								<select id="nd3" name="#">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									ФИО:
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Email:
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Телефон:
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Ваши комментарии:
								</div>

								<textarea type="text" class="input bron__contain--input">
								</textarea>
							</div>

							<div class="bron__contain--inner">
								<div class="bron__contain--text">
									Капча =
								</div>

								<input type="text" class="input bron__contain--input">
							</div>

							<div class="agree mt1">
								При нажатии кнопки «Забронировать» я даю согласие на обработку персональных данных, соглашаюсь с <a href="#" class="blue">правилами</a> проживания и ознакомлен с политикой конфиденциальности.
							</div>

							<button class="button bron__contain--button mt2">
								Забронировать
							</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

<?php require "footer.php"; ?>