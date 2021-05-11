import express from 'express'
import hbs from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'
import session from 'express-session'
import moment from 'moment'
import passport from 'passport'
import multer from 'multer'

import home from './routes/home.js'
import login from './routes/login.js'
import dashboard from './routes/dashboard.js'
import pedidos from './routes/pedidos.js'

import config from './config.js'

import './helpers/admin.js'
import './helpers/passport.js'

const app = express()

app.set('port', config.port)

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
    secret: 'b49e7ede-af71-11eb-8529-0242ac130003',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: {
        ifEquals: function(arg1, arg2, options) {
            return arg1 === arg2 ? options.fn(this) : options.inverse(this)
        },
        timeago: timestamp => {
            return moment(timestamp).startOf('minute').fromNow()
        }
    }
}))

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images/products'),
    filename: (req, file, callback) => {
        callback(null, new Date().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({ storage }).single('image'))

app.use(home)
app.use(pedidos)
app.use(login)
app.use(dashboard)

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.render('404', { title: 'Juan - Página no encontrada', path: req.path })
})

export default app