import express from 'express'
import hbs from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'

import login from './routes/login.js'
import dashboard from './routes/dashboard.js'


import config from './config.js'

import './helpers/admin.js'

const app = express()

app.set('port', config.port)

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

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
        }
    }
}))


app.use(login)
app.use(dashboard)

app.use(express.static(path.join(__dirname, 'public')))

export default app