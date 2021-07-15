exports.handler = async (context) => {
    const response = (Math.random() < 0.5) 
        ? { success: true, user: context.user }
        : { success: false, user: context.user }
    return response;
};