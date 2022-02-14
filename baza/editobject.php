<?php require "header.php"; ?>

<div class="kabinet">
	<div class="container">
		<div class="kabinet__inner">
			<?php require "map.php"; ?>

			<div class="kabinet__content">
				<div class="kabinet__bar--inner">
					<div class="kabinet__title">
						Панель управления
					</div>

					<div class="kabinet__text">
						Добро пожаловать: <span class="blue">admin</span>
					</div>

					<a href="#" class="kabinet__link">Панель управления</a>
					<a href="#" class="kabinet__link blue">Предложения по жилью(<span class="blue">4</span>)</a>
					<a href="#" class="kabinet__link">Добавить предложение</a>
					<a href="#" class="kabinet__link">Контакты</a>
					<a href="#" class="kabinet__link">Фотография</a>
				</div>

				<div class="kabinet__info--inner">
					<div class="kabinet__title">
						Изменение объекта
					</div>
					
					<div class="add__full--subtitle">
						Алексеевка База отдыха: "Весна"
					</div>

					<div class="add__radio--inner">
						<span class="type">Тип:</span>
						<input id="v1" name="home" type="radio" class="add__radio--input" checked="">
						<label for="v1" class="add__radio--label">База отдыха</label>
						<input id="v2" name="home" type="radio" class="add__radio--input">
						<label for="v2" class="add__radio--label">Гостиница</label>
						<input id="v3" name="home" type="radio" class="add__radio--input">
						<label for="v3" class="add__radio--label">Коттедж</label>
						<input id="v4" name="home" type="radio" class="add__radio--input">
						<label for="v4" class="add__radio--label">Квартира</label>
						<input id="v5" name="home" type="radio" class="add__radio--input">
						<label for="v5" class="add__radio--label">Хостел</label>
					</div>

					<div class="register__inner mt2 full">
						<div class="register__item">
							<div class="register__view">
								Город: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Адрес: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Название: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Контактная информация:
							</div>

							<div class="add__value">
								<input type="text" class="input add__small" placeholder="+22">
								<input type="text" class="input add__small" placeholder="(000)">
								<input type="text" class="input add__bid" placeholder="ХХХ-ХХ-ХХ">
							</div>
						</div>

						<div class="register__item">
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

					<div class="register__item">
						<div class="register__view">
							Автостоянка:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Питание:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Расстояние до моря:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Время заезда с:
						</div>

						<div class="register__value date__input--inner">
							<img src="img/date-icon.png" alt="календарь" class="calendar__img">
							<input type="text" class="input register__input date__input c">
						</div>
					</div>

					<div class="register__item">
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

								<label for="d1" class="add__label">
									Кондиционер
								</label>

								<input type="checkbox" class="add__check" id="d2">

								<label for="d2" class="add__label">
									Телевизор
								</label>

								<input type="checkbox" class="add__check" id="d3">

								<label for="d3" class="add__label">
									Холодильник
								</label>

								<input type="checkbox" class="add__check" id="d4">

								<label for="d4" class="add__label">
									Кухня, кухонная зона
								</label>
							</div>

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Тип размещения
								</div>

								<input type="checkbox" class="add__check" id="d5">

								<label for="d5" class="add__label">
									Домик
								</label>

								<input type="checkbox" class="add__check" id="d6">

								<label for="d6" class="add__label">
									Номер
								</label>

								<input type="checkbox" class="add__check" id="d7">

								<label for="d7" class="add__label">
									Коттедж
								</label>

								<input type="checkbox" class="add__check" id="d8">

								<label for="d8" class="add__label">
									Место под палатку
								</label>

								<input type="checkbox" class="add__check" id="d9">

								<label for="d9" class="add__label">
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

								<label for="d22" class="add__label">
									Завтрак
								</label>

								<input type="checkbox" class="add__check" id="d23">

								<label for="d23" class="add__label">
									Включено в стоимость
								</label>

								<input type="checkbox" class="add__check" id="d24">

								<label for="d24" class="add__label">
									Организуется самостоятельно
								</label>

								<input type="checkbox" class="add__check" id="d25">

								<label for="d25" class="add__label">
									Столовая, кафе
								</label>

								<input type="checkbox" class="add__check" id="d26">

								<label for="d26" class="add__label">
									Ресторан
								</label>
							</div>

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Душ и туалет
								</div>

								<input type="checkbox" class="add__check" id="d27">

								<label for="d27" class="add__label">
									В домике, номере, коттедже
								</label>

								<input type="checkbox" class="add__check" id="d28">

								<label for="d28" class="add__label">
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

									<label for="d10" class="add__label">
										Wi-Fi
									</label>

									<input type="checkbox" class="add__check" id="d11">

									<label for="d11" class="add__label">
										Бассейн
									</label>

									<input type="checkbox" class="add__check" id="d12">

									<label for="d12" class="add__label">
										Бассейн с подогревом
									</label>

									<input type="checkbox" class="add__check" id="d13">

									<label for="d13" class="add__label">
										Крытый бассей
									</label>

									<input type="checkbox" class="add__check" id="d14">

									<label for="d14" class="add__label">
										Детский бассейн
									</label>

									<input type="checkbox" class="add__check" id="d15">

									<label for="d15" class="add__label">
										Аквапарк
									</label>

									<input type="checkbox" class="add__check" id="d16">

									<label for="d16" class="add__label">
										Пляж
									</label>

									<input type="checkbox" class="add__check" id="d17">

									<label for="d17" class="add__label">
										Онлайн - бронирование
									</label>

									<input type="checkbox" class="add__check" id="d18">

									<label for="d18" class="add__label">
										Лечебные процедуры
									</label>

									<input type="checkbox" class="add__check" id="d19">

									<label for="d19" class="add__label">
										Массаж
									</label>

									<input type="checkbox" class="add__check" id="d20">

									<label for="d20" class="add__label">
										Экскурсии
									</label>

									<input type="checkbox" class="add__check" id="d21">

									<label for="d21" class="add__label">
										Корпоративный отдых
									</label>
								</div>
							</div>

							<div class="add__full--boxpart">
								<div class="card__uslugi--second--box">
									<input type="checkbox" class="add__check" id="d29">

									<label for="d29" class="add__label">
										Детская площадка
									</label>

									<input type="checkbox" class="add__check" id="d30">

									<label for="d30" class="add__label">
										Спортивная площадка
									</label>

									<input type="checkbox" class="add__check" id="d31">

									<label for="d31" class="add__label">
										Баня, сауна
									</label>

									<input type="checkbox" class="add__check" id="d32">

									<label for="d32" class="add__label">
										Беседка
									</label>

									<input type="checkbox" class="add__check" id="d33">

									<label for="d33" class="add__label">
										Мангал
									</label>

									<input type="checkbox" class="add__check" id="d34">

									<label for="d34" class="add__label">
										Коптильня
									</label>

									<input type="checkbox" class="add__check" id="d35">

									<label for="d35" class="add__label">
										Дискотека
									</label>

									<input type="checkbox" class="add__check" id="d36">

									<label for="d36" class="add__label">
										Размещение с домашними животными
									</label>

									<input type="checkbox" class="add__check" id="d37">

									<label for="d37" class="add__label">
										Парковка
									</label>

									<input type="checkbox" class="add__check" id="d38">

									<label for="d38" class="add__label">
										Трансфер
									</label>

									<input type="checkbox" class="add__check" id="d39">

									<label for="d39" class="add__label">
										Скидки для детей
									</label>
								</div>
							</div>
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Описание объекта:
						</div>

						<div class="register__value">
							<textarea class="add__full--textarea"></textarea>
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Правила проживания:
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
								<label class="label__for" for="register__file17">
									<input type="file" id="register__file17" class="register__file">
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
								<label class="label__for" for="register__file18">
									<input type="file" id="register__file18" class="register__file">
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
								<label class="label__for" for="register__file19">
									<input type="file" id="register__file19" class="register__file">
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
								<label class="label__for" for="register__file20">
									<input type="file" id="register__file20" class="register__file">
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
								<label class="label__for" for="register__file21">
									<input type="file" id="register__file21" class="register__file">
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
								<label class="label__for" for="register__file22">
									<input type="file" id="register__file22" class="register__file">
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
								<label class="label__for" for="register__file23">
									<input type="file" id="register__file23" class="register__file">
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
								<label class="label__for" for="register__file24">
									<input type="file" id="register__file24" class="register__file">
									Выберите файл
								</label>
								<div class="filel__name">
									Файл не выбран
								</div>
							</div>
						</div>
					</div>

					<button class="button add__full--button mt2">
						Сохранить
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>