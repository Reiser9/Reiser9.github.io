<?php require "header.php"; ?>

<div class="kabinet">
	<div class="container">
		<div class="kabinet__inner">
			<?php require "map.php"; ?>

			<div class="add__full--inner">
				<div class="add__full--item">
					<div class="add__full--title">
						Добавление предложения (редактирование)
					</div>
					
					<div class="add__full--subtitle">
						Алексеевка База отдыха: "Весна"
					</div>

					<div class="add__radio--inner">
						<input id="v1" name="home" type="radio" class="add__radio--input" checked="">
						<label class="label__for" for="v1" class="add__radio--label">База отдыха</label>
						<input id="v2" name="home" type="radio" class="add__radio--input">
						<label class="label__for" for="v2" class="add__radio--label">Гостиница</label>
						<input id="v3" name="home" type="radio" class="add__radio--input">
						<label class="label__for" for="v3" class="add__radio--label">Коттедж</label>
						<input id="v4" name="home" type="radio" class="add__radio--input">
						<label class="label__for" for="v4" class="add__radio--label">Квартира</label>
						<input id="v5" name="home" type="radio" class="add__radio--input">
						<label class="label__for" for="v5" class="add__radio--label">Хостел</label>
					</div>

					<div class="register__inner mt2 full">
						<div class="ava__item">
							<div class="register__view">
								Город: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="ava__item">
							<div class="register__view">
								Адрес: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="ava__item">
							<div class="register__view">
								Название: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="ava__item">
							<div class="register__view">
								Контактная информация:
							</div>

							<div class="add__value">
								<input type="text" class="input add__small" placeholder="+22">
								<input type="text" class="input add__small" placeholder="(000)">
								<input type="text" class="input add__bid" placeholder="ХХХ-ХХ-ХХ">
							</div>
						</div>

						<div class="ava__item">
							<div class="register__view">
								Доп. контактная информация:
							</div>

							<div class="register__value">
								<div class="register__phone--inner">
									<input type="text" class="input register__input">


								</div>

								<div class="register__add">
									<div class="register__plus--inner">
										<i class="fas fa-plus"></i>
									</div>
									
									<span class="blue register__add--text">
										добавить еще
									</span>
								</div>
							</div>
						</div>
					</div>

					<div class="map__text mt2">
						Выберете место размещения на карте. Это необязательное условие, но если этого не сделать, ваш объект не будет отбражаться на карте...
					</div>

					<div class="main__map--2 mt1">
						<iframe class="map__map--2" src="https://yandex.ru/map-widget/v1/?um=constructor%3A59adf8328785d1f91b5a3f7ffb2383adf4265a80ab2cab629d1eaf3407a40522&amp;source=constructor" width="100%" height="360px" frameborder="0"></iframe>

						<div class="map__off--inner">
							<div class="map__off--img--inner">
								<img src="img/compas-icon.png" alt="компас" class="map__off--img">
							</div>

							<div class="map__off--text--inner">
								<div class="map__off--text--title">
									Карта
								</div>

								<a href="#" class="map__off--text--t active">
									развернуть
								</a>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Автостоянка:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Питание:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Расстояние до моря:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Время заезда с:
						</div>

						<div class="register__value date__input--inner">
							<img src="img/date-icon.png" alt="календарь" class="calendar__img">
							<input type="text" class="input register__input date__input c">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Время отъезда до:
						</div>

						<div class="register__value date__input--inner">
							<img src="img/date-icon.png" alt="календарь" class="calendar__img">
							<input type="text" class="input register__input date__input c">
						</div>
					</div>

					<div class="add__full--subtitle">
						Дополнительные параметры
					</div>

					<div class="add__full--check--inner">
						<div class="add__full--check--item">
							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Удобства
								</div>

								<input type="checkbox" class="add__check" id="d1">

								<label class="label__for" for="d1" class="add__label">
									Кондиционер
								</label>

								<input type="checkbox" class="add__check" id="d2">

								<label class="label__for" for="d2" class="add__label">
									Телевизор
								</label>

								<input type="checkbox" class="add__check" id="d3">

								<label class="label__for" for="d3" class="add__label">
									Холодильник
								</label>

								<input type="checkbox" class="add__check" id="d4">

								<label class="label__for" for="d4" class="add__label">
									Кухня, кухонная зона
								</label>
							</div>

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Тип размещения
								</div>

								<input type="checkbox" class="add__check" id="d5">

								<label class="label__for" for="d5" class="add__label">
									Домик
								</label>

								<input type="checkbox" class="add__check" id="d6">

								<label class="label__for" for="d6" class="add__label">
									Номер
								</label>

								<input type="checkbox" class="add__check" id="d7">

								<label class="label__for" for="d7" class="add__label">
									Коттедж
								</label>

								<input type="checkbox" class="add__check" id="d8">

								<label class="label__for" for="d8" class="add__label">
									Место под палатку
								</label>

								<input type="checkbox" class="add__check" id="d9">

								<label class="label__for" for="d9" class="add__label">
									Палатка
								</label>
							</div>
						</div>

						<div class="add__full--check--item">
							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Тип питания
								</div>

								<input type="checkbox" class="add__check" id="d22">

								<label class="label__for" for="d22" class="add__label">
									Завтрак
								</label>

								<input type="checkbox" class="add__check" id="d23">

								<label class="label__for" for="d23" class="add__label">
									Включено в стоимость
								</label>

								<input type="checkbox" class="add__check" id="d24">

								<label class="label__for" for="d24" class="add__label">
									Организуется самостоятельно
								</label>

								<input type="checkbox" class="add__check" id="d25">

								<label class="label__for" for="d25" class="add__label">
									Столовая, кафе
								</label>

								<input type="checkbox" class="add__check" id="d26">

								<label class="label__for" for="d26" class="add__label">
									Ресторан
								</label>
							</div>

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Душ и туалет
								</div>

								<input type="checkbox" class="add__check" id="d27">

								<label class="label__for" for="d27" class="add__label">
									В домике, номере, коттедже
								</label>

								<input type="checkbox" class="add__check" id="d28">

								<label class="label__for" for="d28" class="add__label">
									На территории
								</label>
							</div>
						</div>
					</div>

					<div class="add__full--cont">
						<div class="subtitle">
							Услуги
						</div>

						<div class="add__full--container">
							<div class="add__full--boxpart">
								<div class="card__uslugi--second--box">
									<input type="checkbox" class="add__check" id="d10">

									<label class="label__for" for="d10" class="add__label">
										Wi-Fi
									</label>

									<input type="checkbox" class="add__check" id="d11">

									<label class="label__for" for="d11" class="add__label">
										Бассейн
									</label>

									<input type="checkbox" class="add__check" id="d12">

									<label class="label__for" for="d12" class="add__label">
										Бассейн с подогревом
									</label>

									<input type="checkbox" class="add__check" id="d13">

									<label class="label__for" for="d13" class="add__label">
										Крытый бассей
									</label>

									<input type="checkbox" class="add__check" id="d14">

									<label class="label__for" for="d14" class="add__label">
										Детский бассейн
									</label>

									<input type="checkbox" class="add__check" id="d15">

									<label class="label__for" for="d15" class="add__label">
										Аквапарк
									</label>

									<input type="checkbox" class="add__check" id="d16">

									<label class="label__for" for="d16" class="add__label">
										Пляж
									</label>

									<input type="checkbox" class="add__check" id="d17">

									<label class="label__for" for="d17" class="add__label">
										Онлайн - бронирование
									</label>

									<input type="checkbox" class="add__check" id="d18">

									<label class="label__for" for="d18" class="add__label">
										Лечебные процедуры
									</label>

									<input type="checkbox" class="add__check" id="d19">

									<label class="label__for" for="d19" class="add__label">
										Массаж
									</label>

									<input type="checkbox" class="add__check" id="d20">

									<label class="label__for" for="d20" class="add__label">
										Экскурсии
									</label>

									<input type="checkbox" class="add__check" id="d21">

									<label class="label__for" for="d21" class="add__label">
										Корпоративный отдых
									</label>
								</div>
							</div>

							<div class="add__full--boxpart">
								<div class="card__uslugi--second--box">
									<input type="checkbox" class="add__check" id="d29">

									<label class="label__for" for="d29" class="add__label">
										Детская площадка
									</label>

									<input type="checkbox" class="add__check" id="d30">

									<label class="label__for" for="d30" class="add__label">
										Спортивная площадка
									</label>

									<input type="checkbox" class="add__check" id="d31">

									<label class="label__for" for="d31" class="add__label">
										Баня, сауна
									</label>

									<input type="checkbox" class="add__check" id="d32">

									<label class="label__for" for="d32" class="add__label">
										Беседка
									</label>

									<input type="checkbox" class="add__check" id="d33">

									<label class="label__for" for="d33" class="add__label">
										Мангал
									</label>

									<input type="checkbox" class="add__check" id="d34">

									<label class="label__for" for="d34" class="add__label">
										Коптильня
									</label>

									<input type="checkbox" class="add__check" id="d35">

									<label class="label__for" for="d35" class="add__label">
										Дискотека
									</label>

									<input type="checkbox" class="add__check" id="d36">

									<label class="label__for" for="d36" class="add__label">
										Размещение с домашними животными
									</label>

									<input type="checkbox" class="add__check" id="d37">

									<label class="label__for" for="d37" class="add__label">
										Парковка
									</label>

									<input type="checkbox" class="add__check" id="d38">

									<label class="label__for" for="d38" class="add__label">
										Трансфер
									</label>

									<input type="checkbox" class="add__check" id="d39">

									<label class="label__for" for="d39" class="add__label">
										Скидки для детей
									</label>
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Доп. услуги:
						</div>

						<div class="register__value">
							<textarea class="add__full--textarea"></textarea>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Описание объекта:
						</div>

						<div class="register__value">
							<textarea class="add__full--textarea"></textarea>
						</div>
					</div>

					<div class="register__view mt2 add__full--title--inner">
						Фотографии объекта
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 1:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file9">
									<input type="file" id="register__file9" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 2:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file10">
									<input type="file" id="register__file10" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 3:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file11">
									<input type="file" id="register__file11" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 4:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file12">
									<input type="file" id="register__file12" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 5:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file13">
									<input type="file" id="register__file13" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 6:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file14">
									<input type="file" id="register__file14" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 7:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file15">
									<input type="file" id="register__file15" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 8:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file16">
									<input type="file" id="register__file16" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

				</div>

				<div class="add__full--item">
					<div class="add__full--title">
						Добавить место
					</div>

					<div class="ava__item">
						<div class="register__view">
							Название номер: <span class="blue">*</span>
						</div>

						<div class="register__value">
							<input type="text" class="input register__input" placeholder="4-х местный, лесной домик">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Спальных мест: <span class="blue">*</span>
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

					<div class="ava__item">
						<div class="register__view">
							Комнат: <span class="blue">*</span>
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

					<div class="ava__item">
						<div class="register__view">
							Этаж:
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

					<div class="ava__item">
						<div class="register__view">
							Площадь:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>


					<div class="add__full--subtitle">
						Дополнительные параметры
					</div>

					<div class="add__full--check--inner">
						<div class="add__full--check--item">

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Тип размещения
								</div>

								<input type="checkbox" class="add__check" id="do5">

								<label class="label__for" for="do5" class="add__label">
									Домик
								</label>

								<input type="checkbox" class="add__check" id="do6">

								<label class="label__for" for="do6" class="add__label">
									Номер
								</label>

								<input type="checkbox" class="add__check" id="do7">

								<label class="label__for" for="do7" class="add__label">
									Коттедж
								</label>

								<input type="checkbox" class="add__check" id="do8">

								<label class="label__for" for="do8" class="add__label">
									Место под палатку
								</label>

								<input type="checkbox" class="add__check" id="do9">

								<label class="label__for" for="do9" class="add__label">
									Палатка
								</label>
							</div>
						</div>

						<div class="add__full--check--item">

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Удобства
								</div>

								<input type="checkbox" class="add__check" id="do1">

								<label class="label__for" for="do1" class="add__label">
									Кондиционер
								</label>

								<input type="checkbox" class="add__check" id="do2">

								<label class="label__for" for="do2" class="add__label">
									Телевизор
								</label>

								<input type="checkbox" class="add__check" id="do3">

								<label class="label__for" for="do3" class="add__label">
									Холодильник
								</label>

								<input type="checkbox" class="add__check" id="do4">

								<label class="label__for" for="do4" class="add__label">
									Кухня, кухонная зона
								</label>
							</div>

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Душ и туалет
								</div>

								<input type="checkbox" class="add__check" id="do27">

								<label class="label__for" for="do27" class="add__label">
									В домике, номере, коттедже
								</label>

								<input type="checkbox" class="add__check" id="do28">

								<label class="label__for" for="do28" class="add__label">
									На территории
								</label>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Кухня:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Мебель:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Санузел:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Примечание:
						</div>

						<div class="register__value">
							<textarea class="add__full--textarea"></textarea>
						</div>
					</div>

					<div class="add__full--subtitle">
						Стоимость за номер в сутки:
					</div>

					<div class="add__full--table">
						<div class="add__full--table--item">
							<div class="add__full--top">
								Май
							</div>

							<div class="add__full--bottom">
								<input type="text" class="input add__table--input">
							</div>
						</div>

						<div class="add__full--table--item">
							<div class="add__full--top">
								Июнь
							</div>

							<div class="add__full--bottom">
								<input type="text" class="input add__table--input">
							</div>
						</div>

						<div class="add__full--table--item">
							<div class="add__full--top">
								Июль
							</div>

							<div class="add__full--bottom">
								<input type="text" class="input add__table--input">
							</div>
						</div>

						<div class="add__full--table--item">
							<div class="add__full--top">
								Август
							</div>

							<div class="add__full--bottom">
								<input type="text" class="input add__table--input">
							</div>
						</div>

						<div class="add__full--table--item">
							<div class="add__full--top">
								Сентябрь
							</div>

							<div class="add__full--bottom">
								<input type="text" class="input add__table--input">
							</div>
						</div>

						<div class="add__full--table--item">
							<div class="add__full--top">
								Межсезонье
							</div>

							<div class="add__full--bottom">
								<input type="text" class="input add__table--input">
							</div>
						</div>
					</div>


					<div class="register__view mt2 add__full--title--inner">
						Фотографии места размещения
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 1:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file1">
									<input type="file" id="register__file1" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 2:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file2">
									<input type="file" id="register__file2" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 3:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file3">
									<input type="file" id="register__file3" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 4:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file4">
									<input type="file" id="register__file4" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 5:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file5">
									<input type="file" id="register__file5" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 6:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file6">
									<input type="file" id="register__file6" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 7:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file7">
									<input type="file" id="register__file7" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<div class="ava__item">
						<div class="register__view">
							Фото 8:
						</div>

						<div class="register__value">
							<div class="file__inner">
								<label class="label__for" for="register__file8">
									<input type="file" id="register__file8" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="add__full--button--inner bb">
				<button class="button add__full--button bb2">
					Добавить объект
				</button>
			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>