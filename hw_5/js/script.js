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

                <text-slider class="slider" v-bind:text="text" duration="6000"></text-slider>
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
            text: ['Да, человек смертен, но это было бы еще полбеды. Плохо то, что он иногда внезапно смертен, вот в чем фокус!', '– Помилуйте, королева, – прохрипел он, – разве я позволил бы себе налить даме водки? Это чистый спирт!', 'Ведь сколько же раз я говорил вам, что основная ваша ошибка заключается в том, что вы недооцениваете значение человеческих глаз. Поймите, что язык может скрывать истину, а глаза – никогда!', 'Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами все дадут!', '– Я, – подтвердил польщенный кот и добавил: – Приятно слышать, что вы так вежливо обращаетесь с котом. Котам обычно почему-то говорят «ты», хотя ни один кот никогда ни с кем не пил брудершафта.', '– Достоевский умер, – сказала гражданка, но как-то не очень уверенно. – Протестую! – горячо воскликнул Бегемот. – Достоевский бессмертен!', '– Не шалю, никого не трогаю, починяю примус, – недружелюбно насупившись, проговорил кот, – и еще считаю своим долгом предупредить, что кот древнее и неприкосновенное животное.'],
        };
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
Vue.component('text-slider', {
    props: ['text', 'duration'],
    data: function() {
        return {
            index: 0,
        }
    },
    created() {
        setInterval(this.nextSlide, this.duration);
    },
    methods: {
        nextSlide: function() {
            this.index++;
            if(this.index > this.text.length - 1)
                this.index = 0;
        }
    },
    template: `<div class="slide">{{text[index]}}</div>`
});

Vue.component('tab-images', { 
    template: `<div><gallery :images_component="images" :add_new_image="addNewImage" :delete_image="deleteImage"></gallery></div>`,
    data: function() {
        return {
            images: [{
                name: 'Картинка 1',
                img: 'https://source.unsplash.com/random/348x196',
            }, {
                name: 'Картинка 2',
                img: 'https://source.unsplash.com/random/347x196',
            }, {
                name: 'Картинка 3',
                img: 'https://source.unsplash.com/random/346x196',
            }, {
                name: 'Картинка 4',
                img: 'https://source.unsplash.com/random/349x196',
            }, {
                name: 'Картинка 5',
                img: 'https://source.unsplash.com/random/348x195',
            }, {
                name: 'Картинка 6',
                img: 'https://source.unsplash.com/random/348x194',
            }, {
                name: 'Картинка 7',
                img: 'https://source.unsplash.com/random/347x196',
            }, {
                name: 'Картинка 8',
                img: 'https://source.unsplash.com/random/347x195',
            }, {
                name: 'Картинка 9',
                img: 'https://source.unsplash.com/random/346x197',
            }, ]
        };
    },
    methods: {
        deleteImage(index) {
            this.images.splice(index, 1);
        },
        addNewImage(newImage) {
            this.images.unshift(newImage);
        }
    },
});
Vue.component('gallery', {
    props: [
        'images_component', 'add_new_image', 'delete_image'
    ],
    data: function() {
        return {
            name: '',
            img: '',
        }
    },
    template: `
                <div class="cards">
                    <form>
                        <div class="cards__form">
                            <label for="inputName">Название картинки</label>
                            <input v-model='name' type="text" class="cards__form_input" id="inputName" placeholder="Введите название картинки" required>
                        </div>
                        <div class="cards__form">
                            <label for="inputURL">URL к картинке</label>
                            <input v-model="img" type="text" class="cards__form_input" id="inputURL" aria-describedby="inputURL" placeholder="Введите url" required>
                        </div>
                        <button type="submit" class="btn btn-primary" v-on:click.prevent="add_new_image({name,img})">Добавить</button>
                    </form>
                    <div class="gallery">
                        <gallery-image v-for="(image,index) in images_component" :index="index" :name="image.name" :img="image.img" :delete_image="delete_image"></gallery-image>
                    </div>
                </div>`,
});
Vue.component('gallery-image', {
    props: ['index', 'name', 'img', 'delete_image'],
    template: `<div class=''>
                    <div class="card">
                        <div class="card__img">
                            <img  width="348px" height="196px" class="" v-bind:src="img" v-bind:alt="name">
                        </div>                       
                        <div class="card__title">
                            <h3 class="card__title_text">{{name}}</h3>
                        </div>
                        <div class="card__delete">
                            <a href="#" class="card__delete_link" v-on:click.prevent="delete_image(index)">Удалить</a>
                        </div>
                    </div>
                </div>`,
});

new Vue ({
    el: '#app',
    data: {
        logo: 'Logo',
        currentTab: 'main',
        tabs: [{'name': 'Главная', 'tabName': 'main'},
            {'name': 'Статьи', 'tabName': 'articles'},
            {'name': 'Услуги', 'tabName': 'services'},
            {'name': 'Галерея', 'tabName': 'images'},
        ]                                       
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab
        }
    }
});
