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
					<a href="#" class="kabinet__link blue">Фотография</a>
				</div>

				<div class="kabinet__info--inner">
					<div class="kabinet__title">
						Изменить фотографию
					</div>

					<div class="register__inner">

						<div class="ava__item">
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
						

						<button class="button contact__button--edit mt2">
							Загрузить
						</button>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>