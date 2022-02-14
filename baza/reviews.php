<?php require "header.php"; ?>

<div class="reviews">
	<div class="container">
		<div class="reviews__inner">
			<div class="reviews__inner">
				<div class="kabinet__title">
					Отзывы об объекте
				</div>

				<div class="reviews__item">
					<div class="reviews__text">
						Хорошая база
					</div>

					<div class="reviews__author">
						Автор: <span class="bold">Николай</span>, 27.05.2020
					</div>
				</div>

				<div class="kabinet__title mt3">
					Оставить отзыв
				</div>

				<div class="review__inner">
					<div class="register__item">
						<div class="register__view">
							Текст отзыва:
						</div>

						<div class="register__value">
							<textarea class="add__full--textarea"></textarea>
						</div>
					</div>

					<div class="reviews__i">
						<div class="register__view">
							Рейтинг:
						</div>

						<div class="reviews__rate--inner">
							<img src="img/staropacity.png" data-s="1" alt="звезда" class="reviews__star--img star1">
							<img src="img/staropacity.png" data-s="2" alt="звезда" class="reviews__star--img star2">
							<img src="img/staropacity.png" data-s="3" alt="звезда" class="reviews__star--img star3">
							<img src="img/staropacity.png" data-s="4" alt="звезда" class="reviews__star--img star4">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Ваше имя:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<div class="register__item">
						<div class="register__view">
							Код с картинки:
						</div>

						<div class="register__value">
							<input type="text" class="input register__input">
						</div>
					</div>

					<button class="button reviews__button mt1">
						Сохранить
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<?php require "footer.php"; ?>