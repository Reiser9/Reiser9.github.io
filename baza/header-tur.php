<!DOCTYPE html>
<html lang="ru">
<head>
	<!-- Meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<!-- Style -->
	<link rel="stylesheet" href="css/style.min.css">
	<link rel="stylesheet" href="css/fontawesome/all.min.css">
	<link rel="stylesheet" href="css/slick.css">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

	<!-- Title -->
	<title>База отдыха приморье</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">

</head>
<body>
	
	
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<div class="header__top--inner">
					<div class="header__data--inner">
						<div class="header__logo--inner">
							<a href="/">
								<img src="img/logo.png" alt="логотип" class="header__logo--img">
							</a>
						</div>

						<div class="header__data--box">
							<div class="header__data--region text__shadow">
								Регион: Приморский край
							</div>

							<a href="tel:79990874044" class="header__data--phone">
								<img src="img/mobile-icon.png" alt="телефон" class="header__data--phone--img">
								+7 (999)0874044
							</a>

							<div class="header__data--text text__shadow">
								Связаться с нами
							</div>
						</div>
					</div>

					<div class="header__buttons--inner">
						<button class="button header__button">
							Оставить заявку
						</button>

						<button class="button header__button">
							Добавить объявление
						</button>
					</div>
				</div>

				<div class="header__title">
					Автотуры по приморью
				</div>

				<div class="header__subtitle text__shadow">
					Покупка и бронирование осуществляется без наценки, напрямую у базы.
				</div>

				<div class="header__search--inner">
					<div class="header__inputs--inner">
						<div class="header__date--input">
							<div class="header__date--input--text">
								Дата
							</div>

							<div class="date__inputs">
								<img src="img/date-icon.png" alt="день" class="date__input--img">

								<div class="input__between">
									-
								</div>

								<input type="text" placeholder="Заезд" class="input header__date--input--input">
								<input type="text" placeholder="Отъезд" class="input header__date--input--input input__rel">
							</div>
						</div>

						<div class="header__price--input">
							<div class="header__date--input--text header__price">
								Цена
							</div>

							<div class="date__inputs">
								<img src="img/price-icon.png" alt="день" class="date__input--img">

								<div class="input__between">
									-
								</div>

								<input type="text" placeholder="Мин" class="input header__price--input--input">
								<input type="text" placeholder="Макс" class="input header__price--input--input input__rel">
							</div>
						</div>
					</div>

					<div class="header__checked--inner">
						<div class="header__filter--inner">
							<div class="header__filter--input--inner guests__inner">
								<div class="header__date--input--text header__price">
									Гостей
								</div>

								<div class="date__inputs">
									<img src="img/user-icon.png" alt="день" class="date__input--img">

									<input type="text" placeholder="2-е взрослых без детей" class="input header__filter--input">

									<img src="img/select-icon.png" alt="выбор" class="header__select--icon">
								</div>
							</div>

							<div class="header__filter--input--inner">
								<div class="header__date--input--text header__price">
									Куда
								</div>

								<div class="date__inputs">
									<img src="img/map-icon.png" alt="день" class="date__input--img">

									<select id="from" name="#">
										<option value="1">Андреевка</option>
										<option value="2">Шамора</option>
										<option value="3">Владивосток</option>
										<option value="4">Славянка</option>
										<option value="5">Находка</option>
									</select>

									<img src="img/select-icon.png" alt="выбор" class="header__select--icon">
								</div>
							</div>
						</div>

						<div class="header__checked--container">
							<div class="header__check--item">
								<input type="checkbox" id="ch1" class="checkbox">

								<label for="ch1" class="header__check--label">Базы отдыха</label>
							</div>

							<div class="header__check--item">
								<input type="checkbox" id="ch2" class="checkbox">

								<label for="ch2" class="header__check--label">Гостиницы</label>
							</div>

							<div class="header__check--item">
								<input type="checkbox" id="ch3" class="checkbox">

								<label for="ch3" class="header__check--label">Коттедж</label>
							</div>

							<div class="header__check--item">
								<input type="checkbox" id="ch4" class="checkbox">

								<label for="ch4" class="header__check--label">Квартиры</label>
							</div>

							<div class="header__check--item">
								<input type="checkbox" id="ch5" class="checkbox">

								<label for="ch5" class="header__check--label">Хостелы</label>
							</div>

							<a href="#" class="blue header__full--seacrh">
								Расширенный поиск
								<span class="header__full--search--icon--inner">
									<i class="fas fa-chevron-right"></i>
								</span>
							</a>
						</div>
					</div>

					<div class="header__filter--buttons">
						<button class="button header__auto--button">
							Автотуры
						</button>

						<button class="button header__search--button">
							Найти
						</button>
					</div>
				</div>

				<div class="full__search--inner">
					<div class="full__search--title">
						Дополнительные параметры
					</div>

					<div class="full__search--parametrs">
						<div class="full__search--box">
							<div class="full__param--item">
								<div class="full__param--title">
									Удобства
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch6" class="checkbox">

									<label for="ch6" class="header__check--label">
										Кондиционер
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch7" class="checkbox">

									<label for="ch7" class="header__check--label">
										Телевизор
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch8" class="checkbox">

									<label for="ch8" class="header__check--label">
										Холодильник
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch9" class="checkbox">

									<label for="ch9" class="header__check--label">
										Кухня, кухонная зона
									</label>
								</div>
							</div>

							<div class="full__param--item">
								<div class="full__param--title">
									Тип размещения
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch10" class="checkbox">

									<label for="ch10" class="header__check--label">
										Домик
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch11" class="checkbox">

									<label for="ch11" class="header__check--label">
										Номер
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch12" class="checkbox">

									<label for="ch12" class="header__check--label">
										Коттедж
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch13" class="checkbox">

									<label for="ch13" class="header__check--label">
										Место под палатку
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch14" class="checkbox">

									<label for="ch14" class="header__check--label">
										Палатка
									</label>
								</div>
							</div>
						</div>

						<div class="full__search--box">
							<div class="full__param--item">
								<div class="full__param--title">
									Тип питания
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch15" class="checkbox">

									<label for="ch15" class="header__check--label">
										Завтрак
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch16" class="checkbox">

									<label for="ch16" class="header__check--label">
										Включено в стоимость
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch17" class="checkbox">

									<label for="ch17" class="header__check--label">
										Организуется самостоятельно
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch18" class="checkbox">

									<label for="ch18" class="header__check--label">
										Столовая, кафе
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch19" class="checkbox">

									<label for="ch19" class="header__check--label">
										Ресторан
									</label>
								</div>
							</div>

							<div class="full__param--item">
								<div class="full__param--title">
									Душ и туалет
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch20" class="checkbox">

									<label for="ch20" class="header__check--label">
										В домике, номере, коттедже
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch21" class="checkbox">

									<label for="ch21" class="header__check--label">
										На территории
									</label>
								</div>
							</div>
						</div>

						<div class="full__search--box">

							<div class="full__param--item">
								<div class="full__param--title">
									Услуги
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch22" class="checkbox">

									<label for="ch22" class="header__check--label">
										Wi-Fi
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch23" class="checkbox">

									<label for="ch23" class="header__check--label">
										Бассейн
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch24" class="checkbox">

									<label for="ch24" class="header__check--label">
										Бассейн с подогревом
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch25" class="checkbox">

									<label for="ch25" class="header__check--label">
										Крытый бассейн
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch26" class="checkbox">

									<label for="ch26" class="header__check--label">
										Детский бассей
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch27" class="checkbox">

									<label for="ch27" class="header__check--label">
										Аквапарк
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch28" class="checkbox">

									<label for="ch28" class="header__check--label">
										Пляж
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch29" class="checkbox">

									<label for="ch29" class="header__check--label">
										Онлайн - бронирование
									</label>
								</div>
							</div>
						</div>

						<div class="full__search--box">

							<div class="full__param--item">
								<div class="full__param--title op">
									а
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch30" class="checkbox">

									<label for="ch30" class="header__check--label">
										Детская площадка
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch31" class="checkbox">

									<label for="ch31" class="header__check--label">
										Спортивная площадка
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch32" class="checkbox">

									<label for="ch32" class="header__check--label">
										Баня, сауна
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch33" class="checkbox">

									<label for="ch33" class="header__check--label">
										Беседка
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch34" class="checkbox">

									<label for="ch34" class="header__check--label">
										Мангал
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch35" class="checkbox">

									<label for="ch35" class="header__check--label">
										Коптильня
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch36" class="checkbox">

									<label for="ch36" class="header__check--label">
										Дискотека
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch37" class="checkbox">

									<label for="ch37" class="header__check--label">
										Размещение с домашними животными
									</label>
								</div>
							</div>
						</div>

						<div class="full__search--box">

							<div class="full__param--item">
								<div class="full__param--title op">
									а
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch38" class="checkbox">

									<label for="ch38" class="header__check--label">
										Лечебные процедуры
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch39" class="checkbox">

									<label for="ch39" class="header__check--label">
										Массаж
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch40" class="checkbox">

									<label for="ch40" class="header__check--label">
										Экскурсии
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch41" class="checkbox">

									<label for="ch41" class="header__check--label">
										Корпаротивный отдых
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch42" class="checkbox">

									<label for="ch42" class="header__check--label">
										Парковка
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch43" class="checkbox">

									<label for="ch43" class="header__check--label">
										Трансфер
									</label>
								</div>

								<div class="full__check--item">
									<input type="checkbox" id="ch44" class="checkbox">

									<label for="ch44" class="header__check--label">
										Скидки на детей
									</label>
								</div>
							</div>
						</div>
					</div>

					<div class="full__search--buttons">
						<button class="button full__search--button--confirm">
							Применить
						</button>

						<button class="button full__search--button--reset">
							Сбросить
						</button>						
					</div>
				</div>

			</div>
		</div>
	</header>