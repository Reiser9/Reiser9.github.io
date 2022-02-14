<?php require "header.php"; ?>

<div class="entry">
	<div class="container">
		<div class="entry__inner">
			<?php require "map.php"; ?>

			<div class="entry__content">
				<div class="howbron__menu">
					<div class="howbron__title">
						Владельцам жилья
					</div>

					<div class="howbron__menu--links">
						<a href="#" class="howbron__menu--link">
							Личный кабинет объекта
						</a>

						<a href="#" class="howbron__menu--link">
							Сотрудничество
						</a>

						<a href="#" class="howbron__menu--link">
							Добавить объект
						</a>
					</div>
				</div>

				<div class="howbron__cont">
					<div class="howbron__title">
						Регистрация участника
					</div>

					<div class="howbron__text">
						Обязательные поля отмечены символом <span class="blue">*</span>
					</div>

					<div class="register__inner">
						<div class="register__item">
							<div class="register__view">
								Название объекта <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Адрес объекта
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Телефон(ы)
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

						<div class="register__item">
							<div class="register__view">
								Email адрес: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								РЕКВИЗИТЫ:
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Название огранизации:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								ИНН:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								КПП:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Р/С:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Юр.адрес:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Наименование банка:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>
						
						<div class="register__item">
							<div class="register__view">
								Адрес банка:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								БИК:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								ФИО Директора:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Аватар:
							</div>

							<div class="register__value">
								<div class="file__inner">
									<label for="register__file">
										<input type="file" id="register__file">
										Выберите файл
									</label>
									<div class="filel__name">
										Файл не выбран
									</div>
								</div>
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Логин: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Пароль: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Подтверждение пароля: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__capcha--inner">
							<div class="register__capcha--box">
								<img src="img/capcha.png" alt="капча" class="register__capcha">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Код на картинке: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<button class="button register__button mt2">
							Регистрация
						</button>
					</div>

				</div>

			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>