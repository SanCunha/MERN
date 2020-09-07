module.exports = {
    insert(req, res){
        console.log(req.body)
        res.json({
            "funfando": true
        })
    }
}