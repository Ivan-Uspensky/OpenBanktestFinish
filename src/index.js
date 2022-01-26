import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>

    </BrowserRouter>,
    document.getElementById('root'));

// можно удалить, воркер ті в приложении не используешь
serviceWorker.unregister();

// отсутствуют точка с запятой
// использование хуков в каждом файле неоправданно. часть данніх можно просто пробрасівать внутрь дочернего компонента
// нет отображения ошибок валидации
// неправильно работает отображение текущего шага, как и в целом навигации по шагам не хватает проверок