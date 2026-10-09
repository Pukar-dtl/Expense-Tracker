const response = (res:any, code:Number, message: string, data:any = null )=>{
    const response = {
        code,
        message,
        data
    }
    return res.status(200).json({response});
}

export default response;