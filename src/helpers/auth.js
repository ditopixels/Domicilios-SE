import jwt from 'jsonwebtoken'

export const isAuthenticated = async(req, res, next) => {
    const cookies = req.headers.cookie.split(';')
    const token = cookies.filter((cookie) => cookie.includes('token'))[0]
    token = token.replace('token=', '')

    if (!token) return res.status(403).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, "b49e7ede-af71-11eb-8529-0242ac130003");
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found" });

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
}