const asyncWrapper = (controller) => {
    return (req, res, next) => {
        controller(req, res, next).catch(next);
    };
};
export default asyncWrapper;
//# sourceMappingURL=asyncWrapper.js.map