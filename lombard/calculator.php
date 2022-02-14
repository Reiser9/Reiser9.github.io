<?php require 'header.php'; ?>

				<div class="title">
					Калькулятор займа
				</div>

				<form action="#" class="calc__form">
					<div class="calc__input--inner">
						<div class="calc__input--box">
							<div class="calc__input--title">
								Введите сумму займа(руб):
							</div>

							<input type="number" class="input calc__input sum__calc" min="15000" max="1000000" value="15000" placeholder="Минимум 15000">
						</div>

						<div class="calc__input--box">
							<div class="calc__input--title">
								Срок займа(дни):
							</div>

							<input type="number" class="input calc__input days__calc" value="1" min="1" max="365" placeholder="Минимум 1">
						</div>
					</div>

					<div class="calc__box">
						<div class="calc__input--title">
							Тип транспортного средства, оставляемого под залог:
						</div>

						<div class="calc__check--inner">
							<div class="calc__check--item">
								<input id="calc1" class="calc__check" type="radio" name="ts" checked="">

								<label for="calc1" class="calc__check--label">Легковой</label>
							</div>

							<div class="calc__check--item">
								<input id="calc2" class="calc__check" type="radio" name="ts">

								<label for="calc2" class="calc__check--label">Грузовой</label>
							</div>

							<div class="calc__check--item">
								<input id="calc3" class="calc__check" type="radio" name="ts">

								<label for="calc3" class="calc__check--label">Спецтехника</label>
							</div>
						</div>
					</div>

					<div class="calc__box">
						<div class="calc__check--item">
							<input id="calc4" class="calc__check" type="checkbox">

							<label for="calc4" class="calc__radio--label">Машина остаётся у Вас</label>
						</div>

						<div class="calc__check--item mt1">
							<input id="calc5" class="calc__check" type="checkbox" checked disabled>

							<label for="calc5" class="calc__radio--label">Не является офертой. Акция для впервые обратившихся клиентов. Условия акции уточняйте по телефонам автоломбарда. Возможно применение индивидуальных условий заключения договора*</label>
						</div>
					</div>
				</form>

				<div class="wrapper">
					<div class="text">
						<div class="bold">Для выкупа автомобиля через:</div> <span class="day">1</span> д.
					</div>

					<div class="text">
						<div class="bold">Вам необходимо будет заплатить:</div> <span class="money">15000</span> р.
					</div>
				</div>

				<div class="main__wrapper">
					<div class="subtitle">
						Никаких скрытых платежей!
					</div>

					<div class="text">
						Мы уважаем своих клиентов, поэтому не обманываем Вас и не обещаем сверхнизкий процент по займу. Сумму процентов Вы можете узнать заранее, воспользовавшись калькулятором займа. Эта сумма окончательна. Никаких дополнительных платежей не предусмотрено. Получить наличные под залог автомобиля у нас намного проще, чем Вам кажется!
					</div>
				</div>

				<div class="main__wrapper">
					<div class="subtitle">
						Наш автоломбард работает официально.
					</div>

					<div class="text">
						Зарегистрирован 01.07.2009г. Реквизиты. ИНН. ОГРН. Вся деятельность автоломбарда осуществляется в строгом соответствии с Федеральным Законом от 19.07.2007 г. № 196-ФЗ «О ломбардах». Это значит, что Ваши права как заемщика защищены законом. ВНИМАНИЕ: Обратившись в ломбард, работающий неофициально, вы не застрахованы от противоправных действий в отношении Вашего имущества со стороны недобросовестного ломбарда.
					</div>
				</div>

				<div class="main__wrapper">
					<div class="subtitle">
						Мы дорожим своей репутацией.
					</div>

					<div class="text">
						Наибольшая ценность для нас – это доверие наших клиентов. Своей работой мы доказываем, что взаимовыгодное сотрудничество между клиентом и ломбардом возможно. Благодаря большому количеству обращений по рекомендациям знакомых (наших клиентов), мы убеждены, что выбранный нами путь правильный.
					</div>

					<div class="text">
						*Не является публичной офертой. Подробную информацию уточняйте по телефону: <a href="tel:3831900">383-1900</a>
					</div>
				</div>

				<img src="img/calculator.svg" alt="картинка" class="question__bg">
			</div>
		</div>
	</div>
</main>

<?php require 'footer.php'; ?>