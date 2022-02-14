// Перевод страницы Главная

let homeWord = {"home":"главная", "games":"игры",
"history games":"история игр", "group vk":"группа vk",
"sign in":"вход","register":"регистрация",
"payment":"кошелек", "balance:":"баланс:",
"site with":"сайт с", "honest":"честными", "game":"играми", 
"color":"цветовая", "scheme":"гамма","color scheme":"цветовая гамма",
"online:":"онлайн:", "name game":"игра", "player":"игрок",
"chat online":"чат онлайн", "in site":"на сайте",
"cash - site with honest game":"cash - сайт с честными играми",
"go to playing":"начать играть", "agree":"соглашение",
"here you can choose your favorite games and not search, and see them immediately on the main page! It's simple, choose the game and they will be at you in a convenient place":
"здесь вы можете выбрать ваши любимые игры и не искать, а увидеть их сразу же на главной странице! Все просто, выбирайте игры и они окажутся у вас в удобном месте",
"favorite":"любимые", "if you are tired of appearance":"если вам надоел облик",
"you can always update the color palette of the site here. Choose the color to your taste":
"вы всегда можете обновить цветовую палитру сайта здесь. Выбирайте цвет на ваш вкус",
"earn on":"зарабатывайте на", "on the most honest games, do not miss your chance for luck!":
"на самых честных играх, не упусти свой шанс на удачу!",
"your":"ваши", "favorite":"любимые", "edit":"редактировать","complete":"готово",
"forecast":"ставка","time":"время","coefficient":"коэфф",
"win":"выигрыш","last":"последние","wins":"выигрыши", "added":"добавлено",
"autorization":"авторизация", "create account?":"создать аккаунт?",
"return password?":"забыли пароль?", "enter":"войти",
"enter vk":"войти через вк", "register":"регистрация",
"already have an account?":"уже есть аккаунт?",
"register account":"зарегистрироваться",
"i accept the terms and rule of the site":"я принимаю условия и правила сайта",
"i am remember password":"вспомнили пароль?",
"return password":"восстановить пароль", "return":"восстановить",
"coeff":"коэфф", "result":"исход", "time":"время",
"what is the minimum withdrawal amount?":"какая минимальная сумма вывода?",
"minimum withdrawal amount: 150exp, we have made exactly this amount at the moment, in order to avoid overloads of the payment processing system":
"минимальная сумма вывода: 150exp, мы сделали именно такую сумму на данный момент, во избежание перегрузок системы обработки платежей",
"my conclusion is rejected, what to do?":"мой вывод отклонен, что делать?",
"most likely you made a mistake when you entered your wallet/Bank card number, try again, if the problem is not solved, then write to us by mail or to the group in the vk":
"скорее всего вы допустили ошибку когда вводили ваш номер кошелька/банквоской карты, повторите попытку снова, если проблема не решилась, то напишите нам на почту или в группу в вк",
"attention! if you do not agree with the terms of this user agreement, do not log in to the site expcash.info and do not use the services of this site":
"внимание! если вы не согласны с условиями настоящего пользовательского соглашения, не авторизуйтесь на сайте expcash.info и не используйте сервисы данного сайта",
"1. terms and definitions":"1. термины и определения", "team red":"команда красных",
"team blue":"команда синих", "make a bet":"сделать ставку", "put on blue":"поставить на синий",
"put on red":"поставить на красный"};

let redesignWord = {"home":"главная", "games":"игры",
"history games":"история игр", "group vk":"группа vk",
"sign in":"вход","register":"регистрация",
"payment":"кошелек", "balance:":"баланс:",
"site with":"сайт с", "honest":"честными", "game":"играми", 
"color":"цветовая", "scheme":"гамма","color scheme":"цветовая гамма",
"online:":"онлайн:", "name game":"игра", "player":"игрок",
"chat online":"чат онлайн", "in site":"на сайте",
"cash - site with honest game":"cash - сайт с честными играми",
"go to playing":"начать играть", "agree":"соглашение",
"here you can choose your favorite games and not search, and see them immediately on the main page! It's simple, choose the game and they will be at you in a convenient place":
"здесь вы можете выбрать ваши любимые игры и не искать, а увидеть их сразу же на главной странице! Все просто, выбирайте игры и они окажутся у вас в удобном месте",
"favorite":"любимые", "if you are tired of appearance":"если вам надоел облик",
"you can always update the color palette of the site here. Choose the color to your taste":
"вы всегда можете обновить цветовую палитру сайта здесь. Выбирайте цвет на ваш вкус",
"earn on":"зарабатывайте на", "on the most honest games, do not miss your chance for luck!":
"на самых честных играх, не упусти свой шанс на удачу!",
"your":"ваши", "favorite":"любимые", "edit":"редактировать","complete":"готово",
"forecast":"ставка","time":"время","coefficient":"коэфф",
"win":"выигрыш","last":"последние","wins":"выигрыши", "added":"добавлено",
"autorization":"авторизация", "create account?":"создать аккаунт?",
"return password?":"забыли пароль?", "enter":"войти",
"enter vk":"войти через вк", "register":"регистрация",
"already have an account?":"уже есть аккаунт?",
"register account":"зарегистрироваться",
"i accept the terms and rule of the site":"я принимаю условия и правила сайта",
"i am remember password":"вспомнили пароль?",
"return password":"восстановить пароль", "return":"восстановить",
"coeff":"коэфф", "result":"исход", "time":"время",
"what is the minimum withdrawal amount?":"какая минимальная сумма вывода?",
"minimum withdrawal amount: 150exp, we have made exactly this amount at the moment, in order to avoid overloads of the payment processing system":
"минимальная сумма вывода: 150exp, мы сделали именно такую сумму на данный момент, во избежание перегрузок системы обработки платежей",
"my conclusion is rejected, what to do?":"мой вывод отклонен, что делать?",
"most likely you made a mistake when you entered your wallet/Bank card number, try again, if the problem is not solved, then write to us by mail or to the group in the vk":
"скорее всего вы допустили ошибку когда вводили ваш номер кошелька/банквоской карты, повторите попытку снова, если проблема не решилась, то напишите нам на почту или в группу в вк",
"attention! if you do not agree with the terms of this user agreement, do not log in to the site expcash.info and do not use the services of this site":
"внимание! если вы не согласны с условиями настоящего пользовательского соглашения, не авторизуйтесь на сайте expcash.info и не используйте сервисы данного сайта",
"1. terms and definitions":"1. термины и определения"};