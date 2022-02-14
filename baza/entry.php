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
						Личный кабинет объекта
					</div>

					<div class="howbron__text mt2">
						Для входа в личный раздел  введите  Логин и Пароль:
					</div>

					<div class="entry__input--inner">
						<div class="entry__input--box">
							<input type="text" class="input entry__input" placeholder="Логин или email">

							<img src="img/mail-card.png" alt="логин" class="entry__input--icon">
						</div>
						
						<div class="entry__input--box">
							<input type="password" class="input entry__input" placeholder="Пароль">

							<img src="img/password-icon.png" alt="пароль" class="entry__input--icon">
						</div>
					</div>

					<a href="#" class="entry__return--password">
						Забыли пароль?
					</a>

					<div class="entry__buttons--inner">
						<button class="button entry__button">
							Войти
						</button>

						<button class="button entry__button--register">
							Регистрация
						</button>
					</div>

				</div>

			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>