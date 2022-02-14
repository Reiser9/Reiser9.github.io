<?php require "header.php"; ?>

<div class="bronir">
	<div class="container">
		<div class="bronir__inner">
			<div class="bold">Необходимые данные для заполнения: ФИО, телефон - добавляются для первого туриста , он же является и заказчиком услуг. Все остальные поля при бронировании заполняются по желанию.</div>
		</div>

		<div class="bronir__inner mt3">
			<div class="bronir__box">
				<div class="title center">Бронирование</div>

				<div class="subtitle mt1 center">Забронировать</div>
			</div>

			<div class="bronir__title">
				Турист 1
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Фамилия:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Имя:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Отчество:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Дата рождения:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Телефон:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Документ:
				</div>

				<input type="text" class="input bronir__form--input" placeholder="Паспорт, либо свидетельство о рождении">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Серия:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Номер:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Дата выдачи:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Код подразделения:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="bronir__form--inner">
				<div class="bronir__form--text">
					Кем выдан:
				</div>

				<input type="text" class="input bronir__form--input">
			</div>

			<div class="agree mt1">
				При нажатии кнопки «Забронировать» я даю согласие на обработку персональных данных, соглашаюсь с <a href="#" class="blue">правилами</a> проживания и ознакомлен с политикой конфиденциальности.
			</div>

			<button class="button mt2">
				Забронировать
			</button>

		</div>
	</div>
</div>

<?php require "footer.php"; ?>