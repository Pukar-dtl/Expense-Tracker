const response = (res, code, message, data = null) => {
    const response = {
        code,
        message,
        data
    };
    return res.status(200).json({ response });
};
export default response;
//# sourceMappingURL=response.js.map