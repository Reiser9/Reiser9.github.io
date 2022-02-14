<?php require 'header.php'; ?>

				<div class="title">
					Задать вопрос
				</div>

				<form action="#" class="question__form">
					<div class="question__form--box">
						<div class="question__form--input--inner">
							<input type="text" class="input question__input" placeholder="Ваше имя">

							<input type="text" class="input question__input number" placeholder="Номер телефона">
						</div>

						<textarea class="input question__textarea" placeholder="Сообщение"></textarea>
					</div>

					<div class="question__form--agree">
						Нажимая на кнопка отправить, Вы даете свое согласие на обработку <a href="#">персональных данных</a>
					</div>

					<button class="button button__orange question__send--button">
						Отправить
					</button>
				</form>
				
				<img src="img/question.svg" alt="картинка" class="question__bg">
			</div>
		</div>
	</div>
</main>

<?php require 'footer.php'; ?>