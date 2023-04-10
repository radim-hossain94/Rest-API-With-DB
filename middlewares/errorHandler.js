const errorHandler = (err, req, res, next) =>{
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map((error)=>{
            return error.message
        })
        res.status(400).json({
            success: false,
            err: message
        })
    }
    else if(err.name === 'CastError'){
        res.status(400).json({
            success: false,
            err:'Invalid Resource ID'
        })
    }
    else{
        res.status(500).json({
            success: false,
            err: 'Internal Server Error'
        })
    }
}

module.exports = errorHandler;