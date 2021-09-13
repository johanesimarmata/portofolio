import tkppw from '../img/portImages/tk_ppw.png'
import finalProjectReact from '../img/portImages/finalproject_react.png'
import finalProjectVue from '../img/portImages/finalproject_vue.png'

const portfolios = [
    {
        id: 1,
        category: '',
        image: tkppw,
        link1: 'https://gitlab.com/sasfort/tugas-kelompok-1-ppw',
        link2: 'https://ppw-tk1.herokuapp.com/trendy/',
        title: 'Shoes Online Shop',
        text: 'Group Project from my web lecture. Created with django with HTML, CSS, Bootstrap, JavaScript, Ajax with unit tests and functional tests with selenium and heroku for the deployment'
    },
    {
        id: 2,
        category: '',
        image: finalProjectReact,
        link1: 'https://github.com/johanesimarmata/IM-Sanbercode-Reactjs-Batch-24/tree/master/final-project',
        link2: 'https://keen-curran-850782.netlify.app/',
        title: 'Movies and Games Info and Editor',
        text: 'Final Project React JS Bootcamp with Sanbercode. I built this website with React JS with combinations of HTML, CSS, JavaScript, and Ant Design Library. Use React Router, Context, Hooks, Axios, Authentication with JSON Web Token (JWT) and Netlify for the deployment'
    },
    {
        id: 3,
        category: '',
        image: finalProjectVue,
        link1: 'https://github.com/johanesimarmata/VueJS-Batch-24/tree/master/blog-project',
        link2: 'https://johanesimarmata-blog-finalproject.netlify.app/',
        title: 'CRUD Blog Application',
        text: 'Final Project Vue JS Bootcamp with Sanbercode. I built this website with Vue JS and supported with vuetify components. Use Vue Router, Vuex, VuexPersist, Axios, Authentication with JSON Web Token (JWT) and Netlify for the deployment'
    },
]

export default portfolios;