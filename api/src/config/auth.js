module.exports={
    secret:process.env.AUTH_SECRET ||"laresirps",
    expires:process.env.AUTH_EXPIRES ||"100h",
    rounds:process.env.AUTH_ROUNDS ||10
}