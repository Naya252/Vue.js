let webStore = new Vue({
            el: '#app',
            data: {
                sitename: '',
                product:{
                    id: 1,
                    title: 'Lineage 2',
                    description: '<em>Lineage 2</em> - это настоящая легенда онлайновых игр. Вышедшая уже довольно давно всё еще популярна среди ценителей хардкорных MMORPG. Однако со времени первой игра сильно изменилась. Она стала лучше, интереснее. Разработчики добавили много годного контента, благодаря которому Lineage 2 может понравится и современным игрокам.',
                    prod: 'NCSOFT Corporation',
                    publishing: '4Game',
                    year:2003,
                    license: 'Innova Co. SARL',
                    price: 450,
                    image: './img/poster.jpg'                        
                }                    
            },
            filters: {
                formatPrice: function(val){
                    if(!parseInt(val)) return '';
                    let arr = val.toString().split("");
                    let index = 3;
                    while(arr.length > index){
                        arr.splice(arr.length - index, 0, " ");
                        index += 4;
                    }
                    return arr.join("") + ' ' + String.fromCharCode(8381);
                }
            }
        });