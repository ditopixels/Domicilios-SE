import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) => {
    const token = req.headers[token]
    const decoded = jwt.verify(token, "b49e7ede-af71-11eb-8529-0242ac130003")
    req.userId = decoded.id;

    next()
}