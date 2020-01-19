Vue.component('tab-main', { 
    template: `<div>Главная</div>`
});
Vue.component('tab-articles', { 
    template: `<div><div class="articles-header">
                <div class="articles-header__toggle">
                    <button v-on:click="displayType = 'grid'" v-bind:class="{ 'articles-header__btn_active': displayType == 'grid'}"
                        class="articles-header__btn_style articles-header__btn_grid"></button>
                    <button v-on:click="displayType = 'list'" v-bind:class="{ 'articles-header__btn_active': displayType == 'list'}"
                        class="articles-header__btn_style articles-header__btn_list"></button>
                </div>
                <div class="articles-header__change">
                    <p v-if="!showEditInput" v-on:click="showEditInput=true" class="articles-header__change_text">
                        {{changeString}}</p>
                    <input v-else type="text" class="articles-header__change_input" v-model="changeString"
                        v-on:keyup.enter="showEditInput=false">
                </div>
                <div class="articles-header__search">
                    <input v-model="searchArticle" class="articles-header__search_input" type="search" name="search"
                    placeholder="Поиск статьи">
                </div>
                
            </div>             
            <div v-bind:class="{ 'articles-list': displayType == 'list'}" class="articles-main">
              <article v-for="article in filteredArticles" class="articles-main__article">
                <a class="articles-main__link" v-bind:href="article.url" target="_blank">
                  <img class="articles-main__image" v-bind:src="article.image" alt="Изображение статьи">
                </a>
                <a class="articles-main__link" v-bind:href="article.url" target="_blank">
                  <h3 class="article-main__title"> {{ article.title }} </h3>
                </a>
              </article>
            </div>
                
            </div>`,
    data: function() { 
        return {                   
            showEditInput: false,
            changeString: "Измени меня",
            searchArticle: '',
            displayType: 'grid',
            articles: [
            {
                title: 'Растения разговаривают с червями на их языке',
                url: 'https://www.nkj.ru/news/37925/',
                image: 'https://www.nkj.ru/upload/iblock/86d/86d4350590480c482ea70f876935cbef.jpg'
            },
            {
                title: 'Бильярд со взрывом',
                url: 'https://www.nkj.ru/archive/articles/37475/',
                image: 'https://www.nkj.ru/upload/iblock/a55/a55c9bf502394dde665d0b61e8fe00ba.jpg'
            },
            {
                title: 'Императорская рулетка',
                url: 'https://www.nkj.ru/facts/37957/',
                image: 'https://www.nkj.ru/upload/iblock/eab/eaba57328df9e4650823fddf22718101.jpg'
            },
            {
                title: 'Наши клетки подслушивают разговоры бактерий',
                url: 'https://www.nkj.ru/news/37748/',
                image: 'https://www.nkj.ru/upload/iblock/41d/41d27349060f1e9b2c18d2f2e19ff685.jpg'
            },
            {
                title: 'Дождливая паника',
                url: 'https://www.nkj.ru/facts/37235/',
                image: 'https://www.nkj.ru/upload/iblock/bd1/bd13c1d551efd42984bdd4ea006fe9da.jpg'
            },
            {
                title: 'Сахарные метеориты',
                url: 'https://www.nkj.ru/facts/37373/',
                image: 'https://www.nkj.ru/upload/iblock/a3a/a3a0754c75cff5fa4874764665319373.jpg'
            },
            {
                title: 'Яд от стресса',
                url: 'https://www.nkj.ru/facts/37319/',
                image: 'https://www.nkj.ru/upload/iblock/636/636775f1dd4704d2d0aad693adb6f63f.jpg'
            },
            {
                title: 'Шум для слуха',
                url: 'https://www.nkj.ru/facts/37345/',
                image: 'https://www.nkj.ru/upload/iblock/4b5/4b52b9716e849af68d0a5f22cf54837d.jpg'
            },
            {
                title: 'Тревожная бессонница',
                url: 'https://www.nkj.ru/facts/37293/',
                image: 'https://www.nkj.ru/upload/iblock/3df/3df1a4b40c93dec56686fd028517f8fd.jpg'
            },
            {
                title: 'Древний мозг',
                url: 'https://www.nkj.ru/facts/37662/',
                image: 'https://www.nkj.ru/upload/iblock/c28/c28ba152efdbd6d8d6c02d5b8bb95da8.jpg'
            },
            {
                title: 'Возраст в крови',
                url: 'https://www.nkj.ru/facts/37543/',
                image: 'https://www.nkj.ru/upload/iblock/910/91037e7407c673e3d9d8064426397981.jpg'
            },
            {
                title: 'Голос коровы',
                url: 'https://www.nkj.ru/facts/37700/',
                image: 'https://www.nkj.ru/upload/iblock/e21/e212b96c6dfcb32831218a7276c1e16a.jpg'
            },
            ],
        }
    },
    computed: {
        filteredArticles: function () {
        let filteredArticles = this.articles;
        let searchArticle = this.searchArticle;

            if (searchArticle) {
                searchArticle = searchArticle.trim().toLowerCase();
                filteredArticles = filteredArticles.filter(function (item) {
                if (item.title.toLowerCase().indexOf(searchArticle) !== -1) {
                    return item;
                }
                });
                return filteredArticles;
            } else {
                return filteredArticles;
            }
        }
    } 
});
Vue.component('tab-services', { 
    template: `<section class="services">
                <ul class="services__list">
                    <li v-for="service in services" v-on:click="serviceToggle(service)" v-bind:class="{ 'services__item_active': service.active}" class="services__item">
                        <span class="services__name"> {{ service.name }} </span>
                        <span class="services__price"> {{ service.price }} ₽</span>
                    </li>
                </ul>
                <p class="services__total-price"> Итоговая стоимость: <b> {{ totalPrice }} ₽</b></p>
            </section>`, 
    data: function(){
        return {
            services: [
            {
                name: 'Услуга 1',
                price: 1500,
                active: false
            },
            {
                name: 'Услуга 2',
                price: 350,
                active: false
            },
            {
                name: 'Услуга 3',
                price: 600,
                active: false
            }],

        }
    },
    computed: {
        totalPrice: function () {
        let totalPrice = 0;
        this.services.forEach(service => {
            if (service.active) {
            totalPrice += service.price;
            }
        });
        return totalPrice;
        }
    },
    methods: {
        serviceToggle: function (service) {
        service.active = !service.active;
        },
    },
});
new Vue ({
    el: '#app',
    data: {
        logo: 'Logo',
        currentTab: 'main',
        tabs: [{'name': 'Главная', 'tabName': 'main'},
            {'name': 'Статьи', 'tabName': 'articles'},
            {'name': 'Услуги', 'tabName': 'services'}]                                       
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab
        }
    }
});
