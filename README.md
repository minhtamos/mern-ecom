# MERN stack ecommerce project [![GitHub license](https://img.shields.io/badge/license-MIT-lightgrey.svg)](LICENSE.md) [![GitHub release](https://img.shields.io/github/v/release/minhtamos/mern-ecom)](https://mtoshop.herokuapp.com/)

A Korean Shopping site, can handle user and orders. 10 weeks to make it and still develop new features. Based on design on themeforest and do it from scratch

![Home](/READMEs/images/home.png)
![admin-orders](/READMEs/images/admin-orders.png)

## Frameworks / Library used

- MySQL, Express, ReactJS, NodeJS
- TailwindCSS, Typescript, Sequelize, Redux and others

## Special features

- Authenticate user (normal user and admin), login with Facebook and Google
- Save user token to login automatically
- Send subscribe email
- Some pure css animation (navbar, login modal, text slide in, product card)
- User can review product, but only one review per product
- Admin page to manage user, add new products, categories, handle orders

## Installation

Clone the project, add .env like .env.example (both in /server and /client) and in project folder run

```sh
yarn
yarn run dev
```

To build project (both react and typescript node) run

```sh
yarn run build
```

To deploy to heroku run

```sh
yarn run deploy
```

Admin account: <https://mtoshop.herokuapp.com/admin> <br/>
Email: admin1@gmail.com <br/>
Password: admin <br/>
Note: I don't want to clean up your mess :(

## Links

- [My week to week process](READMEs/ProcessByWeeks.md)
- [More screen shots](READMEs/ScreenShot.md)
- [Client Shop design I used](https://preview.uideck.com/items/shopr-theme/index.html)
- [Admin page design I used](https://preview.themeforest.net/item/material-admin-extended-dark-responsive-template/full_screen_preview/19199417?_ga=2.225058522.1117022391.1583339517-704068843.1583316266)
- [Products data](https://www.kooding.com/)

## Well I'm not done with the project, todo list

- [ ] Better database design, relation.
- [x] Login with facebook, google.
- [ ] Security.
- [x] Pagination.
- [x] Send subscribe email in footer with mailjet.
- [ ] Recommend size for user.
- [ ] Sale coupon
- [x] User can update their info, also avatar.

## Support

Please [open an issue](https://github.com/minhtamos/mern-ecom/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/minhtamos/mern-ecom/compare).
