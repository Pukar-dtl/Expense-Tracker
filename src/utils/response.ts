const response = (res:any, code:Number, message: string, data:any = null )=>{
    const response = {
        code,
        message,
        data
    }
}

export default response;