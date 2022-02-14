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
					<a href="#" class="kabinet__link blue">Контакты</a>
					<a href="#" class="kabinet__link">Фотография</a>
				</div>

				<div class="kabinet__info--inner">
					<div class="kabinet__title">
						Основные данные
					</div>

					<div class="register__inner">
						<div class="register__item">
							<div class="register__view">
								Название объекта: <span class="blue">*</span>
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Адрес объекта:
							</div>

							<div class="register__value">
								<input type="text" class="input register__input">
							</div>
						</div>

						<div class="register__item">
							<div class="register__view">
								Телефон(ы):
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
								Реквизиты:
							</div>

							<div class="register__value">
								<textarea class="add__full--textarea"></textarea>
							</div>
						</div>

						<button class="button contact__button--edit mt2">
							Изменить
						</button>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>