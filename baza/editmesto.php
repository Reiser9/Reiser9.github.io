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
						Изменение места размещения
					</div>

					<div class="register__item">
						<div class="register__view">
							Название номер: <span class="blue">*</span>
						</div>

						<div class="register__value">
							<input type="text" class="input register__input" placeholder="4-х местный, лесной домик">
						</div>
					</div>

					<div class="register__item">
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

					<div class="register__item">
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

					<div class="register__item">
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

					<div class="register__item">
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

								<label for="do5" class="add__label">
									Домик
								</label>

								<input type="checkbox" class="add__check" id="do6">

								<label for="do6" class="add__label">
									Номер
								</label>

								<input type="checkbox" class="add__check" id="do7">

								<label for="do7" class="add__label">
									Коттедж
								</label>

								<input type="checkbox" class="add__check" id="do8">

								<label for="do8" class="add__label">
									Место под палатку
								</label>

								<input type="checkbox" class="add__check" id="do9">

								<label for="do9" class="add__label">
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

								<label for="do1" class="add__label">
									Кондиционер
								</label>

								<input type="checkbox" class="add__check" id="do2">

								<label for="do2" class="add__label">
									Телевизор
								</label>

								<input type="checkbox" class="add__check" id="do3">

								<label for="do3" class="add__label">
									Холодильник
								</label>

								<input type="checkbox" class="add__check" id="do4">

								<label for="do4" class="add__label">
									Кухня, кухонная зона
								</label>
							</div>

							<div class="card__uslugi--second--box mt2">
								<div class="subtitle">
									Душ и туалет
								</div>

								<input type="checkbox" class="add__check" id="do27">

								<label for="do27" class="add__label">
									В домике, номере, коттедже
								</label>

								<input type="checkbox" class="add__check" id="do28">

								<label for="do28" class="add__label">
									На территории
								</label>
							</div>
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Кухня:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Мебель:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Санузел:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
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
								<label class="label__for" for="register__file25">
									<input type="file" id="register__file25" class="register__file">
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
								<label class="label__for" for="register__file26">
									<input type="file" id="register__file26" class="register__file">
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
								<label class="label__for" for="register__file27">
									<input type="file" id="register__file27" class="register__file">
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
								<label class="label__for" for="register__file28">
									<input type="file" id="register__file28" class="register__file">
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
								<label class="label__for" for="register__file29">
									<input type="file" id="register__file29" class="register__file">
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
								<label class="label__for" for="register__file30">
									<input type="file" id="register__file30" class="register__file">
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
								<label class="label__for" for="register__file31">
									<input type="file" id="register__file31" class="register__file">
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
								<label class="label__for" for="register__file32">
									<input type="file" id="register__file32" class="register__file">
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