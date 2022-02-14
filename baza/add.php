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
					<a href="#" class="kabinet__link">Предложения по жилью(<span class="blue">4</span>)</a>
					<a href="#" class="kabinet__link">Добавить предложение</a>
					<a href="#" class="kabinet__link">Контакты</a>
					<a href="#" class="kabinet__link">Фотография</a>
				</div>

				<div class="kabinet__info--inner">
					<div class="kabinet__title">
						Добавление предложения
					</div>

					<div class="howbron__text mt1">
						Обязательные поля отмечены символом <span class="blue">*</span>
						<span class="orange">Выберите категорию(тип)!</span>
					</div>

					<div class="add__radio--inner">
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

					<div class="register__inner mt2">
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
								Контактное лицо:
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

						<div class="register__item">
							<div class="register__view">
								Ваш сайт:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<button class="button register__button mt2">
							Продолжить
						</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>