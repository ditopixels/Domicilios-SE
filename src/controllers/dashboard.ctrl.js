export const renderDashboard = (req, res) => {
    console.log(req.userId)
    res.render('dashboard')
}