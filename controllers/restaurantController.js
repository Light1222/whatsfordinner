module.exports.viewAll = function(req, res, next) {
    const restaurants =[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://www.meneds.com/school-programs/imgs/logo.png',
        rating: 4,
        category: 'Italian',
        description: 'the best pizza in fresno, hQUIOGHBQERHBQH4RUIGBQERIHBGUBTR VJSDBVYSRTBGYUB'
    },
    {   id: 2,
        name: "Iceskimo",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YZhHrDUvMUS1CeRMzJ6gIwjx87F_4GJcKqp2n-o5lA&s',
        rating: 5,
        category: 'Shaved Ice',
        description: 'Taiwanese Shaved Ice'
    }];
    res.render('index', {restaurants});
}

